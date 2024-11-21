//Auth
import Login from "@/Pages/Auth/Login";
import Signup from "@/Pages/Auth/Signup";
import Welcome from "@/Pages/Auth/Welcome";
import NotFound from "@/Pages/Auth/NotFound";
////////////////management
//hr
import HrDashboard from "@/Pages/Roles/Management/HrManager/HrDashboard";
import Hiring from "@/Pages/Roles/Management/HrManager/Hiring/Hiring";
import JobPosting from "@/Pages/Roles/Management/HrManager/Hiring/JobPosting";
import OnBoarding from "@/Pages/Roles/Management/HrManager/Hiring/OnBoarding";
import Leaves from "@/Pages/Roles/Management/HrManager/Leaves";
import Appraisal from "@/Pages/Roles/Management/HrManager/Appraisal";
//admin
import AdminDashboard from "@/Pages/Roles/Management/Admin/AdminDashboard";
import Admin_CFO from "@/Pages/Roles/Management/Admin/Admin_CFO";
import Admin_CEO from "@/Pages/Roles/Management/Admin/Admin_CEO";
////////////////////employee
//profile
import Profile from "@/Pages/Profile/Profile";
import ProfileSettings from "@/Pages/Profile/ProfileSettings";
import Preferences from "@/Pages/Profile/Preferences";
//dashboard
import EmployeeDashboard from "@/Pages/Roles/Employee/EmployeeDashboard";
/////Employee Affairs related to HR Module
//Attendance
import AttendanceLog from "@/Pages/Roles/Employee/HrAffairs/Attendance/AttendanceLog";
import CheckIn from "@/Pages/Roles/Employee/HrAffairs/Attendance/CheckIn";
import CheckOut from "@/Pages/Roles/Employee/HrAffairs/Attendance/CheckOut";
//leave
import LeaveApplication from "@/Pages/Roles/Employee/HrAffairs/Leave/LeaveApplication";
//self appraisal
import SelfAppraisal from "@/Pages/Roles/Employee/HrAffairs/Appraisal/SelfAppraisal";
/////Employee Affairs related to Finance Module
//Loan
import Loan from "@/Pages/Roles/Employee/FinancialAffairs/Loan/Loan";
import LoanDetails from "@/Pages/Roles/Employee/FinancialAffairs/Loan/LoanDetails";
import CheckLoanRequest from "@/Pages/Roles/Employee/FinancialAffairs/Loan/CheckLoanRequest";
import RequestLoan from "@/Pages/Roles/Employee/FinancialAffairs/Loan/RequestLoan";
//insurance
import Insurances from "@/Pages/Roles/Employee/FinancialAffairs/Insurance/Insurances";
import InsuranceApplication from "@/Pages/Roles/Employee/FinancialAffairs/Insurance/InsuranceApplication";
import InsuranceDetails from "@/Pages/Roles/Employee/FinancialAffairs/Insurance/InsuranceDetails";
//salaray
import SalaryDashboard from "@/Pages/Roles/Employee/FinancialAffairs/Salary/SalaryDashboard";


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
