import { Button } from "antd";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import hostImage from "../../../assets/images/beautician.png";
import C_LOGO from "../../../assets/images/c_logo.png";
import HostReviewSlider from "../../../Components/User/HostReviewSlider";

export default function BeauticianDetails() {
  const navigate = useNavigate();
  const handleBlock = () => {
    Swal.fire({
      title: "Block Beautician !!",
      text: "Are you sure you want to block this Beautician?",
      showCancelButton: true,
      confirmButtonText: "     Block    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // removeFromLocalStorage("token", null);
        // navigate("/auth");
      }
    });
  };
  const hostData = {
    id: 123,
    name: "SaloVictor ",
    email: "victor@gmail.com",
    postCode: "RE34",
    joinDate: "10-22-2024",
  };
  return (
    <div className="bg-white rounded-lg">
      <div className="bg-info py-4 px-6 rounded-t-lg flex gap-2.5 items-center text-3xl font-semibold text-white">
        <FaChevronLeft
          onClick={() => navigate(-1)}
          size={24}
          className="mt-1"
        />{" "}
        <h3>Beautician Details</h3>
      </div>
      <h3 className="text-2xl font-medium mt-8 ml-8">Personal Information:</h3>
      <div className="grid grid-cols-2 gap-2 p-6 items-start">
        <div>
          <div className="space-y-[18px] divide-y divide-gray-100 p-6 border border-gray-100 rounded-lg shadow-sm pb-5 mt-5 text-[#646464] ">
            <div className="flex justify-between">
              <p>Beautician ID :</p>
              <p className="">#{hostData.id}45456</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Beautician Name :</p>
              <p className="">{hostData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email :</p>
              <p className="">{hostData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Post Code :</p>
              <p className="">{hostData.postCode}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Total Completed Service :</p>
              <p className="">9</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date :</p>
              <p className="">{hostData.joinDate}</p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6">
          <div className="flex justify-start items-center gap-4">
            <img src={C_LOGO} alt="C" />
            <p className="text-xl font-semibold">Celebrity</p>
          </div>
          <div className=" grid grid-cols-2 gap-3 items-start pt-5">
            <div className="space-y-2 text-opacity-95">
              <h1 className="font-bold text-4xl text-slate-600 font-sans">
                4.0
              </h1>
              <Rating
                // className=""
                readonly
                placeholderRating={3}
                emptySymbol={<BsStarFill className="text-gray-400 mx-0.5" />}
                placeholderSymbol={
                  <BsStarFill className="text-yellow-400 mx-0.5" />
                }
                fullSymbol={<BsStarFill className="text-yellow-400 mx-0.5" />}
              />
              <p className="text-[#6B6B6B] font-medium">52 Reviws</p>
              <div className="text-lg text-[#646464] font-medium">
                <h4>Details :</h4>
              </div>
              <p className="text-sm text-[#646464]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia harum nihil ea. Harum quos iste similique earum, numquam
                sequi dolor quia rerum hic suscipit. Totam nulla deleniti
                perspiciatis autem voluptatum! Reiciendis magnam, perferendis id
                iusto doloribus laborum asperiores dfsdfs dfsaf jkhjkh hjg autem
                obcaecati.
              </p>
            </div>
            <div className="space-y-3.5">
              <div className=" flex justify-center items-start ">
                <img src={hostImage} alt="" />
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="flex items-center gap-1.5 text-primary font-semibold">
                  Available:
                </p>
                <p className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#E8EAEF] rounded-md">
                  <FcClock size={19} /> <span>8:00 AM</span>
                </p>
                <p className="text-[#142F62]">to</p>
                <p className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#E8EAEF] rounded-md">
                  <FcClock size={19} /> <span>7:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-395px)] overflow-hidden relative px-2 py-4">
        <HostReviewSlider />
      </div>
      <div className="flex justify-center py-6 px-11 gap-x-6 mt-6">
        <Button
          style={{
            background: "#008E3B",
          }}
          size="large"
          type="primary"
          className="w-3/12 text-lg"
        >
          Ok
        </Button>
        <Button
          onClick={handleBlock}
          style={{
            background: "#EE1D23",
          }}
          size="large"
          type="primary"
          className="w-3/12  text-lg"
        >
          Block
        </Button>
      </div>
    </div>
  );
}
