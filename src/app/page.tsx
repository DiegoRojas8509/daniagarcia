import Hero from '@/components/Hero'
import QuienSoy from '@/components/QuienSoy'
import Bio from '@/components/Bio'
import WorkSection from '@/components/WorkSection'
import EventosPasarelas from '@/components/EventosPasarelas'
import ArteSection from '@/components/ArteSection'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <>
      <Hero />
      <QuienSoy />
      <Bio />

      <WorkSection
        id="cortometrajes"
        title="PORTAFOLIO"
        role="Cortometrajes"
        name="Dir. Victor Mascorro · David Absalón"
        cols={3}
        slots={[
          { label: 'STILL · 16:9', ratio: 'landscape' },
          { label: 'VIDEO · 16:9', ratio: 'landscape' },
          { label: 'STILL · 16:9', ratio: 'landscape' },
          { label: 'STILL · 16:9', ratio: 'landscape' },
          { label: 'STILL · 16:9', ratio: 'landscape' },
          { label: 'VIDEO · 16:9', ratio: 'landscape' },
        ]}
        credits={[
          'Dirección General',
          'Dirección Creativa',
          'Dirección de Arte',
          'Styling',
          'Dirección de Cámara',
          'Postproducción',
        ]}
      />

      <EventosPasarelas />
      <ArteSection />
      <Contacto />
    </>
  )
}
