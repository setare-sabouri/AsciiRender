import {  Preload, Scroll, ScrollControls } from '@react-three/drei'
import Zebra from './Model/Modeldonno'



const Experience = () => {

    return (
        <>
            <ScrollControls horizontal={false} pages={4} damping={0.5}>
                <Zebra/>
                
                <Scroll html>
                    <h1>html in here (optional)</h1>
                    <h1 style={{ position: 'absolute', top: '100vh' }}>second page</h1>
                    <h1 style={{ position: 'absolute', top: '200vh' }}>third page</h1>
                </Scroll>
            </ScrollControls>
            <Preload />

        </>
    )
}

export default Experience
