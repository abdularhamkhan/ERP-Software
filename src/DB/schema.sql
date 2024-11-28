-- 1-Employees Table
create table
  employees (
    employee_id SERIAL primary key,
    name text not null,
    dob DATE not null,
    ssn text not null unique,
    email text not null unique,
    phone text not null,
    address text,
    position_id int references positions (position_id) on delete set null,
    constraint email_domain_check check (
      email like '%@lhr.nu.edu.pk'
      or email like '%@nu.edu.pk'
    ),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 2-Admins
create table
  admins (
    admin_id SERIAL primary key,
    name text not null,
    dob DATE not null,
    ssn text not null unique,
    email text not null unique,
    phone text not null,
    address text,
    role text not null, -- e.g., 'CEO', 'CFO', 'COO'
    constraint email_domain_check check (
      email like '%@lhr.nu.edu.pk'
      or email like '%@nu.edu.pk'
    ),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 3-Hr Manager
create table
  hr (
    employee_id int primary key references employees (employee_id) on delete cascade,
    email text not null unique,
    constraint email_domain_check check (
      email like '%@lhr.nu.edu.pk'
      or email like '%@nu.edu.pk'
    ),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 4-Attendance
create table
  attendance (
    attendance_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    date DATE not null check (date <= current_date),
    status text not null check (status in ('Present', 'Absent', 'Leave', 'Late')),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 5-Leaves
create table
  leaves (
    leave_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    date DATE not null check (date >= current_date),
    reason text default 'emergency' check (reason in ('emergency', 'sick', 'travel')),
    status text not null default 'not-approved' check (status in ('approved', 'not-approved')),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 6-Appraisals
create table
  appraisals (
    appraisal_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    appraisal_date timestamp default now(), -- Automatically fills the current date and time
    self_appraisal numeric(3, 2) check (self_appraisal between 0 and 5),
    hr_appraisal numeric(3, 2) check (hr_appraisal between 0 and 5),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 7-Salaray
create table
  salaries (
    salary_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    salary_date timestamp default now(), -- Automatically fills the current date and time
    salary_amount numeric(10, 2) not null,
    bonus numeric(10, 2) default 0,
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 8-Loan Table
create table
  loan (
    loan_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    loan_application_number uuid default gen_random_uuid () not null unique,
    loan_application_pdf text, -- URL to the PDF in Supabase storage
    approval_status text not null check (
      approval_status in ('pending', 'approved', 'cancel')
    ),
    total_amount numeric(10, 2) not null,
    return_amount numeric(10, 2) not null, -- Monthly return amount
    reason text not null check (reason in ('emergency', 'planned', 'study')),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 9-Insurance Table
create table
  insurance (
    insurance_id SERIAL primary key,
    employee_id int references employees (employee_id) on delete cascade,
    insurance_application_number uuid default gen_random_uuid () not null unique,
    insurance_application_pdf text, -- URL to the PDF in Supabase storage
    approval_status text not null check (
      approval_status in ('pending', 'approved', 'cancel')
    ),
    total_amount numeric(10, 2) not null,
    deposit_amount numeric(10, 2) not null, -- Monthly deposit amount
    type text not null check (
      type in ('health', 'life', 'home', 'car', 'wedding')
    ),
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 10-Departments Table
create table
  departments (
    dept_id SERIAL primary key,
    dept_name text not null unique,
    dept_lead int references employees (employee_id) on delete set null,
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );

-- 11-Positions Table
create table
  positions (
    position_id SERIAL primary key,
    position_name text not null unique,
    dept_id int references departments (dept_id) on delete set null,
    created_at timestamp default now(),
    updated_at timestamp default current_timestamp
  );