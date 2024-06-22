// import React from "react";
// import { title } from "@/components/primitives";
// import { useState } from "react";
import CardBlog from "../CardBlog/CardBlog";
import { dataBlog } from "./dataBlog";
import { Link } from "react-router-dom";

interface BlogItem {
  id: string;
  title: string;
  img: string;
  description: string;
}

const Blog: React.FC = () => {
  // const [showDetailCard, setShowDetailCard] = useState<boolean>(false);
  // const [selectedCard, setSelectedCard] = useState<BlogItem | null>(null);

  const handleClickCard = (blogItem: BlogItem) => {
    console.log("prop :>> ", blogItem);
    // setSelectedCard(blogItem);
    // setShowDetailCard(true);
  };

  return (
    <div>
      <section className="">
        <div className="">
          {/* <h1 className={title()}> blogggggg</h1> */}
          {/* {showDetailCard ? (
            <CardDetail cardItem={selectedCard} />
          ) : ( */}
          <ul className="flex flex-col items-center gap-7 md:flex-row md:flex-wrap md:justify-center ">
            {dataBlog.map((blogItem) => (
              <Link to={`/blogue/${blogItem.id}`}>
                <CardBlog
                  key={blogItem.id}
                  data={blogItem}
                  onClickCard={() => handleClickCard(blogItem)}
                />
              </Link>
            ))}
          </ul>
          {/* )} */}
        </div>
      </section>
    </div>
  );
};

export default Blog;
