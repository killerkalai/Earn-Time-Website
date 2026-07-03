import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { DifficultyModes } from "./sections/DifficultyModes";
import { AppDemo } from "./sections/AppDemo";
import { Features } from "./sections/Features";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HowItWorks />
      <DifficultyModes />
      <AppDemo />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
