import Image from 'next/image'
import RevealWrapper from './RevealWrapper'

const filmPages = [
  { src: '/assets/dan/film-p4.jpg', alt: 'Cortometrajes — galería 1' },
  { src: '/assets/dan/film-p5.jpg', alt: 'Cortometrajes — galería 2' },
  { src: '/assets/dan/film-p6.jpg', alt: 'Cortometrajes — galería 3' },
]

export default function FilmGallery() {
  return (
    <section id="cortometrajes" className="film-gallery section-dark">
      {/* strip */}
      <RevealWrapper className="section-strip section-light">
        <span className="section-strip-number font-anton">01</span>
        <span className="section-strip-title font-anton">CORTOMETRAJES</span>
        <span className="section-strip-subtitle font-crimson">Dirección de Arte · Videografía</span>
      </RevealWrapper>

      <div className="film-grid">
        {filmPages.map((film, i) => (
          <RevealWrapper key={film.src} delay={(i % 3) as 0 | 1 | 2 | 3 | 4} scale>
            <div className="film-cell">
              <Image
                src={film.src}
                alt={film.alt}
                fill
                sizes="33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
