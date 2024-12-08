import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <>
      <div className="flex text-start">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 pl-80">
          <div className="sticky top-0 w-full p-6 z-10">
            <Header />
          </div>
          <div className="p-6 pt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
