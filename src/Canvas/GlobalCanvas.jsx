import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import styles from './CanvasGlobal.module.scss'
import Experience from "../Components/Experience";
import { AsciiRenderer, Environment, OrbitControls } from "@react-three/drei";
import { useStore } from "../stores/useStore";



export default function Canvas3D() {
  const { ShowAscii } = useStore()

  return (
    <div className={styles.canvasContainer} >
      <Canvas flat camera={{ position: [0, 1, 5], fov: 45 }}>
        <Environment preset="night"/>
        {ShowAscii && ( 
          <AsciiRenderer
            fgColor="black"
            bgColor="transparent"
            characters=" &  ◼︎"
            resolution={0.3}
          />
        )}
      
        <color attach="background" args={['black']} />
        <Perf />
        <Experience />
      </Canvas>
    </div>
  );
}