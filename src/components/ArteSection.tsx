import RevealWrapper from './RevealWrapper'
import MediaSlot from './MediaSlot'

export default function ArteSection() {
  return (
    <section id="arte" className="section-pad">
      <RevealWrapper>
        <div className="work-head">
          <h2 className="work-title font-anton">ARTE</h2>
          <div className="work-credit">
            <div className="role font-crimson">Maquillaje · Vestuario</div>
            <div className="name font-mono">Dirección de Arte</div>
          </div>
        </div>
      </RevealWrapper>

      <div className="work-grid cols-3">
        <RevealWrapper scale><MediaSlot label="MAQUILLAJE · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale delay={1}><MediaSlot label="VESTUARIO · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale delay={2}><MediaSlot label="ARTE · 3:4" ratio="portrait" /></RevealWrapper>
        <RevealWrapper scale><MediaSlot label="DETALLE · 1:1" ratio="square" /></RevealWrapper>
        <RevealWrapper scale delay={1}><MediaSlot label="DETALLE · 1:1" ratio="square" /></RevealWrapper>
        <RevealWrapper scale delay={2}><MediaSlot label="DETALLE · 1:1" ratio="square" /></RevealWrapper>
      </div>
    </section>
  )
}
