import { Badge, Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import USER_IMG from "../../assets/images/services/frame1.png";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [notificationPopup, setNotificationPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNotificationPopup(false);
  }, [loacatin.pathname]);

  return (
    <div className="w-full h-[88px] flex justify-between items-center rounded-2xl py-[16px] px-[32px] bg-primary shadow-sm relative">
      <div className="text-start space-y-0.5">
        <p className="text-[24px] font-medium text-white">
          {"Welcome,"} {"Jeklin"}
        </p>
        <p className="text-[#CCAD72]">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-6">
        <button
          // onBlur={() => setNotificationPopup(false)}
          onClick={() => setNotificationPopup((c) => !c)}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "red" }} count={2}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={`text-[#E8BD56] hover:text-[#c4972f] bg-white w-[48px] h-[48px] rounded-full p-2 shadow-sm transition-all`}
            />
          </Badge>
        </button>
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => navigate("/settings/personal-information")}
          className="flex items-center gap-3"
        >
          <div>
            <img
              src={USER_IMG}
              alt="user_image"
              className="rounded-full h-[48px] w-[48px] border"
            />
          </div>
          <div className="space-y-0.5">
            <h5 className="text-[17px] font-medium text-white">{"Jeklin"}</h5>
            <p className="text-xs text-[#CCAD72]">{"Admin"}</p>
          </div>
        </div>
      </div>
      {!!notificationPopup && (
        <div
          ref={notificationRef}
          className={
            "absolute top-24 right-0 bg-white shadow-lg border border-gray-50 rounded-md px-3 py-4 min-w- w-fit"
          }
        >
          <div>
            <div className="group flex items-center gap-4 px-[14px] py-2 cursor-pointer hover:bg-gray-100 transition-all">
              <IoNotificationsOutline className="bg-[#E8EAEF] w-[40px] h-[40px] rounded-sm text-primary p-2" />
              <div className="">
                <h6>You have received $500 from John Doe</h6>
                <small className="text-[11px] text-gray-500">
                  Fri, 12:30pm
                </small>
              </div>
            </div>
            <div className="group flex items-center gap-4 px-[14px] py-2 cursor-pointer hover:bg-gray-100 transition-all">
              <IoNotificationsOutline className="bg-[#E8EAEF] w-[40px] h-[40px] rounded-sm text-primary p-2" />
              <div className="">
                <h6>You have received $500 from John Doe</h6>
                <small className="text-[11px] text-gray-500">
                  Fri, 12:30pm
                </small>
              </div>
            </div>
            <div className="group flex items-center gap-4 px-[14px] py-2 cursor-pointer hover:bg-gray-100 transition-all">
              <IoNotificationsOutline className="bg-[#E8EAEF] w-[40px] h-[40px] rounded-sm text-primary p-2" />
              <div className="">
                <h6>You have received $500 from John Doe</h6>
                <small className="text-[11px] text-gray-500">
                  Fri, 12:30pm
                </small>
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto mt-4">
            <Button
              onClick={(e) => navigate("notifications")}
              style={{ background: "#142F62", color: "white" }}
              size="middle"
              type="primary"
              className="w-40"
            >
              See all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
