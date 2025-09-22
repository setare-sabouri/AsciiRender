import {  Preload, Scroll, ScrollControls } from '@react-three/drei'
import Zebra from './Model/Zebra'
import SecondPage from '../Interface/SecondPage'
import FirstPage from '../Interface/FirstPage'
import { Suspense } from 'react'
import ThirdPage from '../Interface/ThirdPage'

import Earch from './Model/Earth'



const Experience = () => {


    return (
        <>
            <ScrollControls horizontal={false} pages={3} damping={0.5}>
                <Scroll>
                <Zebra />
                <Earch/>
                </Scroll>
                
                <Scroll html>
                    <FirstPage/>
                    <SecondPage />
                    <ThirdPage/>
                </Scroll>
            </ScrollControls>
            <Preload />

        </>
    )
}

export default Experience
