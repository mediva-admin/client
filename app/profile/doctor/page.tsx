"use client";
import Image from "next/image";
import Verified from "./../../assets/verified.svg";
import Doc from "./../../assets/doctorImage.png";
import { useState } from "react";
import AppointmentBookingCard from "@/app/components/ui/AppointmentBookingCard";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
interface ButtonType {
  current: string;
  name: string;
  setCurrent: SetState<string>;
}

const SectionButton = ({ setCurrent, current, name }: ButtonType) => {
  return (
    <div
      className={`w-[120px] rounded-t-md h-[40px] ${
        name == current
          ? "bg-baseColor text-white"
          : "bg-transparent text-black"
      } flex items-center justify-center font-semibold text-[1rem] select-none cursor-pointer`}
      onClick={() => {
        setCurrent(name);
      }}
    >
      {name}
    </div>
  );
};

export default function Doctor() {
  const [current, setCurrent] = useState("Description");
  return (
    <div className="flex h-screen w-screen bg-background max-sm:px-[0.5rem] sm:px-[15%] max-sm:pt-[70px] sm:pt-[140px] font-montserrat">
      {/* Adjusted container */}
      <div className="max-sm:flex-col flex sm:flex-row w-full gap-6">
        {/* Doctor's Information - 60% width */}
        <div className="max-sm:w-full sm:w-[60%] flex flex-col text-black gap-[20px]">
          <div className="flex flex-row">
            <Image src={Doc} alt="Doctor" />
            <div className="ml-4">
              <p className="font-semibold max-sm:text-[1.2rem] sm:text-[2.5rem]">
                Dr. Mukesh Sharma
              </p>
              <p className="font-medium">
                Adult Psychiatric & Mental Health Nurse Practitioner
              </p>
              <p className="font-medium">
                10 Years Experience Overall  (4 years as specialist)
              </p>
              <div className="flex flex-row">
                <Image src={Verified} alt="verified" />
                <p>Verified</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[50px] flex flex-row">
            <SectionButton
              current={current}
              setCurrent={setCurrent}
              name="Description"
            />
            <SectionButton
              current={current}
              setCurrent={setCurrent}
              name="Services"
            />
            <SectionButton
              current={current}
              setCurrent={setCurrent}
              name="Experience"
            />
          </div>
          <p className="max-w-[600px] text-justify">
            Dr. Mukesh Sharma is a highly skilled and experienced physician with
            a distinguished career in both clinical practice and medical
            innovation. Having earned his MBBS and MD from leading medical
            institutions, Dr. Sharma has spent over a decade providing
            exceptional patient care, specializing in [Specialization:
            Cardiology, Neurology, etc.].
            <br />
            <br />
            During his tenure at Apple Inc., Dr. Sharma played a pivotal role in
            driving health-related technological advancements, working closely
            with teams to innovate health monitoring solutions and wellness
            initiatives. His expertise in integrating medicine with cutting-edge
            technology has made him a sought-after consultant in the tech-health
            domain.
            <br />
            <br />
            Dr. Sharma is passionate about improving patient outcomes through
            both personalized medical care and leveraging modern technology to
            support proactive health management. He continues to contribute to
            the medical field through [clinical practice, research, or advisory
            roles].
          </p>
        </div>

        {/* Card Component - 40% width */}
        <div className="max-sm:w-full sm:w-[40%] flex flex-col justify-start">
          <AppointmentBookingCard />
        </div>
      </div>
    </div>
  );
}
