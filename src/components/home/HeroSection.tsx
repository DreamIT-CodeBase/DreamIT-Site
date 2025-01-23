import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source
            src="/assets/images/hero-section-video.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay absolute inset-0 bg-[#1C252A40] backdrop-blur-sm"></div>
        <img
          src="/assets/images/hero-section-background-image.webp"
          alt="Hero Background"
          className="absolute  h-full   bg-center b z-10"
        />
      </div>
      <div className="relative z-20 flex items-center justify-center min-h-[60vh] lg:min-h-screen px-4 sm:px-6 md:px-12 lg:px-48">
        <div className="text-center">
          <h1 className="mb-4 max-w-[100%] text-center text-white leading-tight">
            Cloud Powered, Data Driven & Future Ready!
          </h1>

          <h6 className="mb-8 text-white">
            Unified platform offering interconnected products for seamless user
            experiences.
          </h6>

          <div className="flex justify-center">
            <Link
              href={"#contactForm"}
              className="bg-white flex gap-2 max-w-[185px] items-center text-black-700 hover:text-black-700 py-[12px] text-[20px] px-8 font-bold rounded-[10px] border-[2px] border-[#eaeaea] transition-transform duration-300 hover:scale-105"
            >
              Get Started
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
