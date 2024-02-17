import React, { useState } from "react";
import gclef from "../assets/images/g-clef.png";

function MeloVibe() {
  const [position, setPosition] = useState({ x: 680, y: 450 }); // Initial position of the gcledf
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

  console.log(meloMood)
  return (
    <>
      <div
        className={`h-screen text-primary-text-color-${meloMood} bg-background-color-${meloMood} flex flex-col justify-center pl-20 pr-20`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Top Mood */}
        <div className="flex justify-center">
          <p className="font-bold text-xl">CHILL</p>
        </div>

        {/* Mood - Middle + Gclef Icon */}
        <div className="flex justify-between items-center mt-60 mb-60 pt-10 pb-10">
          {/* Left Mood */}
          <p className="font-bold text-xl">ENERGETIC</p>

          {/* Drag g-clef */}
          <div className="flex flex-col items-center">
            {/*Title - Center Middle */}
            <div className="flex justify-center font-bold text-4xl">
              <span className="mx-1">Explore</span>
              <span className="text-primary-color mx-1">music </span>
              <span>that matches your </span>
              <span className="text-primary-color mx-1">vibe.</span>
            </div>
            {/* Instruction */}
            <p className="text-xl mt-2">DRAG THE G-CLEF TO SET THE MOOD</p>
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
                className="w-20 h-20 rounded-full"
              />
            </div>
          </div>

          {/* Right Mood */}
          <p className="font-bold text-xl">UPBEAT</p>
        </div>

        {/* Bottom mood */}
        <div className="flex justify-center">
          <p className="font-bold text-xl">RELAXING</p>
        </div>
      </div>
    </>
  );
}

export default MeloVibe;
