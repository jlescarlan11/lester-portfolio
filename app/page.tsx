import Image from "next/image";
import NavigationBar from "./NavigationBar";
import HeroSection from "./_sections/Hero";
import AboutSection from "./_sections/About";

export default function Home() {
  return (
    <div className="min-h-dvh relative">
      <div className="fixed inset-0">
        <NavigationBar />
      </div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
