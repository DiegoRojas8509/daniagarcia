import RevealWrapper from './RevealWrapper'
import MediaSlot from './MediaSlot'

export default function Bio() {
  return (
    <section id="bio" className="section-pad">
      <div className="bio-grid">
        <div className="bio-text">
          <RevealWrapper>
            <p className="eyebrow font-mono">Bio</p>
          </RevealWrapper>

          <RevealWrapper delay={1}>
            <p>
              Soy <strong>Diseñadora de Imagen</strong> enfocada en la creación de
              <span className="bio-mark"> universos visuales con identidad</span>.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={2}>
            <p>
              Colaboro con marcas, talento y proyectos creativos, desarrollando
              conceptos desde la idea hasta su ejecución. Mi trabajo integra estética,
              narrativa, vestuario, dirección creativa, escenografía y producción audiovisual.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={3}>
            <p>
              Mi enfoque creativo se basa en la
              <span className="bio-mark"> construcción de emociones</span>: buscar generar
              una respuesta sensorial. Por ello, cuido los detalles como parte esencial del
              resultado, entendiendo y profundizando en cada proyecto.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper scale delay={2}>
          {/* Foto BTS / proceso */}
          <MediaSlot label="FOTO PROCESO · 16:9" ratio="landscape" />
          <div style={{ height: 'clamp(8px,1vw,16px)' }} />
          {/* Espacio para el video del agua/manos */}
          <MediaSlot label="VIDEO · 16:9" ratio="landscape" />
        </RevealWrapper>
      </div>
    </section>
  )
}
