import Home from "../Home";
import Login from "../Modules/Auth/Login";

const routes = [
	{
		path: "/",
		element: <Home />,  
	},
	{
		path: "/login",
		element: <Login />,  
	},
];

export default routes;
