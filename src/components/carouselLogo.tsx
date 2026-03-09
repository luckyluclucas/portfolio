"use client"

import { FC, useEffect, useRef } from "react"

type Item = {
  text: string
  classes?: string
}

interface Props {
  items: Item[]
  speed?: number
}

const LogoCarousel: FC<Props> = ({ items, speed = 0.55 }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const xRef = useRef(0)
  const pausedRef = useRef(false)

  // Two identical copies — when we scroll exactly -halfWidth, content
  // at position 0 is indistinguishable from content at -halfWidth,
  // so resetting to 0 is completely invisible.
  const doubled = [...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= speed
        const halfWidth = track.scrollWidth / 2
        if (Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0
        }
        // translate3d forces GPU compositing layer — avoids repaint flicker
        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [speed])

  return (
    <div
      className="overflow-hidden py-6 mx-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {doubled.map(({ text, classes }, i) => (
          <div
            key={i}
            className={`rounded-xl px-4 text-sm w-36 dark:bg-white/5 bg-black/5
            dark:text-white text-center font-semibold leading-[3.5rem]
            border border-border/40 dark:border-white/10 mx-1 shrink-0
            transition-colors duration-200 hover:bg-accent/60
            hover:border-border/70 tracking-tight ${classes ?? ""}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel
