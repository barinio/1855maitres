import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import { aboutData } from "@/data/aboutData";
import aboutImg from "@/images/about-img.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 dark:text-zinc-400 font-bold">{t("aboutH1")}</h1>
          <div className="flex md2:flex-row flex-col-reverse gap-8 items-center md2:items-start text-justify">
            <div className="texts-wrapper">
              {aboutData.map((text) => (
                <p key={text} className="text-2xl dark:text-zinc-400 mb-4">
                  {t(text)}
                </p>
              ))}
            </div>
            <img
              src={aboutImg}
              alt="The client and the lawyer"
              className="object-cover h-1/4"
              width={465}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
