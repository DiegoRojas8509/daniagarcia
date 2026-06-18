import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <RevealWrapper scale>
        <Image
          src="/assets/dan/logos/logo-dan-black.png"
          alt="DAN — Art Design"
          width={413}
          height={540}
          priority
          className="hero-logo"
        />
      </RevealWrapper>

      <RevealWrapper delay={3}>
        <p className="hero-scroll font-mono">Scroll ↓</p>
      </RevealWrapper>
    </section>
  )
}
