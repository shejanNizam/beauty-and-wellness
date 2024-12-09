import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
import { cn } from "../../../lib/utils";
import idImage from "../../../assets/images/id-card.png";
import toast from "react-hot-toast";

const Withdraw = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: "#S.ID",
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
          className="outline-none active:text-blue-600 transition-all"
        >
          {"454465456" + text}
        </button>
      ),
    },
    {
      title: "Host Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span>{text}$</span>,
    },
    {
      title: "Your Per(%)",
      dataIndex: "perPercent",
      key: "perPercent",
      render: (text) => <span className="pl-4">{text}</span>,
    },

    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (text) => <span>{text}$</span>,
    },
    {
      title: "Action",
      key: "paymentRequest",
      render: (data) => (
        <Button
          type={data.paymentRequest === "Pending" ? "primary" : "text"}
          onClick={() => {
            if (data.paymentRequest === "Pending") showModal(data);
          }}
          className={cn("w-24")}
        >
          {data.paymentRequest === "Pending" ? "Pay Now" : "Paid"}
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      key: index + 1,
      name: "John Brown",
      amount: 2000,
      payment: 900,
      perPercent: Math.floor(Math.random() * 99)
        .toString()
        .slice(0, 2),
      phone: "+880 158448484",
      paymentRequest: (index * 11) % 2 === 0 ? "Pending" : "Accepted",
      joinDate: "16 Apr 2024",
      _id: "12112121" + index,
    });
  }
  console.log(modalData)
  return (
    <div className="bg-white rounded-lg py-[16px]">
      {/* <div className="w-screen overflow-x-auto"> */}
      <div className="">
        <div className="px-6 pb-5 pt-1 flex justify-between items-center">
          <h3 className="text-2xl font-sans">{"Withdraw request"}</h3>
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
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        maxWidth={"850px"}
      >
        <div className="flex flex-col justify-between text-hash font-sans">
          <h6 className="font-sans text-center text-2xl pt-[15px]">
          Withdraw Request Details
          </h6>
          <div className="space-y-[18px] divide-y divide-gray-100 border-b border-gray-100 pb-5 px-2">
            <div className="flex justify-between pt-[18px]">
              <p>Host ID :</p>
              <p className="">#{modalData.id}45456</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Host Name :</p>
              <p className="">{modalData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Acconut Number :</p>
              <p className="">{"****  ****  ****  *545"}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Account Holder Name :</p>
              <p className="">Victor</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Amount Requested :</p>
              <p className="">${modalData.amount}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Date :</p>
              <p className="">{modalData.joinDate}</p>
            </div>
          </div>
          <div className="flex justify-center py-4 px-11 gap-x-6 mt-5">
            <Button
              style={{
                background: "#3A7D99",
              }}
              size="middle"
              type="primary"
              className="w-52 rounded-lg "
            >
              Accept
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Withdraw;
