import GoogleMaps from "@/components/googlemaps";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  Input,
  Card,
  Button,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { useState } from "react";
const subjects = [
  { key: 1, label: "TALK TO A LAWYER FOR 50$" },
  { key: 2, label: "CIVIL RIGHT" },
  { key: 3, label: "INSURANCE LAW" },
  { key: 4, label: "CRIMINAL AND PENAL LAW" },
  { key: 5, label: "LABOUR LAW AND SOCIAL LAW" },
  { key: 6, label: "IMMIGRATION LAW" },
  { key: 7, label: "OTHER TYPE OF LAW" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      telephone: "",
      comments: "",
    });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2">
        <div className="max-w-md  justify-center">
          {/* <h1 className={title()}>Contact</h1> */}
          <p className="mb-2.5 ">
            Si vous avez des questions ou si vous souhaitez qu’un de nos avocats
            vous aide à faire valoir vos droits, veuillez nous envoyer un
            message. Nous vous répondrons sous peu. Bien que l’information
            contenue dans le message de réponse qui vous sera acheminé soit de
            nature juridique, ceci ne constitue pas un avis juridique.
          </p>

          <Card className="p-6 w-full max-w-md mb-6">
            <form
            // onSubmit={handleSubmit}
            >
              <Input
                className="mb-7"
                fullWidth
                color="default"
                size="lg"
                placeholder="Full name*"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />

              <Input
                className="mb-7"
                fullWidth
                color="default"
                size="lg"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                className="mb-12"
                fullWidth
                color="default"
                size="lg"
                placeholder="Telephone"
                name="telephone"
                type="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />

              <Textarea
                className="min-h-32"
                minRows={6}
                // isDisabled
                // label="Description"
                // labelPlacement="outside"
                placeholder="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </form>
          </Card>
          <p className="text-center mb-6 ">Veillez sélectionner une option</p>

          <Select
            className=" mb-11 w-full max-w-md"
            label="Choose a topic"
            labelPlacement="outside"
          >
            {subjects.map((subject) => (
              <SelectItem key={subject.key}>{subject.label}</SelectItem>
            ))}
          </Select>
          <div className="flex justify-center">
            <Button
              className="min-w-44 mb-11"
              onPress={handleSubmit}
              type="submit"
              size="lg"
              color="primary"
            >
              Envoyer
            </Button>
          </div>
          <div className="m-auto max-w-64 h-52 mb-10 ">
            <GoogleMaps />
          </div>
          <div>
            <p className="text-center m-auto mb-4 max-w-52 ">
              4350 Rue Beaubien E, Montreal, QC H1T 1S9
            </p>
            <p className="mb-4 text-center">INFO@1855maitres.com</p>
          </div>
          <div className="flex justify-center">
            <Button
              className="min-w-52  mb-11 "
              type="button"
              size="lg"
              color="primary"
            >
              Obtenir des directions
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Contact;
