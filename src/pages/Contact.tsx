import {
  Input,
  Card,
  Button,
  Textarea,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Axios from "axios";

import ThankYou from "./ThankYou/ThankYou";

import DefaultLayout from "@/layouts/default";
import GoogleMaps from "@/components/googlemaps";
import { dataSelect } from "@/data/dataSelect";

interface UserLetter {
  username: string;
  email: string;
  telephone: string;
  comments?: string;
}

const instance = Axios.create({
  // baseURL: "http://localhost:3003",
  baseURL: "https://one855-product-code-1.onrender.com",
});

const postUserLetter = async (data: UserLetter) => {
  const res = await instance.post("/api/user/add", data);

  return res;
};

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    telephone: "",
  });
  const [showThankPage, setShowThankPage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { username: "", email: "", telephone: "" };

    if (!formData.username) {
      newErrors.username = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.telephone) {
      newErrors.telephone = "Telephone number is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    console.log("formData :>> ", formData);

    try {
      await postUserLetter(formData);
    } catch (error) {
      console.log("error:", error);
    } finally {
      // setSubmitting(false);
      setFormData({
        username: "",
        email: "",
        telephone: "",
        comments: "",
      });
    }

    setShowThankPage(true);
  };

  return (
    <DefaultLayout>
      <section className="items-center pt-5 justify-center md:px-10 lg:w-full lg:px-0">
        <div className="max-w-sm  ml-auto mr-auto  md:max-w-2xl lg:max-w-full">
          {showThankPage ? (
            <ThankYou />
          ) : (
            <>
              <p className="mb-2.5 lg:mb-28 ">{t("contactText")}</p>

              <div className="lg:flex justify-between lg:relative">
                <div>
                  <Card className="p-6 w-full mb-6 md:p-11 lg:w-[696px]">
                    <form>
                      <div className="mb-7">
                        <Input
                          fullWidth
                          color="default"
                          size="lg"
                          placeholder={t("inputName")}
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <div style={{ color: "red" }}>{errors.username}</div>
                        )}
                      </div>

                      <div className="mb-7">
                        <Input
                          fullWidth
                          color="default"
                          size="lg"
                          placeholder={t("inputMail")}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        )}
                      </div>

                      <div className="mb-12">
                        <Input
                          fullWidth
                          color="default"
                          size="lg"
                          placeholder={t("inputTel")}
                          name="telephone"
                          type="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                        />
                        {errors.telephone && (
                          <div style={{ color: "red" }}>{errors.telephone}</div>
                        )}
                      </div>

                      <Textarea
                        classNames={{
                          input: "min-h-32 md:min-h-48",
                        }}
                        minRows={6}
                        placeholder={t("inputCom")}
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                      />
                    </form>
                  </Card>

                  <div className="md:flex justify-between items-end md:mb-24 lg:flex-col lg:items-start lg:gap-12">
                    <div>
                      <p className="text-center mb-6 md:mb-2 md:text-left">
                        {t("titleSelect")}
                      </p>

                      <Select
                        className="mb-11 w-full max-w-md md:mb-0 md:w-80"
                        size="md"
                        label={t("nameSelect")}
                        labelPlacement="inside"
                      >
                        {dataSelect.map((item) => (
                          <SelectItem key={item.key}>
                            {t(`${item.label}`)}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <div className="flex justify-center">
                      <Button
                        className="min-w-44 mb-11 md:mb-0"
                        onPress={handleSubmit}
                        type="submit"
                        size="lg"
                        color="primary"
                      >
                        {t("contactBtn1")}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:flex justify-between md:mb-6 lg:flex-col lg:justify-start gap-[73px] ">
                  <div className="m-auto w-80 h-72 mb-10 md:w-96 md:h-80 md:m-0 lg:w-[600px] lg:h-[506px]">
                    <GoogleMaps />
                  </div>

                  <div className="md:flex flex-col justify-between">
                    <div className="lg:absolute top-[-95px] left-0">
                      <p className="text-center ml-auto mr-auto mb-4 max-w-52 md:text-start md:ml-0 ">
                        {t("contactAdress")}{" "}
                        <span className="hidden md:inline">
                          <br />
                        </span>
                        H1T 1S9
                      </p>
                      <div className="flex justify-center mb-4 item-center md:justify-start md:mb-6 lg:absolute top-[48px] left-20">
                        <Link
                          href="mailto:info@1855maitres.com"
                          underline="always"
                          style={{ color: "#a1a1aa", display: "flex" }}
                        >
                          Info@1855maitres.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        className="min-w-52 mb-11 md:mb-0"
                        type="button"
                        size="lg"
                        color="primary"
                      >
                        {t("contactBtn2")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Contact;
