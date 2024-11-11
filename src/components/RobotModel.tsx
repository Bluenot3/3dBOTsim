import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useConfigStore } from '../store/configStore';
import * as THREE from 'three';

export function RobotModel() {
  const { robotColor, metalness, roughness, animationSpeed } = useConfigStore();
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01 * animationSpeed;
    }
  });

  const material = new THREE.MeshStandardMaterial({
    color: robotColor,
    metalness,
    roughness,
  });

  return (
    <group ref={group}>
      {/* Body */}
      <mesh material={material} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1, 1.5, 1]} />
      </mesh>

      {/* Head */}
      <mesh material={material} position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[0.75, 0.75, 0.75]} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.25, 0.38]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.25, 0.38]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>

      {/* Arms */}
      <mesh material={material} position={[-0.75, 0.25, 0]} castShadow>
        <boxGeometry args={[0.5, 0.25, 0.25]} />
      </mesh>
      <mesh material={material} position={[0.75, 0.25, 0]} castShadow>
        <boxGeometry args={[0.5, 0.25, 0.25]} />
      </mesh>

      {/* Legs */}
      <mesh material={material} position={[-0.25, -1, 0]} castShadow>
        <boxGeometry args={[0.25, 0.5, 0.25]} />
      </mesh>
      <mesh material={material} position={[0.25, -1, 0]} castShadow>
        <boxGeometry args={[0.25, 0.5, 0.25]} />
      </mesh>

      {/* Antenna */}
      <mesh material={material} position={[0, 1.75, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}