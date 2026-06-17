import RevealWrapper from './RevealWrapper'
import MediaSlot from './MediaSlot'

interface Slot {
  label: string
  ratio?: 'portrait' | 'landscape' | 'square' | 'wide'
}

interface Props {
  id: string
  title: string
  /** rol creativo en cursiva (ej: "Cortometraje") */
  role?: string
  /** nombre/crédito debajo del rol (ej: "Dir. Victor Mascorro") */
  name?: string
  cols?: 2 | 3
  slots: Slot[]
  /** lista de créditos editorial (ej: "Dirección General") */
  credits?: string[]
}

export default function WorkSection({ id, title, role, name, cols = 3, slots, credits }: Props) {
  return (
    <section id={id} className="section-pad">
      <RevealWrapper>
        <div className="work-head">
          <h2 className="work-title font-anton">{title}</h2>
          {(role || name) && (
            <div className="work-credit">
              {role && <div className="role font-crimson">{role}</div>}
              {name && <div className="name font-mono">{name}</div>}
            </div>
          )}
        </div>
      </RevealWrapper>

      <div className={`work-grid cols-${cols}`}>
        {slots.map((slot, i) => (
          <RevealWrapper key={`${slot.label}-${i}`} scale delay={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
            <MediaSlot label={slot.label} ratio={slot.ratio ?? 'landscape'} />
          </RevealWrapper>
        ))}
      </div>

      {credits && credits.length > 0 && (
        <RevealWrapper>
          <div className="work-credits-line font-mono">
            {credits.map((c) => (
              <span key={c}>· {c}</span>
            ))}
          </div>
        </RevealWrapper>
      )}
    </section>
  )
}
