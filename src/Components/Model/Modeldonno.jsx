import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../../stores/useStore'
import { useRef } from 'react'

const Zebra = () => {
    const ZebraMdl = useGLTF('./models/zebra.glb')

    const scroll = useScroll()
    const meshRef = useRef()

    useFrame((state, delta) => {
        const offset = scroll.offset
        meshRef.current.rotation.y = 2 - offset * 4

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
