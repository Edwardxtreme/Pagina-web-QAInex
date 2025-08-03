"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

function TorusKnot({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)
  const mousePosition = useMousePosition()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01

      // Mouse interaction
      const mouseInfluence = 0.0001
      meshRef.current.rotation.x += mousePosition.x * mouseInfluence
      meshRef.current.rotation.y += mousePosition.y * mouseInfluence

      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  )
}

function Sphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)
  const mousePosition = useMousePosition()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.005

      // Mouse interaction
      const mouseInfluence = 0.0002
      meshRef.current.position.x = position[0] + mousePosition.x * mouseInfluence
      meshRef.current.position.y =
        position[1] + mousePosition.y * mouseInfluence + Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.4} wireframe />
    </mesh>
  )
}

function ParametricSurface({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)
  const mousePosition = useMousePosition()

  // Create parametric surface geometry
  const geometry = useMemo(() => {
    const vertices = []
    const indices = []
    const size = 20

    for (let i = 0; i <= size; i++) {
      for (let j = 0; j <= size; j++) {
        const u = (i / size) * Math.PI * 2
        const v = (j / size) * Math.PI

        const x = Math.cos(u) * Math.sin(v)
        const y = Math.sin(u) * Math.sin(v) * 0.5
        const z = Math.cos(v)

        vertices.push(x, y, z)

        if (i < size && j < size) {
          const a = i * (size + 1) + j
          const b = (i + 1) * (size + 1) + j
          const c = (i + 1) * (size + 1) + (j + 1)
          const d = i * (size + 1) + (j + 1)

          indices.push(a, b, d)
          indices.push(b, c, d)
        }
      }
    }

    return { vertices: new Float32Array(vertices), indices }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008
      meshRef.current.rotation.z += 0.008

      // Mouse interaction
      const mouseInfluence = 0.0001
      meshRef.current.rotation.y += mousePosition.x * mouseInfluence

      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={geometry.vertices}
          count={geometry.vertices.length / 3}
          itemSize={3}
        />
        <bufferAttribute attach="index" array={new Uint16Array(geometry.indices)} count={geometry.indices.length} />
      </bufferGeometry>
      <meshStandardMaterial color={color} transparent opacity={0.3} wireframe />
    </mesh>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
      <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />
    </>
  )
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "transparent" }}>
        <Lights />

        {/* Multiple 3D objects with different positions and colors */}
        <TorusKnot position={[-4, 2, -2]} color="#60a5fa" scale={0.8} />
        <TorusKnot position={[4, -1, -3]} color="#a855f7" scale={0.6} />

        <Sphere position={[-2, -2, -1]} color="#10b981" scale={0.7} />
        <Sphere position={[3, 2, -2]} color="#f59e0b" scale={0.5} />

        <ParametricSurface position={[0, 0, -4]} color="#ec4899" scale={1.2} />
        <ParametricSurface position={[-6, 0, -5]} color="#06b6d4" scale={0.8} />

        {/* Additional geometric shapes */}
        <TorusKnot position={[6, 3, -1]} color="#8b5cf6" scale={0.4} />
        <Sphere position={[0, 4, -3]} color="#ef4444" scale={0.6} />
      </Canvas>
    </div>
  )
}
