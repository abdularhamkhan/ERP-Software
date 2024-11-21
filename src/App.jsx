import { useRoutes } from "react-router-dom";
import routes from "./Routes/routes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./components/ui/app-sidebar";


const App = () => {
	const routing = useRoutes(routes);
	return (
		<>
			<SidebarProvider>
				<AppSidebar/>
				<main>
					<SidebarTrigger />
					{routing}
				</main>
			</SidebarProvider>
		</>
	);
};

export default App;
