"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { InstancedMesh, Group, Points } from "three"
import * as THREE from "three"

// Hexágonos 3D instanciados para mejor performance
function HexagonField() {
  const meshRef = useRef<InstancedMesh>(null)
  const groupRef = useRef<Group>(null)

  // Crear geometría hexagonal
  const hexGeometry = useMemo(() => {
    const geometry = new THREE.CylinderGeometry(1, 1, 1, 6)
    return geometry
  }, [])

  // Configurar instancias de hexágonos
  const { positions, colors, scales, phases } = useMemo(() => {
    const count = 300 // Reducido para mejor performance
    const positions: THREE.Vector3[] = []
    const colors: THREE.Color[] = []
    const scales: number[] = []
    const phases: number[] = []

    const gridSize = Math.ceil(Math.sqrt(count))
    const spacing = 2.5

    for (let i = 0; i < count; i++) {
      const x = (i % gridSize) * spacing - (gridSize * spacing) / 2
      const z = Math.floor(i / gridSize) * spacing - (gridSize * spacing) / 2

      // Offset hexagonal para crear patrón de panal
      const offsetX = (Math.floor(i / gridSize) % 2) * spacing * 0.5

      positions.push(new THREE.Vector3(x + offsetX, 0, z))

      // Colores metálicos variados
      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
        colors.push(new THREE.Color(0.2, 0.4, 0.8)) // Azul metálico
      } else if (colorChoice < 0.6) {
        colors.push(new THREE.Color(0.3, 0.6, 0.7)) // Cyan metálico
      } else if (colorChoice < 0.8) {
        colors.push(new THREE.Color(0.8, 0.6, 0.2)) // Dorado
      } else {
        colors.push(new THREE.Color(0.6, 0.4, 0.2)) // Bronce
      }

      scales.push(0.7 + Math.random() * 0.6)
      phases.push(Math.random() * Math.PI * 2)
    }

    return { positions, colors, scales, phases }
  }, [])

  // Configurar instancias
  useMemo(() => {
    if (meshRef.current) {
      const dummy = new THREE.Object3D()

      positions.forEach((position, i) => {
        dummy.position.copy(position)
        dummy.scale.setScalar(scales[i])
        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
        meshRef.current!.setColorAt(i, colors[i])
      })

      meshRef.current.instanceMatrix.needsUpdate = true
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true
      }
    }
  }, [positions, colors, scales])

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      const dummy = new THREE.Object3D()
      const time = state.clock.elapsedTime

      // Animación de onda a través de los hexágonos
      positions.forEach((position, i) => {
        const waveX = Math.sin(time * 0.4 + position.x * 0.08) * 1.5
        const waveZ = Math.cos(time * 0.3 + position.z * 0.08) * 1.2
        const height = 0.3 + (waveX + waveZ) * 0.4 + Math.sin(time * 0.8 + phases[i]) * 0.2

        dummy.position.set(position.x, height, position.z)
        dummy.scale.setScalar(scales[i])

        // Rotación sutil
        dummy.rotation.y = time * 0.05 + phases[i] * 0.05

        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })

      meshRef.current.instanceMatrix.needsUpdate = true

      // Rotación general muy sutil
      groupRef.current.rotation.y = time * 0.01
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[hexGeometry, undefined, positions.length]} frustumCulled={false}>
        <meshStandardMaterial metalness={0.7} roughness={0.3} vertexColors transparent opacity={0.9} />
      </instancedMesh>
    </group>
  )
}

