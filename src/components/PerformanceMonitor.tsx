import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { useConfigStore } from '../store/configStore';

export function PerformanceMonitor() {
  const theme = useConfigStore((state) => state.theme);
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;

      if (now >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;

        if (window.performance && (performance as any).memory) {
          setMemory(Math.round((performance as any).memory.usedJSHeapSize / 1048576));
        }
      }

      requestAnimationFrame(updateMetrics);
    };

    requestAnimationFrame(updateMetrics);
  }, []);

  return (
    <div className={`fixed left-4 top-4 rounded-lg backdrop-blur-lg ${
      theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'
    } p-4 shadow-xl`}>
      <div className="flex items-center gap-2 text-sm">
        <Activity className="w-4 h-4" />
        <span>{fps} FPS</span>
        {memory > 0 && <span>| {memory} MB</span>}
      </div>
    </div>
  );
}