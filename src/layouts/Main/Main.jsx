import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="flex text-start bg-[#FFFBEF] min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 pl-[326px]">
        <div className="sticky top-0 w-full p-[24px] z-10 bg-[#FFFBEF]">
          <Header />
        </div>
        <div className="p-[24px] pt-0.5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
