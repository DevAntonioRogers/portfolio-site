import "./globals.css";
import { Poppins } from "next/font/google";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "700", "800"] });

export const metadata = {
  title: "Antonio Rogers",
  description: "Full Stack Engineer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
