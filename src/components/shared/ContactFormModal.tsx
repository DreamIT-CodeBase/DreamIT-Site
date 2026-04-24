import { Modal } from "antd";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { visibleServiceLinks } from "@/data/visibleServices";
import { useRouter } from "next/router";
import { LeadFormValues, submitLead } from "@/utils/leadSubmission";

const ContactFormModal = ({ isModalVisible, setIsModalVisible }: any) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>();

  const onSubmit = async (data: LeadFormValues) => {
    setLoading(true);

    try {
      await submitLead(data);
      toast.success("Form submitted successfully!", {
        autoClose: 3000,
        closeOnClick: true,
      });
      reset();
      handleCancel();
      router.push("/thank-you");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Submission failed. Try again later.",
        {
          autoClose: 3000,
          closeOnClick: true,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <StyledModal
        title={null}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <h4>Connect with Us</h4>
        <div className=" px-2 py-5 rounded-[18px]  ">
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
                    className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                    className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                    className="h-[60px] px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] focus:outline-none"
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
                    defaultValue=""
                    className="h-[60px] customSelectTag px-4 mt-1 block w-full text-black-100 bg-white rounded-[10px] border-[2px] border-[#eaeaea] focus:ring-[#072032] focus:border-[#072032] out"
                  >
                    <option value="" disabled>
                      Please Select
                    </option>
                    {visibleServiceLinks.map((service) => (
                      <option key={service.href} value={service.name}>
                        {service.name}
                      </option>
                    ))}
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
                    Messages
                  </label>{" "}
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
                  className={`lg:px-6 lg:py-2.5 md:p-[10px] sm:px-[30px] sm:py-[10px] xs:px-[30px] font-[lato] xs:py-[10px] transition-transform duration-300 hover:scale-105 bg-blue-600 lg:font-bold text-white rounded-[8px] ${
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
