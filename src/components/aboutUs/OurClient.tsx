import React from "react";

const OurClient = () => {
  return (
    <div>
      <section className="bg-[url('/assets/images/case-studt-background.png')] bg-cover bg-center  p-20 px-16">
        <div className="mx-auto text-center">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 w-2 h-2 bg-[#00A9FF] rounded-full"></span>
            <span className="text-[#00A9FF] ml-2 text-center font-bold">
              OUR CLIENT
            </span>
          </div>
          <h1 className="text-black-100 md:text-5xl lg:text-46 font-bold mb-3">
            Trusted by Industry Leaders
          </h1>
          <p className="text-gray-800 lg:text-20 max-w-[600px] mx-auto">
            Our blog is your go-to resource for learning, inspiration, and tips
            on making the most of your data.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurClient;
