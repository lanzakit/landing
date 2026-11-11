import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Installation } from "@/components/Installation";
import { Nav } from "@/components/Nav";
import { Stats } from "@/components/Stats";
import { TerminalDemo } from "@/components/TerminalDemo";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TerminalDemo />
        <Features />
        <Installation />
        <Stats />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
