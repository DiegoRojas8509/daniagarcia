import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Cursor from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'

export const metadata: Metadata = {
  title: 'Art Design ✶ DAN — Dania García',
  description: 'Diseñadora de imagen profesional, artista multidisciplinaria, directora de arte y creativa.',
  openGraph: {
    title: 'Art Design ✶ DAN',
    description: 'Portafolio de Dania García — imagen, arte, film y eventos.',
    images: ['/assets/dan/og.jpg'],
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProgressBar />
        <Cursor />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
