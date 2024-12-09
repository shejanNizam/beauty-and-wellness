import { Button, DatePicker, Input, Table } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiAlertCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import idImage from "../../../assets/images/id-card.png";
import DashboardModal from "../../../Components/DashboardModal";
import { cn } from "../../../lib/utils";

export default function Client() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "key",
      key: "key",
      render: (text) => (
        <button
          onClick={(e) => {
            navigator.clipboard.writeText(e.target.innerText);
            toast.success("Copied to clipboard!", {
              position: "bottom-center",
            });
          }}
          className="outline-none active:text-primary transition-all"
        >
          {"12345678" + text}
        </button>
      ),
    },
    {
      title: "Client Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Taken Services",
      dataIndex: "useService",
      key: "useService",
    },

    {
      title: "Join Date",
      key: "joinDate",
      dataIndex: "joinDate",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-green-playground"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      key: index + 1,
      name: "Henry",
      email: "email@gmail.com",
      useService: Math.floor(Math.random() * 99)
        .toString()
        .slice(0, 2),
      phone: "+880 158448484",
      joinDate: "29 July 2024",
      _id: "12121" + index,
    });
  }

  return (
    <>
      <div className="bg-white rounded-lg py-[16px]">
        {/* <div className="w-screen overflow-x-auto"> */}
        <div className="">
          <div className="px-6 pb-5 flex justify-between items-center">
            <h3 className="text-2xl font-sans">{"Client List"}</h3>
            <div className="flex justify-end gap-x-4">
              <DatePicker
                placeholder="Date"
                style={{ width: "150px" }}
                className="custom-datepicker rounded-full text-[#222222] px-3.5 text-sm"
                onChange={onChange}
              />
              <Input
                className="focus:outline-none outline-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
                placeholder="User Name"
              />
              <Button
                className="bg-primary text-white border-none"
                type="primary"
                shape="circle"
                icon={<IoSearch className="" />}
              />
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              position: ["bottomCenter"],
              showQuickJumper: true,
            }}
          />
        </div>
        {/* verify modal */}
        <DashboardModal
          setIsModalOpen={setIsVerifyModalOpen}
          isModalOpen={isVerifyModalOpen}
          maxWidth={"400px"}
        >
          <div className="flex flex-col justify-between text-hash font-sans">
            <h6 className="font-medium text-center text-2xl py-[18px]">
              Verify Details
            </h6>
            <div className="space-y-[18px]">
              <div>
                <img
                  src={idImage}
                  alt=""
                  className="rounded-md max-h-40 mx-auto"
                />
              </div>
              <div>
                <img
                  src={idImage}
                  alt=""
                  className="rounded-md max-h-40 mx-auto"
                />
              </div>
            </div>
            <div className="flex justify-center py-4 px-6 gap-x-6 mt-4">
              <Button
                onClick={() => setIsVerifyModalOpen(false)}
                style={{
                  background: "#EE1D13",
                }}
                size="middle"
                type="primary"
                className="w-44 rounded-lg "
              >
                Cancel
              </Button>
              <Button size="middle" type="primary" className="w-44 rounded-lg ">
                Verify
              </Button>
            </div>
          </div>
        </DashboardModal>
        {/* details modal */}
        <DashboardModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          maxWidth={"800px"}
        >
          <div className="flex flex-col justify-between text-hash font-sans">
            <h6 className="font-medium text-center text-2xl pt-[18px]">
              Client Details
            </h6>
            <div className="space-y-[18px] divide-y divide-gray-100 border-b border-gray-100 pb-5 px-2">
              <div className="flex justify-between pt-[18px]">
                <p>Client ID :</p>
                <p className="">#{modalData.id}45456</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Client Name :</p>
                <p className="">{modalData.name}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Email :</p>
                <p className="">{modalData.email}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Total Use Service :</p>
                <p className="">9</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Joining Date :</p>
                <p className="">{modalData.joinDate}</p>
              </div>
            </div>
            <div className="flex justify-center py-6 px-11 gap-x-6 mt-6">
              <Button
                style={{
                  background: "#008E3B",
                }}
                size="middle"
                type="primary"
                className="w-44 rounded-lg "
              >
                Ok
              </Button>
              <Button
                style={{
                  background: "#EE1D23",
                }}
                size="middle"
                type="primary"
                className="w-44 rounded-lg "
              >
                Block
              </Button>
            </div>
          </div>
        </DashboardModal>
      </div>
    </>
  );
}
