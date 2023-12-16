"use client";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

const PersonalInfo = () => {
  return (
    <div className="w-full flex justify-between items-center  border-b pb-16">
      <div className="space-y-10">
        <span className="space-y-1">
          <h1 className="text-4xl font-bold">Amir esmaeelzadeh</h1>
          <h2 className="text-xl">Front-end developer</h2>
        </span>

        <p className="text-3xl">Personal Info</p>

        <ul className="text-xl space-y-3">
          <li className="space-x-5 flex items-center">
            <span className="mt-1 text-xl">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Birthday:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
          <li className="space-x-5 flex items-center">
            <span className="mt-1">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Education:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
          <li className="space-x-5 flex items-center">
            <span className="mt-1">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Military service:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
          <li className="space-x-5 flex items-center">
            <span className="mt-1">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Location:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
          <li className="space-x-5 flex items-center">
            <span className="mt-1">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Email:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
          <li className="space-x-5 flex items-center">
            <span className="mt-1">
              <FaArrowLeftLong />
            </span>
            <span className="flex space-x-2">
              <p>Mobile:</p>
              <p className="opacity-80">value</p>
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-20">
        <Image
          alt="emiroow"
          about="test"
          src={
            "https://api.emiroow.ir/Files/Public/photo_2023-12-17_00-36-31_7ca011bc-6f6d-46bc-86f8-dff17de6d8c0.jpg"
          }
          width={256}
          height={256}
          quality={100}
          className="rounded-lg border-2 p-[2px] border-mainColor"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="https://api.emiroow.ir/Files/Public/photo_2023-12-17_00-36-31_7ca011bc-6f6d-46bc-86f8-dff17de6d8c0.jpg"
          loader={() => {
            return `https://api.emiroow.ir/Files/Public/photo_2023-12-17_00-36-31_7ca011bc-6f6d-46bc-86f8-dff17de6d8c0.jpg`;
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
