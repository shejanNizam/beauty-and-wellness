import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import DashboardModal from "../../../components/DashboardModal";
import LoaderWraperComp from "../../../components/LoaderWraperComp";

export default function Client() {
  const currentPage = 1;

  const searchQuery = {
    name: "Mr.X",
    date: "",
  };

  const userData = [
    {
      name: "Mr.X",
      email: "x@gmail.com",
      services: "services",
      value: 15,
    },
    {
      name: "Mr.X",
      email: "x@gmail.com",
      services: "services",
      value: currentPage,
    },
    {
      name: "Mr.X",
      email: "x@gmail.com",
      services: "services",
      value: searchQuery?.date ? searchQuery?.date : "",
    },
    {
      name: "Mr.X",
      email: "x@gmail.com",
      services: "services",
      value: searchQuery?.name ? searchQuery?.name : "",
    },
  ];

  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "key",
      key: "key",
      render: (_text, _record, index) => (
        <a>{index + 1 + (currentPage - 1) * 15}</a>
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
      title: "Taken services",
      dataIndex: "services",
      key: "services",
    },

    {
      title: "Join Date",
      key: "joinDate",
      render: (data) => <span>{new Date(data?.createdAt).toDateString()}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button type="text" shape="circle" className="px-0 py-0 text-white">
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="bg-primary rounded-lg py-[16px]">
        <div className="">
          <div className="px-6 pb-5 flex justify-between items-center">
            <h3 className="text-2xl text-white">{"Client List"}</h3>
            <div className="flex justify-end gap-x-4">
              <DatePicker
                placeholder="Date"
                style={{ width: "150px" }}
                className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
              />
              <Input
                className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
                placeholder="Client Name"
              />
              <Button
                shape="circle"
                icon={<IoSearch className="" />}
                className="bg-primary text-white border-none"
              />
            </div>
          </div>
          <LoaderWraperComp>
            <Table
              columns={columns}
              dataSource={userData?.map((data, index) => ({
                ...data,
                key: index,
              }))}
              pagination={{
                position: ["bottomCenter"],
                showQuickJumper: true,
                showSizeChanger: false,
                defaultCurrent: 1,
                pageSize: 15,
              }}
            />
          </LoaderWraperComp>
        </div>
        <DashboardModal>
          <div className="flex flex-col justify-between text-white">
            <h6 className="font-medium text-center text-lg pt-[18px]">
              User Deta ils
            </h6>
            <div className="space-y-[18px] text-sm pb-2 divide-y divide-blue-400">
              <div className="flex justify-between pt-[18px]">
                <p>User Name</p>
                <p className="font-medium">{"modalData.name"}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Email</p>
                <p className="font-medium">{"modalData.email"}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Phone Number</p>
                <p className="font-medium">{"modalData.phone" || "N/A"}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Address</p>
                <p className="font-medium">{"Dhaka, Bangladesh"}</p>
              </div>
              <div className="flex justify-between pt-[18px]">
                <p>Joining Date</p>
                <p className="font-medium">
                  {new Date("modalData?.createdAt").toDateString()}
                </p>
              </div>
            </div>
            <div className="flex justify-center py-[40px] ">
              <Button
                onClick={() => setIsModalOpen(false)}
                size="middle"
                type="primary"
                className="w-44 rounded-xl"
              >
                Okay
              </Button>
            </div>
          </div>
        </DashboardModal>
      </div>
    </>
  );
}
