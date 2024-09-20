import { Link, useRoutes } from "react-router-dom";
import Login from "./Modules/Auth/Login";
import routes from "./Routes/routes";
const App = () => {
	const routing = useRoutes(routes);
	return (
		<>
			{routing}
		</>
	);
};

export default App;
