import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Footer from "@/components/Footer";
import GoldDivider from "@/components/GoldDivider";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import StarField from "@/components/StarField";
import ThemeSection from "@/components/ThemeSection";
import TicketSection from "@/components/TicketSection";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <>
      <div aria-hidden className="cosmos-bg fixed inset-0 -z-20" />
      <StarField />
      <main className="relative">
        <Hero />
        <InfoCards />
        <GoldDivider />
        <Agenda />
        <GoldDivider />
        <About />
        <ThemeSection />
        <Venue />
        <TicketSection />
      </main>
      <Footer />
    </>
  );
}
