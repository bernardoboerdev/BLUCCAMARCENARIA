"use client"

import { useEffect } from "react"

export function ScrollAnimation() {
  useEffect(() => {
    // Função para verificar se um elemento está visível na viewport
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect()
      // Reduzindo o threshold para que elementos sejam animados mais cedo
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 && rect.bottom >= 0
    }

    // Função para adicionar a classe de animação aos elementos visíveis
    const handleScroll = () => {
      const animateElements = document.querySelectorAll(".animate-on-scroll")

      animateElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    // Adicionar o listener de scroll
    window.addEventListener("scroll", handleScroll)

    // Executar uma vez para animar elementos já visíveis na carga inicial
    setTimeout(() => {
      handleScroll()
    }, 100)

    // Função para rolagem suave ao clicar em links internos
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.hash && link.hash.startsWith("#") && document.querySelector(link.hash)) {
        e.preventDefault()

        const targetElement = document.querySelector(link.hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Adicionar o listener para links
    document.addEventListener("click", handleSmoothScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
