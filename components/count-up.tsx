"use client"

import { useCountUp } from "@/hooks/use-count-up"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
}

export function CountUp({ end, start = 0, duration = 2000, delay = 0, suffix = "", className = "" }: CountUpProps) {
  const count = useCountUp({
    end,
    start,
    duration,
    delay,
  })

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}
