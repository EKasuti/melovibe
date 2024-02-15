import image1 from "../assets/images/image_mel.png";

export default function MeloVibePage() {
  return (
    <>
      <div className="pl-10">
        {/* Title */}
        <div className="text-2xl mt-4 font-bold">
          <span className="text-primary-text-color">Melo</span>
          <span className="text-primary-color">Vibe</span>
        </div>

        {/* Body */}

        <div className="flex items-center justify-between">
          <div className="text-primary-text-color flex flex-col">
            {/* Header */}
            <span className="text-5xl">Discover your</span>
            <span className="font-bold text-7xl">MeloVibe</span>

            {/* Paragraph */}
            <p className="mt-5">
              Let MeloVibe guide your mood with <br /> personalized playlists
              curated just for you. <br />
              Explore music that matches your vibe.
            </p>

            {/* Button to go to the mood page */}
          </div>

          {/* Image and circle */}
          <div className="flex mr-20">
            <div className="h-200 w-200">
              <div className="bg-primary-color mb-40 border w-80 h-80 mr-auto rounded-full">
                <img src={image1} alt="landingPage" className="w-200 h-200 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
