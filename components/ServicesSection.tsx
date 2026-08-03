'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 'social-media',
    title: 'Social Media',
    text: 'Planejamento estratégico, criação de conteúdo e acompanhamento de cada detalhe para sua marca se destacar com autenticidade.',
  },
  {
    id: 'design',
    title: 'Design',
    text: 'Cada detalhe é pensado para reforçar a identidade da sua marca. Criamos materiais estratégicos que conversam com o público certo.',
  },
  {
    id: 'trafego-pago',
    title: 'Tráfego Pago',
    text: 'Do planejamento à otimização dos anúncios, acompanhamos cada detalhe pra transformar cliques em resultados reais.',
  },
  {
    id: 'criacao-sites',
    title: 'Criação de Sites',
    text: 'Desenvolvemos sites e landing pages que refletem a identidade da sua marca e entregam resultado de verdade.',
  },
  {
    id: 'audiovisual',
    title: 'Audiovisual',
    text: 'Transformamos ideias em experiências. Captações de fotos e vídeos que mostram o que sua marca tem de mais real.',
  },
  {
    id: 'criacao-lancamento',
    title: 'Criação e Lançamento',
    text: 'Toda boa ideia precisa de direção. Planejamos campanhas, lançamentos e estratégias completas pra sua marca se posicionar com clareza e propósito.',
  },
];

export default function ServicesSection() {
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
      id="servicos"
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="services-section">
        <div className="services-header">
          <div className="fade-in">
            <h2
              id="services-heading"
              className="services-title"
            >
              Nossas
              <br />
              Soluções
            </h2>
          </div>
          <p className="services-description fade-in">
            Nossas soluções fortalecem a presença digital da sua
            empresa, aproximam seu público e transmitem{' '}
            profissionalismo. Tudo isso com <strong>estratégia</strong> &amp;{' '}
            <strong>criatividade</strong>.
          </p>
        </div>

        <div className="services-grid" role="list" aria-label="Nossos serviços">
          {services.map((svc) => (
            <article
              key={svc.id}
              id={`service-${svc.id}`}
              className="service-card fade-in"
              role="listitem"
              aria-label={`Serviço: ${svc.title}`}
            >
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-text">{svc.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
