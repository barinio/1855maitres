import styles from "./default.module.scss";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer/Footer";
import Assistant from "@/chatBot/Assistant";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.layout} relative flex flex-col h-screen`}>
      <Navbar />
      <main className="container mx-auto max-w-[1440px] px-6 ">{children}</main>
      <Footer />

      <Assistant />
    </div>
  );
}
