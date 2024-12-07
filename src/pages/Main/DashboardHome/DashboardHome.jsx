import { Skeleton } from "antd";
import { FaUserTie } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import DashboardChart from "../../../components/DashboardChart";
import LoaderWraperComp from "../../../components/LoaderWraperComp";

export default function DashboardHome() {
  // const { data, isLoading, isError } = useGetDashboardStatusQuery(undefined);

  return (
    <>
      <div className="space-y-[24px]">
        <LoaderWraperComp
          // isLoading={isLoading}    --> to do with redux
          // isError={isError}      --> to do with redux
          loader={
            <div className="w-full grid grid-cols-2 gap-7">
              <Skeleton active className="w-full h-full" />
              <Skeleton active className="w-full h-full" />
            </div>
          }
          className={"h-[12.02vh]"}
        >
          <div className="grid grid-cols-3 gap-12">
            <div className="flex justify-center items-center gap-4 bg-white h-[206px] rounded-lg drop-shadow-xl ">
              <FaUserTie className={`text-primary w-[70px] h-[70px]`} />
              <div className="w-[172px] h-[81px]">
                <p className="text-primary text-[24px] ">Total Customer</p>
                <p className="text-[32px] font-semibold">{"780"}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 bg-white h-[206px] rounded-lg drop-shadow-xl  ">
              <FaUsersViewfinder className={`text-primary w-[70px] h-[70px]`} />
              <div className="w-[172px] h-[81px]">
                <p className="text-primary text-[24px] ">Total beautician</p>
                <p className="text-[32px] font-semibold">{"124"}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 bg-white h-[206px] rounded-lg drop-shadow-xl  ">
              <LiaHandsHelpingSolid
                className={`text-primary w-[70px] h-[70px]`}
              />
              <div className="w-[172px] h-[81px]">
                <p className="text-primary text-[24px] ">Total Deals</p>
                <p className="text-[32px] font-semibold">{"240"}</p>
              </div>
            </div>
          </div>
        </LoaderWraperComp>
        <DashboardChart />
      </div>
    </>
  );
}
