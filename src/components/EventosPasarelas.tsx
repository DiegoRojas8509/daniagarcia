import RevealWrapper from './RevealWrapper'
import MediaSlot from './MediaSlot'

export default function EventosPasarelas() {
  return (
    <section id="eventos" className="section-pad">
      <RevealWrapper>
        <div className="work-head">
          <h2 className="work-title font-anton">EVENTOS</h2>
          <div className="work-credit">
            <div className="role font-crimson">Pasarelas</div>
            <div className="name font-mono">Event Planning · Dirección</div>
          </div>
        </div>
      </RevealWrapper>

      <div className="work-grid cols-3">
        <RevealWrapper scale><MediaSlot label="EVENTO · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale delay={1}><MediaSlot label="PASARELA · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale delay={2}><MediaSlot label="EVENTO · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale><MediaSlot label="VIDEO · 16:9" ratio="landscape" /></RevealWrapper>
        <RevealWrapper scale delay={1}><MediaSlot label="PASARELA · 16:9" ratio="landscape" /></RevealWrapper>
        <RevealWrapper scale delay={2}><MediaSlot label="EVENTO · 16:9" ratio="landscape" /></RevealWrapper>
      </div>

      <RevealWrapper>
        <div className="work-credits-line font-mono">
          <span>· Dirección General</span>
          <span>· Dirección Creativa</span>
          <span>· Styling</span>
          <span>· Producción</span>
        </div>
      </RevealWrapper>
    </section>
  )
}
