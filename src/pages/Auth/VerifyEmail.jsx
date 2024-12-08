import { Button } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import OTPInput from "react-otp-input";
import image from "../../assets/images/verify.png";
import PageHeading from "../../components/PageHeading";

export default function VerifyEmail() {
  return (
    <>
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-white">
        <div className="lg:border-r border-gray-violet mx-auto w-[96%] p-[5%]">
          <img src={image} alt="#" />
        </div>
        <div className="p-[5%] order-first lg:order-last">
          <div className="w-full py-[64px] px-[44px] rounded-[16px] border border-gray-violet shadow-inner space-y-5">
            <PageHeading
              backPath={"/auth/forgot-password"}
              title={"Verify Email"}
            />
            <p className=" drop-shadow text-[#464343] mt-5">
              Please check your email. We have sent a code to contact
              sf@gmail.com
            </p>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <div className="py-5 text-2xl">
                <OTPInput
                  // value={otp}
                  // onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "70px",
                    width: "70px",
                    margin: "auto",
                    // background: "#ECE8F1",
                    border: "1px solid #69458B",
                    marginRight: "auto",
                    outline: "none",
                    borderRadius: "8px",
                    color: "black",
                  }}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-black-400">Didn’t receive code?</p>
                <span
                  className="text-primary font-semibold cursor-pointer"
                  // onClick={handelResend}
                >
                  Resend
                </span>
              </div>
              <div className="w-full flex justify-center pt-5">
                <Form.Item>
                  <Button
                    // disabled={isLoading}
                    // loading={isLoading}
                    size="large"
                    htmlType="submit"
                    className="w-[253px] lg:w-[353px] px-2 bg-primary text-white"
                  >
                    Verify
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
