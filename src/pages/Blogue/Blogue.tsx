import { Link } from "react-router-dom";

import CardBlog from "../../components/CardBlog/CardBlog";
import { dataBlog } from "../../data/dataBlog";

import DefaultLayout from "@/layouts/default";

import { BlogItem } from "@/types/CardBlogProps";

const Blogue: React.FC = () => {
  const handleClickCard = (blogItem: BlogItem) => {
    // console.log("prop :>> ", blogItem);
  };

  return (
    <DefaultLayout>
      <div>
        <section className="pt-5">
          <div className="">
            <ul className="flex flex-col items-center gap-7 md:flex-row md:flex-wrap md:justify-center ">
              {dataBlog.map((blogItem) => (
                <Link to={`/blogue/${blogItem.id}`} key={blogItem.id}>
                  <CardBlog
                    key={blogItem.id}
                    data={blogItem}
                    onClickCard={() => handleClickCard(blogItem)}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Blogue;
