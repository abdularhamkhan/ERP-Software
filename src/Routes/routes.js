import Login from "../Modules/Auth/Login";
import HrDashboard from "../Modules/HR/HrDashboard";
import AdminDashboard from "../Modules/Admin/AdminDashboard";
import EmployeeDashboard from "../Modules/Employee/EmployeeDashboard";
import Attendance from "../Modules/Employee/HR/Attendance";
import Leave from "../Modules/Employee/HR/Leave";
import Appraisal from "../Modules/Employee/HR/Appraisal";
import Loan from "../Modules/Employee/Finance/Loan";
import Insurance from "../Modules/Employee/Finance/Insurance";
import Salary from "../Modules/Employee/Finance/Salary";


const routes = [
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/hr/manager",
		element: <HrDashboard />,
		children: [
			{
				path: "hiring",
				element: <Hiring />,
			},
			{
				path: "leave",
				element: <Leaves />,
			},
			{
				path: "appraisal",
				element: <Appraisal />,
			},

		]
	},
	{
		path: "admin",
		element: <AdminDashboard />,
	},
	{
		path: "employee",
		element: <EmployeeDashboard />,
		children: [
			{
				path: "profile",
				element: <Salary />,
			},
			{
				path: "hr/attendance",
				element: <Attendance />,
			},
			{
				path: "hr/leave",
				element: <Leave />,
			},
			{
				path: "hr/selfappraisal",
				element: <Appraisal />,
			},
			{
				path: "finance/loan",
				element: <Loan />,
			},
			{
				path: "finance/insurance",
				element: <Insurance />,
			},
			{
				path: "finance/salary",
				element: <Salary />,
			},
		],
	},
];

export default routes;
