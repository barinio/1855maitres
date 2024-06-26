import { Card, Image, Button } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { CardDetailProps } from "@/types/CardDetailProps";
import { dataBlog } from "@/data/dataBlog";

const CardDetail: React.FC<CardDetailProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const blogItem = dataBlog.find((item) => item.id === id);

  if (!blogItem) {
    return <div>Blog not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center flex-col">
        <Card className="p-6  ">
          <div className="flex justify-center items-center w-full h-full overflow-hidden place-content-center group">
            <Image
              alt={blogItem.title}
              className="w-full h-full mb-6 object-contain "
              src={blogItem.img}
            />
          </div>

          <h3 className="font-bold text-3xl mb-8 text-center ">{blogItem.title}</h3>

          <p className="text-left text-xl overflow-hidden text-ellipsis mb-6">
            {blogItem.description}
          </p>
          {blogItem.fullDescription.map(({ title, text }) => (
            <div key={title}>
              <h3 className="mb-6 text-2xl font-medium ">{title}</h3>
              <p className="mb-6 text-xl font-normal">{text}</p>
            </div>
          ))}
        </Card>

        <Button
          onClick={() => handleGoBack()}
          className="ml-auto text-xl mt-4"
          size="sm"
          variant="light"
        >
          See all
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default CardDetail;
