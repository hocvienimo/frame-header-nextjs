import HeroSection from "./container/HeroSection";
import AboutUs from "./container/AboutUs";
import Achievement from "./container/Achievement";
import HowItWorks from "./container/HowItWorks";

export default function Home() {
  return (
    <main className="mb-52">
      <HeroSection />
      <AboutUs />
      <Achievement />
      <HowItWorks />
    </main>
  );
}
