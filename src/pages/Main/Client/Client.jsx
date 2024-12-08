import { Button, DatePicker, Input, Table } from "antd";
import { IoSearch } from "react-icons/io5";
import DashboardModal from "../../../components/DashboardModal";
import LoaderWraperComp from "../../../components/LoaderWraperComp";

export default function Client() {
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
        <Button
          // onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-white"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="bg-primary rounded-lg py-[16px]">
        {/* <div className="w-screen overflow-x-auto"> */}
        <div className="">
          <div className="px-6 pb-5 flex justify-between items-center">
            <h3 className="text-2xl text-white">{"Client List"}</h3>
            <div className="flex justify-end gap-x-4">
              <DatePicker
                placeholder="Date"
                style={{ width: "150px" }}
                className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
                // onChange={(_date, dateString) => {
                //   setSearchQuery({
                //     ...searchQuery,
                //     dateFilter: dateString,
                //     // dateFilter: new Date(dateString).getTime(),
                //   });
                // }}
              />
              <Input
                // onChange={(e) =>
                //   setSearchQuery({ ...searchQuery, nameFilter: e.target.value })
                // }
                className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
                placeholder="Client Name"
              />
              <Button
                // onClick={() =>
                //   setSearchQuery((c) => ({
                //     ...c,
                //     name: c?.nameFilter,
                //     date: c?.dateFilter,
                //   }))
                // }
                shape="circle"
                icon={<IoSearch className="" />}
                className="bg-primary text-white border-none"
              />
            </div>
          </div>
          <LoaderWraperComp
          // isLoading={false}
          // isError={isError}
          >
            <Table
              // loading={isLoading}
              columns={columns}
              // dataSource={userData?.data?.map((data, index) => ({
              //   ...data,
              //   key: index,
              // }))}
              pagination={{
                position: ["bottomCenter"],
                showQuickJumper: true,
                showSizeChanger: false,
                // total: userData?.pagination?.totalData || 0,
                defaultCurrent: 1,
                // current: currentPage,
                // onChange: (page) => setCurrentPage(page),
                pageSize: 15,
              }}
            />
          </LoaderWraperComp>
        </div>
        <DashboardModal
        // setIsModalOpen={setIsModalOpen}
        // isModalOpen={isModalOpen}
        >
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
