import { createElement } from "react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { dashboardItems } from "../../constants/router.constants";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[300px] h-[883px] min-h-screen flex flex-col justify-between bg-white py-[50px] shadow-xl">
        <div className="space-y[24px">
          <div className="px-[38px]">
            <img className="w-[152px] h-[187px] mx-auto" src={logo} alt="" />
          </div>
          <ul className="mt-[24px] max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2 px-6">
            {routeLinkGenerators(dashboardItems).map(
              ({ name, icon, path }, indx) => (
                <li key={indx}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-primary text-white" +
                          " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all rounded-lg"
                        : "text-black hover:text-white text-[20px] hover:bg-primary" +
                          " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all rounded-lg"
                    }
                  >
                    <div>{createElement(icon, { size: "30" })}</div>
                    <span className="text-2xl"> {name}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="p-[24px]">
          <button
            // onClick={handleLogOut}
            className="bg-[#E8EAEF] hover:bg-red-500 text-black hover:text-white w-full px-10 py-4 flex items-center justify-start gap-6 text-lg outline-none rounded-lg border border-white"
          >
            <BiLogOut className="text-red-600 hover:text-red-900" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
