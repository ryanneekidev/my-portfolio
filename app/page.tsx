import Image from "next/image";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section-four";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <Skills />
      <Projects />
    </>
  );
}
