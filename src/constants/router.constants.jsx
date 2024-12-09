import { BiCategoryAlt, BiMessageSquareDetail } from "react-icons/bi";
import { CiSettings, CiUser } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { LuMessageCircle, LuWallet } from "react-icons/lu";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSecurityUpdateWarning,
  MdOutlineSupportAgent,
  MdReportGmailerrorred,
} from "react-icons/md";
import { PiHandWithdrawBold } from "react-icons/pi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import Category from "../pages/Main/Category/Category";
import Client from "../pages/Main/Client/Client";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";
import Withdraw from "../pages/Main/Earnings/Withdraw";
import HostDetails from "../pages/Main/Host/HostDetails";
import Hosts from "../pages/Main/Host/Hosts";
import Notifications from "../pages/Main/Notifications/Notifications";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import MyProfile from "../pages/Profile/MyProfile";
import AboutUs from "../pages/Settings/AboutUs";
import EditAboutUs from "../pages/Settings/EditAboutUs";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsConditions from "../pages/Settings/TermsConditions";
import Messages from "../pages/Support/Messages";
import Reports from "../pages/Support/Reports";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    name: "Client",
    path: "client",
    icon: FaUsers,
    element: <Client />,
  },
  {
    name: "Beautician",
    path: "hosts",
    icon: MdOutlineAdminPanelSettings,
    element: <Hosts />,
  },
  {
    path: "/hosts/:id",
    element: <HostDetails />,
  },
  {
    name: "Earnings",
    rootPath: "earnings",
    icon: GrMoney,
    children: [
      {
        name: "All Earning",
        path: "earnings/all-earnings",
        icon: LuWallet,
        element: <Earnings />,
      },
      {
        name: "Withdraw",
        path: "earnings/withdraw",
        icon: PiHandWithdrawBold,
        element: <Withdraw />,
      },
    ],
  },
  {
    name: "Category",
    path: "/category",
    icon: BiCategoryAlt,
    element: <Category />,
  },
  {
    name: "Support",
    rootPath: "support",
    icon: MdOutlineSupportAgent,
    children: [
      {
        name: "Messages",
        path: "support/messages",
        icon: LuMessageCircle,
        element: <Messages />,
      },
      {
        name: "Reports",
        path: "support/reports",
        icon: MdReportGmailerrorred,
        element: <Reports />,
      },
    ],
  },
  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      {
        name: "Profile",
        path: "settings/prifile",
        icon: CiUser,
        element: <MyProfile />,
      },
      {
        path: "settings/prifile/edit",
        element: <EditMyProfile />,
      },
      {
        name: "Terms & Services",
        icon: FaServicestack,
        path: "settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "settings/terms-conditions/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        icon: MdOutlineSecurityUpdateWarning,
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacy-policy/edit",
        element: <EditPrivacyPolicy />,
      },
      {
        name: "About Us",
        icon: BiMessageSquareDetail,
        path: "settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "settings/about-us/edit",
        element: <EditAboutUs />,
      },
    ],
  },
];
