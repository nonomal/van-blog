import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <LoginForm
        onFinish={async (values) => {
          console.log(values);
          return true;
        }}
      ></LoginForm>
    </div>
  );
};
export default LoginPage;
