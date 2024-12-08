import { IoIosArrowBack } from "react-icons/io";
import image1 from "../../../assets/services/frame1.png";
import image2 from "../../../assets/services/frame2.png";
import image3 from "../../../assets/services/frame3.png";
import image4 from "../../../assets/services/frame4.png";

export default function Category() {
  const data = [
    {
      id: 1,
      name: "Spa 1",
      image: image1,
    },
    {
      id: 2,
      name: "Spa 2",
      image: image2,
    },
    {
      id: 3,
      name: "Spa 3",
      image: image3,
    },
    {
      id: 4,
      name: "Spa 4",
      image: image4,
    },
  ];

  return (
    <>
      <div className="bg-white h-auto min-h-screen">
        <div className="sticky top-32 flex justify-start items-center gap-2 bg-primary rounded-t-md h-[80px] text-white text-[32px] font-bold pl-8 z-10">
          <IoIosArrowBack />
          <h2>Category</h2>
        </div>

        <div className="ml-6 grid grid-cols-4 gap-2 pt-12">
          {data?.map((d) => (
            <div key={d.id} className="rounded-md">
              <img src={d.image} alt="#" />
              <p className="text-2xl "> {d.name} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
