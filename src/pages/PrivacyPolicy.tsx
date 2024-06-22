import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";

const PrivacyPolicy = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="block">
          <h1 className="text-3xl mb-16 text-zinc-400">Politique de confidentialité</h1>
          <ol className="flex flex-col gap-16">
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">
                Qu’est-ce qu’un renseignement personnel ?
              </h2>
              <p className="text-2xl text-zinc-400">
                « Les renseignements personnels sont ceux qui portent sur une personne physique et
                permettent de l’identifier. Ils sont confidentiels. Sauf exceptions, ils ne peuvent
                être communiqués sans le consentement de la personne concernée. »
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">1. Introduction</h2>
              <p className="text-2xl text-zinc-400">
                La protection des renseignements personnels est essentielle pour 1-855-Maîtres. Nous
                nous engageons à protéger la confidentialité et la sécurité des renseignements
                personnels que nous recueillons, qu’ils concernent nos clients ou notre personnel.
                Ces renseignements sont gérés avec discrétion, rigueur et conformément aux exigences
                légales, réglementaires et contractuelles.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">
                2. Devoir de prudence et de discrétion
              </h2>
              <p className="text-2xl text-zinc-400">
                1-855-Maîtres porte une attention particulière à la sauvegarde des données
                personnelles qu’il détient. Chaque avocat et membre du personnel est tenu de
                respecter non seulement les principes fondamentaux de protection des renseignements
                personnels, mais aussi les normes déontologiques propres à la profession juridique.
                Conscient de l’importance du secret professionnel, notre cabinet renforce cette
                obligation par la signature d’engagements de confidentialité et par des formations.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">3. Obligation de protection</h2>
              <p className="text-2xl text-zinc-400">
                1-855-Maîtres assume pleinement sa responsabilité quant à la sauvegarde des données
                personnelles en sa possession. Chaque membre de notre équipe est engagé à adhérer
                aux normes établies pour la préservation de ces informations. Outre l’adhésion aux
                dispositions du Code civil du Québec concernant la loyauté et la confidentialité,
                nous mettons l’accent sur la formation continue de notre personnel. Cela se traduit
                par la signature d’un accord de confidentialité et des sessions de formation
                régulières sur le sujet.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">
                4. Gestion des données clients et employés
              </h2>
              <p className="text-2xl text-zinc-400">
                Le cabinet 1-855-Maîtres collecte des informations personnelles dans le cadre de ses
                activités juridiques, que ce soit pour la prestation de services juridiques, la
                communication avec les clients, l’analyse financière ou les procédures de
                recrutement et de gestion de son équipe. Notre priorité est de ne recueillir que les
                données strictement nécessaires à la réalisation de nos mandats. Toutes les
                informations, indépendamment de leur format ou de leur mode de conservation,
                bénéficient d’une protection rigoureuse pour garantir leur confidentialité et leur
                protection.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">
                5. Conservation et communication des renseignements personnels
              </h2>
              <p className="text-2xl text-zinc-400">
                Le cabinet 1-855-Maîtres met en œuvre des protocoles de sécurité rigoureux pour
                garantir la confidentialité des informations personnelles. L’accès à ces données est
                strictement réservé aux membres du cabinet dûment autorisés. Ces informations sont
                traitées exclusivement dans le cadre des mandats pour lesquelles elles ont été
                fournies. Le cabinet s’engage à ne jamais partager ces données avec des entités
                extérieures sans l’accord explicite du client, à moins qu’une obligation légale ne
                nous y contraigne.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">6. Consultation et modification</h2>
              <p className="text-2xl text-zinc-400">
                Chacun a le droit de consulter les données personnelles que le cabinet 1-855-Maîtres
                conserve à son égard. De plus, il est en droit de solliciter une mise à jour ou une
                correction de ces informations. Pour ce faire, toute requête doit être adressée au
                Responsable de la protection de la vie privée au sein du cabinet. Cette requête peut
                être accompagnée de frais de traitement.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">7. Plaintes et questions</h2>
              <p className="text-2xl text-zinc-400">
                Toute personne ayant des préoccupations concernant la protection de ses
                renseignements personnels peut contacter le Responsable de la protection de la vie
                privée.
              </p>
            </li>
            <li>
              <h2 className="text-3xl mb-4 text-zinc-400">8. Modifications de la politique</h2>
              <p className="text-2xl text-zinc-400">
                1-855-Maîtres se réserve le droit de modifier cette politique à tout moment. Notez
                que la dernière version de notre politique est affichée sur cette page.
              </p>
            </li>
          </ol>

          <p className="text-2xl text-zinc-400 mt-16 mb-4">
            Responsable de la protection de la vie privée
          </p>
          <p className="text-2xl text-zinc-400 font-semibold mb-4">
            Patrick René, Directeur des Opérations
          </p>
          <p className="text-2xl text-zinc-400 mb-4">
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
