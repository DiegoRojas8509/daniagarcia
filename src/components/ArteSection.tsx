import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function ArteSection() {
  return (
    <section id="arte" className="arte section-dark">
      {/* strip */}
      <RevealWrapper className="section-strip section-light">
        <span className="section-strip-number font-anton">03</span>
        <span className="section-strip-title font-anton">ARTE</span>
        <span className="section-strip-subtitle font-crimson">Maquillaje · Vestuario · Arte</span>
      </RevealWrapper>

      <RevealWrapper scale>
        <Image
          src="/assets/dan/arte-bg.jpg"
          alt="Arte — maquillaje, vestuario, arte"
          width={1440}
          height={810}
          className="arte-full"
          style={{ width: '100%', height: 'auto' }}
        />
      </RevealWrapper>
    </section>
  )
}
