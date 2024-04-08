import React from "react";
import { thirdweb } from "../assets";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-[#13131a] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="font-epilogue font-semibold text-[18px] text-white uppercase mb-6">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={thirdweb}
              alt="About Us"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Our Mission
            </h2>
            <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]">
              We are a team of passionate individuals dedicated to empowering
              communities and bringing positive change through crowdfunding
              initiatives. Our mission is to provide a secure and transparent
              platform for people to support causes they believe in and make a
              meaningful impact.
            </p>
            <h2 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-[#808191] font-epilogue font-normal text-[16px] leading-[26px]">
              <li>Transparency and Accountability</li>
              <li>Community Empowerment</li>
              <li>Innovation and Creativity</li>
              <li>Ethical and Responsible Practices</li>
            </ul>
            <CustomButton
              btnType="button"
              title="Join Us"
              styles="w-full bg-[#8c6dfd]"
              handleClick={handleJoinClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
