'use client';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
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
      id="hero"
      className="headline-section"
      aria-labelledby="headline-title"
      ref={ref}
    >
      <div className="headline-container">
        <h1
          id="headline-title"
          className="headline-main fade-in"
        >
          CONECTANDO
          <br />
          MARCAS E PESSOAS
          <br />
          COM ESTRATÉGIA
          <br />
          &amp; CRIATIVIDADE
        </h1>
        <p className="headline-body fade-in">
          Acreditamos que cada marca tem uma história pra contar e o nosso trabalho é transformar isso em conteúdo estratégico, que realmente se conecta com as pessoas certas.
        </p>
      </div>
    </section>
  );
}
