import { IoIosArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const data = [
  { id: 1, text: "A beautician request for money withdraw" },
  { id: 2, text: "A Salon owner are registar Now" },
  { id: 3, text: "A Client pay now for confirmation" },
  { id: 4, text: "An user joined in Web." },
  { id: 5, text: "An user joined in website." },
];

export default function Notifications() {
  return (
    <>
      <div className=" bg-white h-[788px]">
        <div className="flex justify-start items-center gap-2 bg-primary rounded-t-md h-[80px] text-white text-[32px] font-bold pl-8 ">
          <IoIosArrowBack />
          <h2>All Notifications</h2>
        </div>

        <div className="ml-6 ">
          {data?.map((d) => (
            <div
              key={d.id}
              className=" flex justify-start items-center gap-4 m-4"
            >
              <IoNotificationsOutline className=" bg-[#E8EAEF] w-[40px] h-[40px] rounded-sm text-primary p-2" />
              <div>
                <p className=" text-xl ">{d.text}</p>
                <p className=" text-[#989898] "> {"Fri, 12:00 pm"} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
