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
        alt="Especialista da Agência Tymax"
        fill
        priority
        quality={90}
        className="hero-image"
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="hero-texture" aria-hidden="true" />
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

        <span className="hero-badge fade-in">Marketing &amp; Estratégia Digital</span>

        <h1 className="hero-title fade-in">
          Transformamos ideias<br />
          em presença digital<br />
          de <span>verdadeiro impacto.</span>
        </h1>

        <p className="hero-sub fade-in">
          Do planejamento à execução: posicionamento, conteúdo e criatividade para marcas que querem se destacar com autenticidade.
        </p>

        <a href="#sobre" className="hero-scroll-btn fade-in" aria-label="Conheça a proposta da Agência Tymax">
          <span>Conheça a Tymax</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

