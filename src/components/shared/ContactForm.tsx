import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = ({ showContactFormLeftSection }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Form submitted successfully!");

    reset();
  };
  return (
    <div id="contactForm">
      <section className="w-full xl:py-20 lg:py-20 md:py-16 sm:py-8 xs:py-8 bg-white  bg-[url('/assets/images/contact-us-background.webp')] bg-cover bg-center">
        <div className="container">
          <div className="flex flex-wrap">
            {/* Left Column */}

            {showContactFormLeftSection && (
              <div className="w-full lg:w-1/2 xl:mb-8 lg:mb-0 md:mb-8 sm:mb-4 xs:mb-4">
                <h1 className="text-left mb-5">
                  We want to hear
                  <br />
                  from you
                </h1>
                <h6 className="max-w-3xl mb-5">
                  Reach out to our team to ask a question or learn <br /> more
                  about how we can support your business.
                </h6>
                <div className="flex gap-2 mb-4 items-center px-4 py-2 rounded-[10px] border-[2px] border-[#D9E0FF] w-[fit-content]">
                  <img
                    src="/assets/icons/call-icon.svg"
                    alt="call-icon"
                    className="h-[20px]"
                    loading="lazy"
                  />
                  <p className="p-medium">+91 94164-84500</p>
                </div>
                <div className="flex gap-2 mb-4 items-center px-4 py-2 rounded-[10px] border-[2px] border-[#D9E0FF]  w-[fit-content]">
                  <img
                    src="/assets/icons/mail-icon.svg"
                    alt="call-icon"
                    className="h-[20px]"
                    loading="lazy"
                  />

                  <p className="p-medium">info@dreamitcs.com</p>
                </div>
                <div className="flex gap-2 mb-4 items-center px-4 py-2 rounded-[10px] border-[2px] border-[#D9E0FF]  w-[fit-content]">
                  <img
                    src="/assets/icons/location-icon.svg"
                    alt="call-icon"
                    className="h-[20px]"
                    loading="lazy"
                  />

                  <p className="p-medium">
                    Space Creattors Heights, 3rd Floor, Landmark,
                    <br /> Sector-67, Gurugram, 122002
                  </p>
                </div>
              </div>
            )}
            {/* Right Column */}
            <div className="w-full lg:w-1/2 ">
              <div className="bg-white px-8 py-10 rounded-[18px] shadow-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          First Name:
                        </label>
                        <input
                          {...register("fullName", {
                            required: "First Name is required",
                          })}
                          placeholder="john"
                          type="text"
                          className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                        />
                        {errors.fullName?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.fullName.message)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          Last Name:
                        </label>
                        <input
                          {...register("lastName", {
                            required: "Last Name is required",
                          })}
                          type="text"
                          placeholder="parker"
                          className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                        />
                        {errors.lastName?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.lastName.message)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          Email ID:
                        </label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          type="email"
                          placeholder="john@gmail.com"
                          className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                        />
                        {errors.email?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.email.message)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          Select Service
                        </label>
                        <select
                          {...register("selectService", {
                            required: "Please select a service",
                          })}
                          className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500   out customTenantModeSelect"
                        >
                          <option value="" disabled selected>
                            Please Select{" "}
                          </option>
                          <option value="Cloud Data Management & Migration">
                            Cloud Data Management
                          </option>
                          <option value="Advanced-Data Analytics & Visualization">
                            Advanced-Data Analytics & Visualization
                          </option>
                          <option value="Business Applications">
                            Business-Centric IT Ecosystem
                          </option>

                          <option value="Employee Feedback">
                            Enterprise Resource Planning (ERP) Implementation
                          </option>
                          <option value="Digital Transformation Consulting">
                            Digital Transformation & Process Automation
                          </option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                        </select>
                        {errors.selectService?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.selectService.message)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          Message
                        </label>
                        <textarea
                          {...register("messages", {
                            required: "Messages is required",
                          })}
                          placeholder="Type here..."
                          className="px-4 py-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none xl:min-h-[150px] lg:min-h-[150px] md:min-h-[150px] sm:min-h-[100px]"
                        ></textarea>
                        {errors.messages?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.messages.message)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full px-2 ">
                      <button
                        type="submit"
                        className="bg-[#0A2540] text-white font-bold hover:bg-[#0A2540]/90 rounded-md px-9 py-3 "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
