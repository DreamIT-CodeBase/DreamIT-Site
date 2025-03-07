import { LEAD_API } from "@/utils/constant";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ showContactFormLeftSection }: any) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postOnServer = (formData: FormData) => {
    const formSubmissionData = Object.fromEntries(formData.entries());

    const payload = {
      firstName: formSubmissionData.firstName,
      lastName: formSubmissionData.lastName,
      email: formSubmissionData.email,
      description: formSubmissionData.selectService,
      source: "website",
    };

    const postData = {
      ...payload,
      messageInfo: {
        text: `${formSubmissionData.messages} - ${formSubmissionData.selectService}`,
      },

      tags: ["LEAD FORM"],
      sourceDetail: {
        pageUrl: window.location.href,
      },
    };

    setLoading(true);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${LEAD_API}/lead`, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        setLoading(false);
        if (xhr.status === 200) {
          toast.success("Form submitted successfully!", {
            autoClose: 3000,
            closeOnClick: true,
          });
          reset();
        } else {
          const errorData = JSON.parse(xhr.responseText || "{}");
          toast.error(
            errorData?.message || "Submission failed. Try again later.",
            {
              autoClose: 3000,
              closeOnClick: true,
            }
          );
        }
      }
    };

    xhr.onerror = function () {
      setLoading(false);
      toast.error("Network error. Please try again.");
    };

    xhr.send(JSON.stringify({ data: postData }));
  };

  const onSubmit = (data: any) => {
    const formDataAll = new FormData();
    formDataAll.append("firstName", data.firstName);
    formDataAll.append("lastName", data.lastName);
    formDataAll.append("email", data.email);
    formDataAll.append("selectService", data.selectService);
    formDataAll.append("messages", data.messages);
    postOnServer(formDataAll);
  };
  return (
    <div id="contactForm">
      <section className="w-full xl:py-20 lg:py-20 md:py-16 sm:py-8 xs:py-8 bg-white  bg-[url('/assets/images/contact-us-background.webp')] bg-cover bg-center">
        <div className="container">
          <div className="flex items-center flex-wrap">
            {/* Left Column */}

            {showContactFormLeftSection && (
              <div className="w-full lg:w-1/2 xl:mb-8 lg:mb-0 md:mb-8 sm:mb-4 xs:mb-4">
                <h2 className="xl:text-left lg:text-left md:text-left sm:text-center mb-4 xs:text-center">
                  We want to hear from you
                </h2>
                <h6 className="max-w-[30rem] mb-5 xl:text-left lg:text-left md:text-left sm:text-center  xs:text-center">
                  Reach out to our team to ask a question or learn more about
                  how we can support your business.
                </h6>
                <div className="xl:h-[271px] lg:h-[320px] md:h-[320px] sm:h-[250px] xl:w-[461px] lg:w-[461px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56140.39952962833!2d76.99537293980666!3d28.426046198909077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390d187459e03f99%3A0x2f62040947ea61e7!2sOrchid%20Business%20Park%2C%20Badshahpur%20Sohna%20Rd%20Hwy%2C%20Near%20Subhash%20Chowk%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122004!3m2!1d28.4260524!2d77.0365727!4m5!1s0x390d187459e03f99%3A0x2f62040947ea61e7!2sOrchid%20Business%20Park%2C%20Badshahpur%20Sohna%20Rd%20Hwy%2C%20Near%20Subhash%20Chowk%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122004!3m2!1d28.4260524!2d77.0365727!5e0!3m2!1sen!2sin!4v1739878101207!5m2!1sen!2sin"
                    style={{ borderRadius: 20, height: "100%", width: "100%" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
            {/* Right Column */}
            <div className="w-full lg:w-1/2 ">
              <div className="bg-white xl:px-8 lg:px-8 md:px-8 sm:px-5 xs:px-5 xl:py-10 lg:py-10 md:py-10 sm:py-5 xs:py-5 rounded-[18px] shadow-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                      <div className="form-group">
                        <label className="block text-sm font-bold text-gray-700">
                          First Name:
                        </label>
                        <input
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                          placeholder="john"
                          type="text"
                          className="  xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
                        />
                        {errors.firstName?.message && (
                          <span className="text-red-500 text-sm">
                            {String(errors.firstName.message)}
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
                          className="  xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                          className="  xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                          className="customSelectTag  xs:h-[40px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                          <option value="Digital Transformation Consulting">
                            Digital Transformation & Process Automation
                          </option>
                          <option value="Employee Feedback">
                            Enterprise Resource Planning (ERP) Implementation
                          </option>

                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                          <option value="Business Applications">
                            Business-Centric IT Ecosystem
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
                          className="px-4 py-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none xl:min-h-[150px] lg:min-h-[150px] md:min-h-[150px] sm:min-h-[100px]"
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
                        disabled={loading}
                        className={`lg:px-6 lg:py-2.5 md:p-[10px] sm:px-[12px] sm:py-[8px] xs:px-[12px] xs:py-[8px] transition-transform duration-300 hover:scale-105 bg-blue-600 lg:font-bold text-white rounded-[8px] ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? "Submitting..." : "Submit"}
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
