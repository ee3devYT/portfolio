import React, { useState, useEffect } from "react";
import anime from "animejs";
import ProfileCard from "../profilecard";

function WaterDropGrid() {
  const GRID_WIDTH = 10;
  const GRID_HEIGHT = 8;

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          ></div>
        </div>
      );
      index++;
    }
  }

  const changingTexts = ["Developer", "Gamer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === changingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative grid h-screen place-content-center px-8">
          <div
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
          >
            {dots}
          </div>
        </div>
        <ProfileCard />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-10">
          <div>
            I am a{" "}
            <span className="text-blue-500">
              {changingTexts[currentTextIndex]}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default WaterDropGrid;
