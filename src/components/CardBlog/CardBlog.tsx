import React from "react";
import { Card, Image, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import { CardBlogProps } from "@/types/CardBlogProps";

const CardBlog: React.FC<CardBlogProps> = ({ data, onClickCard }) => {
  const { t } = useTranslation();

  return (
    <>
      <li className=" " key={data.id}>
        <Card className="w-[330px] h-[430px] p-6  ">
          <div className="w-[280px] h-[250px] overflow-hidden group">
            <Image
              alt={t(`${data.title}`)}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              src={data.img}
              // onClick={() => onClickCard()}
            />
          </div>

          <h4
            className="font-bold text-large mb-3 h-[76px] text-center overflow-hidden"
            // onClick={() => onClickCard()}
          >
            {t(`${data.title}`)}
          </h4>
          <p className="text-left h-[122px] mb-2 overflow-hidden text-ellipsis">
            {t(`${data.description}`)}
          </p>
          <Button
            onClick={onClickCard}
            className="ml-auto"
            size="sm"
            variant="light"
          >
            {t("blogBtn")}
          </Button>
        </Card>
      </li>
    </>
  );
};

export default CardBlog;
