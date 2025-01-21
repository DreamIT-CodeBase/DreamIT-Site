import CtaButton from "../shared/CtaButton";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute  w-full h-full object-cover"
        >
          <source src="/assets/images/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay absolute inset-0 bg-[#1C252A40] backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] lg:min-h-screen px-4 sm:px-6 md:px-12 lg:px-48">
        <div className="text-center">
          <h1 className="mb-4 max-w-[100%] text-center text-white leading-tight">
            Cloud Powered, Data Driven & Future Ready!
          </h1>

          <h6 className="mb-8 text-white">
            Unified platform offering interconnected products for seamless user
            experiences.
          </h6>

          <div className="flex justify-center">
            <CtaButton title="Get Started" link="#contactForm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
