"use client"

import { useState, useEffect } from "react"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Verificar que estamos en el cliente
    if (typeof window === "undefined") return

    const updateMousePosition = (e: MouseEvent) => {
      try {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        })
      } catch (error) {
        console.warn("Error updating mouse position:", error)
      }
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
