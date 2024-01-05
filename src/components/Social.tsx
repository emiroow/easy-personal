import { IPersonalResponse } from "@/interfaces/response/IPersonal";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
interface Props {
  data: IPersonalResponse;
}
const Social: FC<Props> = () => {
  const t = useTranslations();

  return (
    <div className="space-y-8">
      <p className="text-3xl">{t("Profiles")}</p>
      <div className="flex items-center flex-row">
        <section className="text-3xl text-mainColor">
          <FaGithub />
        </section>
        <span className="font-semibold mx-2">GitHub</span>
        <Link className="text-teal-400 underline" href={"https://emiroow.ir/"}>
          Amir
        </Link>
      </div>
    </div>
  );
};

export default Social;
