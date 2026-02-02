"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import GamesStrip from "../components/home/GamesStrip";
import AboutStrip from "../components/home/AboutStrip";
import Reveal from "../components/motion/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.05}>
        <GamesStrip />
      </Reveal>

      <Reveal delay={0.1}>
        <AboutStrip />
      </Reveal>

      <Footer />
    </main>
  );
}
