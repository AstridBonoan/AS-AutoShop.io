import { useState } from 'react'

type ContentImageProps = {
  src: string
  alt: string
  className?: string
  aspect?: 'video' | 'square' | 'auto'
}

const aspectClass = {
  video: 'aspect-video',
  square: 'aspect-square',
  auto: '',
} as const

export function ContentImage({
  src,
  alt,
  className = '',
  aspect = 'video',
}: ContentImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full rounded-2xl object-cover ${aspectClass[aspect]} ${className}`}
      onError={() => {
        setCurrentSrc(
          'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80',
        )
      }}
    />
  )
}
