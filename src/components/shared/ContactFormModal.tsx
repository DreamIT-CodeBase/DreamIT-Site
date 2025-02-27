import { Modal } from "antd";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useState } from "react";

const ContactFormModal = ({ isModalVisible, setIsModalVisible }: any) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    setloading(true);
    const templateParams = {
      to_name: "Ajay",
      from_name: `${data.fullName} ${data.lastName}`,
      email: data.email,
      service: data.selectService,
      message: data.messages,
    };

    emailjs
      .send(
        "service_toyjk5q",
        "template_058i9mr",
        templateParams,
        "YOWspCaYbGjzx6IFK"
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          toast.success("Form submitted successfully!");
          setloading(false);
          handleCancel();
          reset();
        },
        (error) => {
          console.error("Error:", error);
          setloading(false);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div>
      <StyledModal
        title={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <h4>Contact With Us</h4>
        <div className=" px-2 py-5 rounded-[18px]  ">
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
                    className="h-[60px] customSelectTag px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-indigo-500 focus:border-indigo-500 out"
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
                    <option className="dm-font" value="Digital Marketing">
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
      </StyledModal>
    </div>
  );
};

export default ContactFormModal;

const StyledModal = styled(Modal)`
  .ant-modal {
  }
  .ant-modal-content {
    border-radius: 10px;
    padding: 20px;
  }
`;
