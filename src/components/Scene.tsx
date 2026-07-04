import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function PortfolioMesh({ progress }: {progress: React.MutableRefObject<number>}) {
  const group = useRef<THREE.Group>(null!)
  const points = [[-3,0,0],[-1.6,1.2,0],[0,-.3,0],[1.7,1,0],[3,-.2,0]] as [number,number,number][]
  useFrame((state, delta) => {
    group.current.rotation.y += delta * .07
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, progress.current * Math.PI * .45, .02)
    group.current.position.y = Math.sin(state.clock.elapsedTime*.5)*.12
  })
  return <group ref={group}>
    <Float speed={1.2} rotationIntensity={.35} floatIntensity={.5}>
      <mesh><icosahedronGeometry args={[1.15,1]}/><meshBasicMaterial color="#76f3ff" wireframe transparent opacity={.38}/></mesh>
      <mesh><octahedronGeometry args={[.62,0]}/><meshStandardMaterial color="#0c2b32" emissive="#30cddd" emissiveIntensity={1.8} wireframe/></mesh>
    </Float>
    <Line points={points} color="#5ce7f2" transparent opacity={.22} lineWidth={1}/>
    {points.map((p,i)=><mesh position={p} key={i}><sphereGeometry args={[.06,8,8]}/><meshBasicMaterial color={i%2?'#a28cff':'#6affcb'}/></mesh>)}
    {[0,1,2].map(i=><mesh key={i} rotation={[Math.PI/2,i*.8,0]}><torusGeometry args={[1.8+i*.42,.008,8,80]}/><meshBasicMaterial color={i===1?'#9b8cff':'#45dce8'} transparent opacity={.24}/></mesh>)}
  </group>
}

export function Scene({ progress }: {progress: React.MutableRefObject<number>}) {
  return <div className="canvas-wrap"><Canvas dpr={[1,1.5]} camera={{position:[0,0,8],fov:45}} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={.45}/><pointLight position={[3,3,4]} color="#77efff" intensity={7}/>
    <Stars radius={45} depth={25} count={950} factor={2} saturation={0} fade speed={.35}/>
    <PortfolioMesh progress={progress}/>
  </Canvas></div>
}