// Partículas flotantes simplificadas
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 80
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      positions[i3] = (Math.random() - 0.5) * 50
      positions[i3 + 1] = Math.random() * 15 + 2
      positions[i3 + 2] = (Math.random() - 0.5) * 50

      // Colores dorados y azules
      if (Math.random() < 0.5) {
        colors[i3] = 0.9
        colors[i3 + 1] = 0.7
        colors[i3 + 2] = 0.3
      } else {
        colors[i3] = 0.3
        colors[i3 + 1] = 0.6
        colors[i3 + 2] = 0.9
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005

      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + positions[i] * 0.01) * 0.005
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={colors.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.4}
        transparent
        opacity={0.5}
        vertexColors
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Sistema de conexiones de datos estilo Matrix
function MatrixDataConnections() {
  const linesRef = useRef<Group>(null)
  const particlesRef = useRef<Points>(null)

  // Crear líneas de conexión de datos
  const { lineGeometries, particlePositions, particleColors, particleVelocities } = useMemo(() => {
    const lineCount = 25
    const particleCount = 150
    const lineGeometries: THREE.BufferGeometry[] = []

    // Crear líneas de conexión
    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry()
      const points = []

      // Crear línea curva entre dos puntos aleatorios
      const startX = (Math.random() - 0.5) * 40
      const startY = Math.random() * 20 - 5
      const startZ = (Math.random() - 0.5) * 40

      const endX = (Math.random() - 0.5) * 40
      const endY = Math.random() * 20 - 5
      const endZ = (Math.random() - 0.5) * 40

      // Crear curva suave entre puntos
      const segments = 20
      for (let j = 0; j <= segments; j++) {
        const t = j / segments
        const x = startX + (endX - startX) * t + Math.sin(t * Math.PI) * 2
        const y = startY + (endY - startY) * t + Math.cos(t * Math.PI * 2) * 1
        const z = startZ + (endZ - startZ) * t
        points.push(new THREE.Vector3(x, y, z))
      }

      geometry.setFromPoints(points)
      lineGeometries.push(geometry)
    }

    // Crear partículas de datos
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    const particleVelocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Posiciones iniciales
      particlePositions[i3] = (Math.random() - 0.5) * 50
      particlePositions[i3 + 1] = Math.random() * 25 - 5
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 50

      // Velocidades
      particleVelocities[i3] = (Math.random() - 0.5) * 0.02
      particleVelocities[i3 + 1] = Math.random() * 0.01 + 0.005
      particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.02

      // Colores corporativos QAINEX
      const colorType = Math.random()
      if (colorType < 0.3) {
        // Azul corporativo
        particleColors[i3] = 0.2
        particleColors[i3 + 1] = 0.5
        particleColors[i3 + 2] = 1.0
      } else if (colorType < 0.6) {
        // Púrpura corporativo
        particleColors[i3] = 0.6
        particleColors[i3 + 1] = 0.3
        particleColors[i3 + 2] = 1.0
      } else {
        // Cyan corporativo
        particleColors[i3] = 0.0
        particleColors[i3 + 1] = 0.8
        particleColors[i3 + 2] = 1.0
      }
    }

    return { lineGeometries, particlePositions, particleColors, particleVelocities }
  }, [])

  useFrame((state) => {
    // Animar líneas de conexión
    if (linesRef.current) {
      linesRef.current.children.forEach((line, index) => {
        if (line instanceof THREE.Line) {
          const material = line.material as THREE.LineBasicMaterial
          const time = state.clock.elapsedTime

          // Efecto de pulso en las líneas
          material.opacity = 0.3 + Math.sin(time * 2 + index) * 0.2

          // Rotación sutil
          line.rotation.y = time * 0.01 + index * 0.1
        }
      })
    }

    // Animar partículas de datos
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        // Movimiento de partículas
        positions[i] += particleVelocities[i]
        positions[i + 1] += particleVelocities[i + 1]
        positions[i + 2] += particleVelocities[i + 2]

        // Resetear partículas que salen del área
        if (positions[i + 1] > 20) {
          positions[i] = (Math.random() - 0.5) * 50
          positions[i + 1] = -5
          positions[i + 2] = (Math.random() - 0.5) * 50
        }

        if (Math.abs(positions[i]) > 25 || Math.abs(positions[i + 2]) > 25) {
          positions[i] = (Math.random() - 0.5) * 50
          positions[i + 2] = (Math.random() - 0.5) * 50
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Líneas de conexión de datos */}
      <group ref={linesRef}>
        {lineGeometries.map((geometry, index) => (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial
              color={index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#8b5cf6" : "#06b6d4"}
              transparent
              opacity={0.4}
              linewidth={2}
            />
          </line>
        ))}
      </group>

      {/* Partículas de datos fluyendo */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particlePositions}
            count={particlePositions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={particleColors}
            count={particleColors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.8}
          transparent
          opacity={0.8}
          vertexColors
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

// Hexágonos metálicos profesionales mejorados
function ProfessionalHexagons() {
  const meshRef = useRef<InstancedMesh>(null)
  const groupRef = useRef<Group>(null)

  // Crear geometría hexagonal con más detalle
  const hexGeometry = useMemo(() => {
    const geometry = new THREE.CylinderGeometry(1, 1, 0.2, 6, 1)
    // Añadir más detalle a la geometría
    geometry.computeVertexNormals()
    return geometry
  }, [])

  // Crear material metálico profesional
  const hexMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.5,
      transparent: true,
      opacity: 0.95,
    })
  }, [])

  // Configurar instancias de hexágonos
  const { positions, colors, scales, phases } = useMemo(() => {
    const count = 200
    const positions: THREE.Vector3[] = []
    const colors: THREE.Color[] = []
    const scales: number[] = []
    const phases: number[] = []

    const gridSize = Math.ceil(Math.sqrt(count))
    const spacing = 3

    for (let i = 0; i < count; i++) {
      const x = (i % gridSize) * spacing - (gridSize * spacing) / 2
      const z = Math.floor(i / gridSize) * spacing - (gridSize * spacing) / 2

      // Offset hexagonal para patrón profesional
      const offsetX = (Math.floor(i / gridSize) % 2) * spacing * 0.5

      positions.push(new THREE.Vector3(x + offsetX, 0, z))

      // Paleta de colores corporativos QAINEX
      const colorChoice = Math.random()
      if (colorChoice < 0.25) {
        colors.push(new THREE.Color(0.23, 0.51, 0.96)) // Azul corporativo #3b82f6
      } else if (colorChoice < 0.5) {
        colors.push(new THREE.Color(0.55, 0.36, 0.96)) // Púrpura corporativo #8b5cf6
      } else if (colorChoice < 0.75) {
        colors.push(new THREE.Color(0.02, 0.71, 0.83)) // Cyan corporativo #06b6d4
      } else {
        colors.push(new THREE.Color(0.16, 0.85, 0.51)) // Verde corporativo #10d981
      }

      scales.push(0.6 + Math.random() * 0.8)
      phases.push(Math.random() * Math.PI * 2)
    }

    return { positions, colors, scales, phases }
  }, [])

  // Configurar instancias
  useMemo(() => {
    if (meshRef.current) {
      const dummy = new THREE.Object3D()

      positions.forEach((position, i) => {
        dummy.position.copy(position)
        dummy.scale.setScalar(scales[i])
        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
        meshRef.current!.setColorAt(i, colors[i])
      })

      meshRef.current.instanceMatrix.needsUpdate = true
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true
      }
    }
  }, [positions, colors, scales])

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      const dummy = new THREE.Object3D()
      const time = state.clock.elapsedTime

      // Animación de onda profesional más suave
      positions.forEach((position, i) => {
        const waveX = Math.sin(time * 0.3 + position.x * 0.05) * 1.2
        const waveZ = Math.cos(time * 0.25 + position.z * 0.05) * 1.0
        const height = 0.5 + (waveX + waveZ) * 0.3 + Math.sin(time * 0.6 + phases[i]) * 0.15

        dummy.position.set(position.x, height, position.z)
        dummy.scale.setScalar(scales[i] * (1 + Math.sin(time + phases[i]) * 0.1))

        // Rotación profesional más sutil
        dummy.rotation.y = time * 0.02 + phases[i] * 0.02
        dummy.rotation.x = Math.sin(time * 0.1 + phases[i]) * 0.05

        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })

      meshRef.current.instanceMatrix.needsUpdate = true

      // Rotación general muy sutil del grupo
      groupRef.current.rotation.y = time * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[hexGeometry, hexMaterial, positions.length]} frustumCulled={false}>
        <primitive object={hexMaterial} attach="material" vertexColors />
      </instancedMesh>
    </group>
  )
}

