import Experience from "@/components/Experience";
import PersonalInfo from "@/components/PersonalInfo";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import { ILocaleParamsProp } from "@/interfaces/IGlobal";
import { IPersonalResponse } from "@/interfaces/response/IPersonal";

const getData = async (lang: string) => {
  const personalData = await fetch(`http://localhost:3001/${lang}`)
    .then((response) => response.json())
    .then((data) => data);
  return personalData;
};

export default async function Home({ params: { locale } }: ILocaleParamsProp) {
  const personalData: IPersonalResponse = await getData(locale);

  return (
    <div className="d-flex justify-center">
      <div className="lg:w-[55%] m-auto my-16 space-y-12 max-lg:px-5">
        <PersonalInfo data={personalData.about} />
        <Skills data={personalData} />
        <Portfolio data={personalData} />
        <Experience data={personalData} />
        <Social data={personalData} />
      </div>
    </div>
  );
}
