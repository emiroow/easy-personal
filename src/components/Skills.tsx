import { convertClass } from "@/helpers/classConvertor";
import { IPersonalResponse } from "@/interfaces/response/IPersonal";
import { useLocale, useTranslations } from "next-intl";
import { FC } from "react";
import { LuActivity } from "react-icons/lu";
interface Props {
  data: IPersonalResponse;
}

const Skills: FC<Props> = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="border-b pb-12 border-gray-700">
      <span className="text-3xl">{t("Skills")}</span>
      <div className="mt-7 flex justify-start space-x-14">
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-mainColor">
            <LuActivity />
          </span>
          <span
            className={`items-baseline  ${convertClass({
              currentLang: locale,
              enClass: "flex-row-reverse",
              faClass: "flex",
            })}`}
          >
            <span className="text-xl mx-1">React JS</span>
            <span className="text-sm text-gray-400">advanced</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
