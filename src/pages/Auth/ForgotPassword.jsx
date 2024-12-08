import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/forgot-password.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white">
        <div className="min-h-screen flex justify-evenly items-center">
          <div className="flex justify-center items-center ">
            <img src={image} alt="forgot_image" />
          </div>
          <hr className="w-[1px] h-[700px] bg-[#B6BFCE] border-none justify-center" />
          <div className="">
            <div className="w-full py-[44px] px-[44px] rounded-[16px] border border-gray-violet shadow-inner">
              <div className="pb-[30px]">
                <h1 className="text-[33px] text-center font-semibold ">
                  Forget password!
                </h1>
                <p className="text-center text-[#646464] ">
                  {" "}
                  Enter your email address to ger a verification code for
                  resetting your password.
                </p>
              </div>
              <Form
                name="normal_login"
                layout="vertical"
                initialValues={{
                  remember: false,
                }}
                className="text-start"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input a valid Email!",
                    },
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Email" />
                </Form.Item>

                <div className="w-full flex justify-center ">
                  <Form.Item>
                    <Button
                      size="large"
                      htmlType="submit"
                      className="w-[273px] lg:w-[353px] bg-primary text-white "
                    >
                      Get OTP
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
