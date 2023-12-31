import { IPersonalResponse } from "@/interfaces/response/IPersonal";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface Props {
  data: IPersonalResponse;
}
const Experience: FC<Props> = () => {
  const t = useTranslations();
  return (
    <div className="border-b pb-12 border-gray-700">
      <span className="text-3xl">{t("Experience")}</span>
      <ol className="relative border-s-2 mt-7 border-mainColor ">
        <li className="ms-4 mt-5">
          <div className="absolute w-3 h-3 bg-mainColor rounded-full -start-[7px] border border-mainColor"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500 ">
            test
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            test
          </h3>
          <p className="text-base font-normal text-gray-500 ">test</p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
