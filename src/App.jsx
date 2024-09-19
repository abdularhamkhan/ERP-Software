import { Link, useRoutes } from "react-router-dom";
import Login from "./Modules/Auth/Login";
import routes from "./Routes/routes";
const App = () => {
	const routing = useRoutes(routes);
	return (
		<>
			<h2 className="text-yellow-600 font-bold text-5xl">{routing}</h2>
		</>
	);
};

export default App;
