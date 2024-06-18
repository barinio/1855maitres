import styles from "./default.module.scss";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer/Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.layout} relative flex flex-col h-screen`}>
      <Navbar />
      <main className="container mx-auto max-w-[1440px] px-6 flex-grow mt-16 ">{children}</main>
      <Footer />
    </div>
  );
}
