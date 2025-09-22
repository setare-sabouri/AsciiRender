import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useEffect, useRef } from 'react'

const Zebra = () => {
    const ZebraMdl = useGLTF('./models/zebra.glb')
    const scroll = useScroll()
    const meshRef = useRef()

  useFrame(() => {
    const offset = scroll.offset

    meshRef.current.visible = offset < 0.50

    if (meshRef.current.visible) {
      // Move down smoothly with scroll
      meshRef.current.position.y = -1 - offset * 5  
      meshRef.current.position.z = offset * 10
      meshRef.current.rotation.y = -0.8 - offset * 4

    }
    })


    return (
        <>
            <primitive ref={meshRef} rotation={[0, -0.8 , 0]} position={[1, -1, 0]} scale={0.3} object={ZebraMdl.scene} />
        </>

    )
}

export default Zebra
