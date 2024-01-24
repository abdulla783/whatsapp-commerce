"use client"
import NavBar from "@/components/Header/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import SideBarMobile from "@/components/SideBar/SideBarMobile";
import { isDesktop } from "@/utils/utils";
import ProductList from "@/components/Product/ProductList";

export default function Home() {
  const isDesktopSize = isDesktop()
  return (
    <>
      <NavBar />
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        {isDesktopSize && <SideBar />}
        <div className="flex flex-col">
          {<header
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: isDesktopSize ? "url('/images/cover.png')" : "url('/images/cover-mobile.png')",
            }}
          />}
          {
            !isDesktopSize &&
            <SideBarMobile />
          }
          <ProductList />
        </div>
      </div>
    </>
  );
}

