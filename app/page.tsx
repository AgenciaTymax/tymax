import HeroSection from '@/components/HeroSection';
import HeadlineSection from '@/components/HeadlineSection';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <HeadlineSection />
        <ServicesSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
