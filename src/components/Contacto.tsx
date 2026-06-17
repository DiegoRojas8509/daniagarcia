import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="contacto section-light">
        <RevealWrapper scale>
          <Image
            src="/assets/dan/logo.png"
            alt="Art Design DAN"
            width={320}
            height={120}
            className="contacto-logo"
            style={{ width: '100%', height: 'auto' }}
          />
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <p className="contacto-tagline font-crimson">
            Diseñadora de imagen · Artista multidisciplinaria · León, Gto.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <div className="contacto-links">
            <a
              href="https://instagram.com/dania.garcia__"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link font-mono"
              data-hover
            >
              @dania.garcia__
            </a>
            <span className="contacto-gold font-mono">✶</span>
            <a
              href="tel:+524778436838"
              className="contacto-link font-mono"
              data-hover
            >
              (477) 843 683 8
            </a>
          </div>
        </RevealWrapper>
      </section>

      <footer className="footer">
        <span>Art Design ✶ DAN</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  )
}
