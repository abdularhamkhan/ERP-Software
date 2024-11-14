# ERP

## A Web-App to Manage Offices in Remote Settings

This ERP (Enterprise Resource Planning) system is designed specifically for remote companies to streamline HR, Finance, and Employee management. The system includes comprehensive features such as employee onboarding, attendance tracking with real-time check-in/check-out, leave management, self and team lead appraisals, payroll processing, expense tracking, and financial reporting. 

The ERP is developed with a focus on a responsive, intuitive, and interactive user experience, using modern web development technologies for maximum scalability and performance.

### Key Features

- **Employee Onboarding**: Simplified process for adding new employees to the system.
- **Attendance Tracking**: Real-time check-in/check-out to track attendance accurately.
- **Leave Management**: Easy leave application and management for employees and managers.
- **Appraisals**: Self-assessments and team lead appraisals to manage performance.
- **Payroll Processing**: Automated payroll generation based on attendance and appraisals.
- **Expense Tracking**: Track expenses and reimbursements.
- **Financial Reporting**: Comprehensive reports to provide financial insights and accountability.

### Tech Stack

- **Frontend**: Built with **React**, providing an intuitive, interactive, and responsive UI.
- **Backend**: **Supabase** is used for data management, leveraging PostgreSQL, real-time updates, secure authentication, and file storage.
- **Deployment**: Deployed on **Vercel** or **Netlify** for seamless scalability, continuous integration, and reliable hosting.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/erp.git
   cd erp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Supabase:**
   - Sign up on [Supabase](https://supabase.io/) and create a new project.
   - Copy the Supabase API URL and Key, and add them to a `.env` file:
     ```plaintext
     REACT_APP_SUPABASE_URL=your_supabase_url
     REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

### Scripts

The following scripts are available in the `package.json` file:

- **`npm run dev`**: Start the development server with `nodemon`.
- **`npm run build`**: Build the app for production using Vite.
- **`npm run lint`**: Run ESLint to check for code quality issues.
- **`npm run preview`**: Preview the production build using Vite.

### Dependencies

- **React**: For building the user interface.
- **React Router DOM**: For routing.
- **Tailwind CSS**: To create a responsive and modern design.
- **Radix UI**: For accessible and customizable UI components.
- **Supabase**: For backend services, including PostgreSQL database, real-time features, and authentication.
- **Zod**: For schema validation.
- **ESLint**: To maintain code quality.

### DevDependencies

- **Vite**: For fast builds and modern tooling.
- **Nodemon**: For hot-reloading in development.
- **PostCSS & Autoprefixer**: For CSS processing.
- **Tailwind CSS**: For styling.

### Project Structure

```plaintext
├── src
│   ├── components   # Reusable components
│   ├── pages        # Page components for each route
│   ├── services     # Supabase service functions and API handlers
│   └── utils        # Utility functions and helper scripts
├── public           # Static assets
├── package.json     # Project configurations
└── tailwind.config.js # Tailwind CSS configuration
```

### Deployment

The project can be deployed on **Vercel** or **Netlify**:

1. Push your repository to GitHub or any Git hosting service.
2. Connect your Git repository to Vercel or Netlify.
3. Configure environment variables for `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY`.

### License

This project is licensed under the MIT License.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.