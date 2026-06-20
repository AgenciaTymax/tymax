'use client';
import { useEffect, useRef } from 'react';

export default function HeadlineSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="headline-section"
      aria-labelledby="headline-title"
      ref={ref}
    >
      <h2
        id="headline-title"
        className="headline-main fade-in"
      >
        Conectando
        <br />
        Marcas e Pessoas
        <br />
        com Estratégia
        <br />
        &amp; Criatividade
      </h2>
      <p className="headline-body fade-in">
        Nossas soluções fortalecem a presença digital da sua empresa, aproximam
        seu público e transmitem profissionalismo. Tudo isso com{' '}
        <strong style={{ color: 'var(--magenta)' }}>estratégia &amp; criatividade</strong>.
      </p>
    </section>
  );
}
