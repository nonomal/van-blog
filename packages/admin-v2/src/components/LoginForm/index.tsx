import { LoginForm, ProFormText } from "@ant-design/pro-form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "@ant-design/pro-form/dist/form.css";
import "@ant-design/pro-components/dist/components.css";
export interface LoginFormProps {
  onFinish: (values: {
    username: string;
    password: string;
  }) => Promise<boolean>;
}
const LoginFormComponent = (props: LoginFormProps) => {
  return (
    <>
      <LoginForm
        logo={<img alt="logo" src="/admin/logo.svg" />}
        title="Van Blog"
        subTitle={"Van Blog 博客管理后台"}
        initialValues={{
          autoLogin: true,
        }}
        onFinish={props.onFinish}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined />,
          }}
          placeholder={"用户名"}
          rules={[
            {
              required: true,
              message: "请输入用户名！",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        />
      </LoginForm>
    </>
  );
};
export default LoginFormComponent;
