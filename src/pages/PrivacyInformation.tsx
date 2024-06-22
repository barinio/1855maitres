import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";

const PrivacyInformation = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 text-zinc-400">
            Responsable de l’accès aux documents ou de la protection des renseignements personnels
          </h1>
          <p className="text-2xl text-zinc-400 mb-3">
            La personne responsable de l’application de la Loi sur la protection des renseigments
            personnels dans le secteur privé est, à ce titre, également chargée de veiller au
            respect de cette politique. Pour formuler des commentaires ou une plainte au sujet du
            non-respect de cette politique, vous pouvez communiquer avec :
          </p>
          <p className="text-2xl text-zinc-400 font-semibold mb-3">Patrick René</p>
          <p className="text-2xl text-zinc-400 mb-3">Directeur des Opérations</p>
          <Link
            href="mailto:info@1855maitres.com"
            underline="always"
            color="danger"
            className="mb-3 text-2xl"
          >
            info@1855maitres.com
          </Link>
          <p className="text-2xl text-zinc-400 ">4350 Beaubien Est, Montréal (Québec) H1T 1S9</p>
          <p className="text-2xl text-zinc-400 ">1.855.624.8737 x 248</p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyInformation;
