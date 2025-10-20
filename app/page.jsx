import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JoinWaitlistSection from "./components/JoinWaitlistSection";
import MoreInfoSection from "./components/MoreInfoSection";
import WhatIfSection from "./components/WhatIfSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MoreInfoSection />
      <WhatIfSection />
      <JoinWaitlistSection />
      <Footer />
    </>
  );
}
