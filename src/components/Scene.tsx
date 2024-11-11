import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { RobotModel } from './RobotModel';
import { useConfigStore } from '../store/configStore';

export function Scene() {
  const { backgroundColor, lightIntensity, cameraPosition } = useConfigStore();

  return (
    <Canvas shadows className="w-full h-full">
      <color attach="background" args={[backgroundColor]} />
      <PerspectiveCamera
        makeDefault
        position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
        fov={50}
      />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={3}
        maxDistance={10}
      />
      
      <ambientLight intensity={lightIntensity * 0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={lightIntensity}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      <RobotModel />
      <Grid
        args={[10, 10]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#666"
        sectionSize={3}
        fadeDistance={30}
        fadeStrength={1}
        followCamera={false}
        position={[0, -1.3, 0]}
      />
      
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          intensity={1}
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}