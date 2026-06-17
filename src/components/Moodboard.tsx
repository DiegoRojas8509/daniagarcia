import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

export default function Moodboard() {
  return (
    <section id="moodboard" className="moodboard section-dark">
      <RevealWrapper scale>
        <Image
          src="/assets/dan/moodboard.jpg"
          alt="Moodboard DAN — galería B&N"
          width={1440}
          height={810}
          style={{ width: '100%', height: 'auto' }}
        />
      </RevealWrapper>
    </section>
  )
}
