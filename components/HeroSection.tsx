'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Seção inicial - Agência Tymax"
      ref={ref}
    >
      {/* Background image */}
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

      {/* Glow blob decorativo */}
      <div
        className="glow-blob glow-blob--neon"
        aria-hidden="true"
        style={{ width: '500px', height: '500px', top: '-80px', right: '5%' }}
      />

      {/* Conteúdo */}
      <div className="hero-content">
        {/* Logo TY+ */}
        <p className="hero-logo fade-in" aria-label="Agência Tymax">
          Ty<sup>+</sup>
        </p>

        <h1 className="hero-title fade-in">
          Conectamos marcas<br />
          e pessoas com{' '}
          <span>estratégia</span><br />
          <span>&amp; criatividade.</span>
        </h1>

        <p className="hero-sub fade-in">
          Do conteúdo ao resultado. Trabalhamos para fortalecer a presença
          digital da sua marca com autenticidade e propósito.
        </p>
      </div>
    </section>
  );
}
