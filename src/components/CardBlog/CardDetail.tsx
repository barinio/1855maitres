import { Card, Image, Button } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import { CardDetailProps } from "@/types/CardDetailProps";
import { dataBlog } from "@/data/dataBlog";

const CardDetail: React.FC<CardDetailProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const blogItem = dataBlog.find((item) => item.id === id);

  if (!blogItem) {
    return <div>Blog not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex items-center pt-5 justify-center flex-col">
        <Card className="p-6  ">
          <div className="flex justify-center items-center w-full h-full overflow-hidden place-content-center group">
            <Image
              alt={blogItem.title}
              className="w-full h-full mb-6 object-contain "
              src={blogItem.img}
            />
          </div>

          <h3 className="font-bold text-3xl mb-8 text-center ">
            {t(`${blogItem.title}`)}
          </h3>

          <p className="text-left text-xl overflow-hidden text-ellipsis mb-6">
            {t(`${blogItem.description}`)}
          </p>
          {blogItem.fullDescription.map(({ title, text }) => (
            <div key={title}>
              <h3 className="mb-6 text-2xl font-medium ">{t(`${title}`)}</h3>
              <p className="mb-6 text-xl font-normal">{t(`${text}`)}</p>
            </div>
          ))}
        </Card>

        <Button
          onClick={() => handleGoBack()}
          className="ml-auto text-xl mt-4"
          size="sm"
          variant="light"
        >
          {t("cardDetailBtn")}
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default CardDetail;
