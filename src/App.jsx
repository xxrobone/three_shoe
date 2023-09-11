/* eslint-disable react/no-unknown-property */
import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience  from './components/Exprience';

function App() {
  return (
    <Canvas
      camera={{
        fov: 72,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
