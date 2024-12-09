import { createElement, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/images/main_logo.png";
import { dashboardItems } from "../../constants/router.constants";
import { cn } from "../../lib/utils";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNome, setOpenNome] = useState({});
  const handleLogOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "     Sure    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("user-update");
        navigate("/auth");
      }
    });
  };
  useEffect(() => {
    // console.log(location.pathname.includes("earnings"));
  }, [location.pathname]);
  return (
    <div className="fixed top-0 left-0 w-[326px] min-h-screen h-full p-6 pr-0 ">
      <div className="h-full flex flex-col justify-between bg-white pt-[50px] border drop-shadow rounded-lg">
        <div className="space-y[24px">
          <div className="px-[38px]">
            <img className="w-[60%] mx-auto" src={logo} alt="" />
          </div>
          <ul className="mt-10  max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2 px-4">
            {routeLinkGenerators(dashboardItems).map(
              ({ name, icon, path, children, rootPath }, indx) =>
                children?.length ? (
                  <li key={indx} className="overflow-hidden">
                    <button
                      onClick={() => {
                        setOpenNome((c) => ({
                          name: c?.name === name ? null : name,
                        }));
                      }}
                      className={cn(
                        "outline-none hover:text-white text-[20px] hover:bg-primary w-full px-4 py-3 flex items-center justify-between gap-3 text-lg transition-all rounded-lg",
                        {
                          "bg-primary text-white":
                            name === openNome?.name ||
                            (location.pathname.includes(rootPath) &&
                              !openNome.name),
                        }
                      )}
                    >
                      <div className="flex items-center justify-start gap-3">
                        <div>{createElement(icon, { size: "20" })}</div>
                        <span>{name}</span>
                      </div>
                      <MdOutlineArrowRight
                        className={cn("text-gray-500", {
                          "rotate-90 text-white":
                            name === openNome?.name ||
                            (location.pathname.includes(rootPath) &&
                              !openNome.name),
                        })}
                        size={23}
                      />
                    </button>
                    <div
                      className={cn(
                        "pl-8 pr-6 space-y-0.5 h-0 overflow-hidden",
                        {
                          "h-fit pt-1":
                            name === openNome?.name ||
                            (location.pathname.includes(rootPath) &&
                              !openNome.name),
                        }
                      )}
                    >
                      {children?.map(({ subName, subPath, subIcon }, inx) => (
                        <NavLink
                          key={inx}
                          to={subPath}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-primary text-white" +
                                " w-full px-4 py-1 flex items-center justify-start gap-3 transition-all rounded-sm"
                              : "text-[#646464] hover:text-white hover:bg-primary" +
                                " w-full px-4 py-1 flex items-center justify-start gap-3 transition-all rounded-sm"
                          }
                        >
                          <div>{createElement(subIcon, { size: "17" })}</div>
                          <span> {subName}</span>
                        </NavLink>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      setOpenNome((c) => ({
                        name: c?.name === name ? null : name,
                      }));
                    }}
                    key={indx}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary text-white" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-lg transition-all rounded-lg"
                          : " hover:text-white text-[20px] hover:bg-primary" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-lg transition-all rounded-lg"
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
        {/* <div className="p-4 mt-auto">
          <button
            onClick={handleLogOut}
            className="bg-light-gray w-full px-4 py-3 flex items-center justify-start gap-3 text-lg outline-none rounded-lg"
          >
            <FiLogOut className="text-red-400" size={20} />
            <span>Logout</span>
          </button>
        </div> */}

        <div className="p-[24px]">
          <button
            onClick={handleLogOut}
            className="bg-[#E8EAEF] text-black w-full px-10 py-4 flex justify-center items-center gap-2  rounded-lg text-xl"
          >
            <BiLogOut className="text-[#FF5252]" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
