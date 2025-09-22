import { Suspense } from 'react'
import Canvas3D from './Canvas/GlobalCanvas'




function App() {

  return (
    <>
      <Suspense fallback={null}>
        <Canvas3D />
      </Suspense>
    </>
  )
}

export default App
