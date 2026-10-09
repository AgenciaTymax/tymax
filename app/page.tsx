import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
