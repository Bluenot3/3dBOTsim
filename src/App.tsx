import { Scene } from './components/Scene';
import { ControlPanel } from './components/ControlPanel';
import { CodePanel } from './components/CodePanel';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { useConfigStore } from './store/configStore';

function App() {
  const theme = useConfigStore((state) => state.theme);

  return (
    <div className={`w-full h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Scene />
      <ControlPanel />
      <CodePanel />
      <PerformanceMonitor />
    </div>
  );
}

export default App;