"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import type { InstancedMesh, Group, Mesh } from "three"
import * as THREE from "three"

// Hexagonal Honeycomb Pattern con texturas metálicas
function MetallicHoneycomb() {
  const meshRef = useRef<InstancedMesh>(null)
  const groupRef = useRef<Group>(null)

  // Crear geometría hexagonal más detallada
  const hexGeometry = useMemo(() => {
    const geometry = new THREE.CylinderGeometry(1, 1, 0.3, 6, 1)
    geometry.computeVertexNormals()
    return geometry
  }, [])

  // Material metálico avanzado
  const metallicMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(0.7, 0.7, 0.8),
      metalness: 0.95,
      roughness: 0.1,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 0.9,
    })
  }, [])

  // Configurar patrón de panal de abeja
  const { positions, scales, rotations, phases } = useMemo(() => {
    const positions: THREE.Vector3[] = []
    const scales: number[] = []
    const rotations: THREE.Euler[] = []
    const phases: number[] = []

    // Crear patrón hexagonal tipo panal de abeja
    const rows = 15
    const cols = 20
    const hexRadius = 1.8
    const hexHeight = hexRadius * Math.sqrt(3)

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offsetX = (row % 2) * (hexRadius * 1.5)
        const x = col * (hexRadius * 3) - cols * hexRadius * 1.5 + offsetX
        const z = row * (hexHeight * 0.75) - rows * hexHeight * 0.375
        const y = Math.sin(row * 0.3 + col * 0.2) * 2

        positions.push(new THREE.Vector3(x, y, z))
        scales.push(0.8 + Math.random() * 0.4)
        rotations.push(new THREE.Euler(0, Math.random() * Math.PI * 2, 0))
        phases.push(Math.random() * Math.PI * 2)
      }
    }

    return { positions, scales, rotations, phases }
  }, [])

  // Configurar instancias
  useEffect(() => {
    if (meshRef.current) {
      const dummy = new THREE.Object3D()

      positions.forEach((position, i) => {
        dummy.position.copy(position)
        dummy.scale.setScalar(scales[i])
        dummy.rotation.copy(rotations[i])
        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })

      meshRef.current.instanceMatrix.needsUpdate = true
    }
  }, [positions, scales, rotations])

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      const time = state.clock.elapsedTime
      const dummy = new THREE.Object3D()

      // Animación de onda a través del panal
      positions.forEach((position, i) => {
        const waveX = Math.sin(time * 0.4 + position.x * 0.02) * 1.5
        const waveZ = Math.cos(time * 0.3 + position.z * 0.02) * 1.2
        const height = position.y + (waveX + waveZ) * 0.3 + Math.sin(time * 0.8 + phases[i]) * 0.5

        dummy.position.set(position.x, height, position.z)
        dummy.scale.setScalar(scales[i] * (1 + Math.sin(time * 0.5 + phases[i]) * 0.1))

        // Rotación suave
        dummy.rotation.set(
          rotations[i].x + Math.sin(time * 0.2 + phases[i]) * 0.1,
          rotations[i].y + time * 0.05,
          rotations[i].z + Math.cos(time * 0.3 + phases[i]) * 0.05,
        )

        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })

      meshRef.current.instanceMatrix.needsUpdate = true

      // Rotación general del grupo
      groupRef.current.rotation.y = time * 0.01
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[hexGeometry, metallicMaterial, positions.length]} frustumCulled={false} />
    </group>
  )
}

// Torus geométrico complejo como en la imagen
function ComplexTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  // Crear geometría de torus con más segmentos para mayor detalle
  const torusGeometry = useMemo(() => {
    return new THREE.TorusGeometry(3, 1.2, 32, 100)
  }, [])

  // Material metálico premium
  const premiumMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(0.8, 0.8, 0.9),
      metalness: 0.98,
      roughness: 0.05,
      envMapIntensity: 3.0,
    })
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime

      // Rotación compleja en múltiples ejes
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.15
      meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.3

      // Movimiento flotante
      meshRef.current.position.y = position[1] + Math.sin(time * 0.3) * 1.5

      // Escala pulsante sutil
      const scale = 1 + Math.sin(time * 0.4) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
  })

  return <mesh ref={meshRef} position={position} geometry={torusGeometry} material={premiumMaterial} />
}

// Icosahedro metálico flotante
function MetallicIcosahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  const icosaGeometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2, 2)
  }, [])

  const icosaMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(0.6, 0.7, 0.9),
      metalness: 0.9,
      roughness: 0.2,
      envMapIntensity: 2.5,
      wireframe: false,
    })
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime

      meshRef.current.rotation.x = time * 0.3
      meshRef.current.rotation.y = time * 0.2
      meshRef.current.position.y = position[1] + Math.cos(time * 0.4 + 1) * 2
    }
  })

  return <mesh ref={meshRef} position={position} geometry={icosaGeometry} material={icosaMaterial} />
}

