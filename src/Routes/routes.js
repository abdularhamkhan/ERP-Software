//Auth
import Login from "@/Modules/Auth/Login";
import Signup from "@/Modules/Auth/Signup";
import Welcome from "@/Modules/Auth/Welcome";
import NotFound from "@/Modules/Auth/NotFound";
////////////////management
//hr
import HrDashboard from "@/Modules/Roles/Management/HrManager/HrDashboard";
import Hiring from "@/Modules/Roles/Management/HrManager/Hiring/Hiring";
import JobPosting from "@/Modules/Roles/Management/HrManager/Hiring/JobPosting";
import OnBoarding from "@/Modules/Roles/Management/HrManager/Hiring/OnBoarding";
import Leaves from "@/Modules/Roles/Management/HrManager/Leaves";
import Appraisal from "@/Modules/Roles/Management/HrManager/Appraisal";
//admin
import AdminDashboard from "@/Modules/Roles/Management/Admin/AdminDashboard";
////////////////////employee
//profile
import Profile from "@/Modules/Profile/Profile";
import ProfileSettings from "@/Modules/Profile/ProfileSettings";
import Preferences from "@/Modules/Profile/Preferences";
//dashboard
import EmployeeDashboard from "@/Modules/Roles/Employee/EmployeeDashboard";
/////Employee Affairs related to HR Module
//Attendance
import AttendanceLog from "@/Modules/Roles/Employee/HR/Attendance/AttendanceLog";
import CheckIn from "@/Modules/Roles/Employee/HR/Attendance/CheckIn";
import CheckOut from "@/Modules/Roles/Employee/HR/Attendance/CheckOut";
//leave
import LeaveApplication from "@/Modules/Roles/Employee/HR/Leave/LeaveApplication";
//self appraisal
import SelfAppraisal from "@/Modules/Roles/Employee/HR/Appraisal/SelfAppraisal";
/////Employee Affairs related to Finance Module
//Loan
import Loan from "@/Modules/Roles/Employee/Finance/Loan/Loan";
import LoanDetails from "@/Modules/Roles/Employee/Finance/Loan/LoanDetails";
import CheckLoanRequest from "@/Modules/Roles/Employee/Finance/Loan/CheckLoanRequest";
import RequestLoan from "@/Modules/Roles/Employee/Finance/Loan/RequestLoan";
//insurance
import Insurances from "@/Modules/Roles/Employee/Finance/Insurance/Insurances";
import InsuranceApplication from "@/Modules/Roles/Employee/Finance/Insurance/InsuranceApplication";
import InsuranceDetails from "@/Modules/Roles/Employee/Finance/Insurance/InsuranceDetails";
//salaray
import SalaryDashboard from "@/Modules/Roles/Employee/Finance/Salary/SalaryDashboard";


// 30 pages/components

const routes = [
	{
		path:"*",
		element:<NotFound/>
	},
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/welcome",
		element: <Welcome />,
	},
	{
		path: "/hr/manager",
		element: <HrDashboard />,
		children: [
			{
				path: "hiring",
				element: <Hiring />,
				children:[
					{
						path:"jobs",
						element:<JobPosting/>,
					},
					{
						path:"onboard",
						element:<OnBoarding/>
					}
				]
			},
			{
				path: "leaves",
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
				element: <Profile />,
				children:[
					{
						path:"settings",
						element:<ProfileSettings/>,
					},
					{
						path:"preferences",
						element:<Preferences/>
					}
				]
			},
			{
				path: "hr/attendance",
				element: <AttendanceLog />,
				children:[
					{
						path:"checkin",
						element:<CheckIn/>
					},
					{
						path:"checkout",
						element:<CheckOut/>
					},
				]
			},
			{
				path: "hr/leave",
				element: <LeaveApplication />,
			},
			{
				path: "hr/selfappraisal",
				element: <SelfAppraisal />,
			},
			{
				path: "finance/insurance",
				element: <Insurances />,
				children: [
					{
						path: "application",
						element: <InsuranceApplication />,
					},
					{
						path: "details",
						element: <InsuranceDetails />,
					},
				]
			},
			{
				path: "finance/loan",
				element: <Loan />,
				children: [
					{
						path: "details",
						element: <LoanDetails />,
					},
					{
						path: "staus",
						element: <CheckLoanRequest />,

					},
					{
						path: "request",
						element: <RequestLoan />,
					},
				]
			},
			{
				path: "finance/salary",
				element: <SalaryDashboard />,
			},
		],
	},
];

export default routes;
