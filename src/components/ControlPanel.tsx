import { Settings, Code, Bot, Sun, Moon } from 'lucide-react';
import { useConfigStore } from '../store/configStore';

export function ControlPanel() {
  const {
    theme,
    setTheme,
    apiKey,
    setApiKey,
    model,
    setModel,
    robotColor,
    setRobotColor,
    metalness,
    setMetalness,
    roughness,
    setRoughness,
    animationSpeed,
    setAnimationSpeed,
    backgroundColor,
    setBackgroundColor,
    lightIntensity,
    setLightIntensity,
  } = useConfigStore();

  return (
    <div className={`fixed right-4 top-4 w-80 rounded-lg backdrop-blur-lg ${
      theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'
    } p-4 shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Bot className="w-6 h-6" />
          Robot Controls
        </h2>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-gray-700/20"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">API Key</label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-800/50 border border-gray-700"
            placeholder="Enter API key"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Model</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-800/50 border border-gray-700"
          >
            <option value="gpt-4">OpenAI GPT-4</option>
            <option value="gpt-3.5-turbo">OpenAI GPT-3.5</option>
            <option value="command">Cohere Command</option>
            <option value="claude-3">Anthropic Claude 3</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Robot Color</label>
          <input
            type="color"
            value={robotColor}
            onChange={(e) => setRobotColor(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Metalness ({metalness.toFixed(2)})
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={metalness}
            onChange={(e) => setMetalness(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Roughness ({roughness.toFixed(2)})
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={roughness}
            onChange={(e) => setRoughness(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Animation Speed ({animationSpeed.toFixed(1)}x)
          </label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Light Intensity ({lightIntensity.toFixed(1)})
          </label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={lightIntensity}
            onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}