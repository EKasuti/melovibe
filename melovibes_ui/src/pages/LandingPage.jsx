import React from "react";
import image1 from "../assets/images/image_mel.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="pl-4 sm:pl-8 md:pl-20 pr-4 sm:pr-8 md:pr-20 bg-background-color-meloMood min-h-screen flex flex-col justify-center overflow-y-auto">
        {/* Title */}
        <div className="text-xl sm:text-3xl mt-4 font-bold">
          <span className="text-primary-text-color-meloMood">Melo</span>
          <span className="text-primary-color">Vibe</span>
        </div>

        {/* Body */}

        {/* Landing screen */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-16 md:mt-24 pb-20">
          <div className="text-primary-text-color-meloMood flex flex-col text-center sm:text-left">
            {/* Header */}
            <span className="text-2xl sm:text-5xl md:text-6xl">
              Discover your
            </span>
            <span className="font-bold text-5xl sm:text-6xl md:text-7xl">
              MeloVibe
            </span>

            {/* Paragraph */}
            <p className="mt-5 text-base sm:text-lg md:text-xl">
              Let MeloVibe guide your mood with <br /> personalized playlists
              curated just for you. <br />
              Explore music that matches your vibe.
            </p>

            {/* Button to go to the mood page */}
            <div className="mt-4 ">
              {/* Use Link instead of a button */}
              <Link to="/melovibe">
                <Button text="Discover" />
              </Link>
            </div>
          </div>

          {/* Image and circle */}
          <div className="flex flex-center sm:justify-end mt-8">
            <div className=" md:h-200 md:w-80">
              <div className="bottom-0 bg-primary-color mb-40 border border-primary-color h-60 w-60 sm:w-80 sm:h-80 mr-auto rounded-full">
                <img
                  src={image1}
                  alt="landingPage"
                  className="w-200 h-200 rounded-br-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
