import { Skeleton } from "antd";
import { FaUserTie } from "react-icons/fa";
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
          <div className="grid grid-cols-3 gap-x-[22px]">
            <div className="flex justify-center items-center gap-4 bg-white w-[470px] h-[206px] rounded-sm">
              <FaUserTie className={`text-primary w-[60px] h-[48px]`} />
              <div>
                <p className="text-primary text-[24px] w-[172px] h-[29px]">
                  Total Customer
                </p>
                <p className="text-[32px] w-[54px] h-[38px] font-semibold">
                  {"780"}
                </p>
              </div>
            </div>
            <div>
              <h2>dckn</h2>
            </div>
            <div>
              <h2>dckn</h2>
            </div>
          </div>
        </LoaderWraperComp>
        {/* <DashboardChart /> */}
      </div>
    </>
  );
}
