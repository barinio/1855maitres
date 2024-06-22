import { Card, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

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
          Application sent successfully
        </h2>
        <p className="mb-6 text-justify text-xs font-light leading-5 tracking-wider">
          Your application has been successfully sent. It will be processed soon
          and we will contact you shortly.
        </p>
        <div className="flex flex-col gap-5 items-center ">
          <Button
            onClick={handleClickBlog}
            className="w-32"
            type="button"
            size="md"
            color="default"
          >
            Read blog
          </Button>
          <Button
            onClick={handleClickHome}
            className="w-32"
            type="button"
            size="md"
            color="default"
          >
            Go to Home page
          </Button>
          <Button
            onClick={handleClickCallUs}
            className="w-32"
            type="button"
            size="md"
            color="default"
          >
            Сall us
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ThankYou;
