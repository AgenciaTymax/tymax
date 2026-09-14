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
      {/* Ticker no topo da seção, exatamente como no Slide 4 do PDF */}
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

      {/* Glow blob decorativo */}
      <div
        className="glow-blob glow-blob--neon"
        aria-hidden="true"
        style={{ width: '600px', height: '600px', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      />

      {/* Título CASES superdimensionado */}
      <div className="cases-header fade-in">
        <h2
          id="cases-heading"
          className="cases-title"
          aria-label="Cases — Portfólio de trabalhos"
        >
          CASES
        </h2>
      </div>

      {/* Galeria de cases contínua */}
      <div
        className="cases-grid"
        role="list"
        aria-label="Portfólio de cases da Agência Tymax"
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
              quality={90}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
