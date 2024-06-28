import { useTranslation } from "react-i18next";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";
import { privacyPolicyData } from "@/data/privacyPolicyData";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 dark:text-zinc-400">{t("privacyPolicyH1")}</h1>
          <ol className="flex flex-col gap-16">
            {privacyPolicyData.map(({ title, description }) => (
              <li key={title}>
                <h2 className="text-3xl mb-4 dark:text-zinc-400">{t(`${title}`)}</h2>
                <p className="text-2xl dark:text-zinc-400">{t(`${description}`)}</p>
              </li>
            ))}
          </ol>

          <p className="text-2xl dark:text-zinc-400 mt-16 mb-4">{t("privacyOfficerText")}</p>
          <p className="text-2xl dark:text-zinc-400 font-semibold mb-4">
            Patrick René, Directeur des Opérations
          </p>
          <p className="text-2xl dark:text-zinc-400 mb-4">
            4350 Beaubien Est, Montréal (Québec) H1T 1S9
          </p>
          <Link
            href="mailto:info@1855maitres.com"
            className="mb-4 block text-2xl"
            underline="always"
            color="danger"
          >
            info@1855maitres.com
          </Link>
          <Link
            href="https://www.cai.gouv.qc.ca/citoyens/acces-et-protection-de-vos-renseignements-personnels/quest-ce-quun-renseignement-personnel/"
            underline="always"
            color="danger"
            className="text-2xl block "
          >
            https://www.cai.gouv.qc.ca/citoyens/acces-et-protection-de-vos-renseignements-personnels/quest-ce-quun-renseignement-personnel/
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
