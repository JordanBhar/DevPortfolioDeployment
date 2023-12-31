import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import styles from "./style";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Education, Projects, Skills } from "./pages";

const FloatingSpheres = ({ count }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

    const engine = Engine.create();

    // Turn off gravity
    engine.world.gravity.y = 0;

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const spheres = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 60 + 10;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * document.documentElement.scrollHeight;

      const sphere = Bodies.circle(x, y, radius, {
        render: {
          fillStyle: "teal",
          strokeStyle: "white",
          lineWidth: 5,
        },
      });

      spheres.push(sphere);
    }


    
    World.add(engine.world, spheres);
    Engine.run(engine);
    Render.run(render);

    // Periodically apply random forces to the spheres
    setInterval(() => {
      spheres.forEach((sphere) => {
        const randomForce = {
          x: (Math.random() - 0.5) * 0.001,
          y: (Math.random() - 0.5) * 0.001,
        };
        Body.applyForce(
          sphere,
          { x: sphere.position.x, y: sphere.position.y },
          randomForce
        );
      });
    }, 100);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      engine.events = {};
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-1"
    ></div>
  );
};

const BlurLayer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full backdrop-blur z-2"></div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative bg-primary-gradient overflow-hidden font-poppins z-0">
        <FloatingSpheres count={100} />
        <BlurLayer />
        {/* rest of your components here */}
        <div className={`w-full overflow-hidden h-a  z-10`}>
          <div className="mx-auto relative">
            <div className={`${styles.flexCenter}`}>
              <Navbar />
            </div>
            <div className="space-y-40">
              <div id="Home" className="relative md:scale-90">
                <Home />
              </div>
              <div id="Skills" className="relative md:scale-90">
                <Skills />
              </div>
              <div id="Projects" className="relative md:scale-90">
                <Projects />
              </div>
              <div id="Education" className="relative md:scale-90">
                <Education />
              </div>
            </div>
              <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
