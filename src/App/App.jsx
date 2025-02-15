import { useState } from "react";
import HeroParticles from "../Components/Particles/ParticlesComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroParticles />
    </>
  );
}

export default App;
