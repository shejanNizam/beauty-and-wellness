import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import image from "../../assets/images/reset-password.png";
import PageHeading from "../../components/PageHeading";

export default function ResetPassword() {
  return (
    <>
      <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-white">
        <div className="lg:border-l border-gray-violet mx-auto w-[96%] p-[5%] ">
          <img src={image} alt="" />
        </div>
        <div className="p-[5%] lg:order-first order-last">
          <div className="w-full py-[44px] px-[44px] rounded-[16px] border border-gray-violet shadow-inner space-y-8">
            <div>
              <PageHeading backPath={-1} title={"Set new password"} />
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                className=""
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "New password",
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Set your password" />
              </Form.Item>
              <Form.Item
                className=""
                name="rePassword"
                rules={[
                  {
                    required: true,
                    message: "Confirm New password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password size="large" placeholder="Re-enter password" />
              </Form.Item>
              <div className="w-full flex justify-center pt-2 ">
                <Form.Item>
                  <Button
                    size="large"
                    htmlType="submit"
                    className="w-[253px] lg:w-[353px] px-2 bg-primary text-white "
                  >
                    Confirm
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
