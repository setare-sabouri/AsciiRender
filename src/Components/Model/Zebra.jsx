import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../../stores/useStore'
import { useRef } from 'react'

const Zebra = () => {
    const ZebraMdl = useGLTF('./models/zebra.glb')

    const scroll = useScroll()
    const meshRef = useRef()

  useFrame(() => {
    const offset = scroll.offset

    // Only visible in first 2 pages . each page is 0.25 as for 4 pages
    meshRef.current.visible = offset < 0.5

    if (meshRef.current.visible) {
      // Move down smoothly with scroll
      meshRef.current.position.y = -1 - offset *10   // adjust multiplier for speed
      meshRef.current.rotation.y = 2 - offset * 4
      meshRef.current.position.z = offset * 4

    }
    })

    return (
        <>
            <primitive ref={meshRef} rotation={[0, 1, 0]} position={[0, -1, 0]} scale={0.3} object={ZebraMdl.scene} />
            <mesh position={[0, -3, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial color={['white']} />
            </mesh>
        </>

    )
}

export default Zebra
