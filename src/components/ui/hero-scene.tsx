import { Canvas } from "@react-three/fiber";

import SamirModel from "./samir";
import { Environment } from "@react-three/drei";

export const HeroScene = () => {
  return (
    <div className="hero-scene h-[600px] md:h-[600px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 1, 2], fov: 45 }}
        gl={{ antialias: false }}
      >
        <SamirModel position={[0, -0.98, 0]} />
        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
};