// Iluminación cinematográfica profesional
function CinematicLighting() {
  const keyLightRef = useRef<THREE.DirectionalLight>(null)
  const fillLightRef = useRef<THREE.DirectionalLight>(null)
  const rimLightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Key light (luz principal)
    if (keyLightRef.current) {
      keyLightRef.current.position.x = Math.sin(time * 0.1) * 10
      keyLightRef.current.position.z = Math.cos(time * 0.1) * 10
      keyLightRef.current.intensity = 1.5 + Math.sin(time * 0.5) * 0.2
    }

    // Fill light (luz de relleno)
    if (fillLightRef.current) {
      fillLightRef.current.intensity = 0.8 + Math.cos(time * 0.3) * 0.1
    }

    // Rim light (luz de contorno)
    if (rimLightRef.current) {
      rimLightRef.current.position.x = Math.cos(time * 0.2) * 15
      rimLightRef.current.position.z = Math.sin(time * 0.2) * 15
      rimLightRef.current.intensity = 0.6 + Math.sin(time * 0.7) * 0.2
    }
  })

  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.2} color="#0f1419" />

      {/* Key light - Luz principal azul corporativo */}
      <directionalLight ref={keyLightRef} position={[10, 15, 8]} intensity={1.5} color="#3b82f6" />

      {/* Fill light - Luz de relleno púrpura */}
      <directionalLight ref={fillLightRef} position={[-8, 10, -6]} intensity={0.8} color="#8b5cf6" />

      {/* Rim light - Luz de contorno cyan */}
      <pointLight ref={rimLightRef} position={[15, 8, 15]} intensity={0.6} color="#06b6d4" distance={30} decay={2} />

      {/* Luces de acento */}
      <pointLight position={[-12, 6, -12]} intensity={0.4} color="#10b981" distance={25} decay={2} />

      <spotLight position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={0.3} color="#ffffff" />
    </>
  )
}

// Controlador de cámara cinematográfico
function CinematicCamera() {
  useFrame((state) => {
    const time = state.clock.elapsedTime

    // Movimiento de cámara más cinematográfico
    state.camera.position.x = Math.sin(time * 0.05) * 2
    state.camera.position.y = 14 + Math.cos(time * 0.07) * 1.5
    state.camera.position.z = 20 + Math.sin(time * 0.03) * 3

    // Mirar hacia el centro con ligero offset
    state.camera.lookAt(Math.sin(time * 0.02) * 2, 0, Math.cos(time * 0.02) * 2)
  })

  return null
}

export default function Professional3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 14, 20], fov: 70 }}
        style={{ background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 2]}
      >
        <CinematicLighting />
        <CinematicCamera />

        {/* Hexágonos metálicos profesionales */}
        <ProfessionalHexagons />

        {/* Sistema de conexiones de datos Matrix */}
        <MatrixDataConnections />

        {/* Fog cinematográfico */}
        <fog attach="fog" args={["#000000", 20, 70]} />
      </Canvas>
    </div>
  )
}
