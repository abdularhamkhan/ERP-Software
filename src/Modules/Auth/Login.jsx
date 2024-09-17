import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import AuthLayout from "./AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <Link to="/login">
        <LoginForm />
        <h1>Hey</h1>
      </Link>
    </AuthLayout>
  );
};

export default Login;
