"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  animationDelay: number
  animationDuration: number
}

interface Connection {
  from: FloatingElement
  to: FloatingElement
  opacity: number
}

export function SimpleBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [connections, setConnections] = useState<Connection[]>([])

  useEffect(() => {
    // Colores corporativos QAINEX
    const colors = [
      "#3b82f6", // Azul
      "#8b5cf6", // Púrpura
      "#06b6d4", // Cyan
      "#10b981", // Verde
      "#6366f1", // Indigo
      "#8b5cf6", // Violeta
    ]

    // Crear elementos flotantes
    const newElements: FloatingElement[] = []
    for (let i = 0; i < 35; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2,
        animationDelay: Math.random() * 10,
        animationDuration: Math.random() * 20 + 15,
      })
    }

    // Crear conexiones entre elementos cercanos
    const newConnections: Connection[] = []
    for (let i = 0; i < newElements.length; i++) {
      for (let j = i + 1; j < newElements.length; j++) {
        const elem1 = newElements[i]
        const elem2 = newElements[j]
        const distance = Math.sqrt(Math.pow(elem1.x - elem2.x, 2) + Math.pow(elem1.y - elem2.y, 2))

        // Solo conectar elementos cercanos
        if (distance < 25 && Math.random() > 0.7) {
          newConnections.push({
            from: elem1,
            to: elem2,
            opacity: Math.random() * 0.3 + 0.1,
          })
        }
      }
    }

    setElements(newElements)
    setConnections(newConnections)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      {/* SVG para las líneas de conexión */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {connections.map((connection, index) => (
          <line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke={connection.from.color}
            strokeWidth="1"
            strokeOpacity={connection.opacity}
            className="animate-pulse"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </svg>

      {/* Elementos flotantes */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
        {elements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              backgroundColor: element.color,
              opacity: element.opacity,
              borderRadius: Math.random() > 0.5 ? "4px" : "50%",
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`,
              boxShadow: `0 0 ${element.size / 2}px ${element.color}40`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Gradiente sutil para profundidad */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)
          `,
          zIndex: 3,
        }}
      />
    </div>
  )
}
