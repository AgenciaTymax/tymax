import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <Link href="/" className="navbar-logo" aria-label="Agência Tymax - Página Inicial">
        Ty<sup>+</sup>
      </Link>
      <nav aria-label="Navegação principal">
        <Link
          href="#contato"
          className="navbar-cta"
          id="navbar-orcamento-btn"
          aria-label="Solicite seu orçamento"
        >
          Solicite Orçamento
        </Link>
      </nav>
    </header>
  );
}
