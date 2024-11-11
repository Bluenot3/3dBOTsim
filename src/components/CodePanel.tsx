import { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';
import { useConfigStore } from '../store/configStore';

export function CodePanel() {
  const [copied, setCopied] = useState(false);
  const config = useConfigStore();

  const codeString = `
// Robot Configuration
const robotConfig = {
  color: '${config.robotColor}',
  metalness: ${config.metalness},
  roughness: ${config.roughness},
  animationSpeed: ${config.animationSpeed},
  backgroundColor: '${config.backgroundColor}',
  lightIntensity: ${config.lightIntensity},
  cameraPosition: {
    x: ${config.cameraPosition.x},
    y: ${config.cameraPosition.y},
    z: ${config.cameraPosition.z}
  }
};

// Three.js Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color('${config.backgroundColor}');

const robot = new THREE.Mesh(
  robotGeometry,
  new THREE.MeshStandardMaterial({
    color: '${config.robotColor}',
    metalness: ${config.metalness},
    roughness: ${config.roughness}
  })
);

const light = new THREE.DirectionalLight(0xffffff, ${config.lightIntensity});
light.position.set(5, 5, 5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(${config.cameraPosition.x}, ${config.cameraPosition.y}, ${config.cameraPosition.z});
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`fixed left-4 bottom-4 w-96 rounded-lg backdrop-blur-lg ${
      config.theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'
    } p-4 shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Code className="w-6 h-6" />
          Code Export
        </h2>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg hover:bg-gray-700/20 transition-colors"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
        <code className="text-gray-100">{codeString}</code>
      </pre>
    </div>
  );
}