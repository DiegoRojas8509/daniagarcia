import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="contacto">
        <RevealWrapper scale>
          <Image
            src="/assets/dan/logos/logo-dan-black.png"
            alt="DAN — Art Design"
            width={413}
            height={540}
            className="contacto-logo"
          />
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className="contacto-links">
            <a
              href="https://instagram.com/dania.garcia__"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
              data-hover
            >
              <Image
                src="/assets/dan/texto/08-instagram-daniagarcia.png"
                alt="@dania.garcia__"
                width={807}
                height={212}
                className="contacto-text"
              />
            </a>

            <a href="tel:+524778436834" className="contacto-link" data-hover>
              <Image
                src="/assets/dan/texto/09-telefono-477-843-6834.png"
                alt="477 843 6834"
                width={807}
                height={212}
                className="contacto-text"
              />
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
