import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useRef } from 'react'

const Zebra = () => {
    const ZebraMdl = useGLTF('./models/zebra.glb')
    const scroll = useScroll()
    const meshRef = useRef()

  useFrame(() => {
    const offset = scroll.offset

    // Only visible in first 2 pages . each page is 0.25 as for 4 pages
    meshRef.current.visible = offset < 0.50

    if (meshRef.current.visible) {
      // Move down smoothly with scroll
      meshRef.current.position.y = -1 - offset *10  
      meshRef.current.position.z = offset * 10
      meshRef.current.rotation.y = 0.5 - offset *5

    }
    })

    

    return (
        <>
            <primitive ref={meshRef} rotation={[0, 0.5 , 0]} position={[1, -1, 0]} scale={0.2} object={ZebraMdl.scene} />

        </>

    )
}

export default Zebra
