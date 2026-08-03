'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const cases = [
  {
    id: 'case-1',
    src: '/images/case-1.jpg',
    alt: 'Case Tymax: sessão de fotos para cliente de bem-estar e terapia',
    label: 'Bem-estar & Lifestyle',
  },
  {
    id: 'case-2',
    src: '/images/case-2.jpg',
    alt: 'Case Tymax: conteúdo lifestyle para marca de produtos fitness',
    label: 'Lifestyle & Fitness',
  },
  {
    id: 'case-3',
    src: '/images/case-3.png',
    alt: 'Case Tymax: campanha de lançamento VLC Tours — O que ninguém te conta antes de visitar Valência',
    label: 'Lançamento & Campanha',
  },
];

const tickerItems = Array(8).fill([
  '@agenciatymax',
  'marketing de conteúdo'
]).flat();

export default function CasesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cases"
      className="cases-section"
      aria-labelledby="cases-heading"
      ref={ref}
    >
      {/* Glow blob neon atrás do título */}
      <div
        className="glow-blob glow-blob--neon"
        aria-hidden="true"
        style={{ width: '700px', height: '700px', top: '-100px', left: '50%', transform: 'translateX(-50%)' }}
      />

      {/* Título superdimensionado */}
      <div className="cases-header fade-in">
        <h2
          id="cases-heading"
          style={{
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1,
            color: 'var(--neon-yellow)',
            letterSpacing: '-0.03em',
            position: 'relative',
            zIndex: 1,
          }}
          aria-label="Cases — Portfólio de trabalhos"
        >
          CASES
        </h2>
      </div>

      {/* Ticker — movido da ServicesSection */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
            </span>
          ))}
          {tickerItems.map((item, i) => (
            <span key={`dup-${i}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Galeria de cases */}
      <div
        className="cases-grid"
        role="list"
        aria-label="Portfólio de cases da Agência Tymax"
        style={{ marginTop: '3rem' }}
      >
        {cases.map((c) => (
          <article
            key={c.id}
            id={c.id}
            className="case-item fade-in"
            role="listitem"
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="case-overlay">
              <span className="case-label">{c.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
