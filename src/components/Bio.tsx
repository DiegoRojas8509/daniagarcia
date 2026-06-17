import Image from 'next/image'
import ParallaxSection from './ParallaxSection'
import RevealWrapper from './RevealWrapper'

export default function Bio() {
  return (
    <section id="bio" className="bio section-dark">
      <ParallaxSection className="bio-image-wrap">
        <Image
          src="/assets/dan/bio-bg.jpg"
          alt="Dania García — fotografía"
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
          data-parallax=""
        />
      </ParallaxSection>

      <div className="bio-content">
        <RevealWrapper>
          <div className="bio-gold-line" />
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <p className="bio-tagline font-crimson">
            "La imagen es un lenguaje capaz de comunicar,
            emocionar y construir significado."
          </p>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <p className="bio-body font-mono">
            Dania García es diseñadora de imagen profesional, artista multidisciplinaria,
            directora de arte y creativa. Su trabajo abarca desde la producción audiovisual
            y cortometrajes hasta la dirección de eventos y pasarelas, uniendo la
            fotografía cinematográfica con una visión editorial propia.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={3}>
          <p className="bio-body font-mono" style={{ opacity: 0.4, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Art Design ✶ DAN — León, Gto.
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
