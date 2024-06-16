import DefaultLayout from "@/layouts/default";

const Accueil = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1>LEGAL SOLUTIONS ADAPTED TO YOUR NEEDS</h1>
        <div className="inline-block max-w-lg text-center justify-center">
          <a href="tel:+18556248737">+1-855-624-8737</a>
          <button className="link">Prendre un rendez-vous</button>
          <p>
            Our goal is to make legal services accessible to citizens throughout Quebec. If you are
            looking to assert your rights in one of the many areas of law, you can easily contact us
            by dialing our unique number, 1-855-MAÎTRES.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Accueil;
