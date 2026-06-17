import Image from 'next/image'

type Ratio = 'portrait' | 'landscape' | 'square' | 'wide'

interface Props {
  /** Etiqueta visible mientras no hay contenido (ej: "VIDEO 16:9") */
  label?: string
  ratio?: Ratio
  /** Ruta a imagen real en /public — cuando la pongas, deja de ser placeholder */
  src?: string
  /** Ruta a video real en /public (ej: /assets/dan/video/film1.mp4) */
  video?: string
  alt?: string
  className?: string
}

export default function MediaSlot({
  label = 'IMAGEN',
  ratio = 'landscape',
  src,
  video,
  alt = '',
  className = '',
}: Props) {
  const filled = Boolean(src || video)

  return (
    <div
      className={`media-slot ratio-${ratio} ${filled ? 'filled' : ''} ${className}`}
      data-label={label}
      data-hover
    >
      {video ? (
        <video src={video} muted loop playsInline autoPlay />
      ) : src ? (
        <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'cover' }} />
      ) : null}
    </div>
  )
}
