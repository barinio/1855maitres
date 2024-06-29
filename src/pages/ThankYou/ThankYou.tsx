import { Card, CardBody, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickBlog = () => {
    navigate("/blogue");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickCallUs = () => {
    window.location.href = `tel: +38 097 777 77 77`;
  };

  return (
    <Card className="ml-auto mr-auto max-w-80 p-8">
      <CardBody>
        <h2 className="mb-5 text-center text-emerald-500">
          {t("thankYouTitle")}
        </h2>
        <p className="mb-6 text-justify text-xs font-light leading-5 tracking-wider">
          {t("thankYouText")}
        </p>
        <div className="flex flex-col gap-5 items-center ">
          <Button
            onClick={handleClickBlog}
            className="min-w-40"
            type="button"
            size="md"
            color="default"
          >
            {t("thankYouBtn1")}
          </Button>
          <Button
            onClick={handleClickHome}
            className="min-w-40"
            type="button"
            size="md"
            color="default"
          >
            {t("thankYouBtn2")}
          </Button>
          <Button
            onClick={handleClickCallUs}
            className="min-w-40"
            type="button"
            size="md"
            color="default"
          >
            {t("thankYouBtn3")}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ThankYou;
