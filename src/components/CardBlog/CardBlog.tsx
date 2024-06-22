// import React from "react";
import { Card, Image, Button } from "@nextui-org/react";
import { CardBlogProps } from "@/types/CardBlogProps";

const CardBlog: React.FC<CardBlogProps> = ({ data, onClickCard }) => {
  return (
    <>
      <li className=" " key={data.id}>
        <Card className="w-[330px] h-[430px] p-6  ">
          <div className="w-[280px] h-[250px] overflow-hidden group">
            <Image
              alt={data.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              src={data.img}
              // onClick={() => onClickCard()}
            />
          </div>

          <h4
            className="font-bold text-large mb-4 text-center "
            onClick={() => onClickCard()}
          >
            {data.title}
          </h4>
          <p className="text-left h-28 overflow-hidden text-ellipsis">
            {data.description}
          </p>
          <Button
            onClick={() => onClickCard()}
            className="ml-auto"
            size="sm"
            variant="light"
          >
            Read more
          </Button>
        </Card>
      </li>
    </>
  );
};

export default CardBlog;
