import React, { useState, useEffect, useMemo, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        console.log("🔥 Particles Engine Initialized");
        await loadSlim(engine);
      });
      setInit(true); // Only set this when loading is done
    };

    initializeParticles();
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("✅ Particles Loaded:", container);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "#162747",
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#f1f1f1" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1080 },
          value: 50,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "image", // Change from "circle" to "image"
          image: {
            src: "/public/quickball.png", // Path to your Pokéball image
            width: 32,
            height: 32,
          },
        },
        size: {
          value: { min: 15, max: 25 }, // Adjust to match Pokéball size
          random: { enable: true },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="App">
      {init ? (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      ) : (
        <p>Loading Particles...</p>
      )}
    </div>
  );
};

export default HeroParticles;
