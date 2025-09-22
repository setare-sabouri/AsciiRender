// import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import { useEffect, useRef } from 'react'

// const Earch = () => {
//     const DogMdl = useGLTF('./models/alien.glb')
//     const Animations = useAnimations(DogMdl.animations, DogMdl.scene)
//     const scroll = useScroll()
//     const meshRef = useRef()
//     console.log(Animations)


//     const WalkinAction = Animations.actions['Rig-Alien-Animal|Walk-Cycle'];
//         WalkinAction.reset().fadeIn(0.5).play()

//     // useEffect(() => {
//     //     if (!WalkinAction) return
//     // }, [WalkinAction])



//        const ClickHandler = () => {
//         const runAction = Animations.actions['Rig-Alien-Animal|Run-Cycle']
//         if (!runAction || !WalkinAction) return

//         // Fade out walk and fade in run
//         WalkinAction.fadeOut(0.5)
//         runAction.reset().fadeIn(0.5).play()

//         // After 2 seconds, fade back to walk
//         setTimeout(() => {
//             runAction.fadeOut(0.5)
//             WalkinAction.reset().fadeIn(0.5).play()
//         }, 2000)
//     }

//     return (
//         <>
//             <primitive onClick={ClickHandler} ref={meshRef} rotation={[0, 1.5, 0]} position={[-2, -6, 0]} scale={0.5} object={DogMdl.scene} />

//         </>

//     )
// }

// export default Earch
