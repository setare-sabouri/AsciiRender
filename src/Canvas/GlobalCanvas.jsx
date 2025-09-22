import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import styles from './CanvasGlobal.module.scss'
import Experience from "../Components/Experience";
import { AsciiRenderer, Environment } from "@react-three/drei";
import { useStore } from "../stores/useStore";


export default function Canvas3D() {
  const { ShowAscii,Inverted,CharsValue } = useStore()


  return (
    <div className={styles.canvasContainer} >
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }} >
        {/* <Perf /> */}
        <Environment preset="studio" />
        <ambientLight intensity={10} />
        <Experience />

        {ShowAscii && (
          <AsciiRenderer
            fgColor="rgb(0, 255, 0);"
            bgColor="transparent"
            resolution={0.2}
            invert={Inverted}
            characters={CharsValue}
          />
        )}


      </Canvas>
    </div>
  );
}