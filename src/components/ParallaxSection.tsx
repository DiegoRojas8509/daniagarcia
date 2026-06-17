'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  strength?: number
}

export default function ParallaxSection({ children, className = '', strength = 28 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const { innerHeight } = window
      if (rect.bottom < 0 || rect.top > innerHeight) return

      const progress = (innerHeight - rect.top) / (innerHeight + rect.height)
      const offset = (progress - 0.5) * strength * 2
      const img = el.querySelector('[data-parallax]') as HTMLElement
      if (img) {
        img.style.transform = `translateY(${offset}px) scale(1.06)`
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [strength])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
