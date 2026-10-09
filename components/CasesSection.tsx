'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const cases = [
  {
    id: 'case-1',
    src: '/images/case-1.jpg',
    alt: 'Case Tymax: sessão de fotos para cliente de bem-estar e terapia',
  },
  {
    id: 'case-2',
    src: '/images/case-2.jpg',
    alt: 'Case Tymax: conteúdo lifestyle e fitness',
  },
  {
    id: 'case-3',
    src: '/images/case-3.png',
    alt: 'Case Tymax: campanha VLC Tours ValenCasa',
  },
];

const tickerItems = Array(8).fill([
  '@agenciatymax',
  'marketing de conteúdo •'
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
      {/* Ticker / Faixa animada superior */}
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

      <div className="cases-body">
        {/* Título CASES em amarelo neon colossal */}
        <div className="cases-header fade-in">
          <h2
            id="cases-heading"
            className="cases-title"
          >
            CASES
          </h2>
        </div>

        {/* Galeria de 3 fotos lado a lado */}
        <div
          className="cases-grid"
          role="list"
          aria-label="Portfólio de cases da Agência Tymax"
        >
          {cases.map((c) => (
            <div
              key={c.id}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
