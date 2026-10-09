'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="about-section"
      aria-labelledby="about-title"
      ref={ref}
    >
      <div className="about-media-col fade-in">
        <Image
          src="/images/hero-photo.jpg"
          alt="Conectando marcas e pessoas com estratégia e criatividade - Agência Tymax"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 50vw"
          className="about-image"
          style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
        />
      </div>

      <div className="about-text-col fade-in">
        <div className="about-content">
          <h2 id="about-title" className="about-title">
            QUEM É A TYMAX?
          </h2>

          <div className="about-paragraphs">
            <p>
              a <strong>tymax</strong> é uma <strong>agência criativa</strong> que conecta marcas e pessoas por meio de estratégia, criatividade e comunicação.
            </p>
            <p>
              Da estratégia à criação do conteúdo, criamos projetos que têm personalidade, saem do óbvio &amp; claro, <strong>que tenha a cara e o jeitinho de cada marca.</strong>
            </p>
            <p>
              Por aqui, acreditamos em marcas reais, ideias com propósito e comunicação que <strong>cria conexão de verdade.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
