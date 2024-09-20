import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col items-center content-center justify-center h-screen">
			<LoginForm />
			</div>
		</AuthLayout>
	);
};

export default Login;
