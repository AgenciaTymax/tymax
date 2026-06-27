import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Seção inicial - Agência Tymax"
    >
      <Image
        src="/images/hero-photo.jpg"
        alt="Especialista da Agência Tymax segurando caneca com logo Ty+"
        fill
        priority
        quality={90}
        className="hero-image"
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="hero-overlay" aria-hidden="true" />
    </section>
  );
}
