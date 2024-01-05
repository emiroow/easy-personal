import { convertClass } from "@/helpers/classConvertor";
import { About } from "@/interfaces/response/IPersonal";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
interface Props {
  data?: About;
}
const PersonalInfo: FC<Props> = ({ data }) => {
  const t = useTranslations();
  const locale = useLocale();
  console.log(data);
  return (
    <div className="w-full flex justify-between max-lg:flex-col-reverse items-center border-b border-gray-700 pb-14">
      <div className="space-y-10 max-lg:w-full">
        <span className="space-y-1 max-lg:text-center">
          <h1 className="text-4xl font-bold">{data?.name}</h1>
          <h2 className="text-xl text-gray-400">{data?.position}</h2>
        </span>

        <p className="text-3xl">{t("PersonalInfo")}</p>

        <ul className="text-xl space-y-3">
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Birthday")}:</p>
              <p className="text-gray-400">value</p>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Education")}:</p>
              <p className="text-gray-400">{data?.Education}</p>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Military")}:</p>
              <p className="text-gray-400">{data?.Military}</p>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Location")}:</p>
              <p className="text-gray-400">
                {data?.country + " ، " + data?.city}
              </p>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Email")}:</p>
              <p className="text-gray-400">{data?.email}</p>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`mt-1  ${convertClass({
                currentLang: locale,
                enClass: "rotate-0",
                faClass: "rotate-180",
              })}`}
            >
              <FaArrowLeftLong />
            </span>
            <span className="flex">
              <p className="mx-2">{t("Mobile")}:</p>
              <p className="text-gray-400">{data?.phoneNumber}</p>
            </span>
          </li>
        </ul>
      </div>

      <div className="lg:m-20 max-lg:mb-10">
        <Image
          alt="emiroow"
          about="test"
          src={
            "https://api.emiroow.ir/Files/Public/86824829_47594047-dabc-4507-8c71-180030ea119d.jpg"
          }
          width={256}
          height={256}
          quality={100}
          className="lg:rounded-lg rounded-full border-2 p-[2px] border-mainColor"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="https://api.emiroow.ir/Files/Public/86824829_47594047-dabc-4507-8c71-180030ea119d.jpg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
