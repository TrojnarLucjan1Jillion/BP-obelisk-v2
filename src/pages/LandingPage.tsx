import Header from '../components/Header';
import Hero from '../components/Hero';
import Diagnostic from '../components/Diagnostic';
import HowItWorks from '../components/HowItWorks';
import StatStrip from '../components/StatStrip';
import Pathways from '../components/Pathways';
import Builders from '../components/Builders';
import Pricing from '../components/Pricing';
import TrustStrip from '../components/TrustStrip';
import Origin from '../components/Origin';
import Footer from '../components/Footer';
import { useFadeUp } from '../hooks/useFadeUp';

export default function LandingPage() {
  useFadeUp();

  return (
    <>
      <Header />
      <Hero />
      <Diagnostic />
      <HowItWorks />
      <StatStrip />
      <Pathways />
      <Builders />
      <Pricing />
      <TrustStrip />
      <Origin />
      <Footer />
    </>
  );
}
