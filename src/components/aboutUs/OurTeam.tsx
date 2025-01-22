import React from "react";

const OurTeam = () => {
  const teamData = [
    {
      name: "Anu Kamboj",
      title: "CEO & Co-Founder",
      description: [
        "Ex-Sapient | Ex-Boathouse Digital Marketing Head",
        "11+ yrs in IT & Performance",
        "Marketing roles",
      ],
      backgroundImage: "/assets/images/team-member1.png",
    },
    {
      name: "Rajan Kamboj",
      title: "CTO and Co-Founder",
      description: [
        "Ex-PwC | Ex-UHG | Ex-Cognizant",
        "Azure Cloud Architect",
        "POWER BI Architect",
        "13+ yrs in IT Solutioning & Architecting, DBMS, Analytics solutions to various sectors",
      ],
      backgroundImage: "/assets/images/team-member3.png",
    },
    {
      name: "Devender Arora",
      title: "Head- Delivery",
      description: [
        "Ex - KPMG | Ex-UHG| Ex - Cognizant",

        "14 years of experience in IT | Microsoft Cloud Data Architect | Azure, Fabric, Data Bricks, Big Data Analytic",
      ],
      backgroundImage: "/assets/images/team-member4.png",
    },
    {
      name: "Prateek S Malhan",
      title: "Chief Growth & Strategy Officer",
      description: [
        "Ex-IndusInd | MDI-Gurgaon",
        "Regional Manager",
        "11+ yrs in BFSI & IT with a proven track record in Business expansion & Market penetration",
      ],
      backgroundImage: "/assets/images/team-member2.png",
    },
  ];

  return (
    <div>
      <section className="bg-black text-white container pt-60 pb-60">
        <div className=" mx-auto text-center">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              OUR TEAM
            </span>
          </div>

          <h1 className=" mb-3">The Team At The Core</h1>

          <p className="text-gray-800 lg:text-20 max-w-3xl mx-auto">
            A dynamic group of thinkers, doers and innovators. Our team is
            committed to unlocking new opportunities and achieving excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 cursor-pointer">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group relative h-[467px] overflow-hidden rounded-[20px] bg-[#ECEFF1] transition-all duration-300 hover:bg-zinc-900"
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300">
                {/* Background image with color overlay on hover */}
                <div
                  style={{ backgroundImage: `url(${member.backgroundImage})` }}
                  className="absolute inset-0   bg-cover bg-center transition-all duration-300 before:content-[''] before:absolute before:inset-0  group-hover:before:opacity-100 before:opacity-0 before:transition-all before:duration-300"
                ></div>

                {/* Content that appears on hover */}
                <div className="absolute bottom-[30px] pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between">
                    <h3 className="text-[24px] font-semibold text-white">
                      {member.name}
                    </h3>
                    <img
                      className="h-[50px]"
                      src="/assets/icons/linkedin-icon.svg"
                      alt="linkedin-icon"
                      loading="lazy"
                    />
                  </div>

                  <div className="relative px-5 mb-2">
                    <span className="absolute top-1/2 left-1 transform -translate-y-1/2 w-[10px] h-[10px] bg-[#00A9FF] rounded-full"></span>
                    <span className="text-white text-center font-medium lg:text-[22px]">
                      {member.title}
                    </span>
                  </div>

                  {/* Description as a list */}
                  <ul className="text-18 text-[#D6F1FF] list-disc pl-6">
                    {member.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Wrapper to control visibility */}
                <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 group-hover:translate-y-6 transition-all duration-300">
                  <div className="flex justify-between">
                    <h3 className="text-[24px] font-bold text-white transition-colors">
                      {member.name}
                    </h3>
                    <img
                      className="h-[40px]"
                      src="/assets/icons/linkedin-icon.svg"
                      alt="linkedin-icon"
                      loading="lazy"
                    />
                  </div>

                  <div className="relative px-5">
                    <span className="absolute top-1/2 left-1 transform -translate-y-1/2 w-[10px] h-[10px] bg-[#00A9FF] rounded-full"></span>
                    <span className="text-[#7DC1E9] text-center font-medium lg:text-[18px]">
                      {member.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
