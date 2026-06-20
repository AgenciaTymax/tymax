import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Seção inicial - Agência Tymax"
    >
      <Image
        src="/images/hero-photo.png"
        alt="Especialista da Agência Tymax segurando caneca com logo Ty+"
        fill
        priority
        quality={90}
        className="hero-image"
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-badge">@agenciatymax</span>
        <h1 className="hero-title">
          Marketing digital que <span>conecta</span> sua marca ao mundo.
        </h1>
        <p className="hero-sub">
          Acreditamos que cada marca tem uma história pra contar — e nosso trabalho
          é transformar isso em conteúdo estratégico que realmente se conecta com
          as pessoas certas.
        </p>
      </div>
    </section>
  );
}
