# Frontend Developer Intern Assignment

A full-stack web application built as part of the **Frontend Developer Intern assignment**.  
This project focuses on frontend development using React, supported by a basic backend that provides authentication and CRUD APIs.

---

## 🚀 Features

### Authentication
- User registration
- User login & logout
- JWT-based authentication
- Protected dashboard routes

### Dashboard
- Display user profile
- Create, view, search, and delete tasks
- Responsive UI for all screen sizes

### Security
- Password hashing
- JWT token validation
- Protected API routes
- Basic error handling and validation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS / Material UI / Bootstrap
- Axios

### Backend
- Node.js & Express
- JWT Authentication
- bcrypt for password hashing

### Database
- MongoDB

---

## 📂 Project Structure

```
project-root/
│
├── frontend/        # React frontend
│
├── backend/         # Backend API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── postman/
│   └── task-api.postman_collection.json
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd project-root
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
PORT=5000
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm start
```

Backend runs on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🔌 API Endpoints (Sample)

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Tasks (Protected)
- `GET /api/tasks`
- `POST /api/tasks`
- `DELETE /api/tasks/:id`

📌 All APIs are tested and available via the Postman collection.

---

## 🧪 API Testing
A Postman collection is included in the repository:
```
/postman/task-api.postman_collection.json
```

Import this file into Postman to test all APIs.

---

## 📈 Scalability & Production Considerations

If this application were to be deployed to production, the following improvements would be applied:

- Frontend code splitting and lazy loading for improved performance
- Serving static assets via a CDN
- Stateless JWT authentication to support horizontal scaling
- API versioning for backward compatibility
- Database indexing and pagination for large datasets
- Environment-based configuration management
- Containerized deployment using Docker
- HTTPS enforcement and secure token handling
- CI/CD pipelines for automated testing and deployment

---

## 👩‍💻 Author

**Aishwarya Garikapati**  
📧 garikapatiaishwarya22@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/aishwaryag22

---

## 📄 Notes
This project was completed as part of a Frontend Developer Intern evaluation assignment within the given time constraints.  
The primary focus was on building a functional, secure frontend integrated with a backend, demonstrating authentication, protected routes, and CRUD operations.  
The application is designed to run locally, with scalability considerations documented for future production deployment.
