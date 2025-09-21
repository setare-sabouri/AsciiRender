import {  Preload, Scroll, ScrollControls } from '@react-three/drei'
import Zebra from './Model/Zebra'



const Experience = () => {

    return (
        <>
            <ScrollControls horizontal={false} pages={4} damping={0.5}>
                <Scroll>
                <Zebra />

                </Scroll>
                
                <Scroll html>
                    <h1>First page</h1>
                    <h1 style={{ position: 'absolute', top: '100vh' }}>second page</h1>
                    <h1 style={{ position: 'absolute', top: '200vh' }}>third page</h1>
                </Scroll>
            </ScrollControls>
            <Preload />

        </>
    )
}

export default Experience
