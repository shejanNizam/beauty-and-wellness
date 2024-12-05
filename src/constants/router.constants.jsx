import Beautician from "../pages/Main/Beautician/Beautician";
import Category from "../pages/Main/Category/Category";
import Client from "../pages/Main/Client/Client";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";
import Support from "../pages/Main/Support/Support";
import Settings from "../pages/Settings/Settings";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    // icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Client",
    path: "/client",
    //     icon: ,
    element: <Client />,
  },
  {
    name: "Beautician",
    path: "/beautician",
    //     icon: ,
    element: <Beautician />,
  },
  {
    name: "Earnings",
    path: "/earnings",
    //     icon: ,
    element: <Earnings />,
  },
  {
    name: "Category",
    path: "/category",
    //     icon: ,
    element: <Category />,
  },
  {
    name: "Support",
    path: "/support",
    //     icon: ,
    element: <Support />,
  },
  {
    name: "Settings",
    path: "/settings",
    //     icon: ,
    element: <Settings />,
  },
];
