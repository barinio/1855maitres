import DefaultLayout from "@/layouts/default";
import { Card, Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { dataBlog } from "../Blog/dataBlog";
import { CardDetailProps } from "@/types/CardDetailProps";

const CardDetail: React.FC<CardDetailProps> = () => {
  const { id } = useParams();

  const blogItem = dataBlog.find((item) => item.id === id);
  if (!blogItem) {
    return <div>Blog not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center">
        <Card className="p-6  ">
          <div className="w-full h-full overflow-hidden group">
            <Image
              alt={blogItem.title}
              className="w-full h-full mb-6 object-contain transition-transform duration-300 group-hover:scale-110"
              src={blogItem.img}
            />
          </div>

          <h4 className="font-bold text-2xl  mb-4 text-center ">
            {blogItem.title}
          </h4>
          <p className="text-left text-xl overflow-hidden text-ellipsis">
            {blogItem.description}
          </p>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default CardDetail;
