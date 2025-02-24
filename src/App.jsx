import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

function App() {
  return (
    <Canvas flat camera={{ fov: 20 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={2.0}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive={true} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
