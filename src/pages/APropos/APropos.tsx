import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";

const APropos = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 text-zinc-400">{t("aboutH1")}</h1>

          <p className="text-2xl text-zinc-400 ">{t("aboutP1")}</p>
          <p className="text-2xl text-zinc-400 ">{t("aboutP2")}</p>
          <p className="text-2xl text-zinc-400 ">{t("aboutP3")}</p>
          <p className="text-2xl text-zinc-400 ">{t("aboutP4")}</p>
          <p className="text-2xl text-zinc-400 ">{t("aboutP5")}</p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default APropos;
