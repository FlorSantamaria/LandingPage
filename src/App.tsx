import { useEffect } from 'react';
import './App.css';
import { HomePage } from './page/Home';

function App() {

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
