'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress})`, width: '100%' }}
    />
  )
}
