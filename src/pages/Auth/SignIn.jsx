import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/sign-in.png";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="min-h-screen flex justify-evenly items-center">
        <div className="flex justify-center items-center ">
          <img src={image} alt="logo" />
        </div>
        <hr className="w-[1px] h-[700px] bg-[#B6BFCE] border-none justify-center" />
        <div className="">
          <div className="w-full py-[44px] px-[44px] rounded-[16px] border border-gray-violet shadow-inner">
            <div className="pb-[30px]">
              <h1 className="text-[33px] text-center font-semibold ">
                Login to Account!{" "}
              </h1>
              <p className="text-center text-[#646464] ">
                {" "}
                Please enter your email and password to continue.{" "}
              </p>
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{
                remember: false,
              }}
              //   onFinish={onFinish}
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
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item
                className="mt-8"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="text-base font-medium text-gray-violet">
                    Remember me
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    onClick={() => navigate("/auth/forgot-password")}
                    type="link"
                    className="font-medium text-primary"
                  >
                    Forget password?
                  </Button>
                </Form.Item>
              </div>
              <div className="w-full flex justify-center ">
                <Form.Item>
                  <Button
                    // disabled={isLoading}
                    // loading={isLoading}
                    // type="primary"
                    size="large"
                    htmlType="submit"
                    className="w-[273px] lg:w-[353px] bg-primary text-white "
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
