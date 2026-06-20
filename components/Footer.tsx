export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <p>
        © {year}{' '}
        <a
          href="https://www.instagram.com/agenciatymax"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Agência Tymax"
        >
          Agência Tymax
        </a>{' '}
        · Todos os direitos reservados ·{' '}
        <a href="mailto:contato@agenciatymax.com.br">
          contato@agenciatymax.com.br
        </a>
      </p>
    </footer>
  );
}
