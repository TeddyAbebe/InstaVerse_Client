import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, Button, Card, Layout, Typography, Form } from "antd";
import styles from "./styles";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { login, signup } from "../../Actions/authentication"

const { Title } = Typography;

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);

  const onsubmit = (formValues) => {
    if (isLogin) {
      dispatch(login(formValues, navigate));
    } else {
      dispatch(signup(formValues, navigate));
    }
  };
  
  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <Layout style={styles.container}>
      <Card
        style={styles.card}
        title={
          <Title level={4} style={{ textAlign: "center" }}>
            <b>{isLogin ? "Login to" : "Join"} InstaVerse</b>
          </Title>
        }
      >
        <Form
          name="authform"
          form={form}
          size="large"
          wrapperCol={{ span: 20, offset: 2 }}
          onFinish={onsubmit}
        >
          {isLogin || (
            <>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your username",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="User Name" />
              </Form.Item>
            </>
          )}

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter valid email address",
              },
            ]}
          >
            <Input
              type="email"
              prefix={<MailOutlined />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              type="password"
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          {isLogin || (
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please repeat your password",
                },
              ]}
            >
              <Input.Password
                type="password"
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button htmlType="submit" typeof="primary">
              <b>{isLogin ? "Log In" : "Join"}</b>
            </Button>

            <span style={{ margin: "0 10px 0px 20px" }}>Or</span>

            <Button type="link" onClick={switchMode}>
              {isLogin ? "Register Now !" : "have an account ?"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}

export default AuthForm;
