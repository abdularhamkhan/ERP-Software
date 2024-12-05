import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw", 
				margin: "0 auto", // Center horizontally
				padding: 0,
				boxSizing: "border-box", // Ensure padding doesn’t affect width
			}}
		>
			<LoginForm />
		</div>
	);
};

export default Login;
