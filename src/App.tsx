import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-16">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <PricingSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
