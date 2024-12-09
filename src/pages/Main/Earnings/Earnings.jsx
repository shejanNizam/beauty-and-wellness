import React from "react";
import DashboardChart from "../../../Components/DashboardCahrt";
const Earnings = () => {
  return (
    <div className="space-y-[16px]">
      <div className="bg-white p-[24px] pt-1 rounded-lg space-y-6">
        <p className="py-5 border-b border-info text-primary text-2xl font-sans">
          Earning
        </p>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="bg-[#FFF8E1] px-[24px] py-6 rounded-2xl space-y-1 flex flex-col justify-center items-center drop-shadow-md border border-gray-100">
            <h3 className="text-2xl font-semiboldthin">{"Total Amount"}</h3>
            <h3 className="text-2xl font-semibold text-info">
              <span className="font-sans">€ </span>
              {`78000`}
            </h3>
          </div>
          <div className="bg-[#FFF8E1] px-[24px] py-6 rounded-2xl space-y-1 flex flex-col justify-center items-center drop-shadow-md border border-gray-100">
            <h3 className="text-2xl font-semiboldthin">{"Withdrawable"}</h3>
            <h3 className="text-2xl font-semibold text-info">
              <span className="font-sans">€ </span>
              {`70000`}
            </h3>
          </div>
        </div>
      </div>
      <DashboardChart />
    </div>
  );
};

export default Earnings;
