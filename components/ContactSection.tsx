'use client';
import { useEffect, useRef } from 'react';

export default function ContactSection() {
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

  const contactLink =
    'mailto:tymaxmidias@gmail.com?subject=Quero%20falar%20com%20a%20Tymax';

  return (
    <section
      id="contato"
      className="contact-section-pdf"
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <div className="contact-pdf-container">
        {/* Left Column: Title + Social Icons */}
        <div className="contact-pdf-left fade-in">
          <h2 id="contact-heading" className="contact-pdf-title">
            FALE COM
            <br />
            A GENTE
          </h2>

          <div className="contact-pdf-socials" aria-label="Redes sociais da Agência Tymax">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/agenciatymax"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pdf-link"
              aria-label="Instagram da Agência Tymax"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com/agenciatymax"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pdf-link"
              aria-label="Pinterest da Agência Tymax"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@agenciatymax"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pdf-link"
              aria-label="TikTok da Agência Tymax"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.22 8.22 0 004.81 1.54V7.14a4.85 4.85 0 01-1.04-.45z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:tymaxmidias@gmail.com"
              className="social-pdf-link"
              aria-label="E-mail da Agência Tymax"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Statement, Query, CTA */}
        <div className="contact-pdf-right fade-in">
          <p className="contact-pdf-statement">
            nosso trabalho será direcionado para fortalecer a presença digital da marca, aproximar o público-alvo e transmitir profissionalismo através de uma comunicação estratégica e atrativa.
          </p>

          <p className="contact-pdf-query">
            quer saber mais sobre os nossos serviços?
          </p>

          <div className="contact-pdf-btn-wrap">
            <a
              href={contactLink}
              className="contact-pdf-cta"
              aria-label="Quero falar com a Tymax por e-mail"
            >
              QUERO FALAR <strong>COM A TYMAX</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
