import { BiCategoryAlt } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { HiOutlineSupport } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import Beautician from "../pages/Main/Beautician/Beautician";
import Category from "../pages/Main/Category/Category";
import Client from "../pages/Main/Client/Client";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";
import Support from "../pages/Main/Support/Support";
import Settings from "../pages/Settings/Settings";
import { FaUsersViewfinder } from "react-icons/fa6";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Client",
    path: "/client",
    icon: IoIosPeople,
    element: <Client />,
  },
  {
    name: "Beautician",
    path: "/beautician",
    icon: FaUsersViewfinder,
    element: <Beautician />,
  },
  {
    name: "Earnings",
    path: "/earnings",
    icon: GrMoney,
    element: <Earnings />,
  },
  {
    name: "Category",
    path: "/category",
    icon: BiCategoryAlt,
    element: <Category />,
  },
  {
    name: "Support",
    path: "/support",
    icon: HiOutlineSupport,
    element: <Support />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: IoSettingsOutline,
    element: <Settings />,
  },
];
