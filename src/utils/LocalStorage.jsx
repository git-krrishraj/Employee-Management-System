const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Banner",
        taskDescription: "Design homepage banner",
        taskDate: "2024-10-13",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
    ],
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop admin dashboard UI",
        taskDate: "2024-10-13",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database",
        taskDate: "2024-10-09",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy API",
        taskDescription: "Deploy REST API to server",
        taskDate: "2024-10-11",
        category: "Deployment",
      },
    ],
  },

  {
    id: 3,
    name: "Rohan Gupta",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation",
        taskDate: "2024-10-14",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request",
        taskDate: "2024-10-09",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance",
        taskDate: "2024-10-07",
        category: "Database",
      },
    ],
  },

  {
    id: 4,
    name: "Sneha Kapoor",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create branding assets",
        taskDate: "2024-10-15",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Check application vulnerabilities",
        taskDate: "2024-10-06",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsive layout bugs",
        taskDate: "2024-10-10",
        category: "Frontend",
      },
    ],
  },

  {
    id: 5,
    name: "Karan Mehta",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for client demo",
        taskDate: "2024-10-16",
        category: "Presentation",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Send Invoice",
        taskDescription: "Email invoice to client",
        taskDate: "2024-10-17",
        category: "Finance",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Mobile App",
        taskDescription: "Perform regression testing",
        taskDate: "2024-10-18",
        category: "Testing",
      },
    ],
  },
];
const admin = [
  {
    id: 0,
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
    if(!localStorage.getItem('employees')){
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    }
}
export const getLocalStorage=()=>{
    let employees=JSON.parse(localStorage.getItem('employees'))
    let admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}