import { Suspense } from 'react'
import Canvas3D from './Canvas/GlobalCanvas'
import Interface from './Interface/Interface'



function App() {

  return (
    <>
      <Suspense fallback={null}>
        <Canvas3D />
      </Suspense>
      <Interface />
    </>
  )
}

export default App
