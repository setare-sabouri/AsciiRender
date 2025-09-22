import { Preload, Scroll, ScrollControls } from '@react-three/drei'
import Zebra from './Model/Zebra'
import SecondPage from '../Interface/SecondPage'
import FirstPage from '../Interface/FirstPage'
import { Suspense } from 'react'
import ThirdPage from '../Interface/ThirdPage'

import Monster from './Model/Monster'
import PlaceHolder from './Model/PlaceHolder'



const Experience = () => {


    return (
        <>
            <ScrollControls horizontal={false} pages={3} damping={0.5}>
                <Scroll>
                    <Zebra />
                    <Suspense fallback={<PlaceHolder scale={2}/>}>
                        <Monster />
                    </Suspense>
                </Scroll>

                <Scroll html>
                    <FirstPage />
                    <SecondPage />
                    <ThirdPage />
                </Scroll>
            </ScrollControls>
            <Preload />

        </>
    )
}

export default Experience
