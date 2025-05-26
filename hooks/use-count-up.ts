"use client"

import { useState, useEffect, useRef } from "react"

interface UseCountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  onComplete?: () => void
}

export function useCountUp({ end, start = 0, duration = 2000, delay = 0, onComplete }: UseCountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const element = document.getElementById("stats-section")
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          // Elemento está visível, iniciar a animação após o delay
          setTimeout(() => {
            startAnimation()
          }, delay)

          // Desconectar o observer após iniciar a animação
          observer.disconnect()
        }
      },
      { threshold: 0.1 }, // Inicia quando pelo menos 10% do elemento está visível
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [delay])

  const startAnimation = () => {
    // Resetar o contador para o valor inicial
    countRef.current = start
    setCount(start)
    startTimeRef.current = Date.now()

    const step = () => {
      const now = Date.now()
      const elapsed = now - (startTimeRef.current || now)
      const progress = Math.min(elapsed / duration, 1)

      // Calcular o valor atual baseado no progresso
      const currentCount = Math.floor(progress * (end - start) + start)

      // Atualizar o estado e a referência
      countRef.current = currentCount
      setCount(currentCount)

      // Continuar a animação se não estiver completa
      if (progress < 1) {
        timerRef.current = setTimeout(step, 16) // ~60fps
      } else {
        // Animação completa
        setCount(end)
        if (onComplete) {
          onComplete()
        }
      }
    }

    // Iniciar a animação
    step()
  }

  return count
}
