import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import Moodboard from '@/components/Moodboard'
import FilmGallery from '@/components/FilmGallery'
import EventosPasarelas from '@/components/EventosPasarelas'
import ArteSection from '@/components/ArteSection'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Moodboard />
      <FilmGallery />
      <EventosPasarelas />
      <ArteSection />
      <Contacto />
    </>
  )
}
