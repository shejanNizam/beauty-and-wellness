import { createElement } from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { dashboardItems } from "../constants/router.constants";
import { routeLinkGenerators } from "../utils/routeLinkGenerators";

export default function Sidebar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col justify-between bg-white py-[50px]">
        <div className="space-y[24px">
          <div className="px-[38px]">
            {/* <img className="w-[200px] mx-auto" src={logo} alt="" /> */}
            <p> ARMONIA LOGO </p>
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
                          " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all rounded-sm"
                        : "text-black hover:text-white text-[20px] hover:bg-primary" +
                          " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all rounded-sm"
                    }
                  >
                    <div>{createElement(icon, { size: "20" })}</div>

                    <span> {name}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="p-[24px]">
          <button
            // onClick={handleLogOut}
            className="bg-[#E8EAEF] text-black w-full px-10 py-4 flex items-center justify-start gap-6 text-lg outline-none rounded-sm border border-white"
          >
            <IoIosLogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
}