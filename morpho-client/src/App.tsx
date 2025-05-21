import './App.css';
import { Button } from './components/ui/button';
import { ThemeSelector } from './themes/ThemeSelector';

function App() {
  return (
    <div className="min-h-screen p-4">
      <ThemeSelector />
      <h1 className="text-2xl font-bold mt-4">Welcome to Morpho 🎨</h1>
      <Button className="mt-4">Click Me!</Button>
    </div>
  );
}

export default App;
