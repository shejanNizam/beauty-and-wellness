import React from "react";
import DashboardChart from "../../../Components/DashboardCahrt";
const Earnings = () => {
  return (
    <div className="space-y-[24px]">
      <div className="bg-white p-[24px] pt-2 rounded-lg space-y-6">
        <p className="py-5 border-b border-info text-blue-400/95 text-2xl font-sans">
          Earning
        </p>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="bg-white px-[24px] py-6 rounded-2xl space-y-1 flex flex-col justify-center items-center drop-shadow-md border border-gray-100">
            <h3 className="text-2xl font-thin">{"Total Amount"}</h3>
            <h3 className="text-2xl font-semibold text-info">
              {`254555`}<span className="font-sans">$</span>
            </h3>
          </div>
          <div className="bg-white px-[24px] py-6 rounded-2xl space-y-1 flex flex-col justify-center items-center drop-shadow-md border border-gray-100">
            <h3 className="text-2xl font-thin">{"Withdrawable"}</h3>
            <h3 className="text-2xl font-semibold text-info">
              {`6500`}<span className="font-sans">$</span>
            </h3>
          </div>
        </div>
      </div>
      <DashboardChart />
    </div>
  );
};

export default Earnings;
