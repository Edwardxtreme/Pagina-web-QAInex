"use client"

import { useEffect, useRef } from "react"

export function MathVisualizations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let time = 0
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      type: "node" | "connection"
    }> = []

    // Create neural network nodes
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        type: "node",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Draw mathematical equations as background
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
      ctx.font = "24px monospace"
      ctx.fillText("∇f(x) = λ∇g(x)", 50, 100)
      ctx.fillText("∫ᵃᵇ f(x)dx", canvas.width - 200, 150)
      ctx.fillText("Σᵢ wᵢxᵢ + b", 100, canvas.height - 100)

      // Draw and update particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections to nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw floating mathematical symbols
      ctx.fillStyle = `rgba(147, 51, 234, ${0.1 + 0.05 * Math.sin(time)})`
      ctx.font = "48px serif"
      ctx.fillText("∂", 200 + 50 * Math.sin(time * 0.5), 200 + 30 * Math.cos(time * 0.3))
      ctx.fillText("∑", canvas.width - 300 + 40 * Math.cos(time * 0.4), 300 + 25 * Math.sin(time * 0.6))
      ctx.fillText("∇", 150 + 35 * Math.sin(time * 0.7), canvas.height - 200 + 20 * Math.cos(time * 0.8))

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ background: "transparent" }}
    />
  )
}
