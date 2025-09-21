import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'   
import { useRef } from 'react'

const Earch = () => {
    const EarthMdl = useGLTF('./models/earth.glb')
    const scroll = useScroll()
    const meshRef = useRef()

  useFrame((_,delta) => {
    const offset = scroll.offset
    meshRef.current.rotation.y += delta *0.2

    })
    
 
    return (
        <>
            <primitive  ref={meshRef} rotation={[0, 1, 0]} position={[-2, -6, 0]} scale={0.3} object={EarthMdl.scene}/>

        </>

    )
}

export default Earch
