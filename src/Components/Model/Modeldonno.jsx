import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../../stores/useStore'
import { useRef } from 'react'

const Modeldonno = () => {
    const ZebraMdl=useGLTF('./models/zebra.glb')
    console.log(ZebraMdl)
    const scroll = useScroll()
    const { setShowAscii } = useStore()
    const meshRef = useRef()

    useFrame((state, delta) => {
        const offset = scroll.offset
        meshRef.current.rotation.y = 2 - offset * 4

    })

    return (
        <primitive ref={meshRef}  rotation={[0,1,0]} position={[0,-1,0]} scale={0.3} object={ZebraMdl.scene}/>
    )
}

export default Modeldonno
