'use client'
import { useIntersection } from '@/hooks/useIntersection'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  scale?: boolean
}

export default function RevealWrapper({ children, className = '', delay = 0, scale = false }: Props) {
  const { ref, visible } = useIntersection()
  const base = scale ? 'reveal-scale' : 'reveal'
  const delayClass = delay ? `delay-${delay}` : ''

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${base} ${delayClass} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
