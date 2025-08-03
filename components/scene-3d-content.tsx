"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type { Points as PointsType } from "three"
import type * as THREE from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

// Particle field similar to the video
function ParticleField() {
  const pointsRef = useRef<PointsType>(null)
  const mousePosition = useMousePosition()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3) // Reducido para mejor performance

    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3
      const radius = Math.random() * 15 + 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05

      // Mouse interaction más suave
      pointsRef.current.rotation.x += mousePosition.y * 0.0002
      pointsRef.current.rotation.y += mousePosition.x * 0.0002
    }
  })

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#60a5fa" size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  )
}

// Geometric structure simplificada
function GeometricStructure() {
  const groupRef = useRef<THREE.Group>(null)
  const mousePosition = useMousePosition()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.05

      // Mouse influence más suave
      groupRef.current.rotation.x += mousePosition.y * 0.0001
      groupRef.current.rotation.y += mousePosition.x * 0.0001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.2} wireframe />
      </mesh>

      {/* Orbiting rings - reducidos */}
      {Array.from({ length: 2 }).map((_, i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
          <mesh position={[1.5 + i * 0.3, 0, 0]}>
            <torusGeometry args={[0.2, 0.05, 8, 16]} />
            <meshStandardMaterial color={i === 0 ? "#60a5fa" : "#10b981"} transparent opacity={0.5} />
          </mesh>
        </group>
      ))}

      {/* Connecting lines - reducidas */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2

        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 4, 6]} />
            <meshStandardMaterial color="#64748b" transparent opacity={0.3} />
          </mesh>
        )
      })}
    </group>
  )
}

// Helix structure simplificada
function HelixStructure({ position }: { position: [number, number, number] }) {
  const helixRef = useRef<THREE.Group>(null)
  const mousePosition = useMousePosition()

  const helixPoints = useMemo(() => {
    const points = []
    const segments = 30 // Reducido para mejor performance

    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 2
      const radius = 1

      points.push({
        position: [Math.cos(t) * radius, (i / segments) * 4 - 2, Math.sin(t) * radius] as [number, number, number],
        rotation: t,
      })
    }

    return points
  }, [])

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.1
      helixRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2

      // Mouse interaction más suave
      helixRef.current.rotation.x += mousePosition.y * 0.0001
      helixRef.current.rotation.z += mousePosition.x * 0.0001
    }
  })

  return (
    <group ref={helixRef} position={position}>
      {helixPoints.map((point, i) => (
        <mesh key={i} position={point.position}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color={`hsl(${(i / helixPoints.length) * 360}, 60%, 50%)`} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// Lighting optimizado
function OptimizedLights() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5
      lightRef.current.intensity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} color="#1e293b" />
      <pointLight ref={lightRef} position={[5, 5, 5]} intensity={0.3} color="#60a5fa" />
      <pointLight position={[-5, -5, -5]} intensity={0.2} color="#a855f7" />
      <directionalLight position={[3, 3, 3]} intensity={0.2} color="#f8fafc" />
    </>
  )
}

export default function Scene3DContent() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]} // Limitar DPR para mejor performance
    >
      <OptimizedLights />

      {/* Componentes 3D optimizados */}
      <ParticleField />
      <GeometricStructure />

      {/* Helices en posiciones específicas */}
      <HelixStructure position={[-4, 0, -3]} />
      <HelixStructure position={[4, 1, -2]} />

      {/* Elementos geométricos adicionales simplificados */}
      <mesh position={[0, -4, -5]} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ec4899" transparent opacity={0.3} wireframe />
      </mesh>

      <mesh position={[6, 0, -4]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} wireframe />
      </mesh>
    </Canvas>
  )
}
