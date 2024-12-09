import React from "react";
import MessageUsers from "../../Components/Messages/MessageUsers";
import { Input, Button} from 'antd';
const { TextArea } = Input;


const Reports = () => {
  return (
    <div className="p-6 min-h-[83vh] bg-white rounded-lg">
      <div className="grid grid-cols-12 gap-10">
        <MessageUsers className={"col-span-4"} />
        <div className="col-span-8">
          <div className="flex justify-setart items-center gap-2 pb-2 pl-8 shadow-sm border-b border-blue-50">
            <img
              src={
                "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
              }
              alt="user"
              className="h-[55px] w-[55px] rounded-full shadow border border-blue-50"
            />
            <div className="space-y-0.5">
              <p className="font-semibold">Henry Silver</p>
              <p className="max-w-[20ch] truncate text-xs text-hash">
                Active 2 hours ago
              </p>
            </div>
          </div>
          <div className="space-y-4 text-hash ">
            <h1 className="text-xl font-serif font-medium py-10">Got a report about a Guest</h1>
            <p>Henry Silver filed a report on “Jacob Smith” for hate speech.</p>
            <div className="space-y-2">
              <p>Here Is the Complain</p>
            <TextArea rows={4} />
            </div>
            <div className="flex py-4   gap-x-6">
              <Button
                style={{
                  background: "#CEF0FF",
                  color: "black"
                }}
                size="large"
                type="primary"
                className="w-4/12 text-lg"
              >
                Ignore
              </Button>
              <Button
                // onClick={handleBlock}
                style={{
                  background: "#EE1D23",
                }}
                size="large"
                type="primary"
                className="w-4/12 text-lg"
              >
                Take Action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
