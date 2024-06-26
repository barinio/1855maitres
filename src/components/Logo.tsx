import { Link } from "@nextui-org/link";

const Logo = () => {
  return (
    <Link
      className="flex justify-start items-center gap-1"
      color="foreground"
      href="/"
    >
      <p className="xl:text-5xl font-bold">
        <span className="text-danger">1</span>855
        <span className="text-danger">MAITRES</span>
        .com
      </p>
    </Link>
  );
};

export default Logo;
