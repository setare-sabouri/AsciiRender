import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import useBreakpoint from '../../stores/useBreakpoint'

const Monster = () => {
    const DogMdl = useGLTF('./models/alien.glb')
    const Animations = useAnimations(DogMdl.animations, DogMdl.scene)
    const meshRef = useRef()

    const WalkinAction = Animations.actions['Rig-Alien-Animal|Walk-Cycle'];
    WalkinAction.reset().fadeIn(0.5).play()

    const ClickHandler = () => {
        const runAction = Animations.actions['Rig-Alien-Animal|Run-Cycle']
        if (!runAction || !WalkinAction) return

        // Fade out walk and fade in run
        WalkinAction.fadeOut(0.5)
        runAction.reset().fadeIn(0.5).play()

        // After 2 seconds, fade back to walk
        setTimeout(() => {
            runAction.fadeOut(0.5)
            WalkinAction.reset().fadeIn(0.5).play()
        }, 2000)
    }

    // responsive 
    const breakpoint = useBreakpoint()

    return (
        <>
            <primitive
                onClick={ClickHandler}
                ref={meshRef} rotation={[0, 1.5, 0]}
                position={breakpoint==='mobile'?[0,-5,0]:[-1.6, -6, 0]}
                scale={breakpoint === 'mobile'? 0.2 : 0.4}
                object={DogMdl.scene} 
            />
        </>

    )
}

export default Monster
