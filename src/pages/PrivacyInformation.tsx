import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";

const PrivacyInformation = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 text-zinc-400">{t("privacyInformationH1")}</h1>
          <p className="text-2xl text-zinc-400 mb-3">{t("privacyInformationP1")}</p>
          <p className="text-2xl text-zinc-400 font-semibold mb-3">{t("privacyInformationP2")}</p>
          <p className="text-2xl text-zinc-400 mb-3">{t("privacyInformationP3")}</p>
          <Link
            href="mailto:info@1855maitres.com"
            underline="always"
            color="danger"
            className="mb-3 text-2xl"
          >
            info@1855maitres.com
          </Link>
          <p className="text-2xl text-zinc-400 mb-3">
            4350 Beaubien Est, Montréal (Québec) H1T 1S9
          </p>
          <p className="text-2xl text-zinc-400 ">1.855.624.8737 x 248</p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyInformation;
