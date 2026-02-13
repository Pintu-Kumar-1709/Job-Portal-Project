🚀 RadiAntiX – Full Stack Job Portal

RadiAntiX is a production-style full-stack job portal built using the MERN stack.
It focuses on real-world architecture, secure authentication, scalable backend APIs, and modern UI/UX design.

🌐 Live Features

👤 Role-based Authentication (Admin / Recruiter / Job Seeker)

🔐 Secure JWT Authentication

📝 Post, Edit, Delete Jobs (Recruiter)

💼 Apply for Jobs (Job Seeker)

📊 Admin Dashboard

📂 Resume Upload System

🔎 Advanced Job Filtering & Search

📱 Fully Responsive Design

⚡ Optimized REST APIs

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

Framer Motion

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Bcrypt.js

Multer (File Upload)

🏗 System Architecture

frontend (React)
⬇
REST API (Node + Express)
⬇
MongoDB Database

Modular Folder Structure

MVC Architecture

Protected Routes

Middleware-based Authentication

🏗 Architecture Overview
React Client
     │
     ▼
Express REST API
     │
     ▼
MongoDB Database


Middleware-based protected routes

Clean modular folder structure

Secure token verification

Optimized database schema


📁 Project Structure

RadiAntiX/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── index.js
│   └── package.json
│
├── .env
└── README.md


🔑 Environment Variables

Create a .env file inside server/

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/Pintu-Kumar-1709/Job-Portal-Project.git
cd Jobs

2️⃣ Install Dependencies

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install


3️⃣ Run the Project

Backend:

nodemon backend/index.js

Frontend:

npm run dev

📸 Application Preview

🚧 Screenshots will be added soon.
Meanwhile, here’s what the interface includes:

🏠 Home Page

Modern hero section with CTA

Featured job listings

Animated UI elements (Framer Motion)

Responsive layout for all devices

💼 Job Listings Page

Advanced job filtering

Keyword-based search

Pagination support

Clean card-based UI design

👤 User Dashboard

Profile management

Applied jobs tracking

Resume upload & update system

Secure protected routes

🛠 Recruiter Panel

Post / Edit / Delete Jobs

View applicant details

Manage job status

📊 Admin Dashboard

Platform analytics overview

User management

Recruiter approvals

System-level control

🎥 Live Demo (Optional – Add After Deployment)
🔗 Live URL: Coming Soon  