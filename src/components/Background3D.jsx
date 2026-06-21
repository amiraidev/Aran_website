import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

// ذرات شناور سه‌بعدی
function Particles({ count = 1800 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // پراکندگی در یک کره
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.03
    ref.current.rotation.x += delta * 0.01
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

// اشکال هندسی شناور
function FloatingShape({ position, scale, color, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.4} floatIntensity={2}>
      <Icosahedron args={[1, 0]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.45}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  )
}

// واکنش ملایم صحنه به حرکت موس
function MouseRig() {
  useFrame((state) => {
    const { camera, pointer } = state
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.04
    camera.position.y += (pointer.y * 1.2 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Background3D() {
  return (
    <div className="bg-3d">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#05070d']} />
        <fog attach="fog" args={['#05070d', 12, 26]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -8, -6]} intensity={0.8} color="#1e3a8a" />

        <Particles />

        <FloatingShape position={[-5, 2, -2]} scale={1.3} color="#22d3ee" speed={1.2} />
        <FloatingShape position={[5, -2, -3]} scale={1.8} color="#3b82f6" speed={0.9} />
        <FloatingShape position={[3, 3, -4]} scale={1} color="#2563eb" speed={1.5} />
        <FloatingShape position={[-4, -3, -1]} scale={0.9} color="#22d3ee" speed={1.1} />

        <MouseRig />
      </Canvas>
    </div>
  )
}
