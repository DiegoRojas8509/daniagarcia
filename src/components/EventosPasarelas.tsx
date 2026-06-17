import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

const galeriaFotos = [
  { src: '/assets/dan/gallery/image00001.jpeg', alt: 'Evento 1' },
  { src: '/assets/dan/gallery/image00002.jpeg', alt: 'Evento 2' },
  { src: '/assets/dan/gallery/image00003.jpeg', alt: 'Pasarela 1' },
  { src: '/assets/dan/gallery/image00004.jpeg', alt: 'Pasarela 2' },
  { src: '/assets/dan/gallery/image00005.jpeg', alt: 'Evento 3' },
  { src: '/assets/dan/gallery/image00006.jpeg', alt: 'Pasarela 3' },
]

export default function EventosPasarelas() {
  return (
    <section id="eventos" className="section-dark">
      {/* strip */}
      <RevealWrapper className="section-strip section-light">
        <span className="section-strip-number font-anton">02</span>
        <span className="section-strip-title font-anton">EVENTOS</span>
        <span className="section-strip-subtitle font-crimson">Pasarelas · Event Planning</span>
      </RevealWrapper>

      <div className="eventos">
        {/* label caligrafía */}
        <div className="eventos-label">
          <RevealWrapper>
            <Image
              src="/assets/dan/labels/eventos.png"
              alt="EVENTOS — caligrafía de DAN"
              width={80}
              height={420}
              style={{ width: 'auto', height: '420px', objectFit: 'contain' }}
            />
          </RevealWrapper>
        </div>

        {/* galería */}
        <div className="eventos-gallery">
          {galeriaFotos.map((foto, i) => (
            <RevealWrapper key={foto.src} delay={(i % 4) as 0 | 1 | 2 | 3 | 4} className="eventos-gallery-item">
              <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
