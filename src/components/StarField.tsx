"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; phase: number; speed: number; gold: boolean };
type Node = { x: number; y: number; vx: number; vy: number };
type Shooting = { x: number; y: number; vx: number; vy: number; age: number; life: number };

/**
 * Lightweight canvas backdrop: twinkling stars, slow-drifting constellation nodes
 * joined by faint gold lines, and an occasional golden shooting star.
 * Fixed behind all content, pauses when the tab is hidden, and renders a single
 * static frame for users who prefer reduced motion.
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const starCount = small ? 90 : 170;
    const nodeCount = small ? 14 : 24;
    const linkDist = small ? 115 : 160;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: rand(0.4, 1.4),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.4, 1.4),
      gold: Math.random() < 0.18,
    }));

    // Positions are fractions of the viewport; velocities are fractions per second.
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: rand(-0.006, 0.006),
      vy: rand(-0.004, 0.004),
    }));

    let shooting: Shooting | null = null;
    let nextShootAt = performance.now() + 5000;

    let width = 0;
    let height = 0;
    let raf = 0;
    let last = performance.now();

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const a = reduceMotion ? 0.7 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase);
        ctx.globalAlpha = Math.max(0.08, a);
        ctx.fillStyle = s.gold ? "#f0d58a" : "#dfe6ff";
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Constellation lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = (nodes[i].x - nodes[j].x) * width;
          const dy = (nodes[i].y - nodes[j].y) * height;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(224,185,90,${(1 - d / linkDist) * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(246,231,180,0.85)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x * width, n.y * height, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // Golden shooting star
      if (shooting) {
        const p = shooting.age / shooting.life;
        const alpha = Math.sin(Math.min(1, p) * Math.PI);
        const tailX = shooting.x - shooting.vx * 0.18;
        const tailY = shooting.y - shooting.vy * 0.18;
        const g = ctx.createLinearGradient(tailX, tailY, shooting.x, shooting.y);
        g.addColorStop(0, "rgba(224,185,90,0)");
        g.addColorStop(1, `rgba(251,240,200,${alpha * 0.9})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shooting.x, shooting.y);
        ctx.stroke();
      }
    };

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < -0.05) n.x = 1.05;
        if (n.x > 1.05) n.x = -0.05;
        if (n.y < -0.05) n.y = 1.05;
        if (n.y > 1.05) n.y = -0.05;
      }

      if (!shooting && now > nextShootAt) {
        shooting = {
          x: rand(width * 0.45, width * 1.0),
          y: rand(0, height * 0.35),
          vx: -rand(520, 700),
          vy: rand(220, 320),
          age: 0,
          life: 0.9,
        };
        nextShootAt = now + rand(8000, 14000);
      }
      if (shooting) {
        shooting.age += dt;
        shooting.x += shooting.vx * dt;
        shooting.y += shooting.vy * dt;
        if (shooting.age >= shooting.life) shooting = null;
      }

      draw(now);
      raf = requestAnimationFrame(step);
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Ignore the small height changes caused by mobile browser toolbars showing/hiding.
      if (w === width && Math.abs(h - height) < 140) return;
      width = w;
      height = h;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) draw(0);
    };

    const onVisibility = () => {
      if (reduceMotion) return;
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduceMotion) raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
