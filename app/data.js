export const projectData = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A responsive weather application providing real-time weather data and forecasts.",
    progress: 70,
    deadline: "2024-06-15",
    status: "In Progress",
    team: [
      {
        name: "Alice Johnson",
        role: "Frontend Developer",
        img: "/female1.png",
      },
      { name: "Bob Smith", role: "Backend Developer", img: "/male1.png" },
      { name: "Charlie Brown", role: "UI/UX Designer", img: "/male2.png" },
    ],
    tasks: {
      listed: [
        {
          id: 101,
          task: "Research weather API options",
          assignedTo: "Alice Johnson",
        },
      ],
      inProgress: [
        {
          id: 102,
          task: "Develop frontend interface",
          assignedTo: "Alice Johnson",
        },
        { id: 103, task: "Set up backend server", assignedTo: "Bob Smith" },
      ],
      completed: [
        { id: 104, task: "Design wireframes", assignedTo: "Charlie Brown" },
      ],
      backlog: [
        { id: 105, task: "Implement unit tests", assignedTo: "Bob Smith" },
      ],
    },
    attachments: [
      {
        id: 1,
        name: "Wireframe Sketches",
        url: "https://example.com/weather_app_wireframes.pdf",
      },
      {
        id: 2,
        name: "API Documentation",
        url: "https://example.com/weather_app_api_documentation.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality.",
    progress: 50,
    deadline: "2024-07-20",
    status: "In Progress",
    team: [
      { name: "Eva Green", role: "Full Stack Developer", img: "/female2.png" },
      { name: "Frank White", role: "QA Engineer", img: "/male3.png" },
    ],
    tasks: {
      listed: [],
      inProgress: [
        {
          id: 202,
          task: "Develop product listing page",
          assignedTo: "Eva Green",
        },
        { id: 203, task: "Create database schema", assignedTo: "Eva Green" },
      ],
      completed: [
        { id: 204, task: "Set up project repository", assignedTo: "David Lee" },
      ],
      backlog: [
        { id: 205, task: "Implement payment gateway", assignedTo: "Eva Green" },
      ],
    },
    attachments: [
      {
        id: 3,
        name: "Database Schema",
        url: "https://example.com/ecommerce_platform_schema.pdf",
      },
      {
        id: 4,
        name: "Design Mockups",
        url: "https://example.com/ecommerce_platform_mockups.pdf",
      },
    ],
  },
  // Additional projects with attachments
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "A dashboard application for managing social media accounts and analytics.",
    progress: 80,
    deadline: "2024-08-30",
    status: "In Progress",
    team: [
      { name: "Grace Miller", role: "Project Manager", img: "/female3.png" },
      { name: "Hannah Brown", role: "Frontend Developer", img: "/male1.png" },
      { name: "Isaac Wilson", role: "Backend Developer", img: "/male2.png" },
    ],
    tasks: {
      listed: [
        {
          id: 301,
          task: "Design dashboard layout",
          assignedTo: "Hannah Brown",
        },
      ],
      inProgress: [
        {
          id: 302,
          task: "Implement user authentication",
          assignedTo: "Isaac Wilson",
        },
        {
          id: 303,
          task: "Integrate social media APIs",
          assignedTo: "Hannah Brown",
        },
      ],
      completed: [
        { id: 304, task: "Set up database", assignedTo: "Isaac Wilson" },
      ],
      backlog: [],
    },
    attachments: [
      {
        id: 5,
        name: "Dashboard Wireframes",
        url: "https://example.com/social_media_dashboard_wireframes.pdf",
      },
      {
        id: 6,
        name: "API Integration Documentation",
        url: "https://example.com/social_media_dashboard_api_documentation.pdf",
      },
    ],
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "An application for managing tasks, assigning them to team members, and tracking progress.",
    progress: 60,
    deadline: "2024-09-15",
    status: "In Progress",
    team: [
      { name: "Oliver Taylor", role: "Lead Developer", img: "/male1.png" },
      { name: "Piper Martinez", role: "UI/UX Designer", img: "/female2.png" },
    ],
    tasks: {
      listed: [
        {
          id: 401,
          task: "Define project requirements",
          assignedTo: "Oliver Taylor",
        },
      ],
      inProgress: [
        {
          id: 402,
          task: "Develop task creation feature",
          assignedTo: "Oliver Taylor",
        },
        {
          id: 403,
          task: "Design user interface",
          assignedTo: "Piper Martinez",
        },
      ],
      completed: [],
      backlog: [
        {
          id: 404,
          task: "Implement notifications system",
          assignedTo: "Oliver Taylor",
        },
      ],
    },
    attachments: [
      {
        id: 7,
        name: "Project Requirements Document",
        url: "https://example.com/task_management_app_requirements.pdf",
      },
      {
        id: 8,
        name: "UI Mockups",
        url: "https://example.com/task_management_app_ui_mockups.pdf",
      },
    ],
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "An app for tracking fitness activities, setting goals, and analyzing progress.",
    progress: 40,
    deadline: "2024-10-20",
    status: "Backlog",
    team: [
      { name: "Nathan Johnson", role: "Lead Developer", img: "/male2.png" },
      { name: "Olivia White", role: "UI/UX Designer", img: "/female1.png" },
      { name: "Patrick Brown", role: "Backend Developer", img: "/male3.png" },
    ],
    tasks: {
      listed: [
        {
          id: 501,
          task: "Research fitness tracking APIs",
          assignedTo: "Nathan Johnson",
        },
      ],
      inProgress: [],
      completed: [],
      backlog: [
        { id: 502, task: "Design user interface", assignedTo: "Olivia White" },
        {
          id: 503,
          task: "Develop backend functionality",
          assignedTo: "Patrick Brown",
        },
      ],
    },
    attachments: [
      {
        id: 9,
        name: "API Research Report",
        url: "https://example.com/fitness_tracker_api_research.pdf",
      },
      {
        id: 10,
        name: "UI Design Concepts",
        url: "https://example.com/fitness_tracker_ui_design_concepts.pdf",
      },
    ],
  },
];

export const upcoming = [
  {
    id: 1,
    title: "Daily Stand-up Meeting",
    datetime: "2024-05-28",
    location: "Zoom",
    assignedTo: "Alice Johnson",
    img: "/female1.png",
  },
  {
    id: 2,
    title: "Client Meeting",
    datetime: "2024-05-30",
    location: "Google Meet",
    assignedTo: "Bob Smith",
    img: "/male2.png",
  },
  {
    id: 3,
    title: "Code Review Session",
    datetime: "2024-06-02",
    location: "Teams",
    assignedTo: "Charlie Brown",
    img: "/male3.png",
  },
];

export const tasks = [
  {
    id: 1,
    title: "Research weather API options",
    description:
      "Investigate different weather API providers to determine the best option for the project.",
    assignedTo: "Alice Johnson",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-05-31",
    img: "/female1.png",
  },
  {
    id: 2,
    title: "Develop frontend interface",
    description:
      "Create the user interface for the weather application using HTML, CSS, and JavaScript.",
    assignedTo: "Annie Johnson",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-05",
    img: "/female2.png",
  },
  {
    id: 3,
    title: "Set up backend server",
    description:
      "Configure and deploy the backend server to handle data processing and API requests.",
    assignedTo: "Bob Smith",
    status: "Backlog",
    priority: "Medium",
    dueDate: "2024-06-10",
    img: "/male2.png",
  },
  {
    id: 4,
    title: "Design wireframes",
    description:
      "Create wireframe sketches to visualize the layout and flow of the weather application.",
    assignedTo: "Charlie Brown",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-05-25",
    img: "/male3.png",
  },
];
