import { Outlet } from "react-router-dom";
import Footer from "./../common/components/misc/Footer";
import Header from "./../common/components/misc/Header";
import "@/common/config/globals.css";

export default function RootLayout() {
  return (
    <div className="w-full max-w-[70rem] px-4 md:px-8 pt-5 pb-0">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
