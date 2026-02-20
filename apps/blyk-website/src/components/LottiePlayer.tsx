"use client"

import { Player } from "@lottiefiles/react-lottie-player"
import { cn } from "@/lib/utils"

type LottiePlayerProps = {
  src: string
  className?: string
  size?: number
  loop?: boolean
  autoplay?: boolean
}

export function LottiePlayer({
  src,
  className,
  size = 200,
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={src}
      className={cn("opacity-80", className)}
      style={{ height: size, width: size }}
    />
  )
}
