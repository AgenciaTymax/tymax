# 🚀 Agência Tymax - Landing Page

Esta é a landing page institucional da **Agência Tymax**, desenvolvida com foco em alta performance, responsividade, design moderno e otimização para mecanismos de busca (SEO). O design do projeto foi concebido para traduzir fielmente a identidade visual da agência, utilizando uma paleta de cores marcante e micro-interações que elevam a experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas & Justificativas

A escolha da stack tecnológica foi orientada pela necessidade de entregar um produto final rápido, escalável, extremamente amigável para motores de busca (Google, Bing) e de fácil manutenção.

### 1. **Next.js 14 (App Router)**
* **Por que escolher?** O Next.js é a principal ferramenta de desenvolvimento React na atualidade. A arquitetura de **App Router** permite a renderização híbrida de páginas (Server-Side Rendering - SSR e Static Site Generation - SSG).
* **Benefícios para o projeto:** 
  * Otimização automática de imagens.
  * Carregamento de página extremamente veloz através de páginas pré-renderizadas estaticamente.
  * APIs nativas de SEO (`sitemap.ts`, `robots.ts` e Metadata API), que geram automaticamente as tags de cabeçalho ideais para indexação.

### 2. **React 18**
* **Por que escolher?** O React permite a modularização da interface do usuário em componentes independentes e reutilizáveis.
* **Benefícios para o projeto:** Cada seção da landing page (Hero, Serviços, Cases, Contato, etc.) foi desenvolvida como um componente separado, facilitando futuras atualizações de conteúdo de forma isolada e segura.

### 3. **TypeScript**
* **Por que escolher?** Adiciona tipagem estática ao JavaScript.
* **Benefícios para o projeto:** Previne erros comuns em tempo de compilação, melhora o auto-complete (IntelliSense) na IDE e torna a base de código auto-documentada, garantindo robustez caso novos desenvolvedores assumam o projeto.

### 4. **Vanilla CSS (globals.css)**
* **Por que escolher?** Optou-se pelo uso de CSS puro estruturado via variáveis customizadas (custom properties), em vez de frameworks utilitários como TailwindCSS.
* **Benefícios para o projeto:** 
  * Controle milimétrico sobre o design do PDF original da Tymax.
  * Implementação direta de animações complexas (como o *ticker* infinito, transições de escala suaves nos cases, animação de pulso no botão de CTA e o efeito de fade-in via IntersectionObserver).
  * Menor tamanho de bundle de estilos sem dependências ou configurações de build extras.

### 5. **Dados Estruturados (JSON-LD) & SEO Técnico**
* **Por que escolher?** Para garantir que a Agência Tymax seja facilmente compreendida pelos robôs do Google.
* **Benefícios para o projeto:** Configuração do esquema de dados `Organization` com a lista exata dos serviços prestados (Social Media, Tráfego Pago, Design, Sites, etc.), ajudando na geração de Rich Snippets diretamente nos resultados do buscador.

---

## 🎨 Identidade Visual (Sistema de Cores)

Os tokens de estilo foram declarados globalmente usando variáveis CSS para manter a consistência em todo o site:
* `var(--charcoal)` (`#1e1e1e`): Fundo principal escuro e elegante.
* `var(--magenta)` (`#f72585`): Tom vibrante de destaque e identidade da agência.
* `var(--neon-yellow)` (`#d4ff00`): Usado no *ticker* de serviços rápidos para atrair a atenção do usuário.
* `var(--deep-violet)` (`#2b2d8e`): Fundo temático para a seção de Cases.
* `var(--pink-light)` (`#fce4ec`): Contraste suave para a área de formulário e contatos.

---

## 📂 Estrutura de Pastas

```bash
├── app/
│   ├── globals.css      # Estilização global, variáveis de cor, animações e responsividade
│   ├── layout.tsx       # Estrutura principal HTML, pré-conexão de fontes e Metadados (SEO / JSON-LD)
│   ├── page.tsx         # Página raiz que renderiza e organiza as seções ordenadamente
│   ├── robots.ts        # Geração dinâmica do arquivo robots.txt
│   └── sitemap.ts       # Geração dinâmica do sitemap.xml
├── components/
│   ├── Navbar.tsx       # Menu superior fixo com efeito de blur e chamada de ação
│   ├── HeroSection.tsx  # Seção de abertura com imagem de destaque
│   ├── HeadlineSection.tsx # Frase de impacto e posicionamento da marca
│   ├── ServicesSection.tsx # Grid de serviços oferecidos com efeitos de hover
│   ├── CasesSection.tsx # Showcase dos trabalhos com zoom e overlays coloridas
│   ├── ContactSection.tsx # Informações de contato, links sociais e botão para WhatsApp
│   └── Footer.tsx       # Rodapé institucional com direitos autorais
├── public/              # Ativos estáticos como logos e fotos otimizadas
├── package.json         # Dependências do projeto e scripts de execução
└── tsconfig.json        # Configuração do compilador TypeScript
```

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de possuir o **Node.js** instalado na sua máquina (versão 18.x ou superior recomendada).

### Passo a Passo

1. **Clonar ou acessar a pasta do repositório:**
   ```bash
   cd tymax
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O projeto iniciará por padrão em `http://localhost:3000`.*

4. **Compilar o projeto para produção:**
   Caso queira testar a performance real e compilar o código minificado:
   ```bash
   npm run build
   ```

5. **Iniciar o servidor de produção:**
   Após a compilação, você pode rodar localmente a versão final otimizada:
   ```bash
   npm run start
   ```

6. **Executar a verificação de lint (opcional):**
   Para verificar e garantir a qualidade do código conforme as diretrizes do Next.js:
   ```bash
   npm run lint
   ```

---

Desenvolvido para representar a excelência digital da **Agência Tymax**. 🌐
