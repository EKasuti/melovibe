import React, { useState } from "react";
import gclef from "../assets/images/g-clef.png";

function MeloVibe() {
  // Define initial position variables
  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight / 2;

  const [position, setPosition] = useState({ x: initialX, y: initialY }); // Initial position of the gcledf
  const [dragging, setDragging] = useState(false);
  const [meloMood, setMeloMood] = useState("meloMood"); // initial mood (black)

  // When the mouse is pressed, set dragging to true
  const handleMouseDown = (event) => {
    setDragging(true);
  };

  // When mouse is released, set dragging to false
  const handleMouseUp = (event) => {
    setDragging(false);
  };

  // While the mouse is moving, update the x and y positions of the gclef
  const handleMouseMove = (event) => {
    if (dragging) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      calculateMood(event.clientX, event.clientY);
    }
  };

  // Set meloMood based on the position of the gclef
  const calculateMood = (x, y) => {
    if (y < 150) {
      setMeloMood("chill");

    } else if (y > 700) {
      setMeloMood("relaxing");
    } else if (x > 900) {
      setMeloMood("upbeat");
    } else if (x < 200) {
      setMeloMood("energetic");
    } else {
      setMeloMood("meloMood");
    }
  };
  const getMoodColorClasses = (mood) => {
    switch (mood) {
      case "chill": return "text-primary-text-color-chill bg-background-color-chill";
      case "relaxing": return "text-primary-text-color-relaxing bg-background-color-relaxing";
      case "upbeat": return "text-primary-text-color-upbeat bg-background-color-upbeat";
      case "energetic": return "text-primary-text-color-energetic bg-background-color-energetic";
      default: return "text-primary-text-color-meloMood bg-background-color-meloMood"; 
    }
  };

  console.log(meloMood);
  return (
    <>
      <div
        className={`${getMoodColorClasses(meloMood)} pl-3 sm:pl-0 pr-3 sm:pr-0`}
      >
        {/* Title */}
        <div className="text-xl sm:text-3xl mt-4 font-bold sm:hidden">
          <span className="text-primary-text-color-meloMood">Melo</span>
          <span className="text-primary-color">Vibe</span>
        </div>

        <div
          className={`min-h-screen flex flex-col justify-center md:pl-20 md:pr-20`}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Top Mood */}
          <div className="flex justify-center">
            <p className="font-bold text-xl pl-10 sm:pl-0">CHILL</p>
          </div>

          {/* Mood - Middle + Gclef Icon */}
          <div className="flex justify-between items-center mt-20 mb-20 md:mt-60 md:mb-60">
            {/* Left Mood */}
            <p className="font-bold text-xl">ENERGETIC</p>

            {/* Drag g-clef */}
            <div className="flex flex-col items-center">
              {/*Title - Center Middle */}
              <div className="font-bold text-4xl hidden md:block">
                <span className="mx-1">Explore</span>
                <span className="text-primary-color mx-1">music </span>
                <span>that matches your </span>
                <span className="text-primary-color mx-1">vibe.</span>
              </div>
              {/* Instruction */}
              <p className="text-left text-xl hidden sm:block">
                DRAG THE G-CLEF TO SET THE MOOD
              </p>
              <p className="text-center text-sm sm:hidden">DRAG THE G-CLEF</p>
              {/* Image at the center */}
              <div
                style={{
                  position: "absolute",
                  left: position.x,
                  top: position.y,
                }}
                onMouseDown={handleMouseDown}
              >
                <img
                  src={gclef}
                  alt="SecondPage"
                  className="w-10 h-10 sm:w-20 sm:h-20 rounded-full mt-20 sm:mt-10"
                />
              </div>
            </div>

            {/* Right Mood */}
            <p className="font-bold text-xl">UPBEAT</p>
          </div>

          {/* Bottom mood */}
          <div className="flex justify-center">
            <p className="font-bold text-xl pl-8 sm:pl-0">RELAXING</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeloVibe;
