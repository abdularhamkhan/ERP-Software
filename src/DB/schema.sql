
-- 1-Employees Table
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    dob DATE NOT NULL,
    ssn TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    address TEXT,
    dept_id INT REFERENCES departments (dept_id) ON DELETE SET NULL,
    position_id INT REFERENCES positions (position_id) ON DELETE SET NULL,
    CONSTRAINT email_domain_check CHECK (
        email LIKE '%@lhr.nu.edu.pk' OR email LIKE '%@nu.edu.pk'
    )
);

-- 2-Admins
CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    dob DATE NOT NULL,
    ssn TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    address TEXT,
    role TEXT NOT NULL -- e.g., 'CEO', 'CFO', 'COO'
    CONSTRAINT email_domain_check CHECK (
        email LIKE '%@lhr.nu.edu.pk' OR email LIKE '%@nu.edu.pk'
    )
);

-- 3-Hr Manager
CREATE TABLE hr (
    employee_id INT PRIMARY KEY REFERENCES employees (employee_id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    CONSTRAINT email_domain_check CHECK (
        email LIKE '%@lhr.nu.edu.pk' OR email LIKE '%@nu.edu.pk'
    )
);

-- 4-Attendance
CREATE TABLE attendance (
    attendance_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    date DATE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Present', 'Absent', 'Leave', 'Late'))
);

-- 5-Leaves
CREATE TABLE leaves (
    leave_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    date DATE NOT NULL,
    reason TEXT DEFAULT 'emergency' CHECK (reason IN ('emergency', 'sick', 'travel')),
    status TEXT NOT NULL CHECK (status IN ('approved', 'not-approved'))
);

-- 6-Appraisals
CREATE TABLE appraisals (
    appraisal_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    appraisal_date TIMESTAMP DEFAULT NOW(), -- Automatically fills the current date and time
    year INT GENERATED ALWAYS AS (EXTRACT(YEAR FROM appraisal_date)::INT) STORED,
    month INT GENERATED ALWAYS AS (EXTRACT(MONTH FROM appraisal_date)::INT) STORED,
    self_appraisal NUMERIC(3, 2) CHECK (self_appraisal BETWEEN 0 AND 5),
    hr_appraisal NUMERIC(3, 2) CHECK (hr_appraisal BETWEEN 0 AND 5)
);

-- 7-Salaray
CREATE TABLE salaries (
    salary_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    month INT NOT NULL CHECK (month BETWEEN 1 AND 12),
    year INT NOT NULL,
    salary_amount NUMERIC(10, 2) NOT NULL,
    bonus NUMERIC(10, 2) DEFAULT 0
);




-- 8-Loan Table
CREATE TABLE loan (
    loan_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    loan_application_number TEXT NOT NULL UNIQUE,
    loan_application_pdf TEXT, -- URL to the PDF in Supabase storage
    approval_status TEXT NOT NULL CHECK (approval_status IN ('pending', 'approved', 'cancel')),
    total_amount NUMERIC(10, 2) NOT NULL,
    return_amount NUMERIC(10, 2) NOT NULL, -- Monthly return amount
    reason TEXT NOT NULL CHECK (reason IN ('emergency', 'planned', 'study'))
);


-- 9-Insurance Table
CREATE TABLE insurance (
    insurance_id SERIAL PRIMARY KEY,
    employee_id INT REFERENCES employees (employee_id) ON DELETE CASCADE,
    insurance_application_number TEXT NOT NULL UNIQUE,
    insurance_application_pdf TEXT, -- URL to the PDF in Supabase storage
    approval_status TEXT NOT NULL CHECK (approval_status IN ('pending', 'approved', 'cancel')),
    total_amount NUMERIC(10, 2) NOT NULL,
    deposit_amount NUMERIC(10, 2) NOT NULL, -- Monthly deposit amount
    type TEXT NOT NULL CHECK (type IN ('health', 'life', 'home', 'car', 'wedding'))
);


-- 10-Departments Table
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name TEXT NOT NULL UNIQUE,
    dept_lead INT REFERENCES employees (employee_id) ON DELETE SET NULL
);

-- 11-Positions Table
CREATE TABLE positions (
    position_id SERIAL PRIMARY KEY,
    position_name TEXT NOT NULL UNIQUE,
    dept_id INT REFERENCES departments (dept_id) ON DELETE CASCADE
);
