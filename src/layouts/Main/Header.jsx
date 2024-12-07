import { Badge } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import USER_IMG from "../../assets/premium_photo-1683121366070-5ceb7e007a97.jpg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[88px] flex justify-between items-center rounded-xl py-[16px] px-[32px] bg-[#627496] shadow-sm">
        <div className="text-start space-y-0.5">
          <p className="text-2xl font-semibold text-white">
            {"Welcome, Jeklin"}
          </p>
          <p className="text-[#CCAD72] text-[16px]">{"Have a nice day!"}</p>
        </div>
        <div className="flex gap-x-6">
          <div
            onClick={() => navigate("/notifications")}
            className="relative flex items-center "
          >
            <Badge
              // style={{ backgroundColor: "#26363F" }}
              // count={data?.data?.totalUnreadNotification || 0}
              count={2}
              showZero={true}
              offset={[-5, 5]}
            >
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={`text-[#E8BD56] hover:text-[#E8BD56] bg-[#f8f5f5] w-12 h-12 rounded-full p-2 shadow-sm transition-all`}
              />
            </Badge>
          </div>
          <div
            onClick={() => navigate("/settings/personal-information")}
            className="flex items-center gap-3"
            style={{ cursor: "pointer" }}
          >
            <div>
              <img
                // src={
                //   user?.image
                //     ? import.meta.env.VITE_SERVER_URL + user?.image
                //     : profileImage
                // }
                src={USER_IMG}
                className="rounded-full h-12 w-12 border-[#CCAD72]"
              />
            </div>
            <div className="space-y-0.5 text-right">
              <h5 className="text-xl font-medium text-white">
                {/* {user?.name} */}
                {"Shejan"}
              </h5>
              <p className="text-[12px] text-[#CCAD72]">{"Admin"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
