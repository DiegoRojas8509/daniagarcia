import Image from 'next/image'
import RevealWrapper from './RevealWrapper'
import MediaSlot from './MediaSlot'

const roles = [
  { src: '/assets/dan/texto/01-disenadora-imagen-profesional.png', alt: 'Diseñadora de imagen profesional' },
  { src: '/assets/dan/texto/02-artista-multidisciplinada.png',     alt: 'Artista multidisciplinaria' },
  { src: '/assets/dan/texto/03-directora-de-arte.png',             alt: 'Directora de arte' },
  { src: '/assets/dan/texto/04-directora-creativa.png',            alt: 'Directora creativa' },
  { src: '/assets/dan/texto/05-event-planner.png',                 alt: 'Event planner' },
  { src: '/assets/dan/texto/06-videografa.png',                    alt: 'Videógrafa' },
  { src: '/assets/dan/texto/07-stylist.png',                       alt: 'Stylist' },
]

export default function QuienSoy() {
  return (
    <section id="quien-soy" className="section-pad">
      <div className="quien">
        <div>
          <RevealWrapper>
            <p className="eyebrow font-mono">¿Quién soy?</p>
            <h2 className="quien-title font-anton">DANIA<br />GARCÍA</h2>
          </RevealWrapper>

          <div className="roles-list">
            {roles.map((role, i) => (
              <RevealWrapper key={role.src} delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
                <div className="role-item" title={role.alt} data-hover>
                  <Image src={role.src} alt={role.alt} width={1071} height={145} />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        <RevealWrapper scale delay={2}>
          {/* Espacio para retrato principal de DAN */}
          <MediaSlot label="RETRATO DAN · 3:4" ratio="portrait" />
        </RevealWrapper>
      </div>
    </section>
  )
}