// Dodecahedro con wireframe metálico
function WireframeDodecahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  const dodecaGeometry = useMemo(() => {
    return new THREE.DodecahedronGeometry(1.8, 0)
  }, [])

  const wireframeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(0.9, 0.8, 0.6),
      metalness: 0.95,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime

      meshRef.current.rotation.x = time * 0.15
      meshRef.current.rotation.y = time * 0.25
      meshRef.current.rotation.z = time * 0.1
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + 2) * 1.8
    }
  })

  return <mesh ref={meshRef} position={position} geometry={dodecaGeometry} material={wireframeMaterial} />
}

// Octahedro rotante
function RotatingOctahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  const octaGeometry = useMemo(() => {
    return new THREE.OctahedronGeometry(1.5, 1)
  }, [])

  const octaMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(0.7, 0.9, 0.8),
      metalness: 0.92,
      roughness: 0.15,
      envMapIntensity: 2.2,
    })
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime

      meshRef.current.rotation.x = time * 0.4
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.position.y = position[1] + Math.cos(time * 0.6 + 3) * 1.2
    }
  })

  return <mesh ref={meshRef} position={position} geometry={octaGeometry} material={octaMaterial} />
}

// Iluminación cinematográfica avanzada
function CinematicLighting() {
  const keyLightRef = useRef<THREE.DirectionalLight>(null)
  const fillLightRef = useRef<THREE.DirectionalLight>(null)
  const rimLightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Key light dinámico
    if (keyLightRef.current) {
      keyLightRef.current.position.x = Math.sin(time * 0.1) * 15
      keyLightRef.current.position.z = Math.cos(time * 0.1) * 15
      keyLightRef.current.intensity = 2.5 + Math.sin(time * 0.5) * 0.3
    }

    // Fill light suave
    if (fillLightRef.current) {
      fillLightRef.current.intensity = 1.2 + Math.cos(time * 0.3) * 0.2
    }

    // Rim light para contornos
    if (rimLightRef.current) {
      rimLightRef.current.position.x = Math.cos(time * 0.2) * 20
      rimLightRef.current.position.z = Math.sin(time * 0.2) * 20
      rimLightRef.current.intensity = 1.5 + Math.sin(time * 0.7) * 0.3
    }
  })

  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.3} color="#1a1a2e" />

      {/* Key light principal */}
      <directionalLight
        ref={keyLightRef}
        position={[15, 20, 10]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light azul corporativo */}
      <directionalLight ref={fillLightRef} position={[-10, 15, -8]} intensity={1.2} color="#3b82f6" />

      {/* Rim light púrpura */}
      <pointLight ref={rimLightRef} position={[20, 10, 20]} intensity={1.5} color="#8b5cf6" distance={40} decay={2} />

      {/* Luces de acento */}
      <pointLight position={[-15, 8, -15]} intensity={0.8} color="#06b6d4" distance={30} decay={2} />
      <pointLight position={[0, -10, 0]} intensity={0.6} color="#10b981" distance={25} decay={2} />

      {/* Spotlight desde arriba */}
      <spotLight position={[0, 30, 0]} angle={0.3} penumbra={1} intensity={1.0} color="#ffffff" castShadow />
    </>
  )
}

// Controlador de cámara dinámico
function DynamicCamera() {
  const { camera } = useThree()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Movimiento orbital suave de la cámara
    const radius = 25
    camera.position.x = Math.sin(time * 0.05) * radius
    camera.position.y = 15 + Math.cos(time * 0.07) * 5
    camera.position.z = Math.cos(time * 0.05) * radius

    // Mirar hacia el centro con ligero offset
    camera.lookAt(Math.sin(time * 0.02) * 3, Math.cos(time * 0.03) * 2, Math.cos(time * 0.02) * 3)
  })

  return null
}

// Componente principal de la escena 3D espectacular
export default function Spectacular3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 15, 25], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
        shadows
        dpr={[1, 2]}
      >
        {/* Environment map para reflejos realistas */}
        <Environment preset="city" />

        {/* Iluminación cinematográfica */}
        <CinematicLighting />

        {/* Controlador de cámara */}
        <DynamicCamera />

        {/* Panal de hexágonos metálicos */}
        <MetallicHoneycomb />

        {/* Figuras geométricas complejas */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <ComplexTorus position={[0, 0, 0]} />
        </Float>

        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
          <MetallicIcosahedron position={[-12, 5, -8]} />
        </Float>

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <WireframeDodecahedron position={[15, -3, -12]} />
        </Float>

        <Float speed={1.0} rotationIntensity={0.6} floatIntensity={0.4}>
          <RotatingOctahedron position={[8, 8, 10]} />
        </Float>

        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.7}>
          <MetallicIcosahedron position={[-8, -5, 15]} />
        </Float>

        {/* Fog cinematográfico */}
        <fog attach="fog" args={["#000000", 30, 100]} />
      </Canvas>
    </div>
  )
}
