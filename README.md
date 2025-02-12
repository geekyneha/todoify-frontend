# 📝 Todoify Frontend

The Todoify Frontend is a user-friendly web application designed to help users efficiently manage their tasks. Built with React, it offers a seamless interface for creating, viewing, updating, and deleting to-do items. The application communicates with the Todoify Backend to perform CRUD (Create, Read, Update, Delete) operations on tasks. It utilizes Axios for making HTTP requests to the backend API. 

## 🚀 Live Application

Experience the live application here: [https://todoify-frontend.vercel.app/](https://todoify-frontend.vercel.app/)

## 🌟 Features

- **Add Tasks**: ➕ Quickly add new tasks to your to-do list.
- **View Tasks**: 👀 See all your tasks in a clean and organized layout.
- **Mark as Completed**: ✅ Easily mark tasks as completed to keep track of your progress.
- **Delete Tasks**: 🗑️ Remove tasks that are no longer needed.

## 🧩 How It Works

The Todoify Frontend communicates with the Todoify Backend to perform CRUD (Create, Read, Update, Delete) operations on to-do tasks. It utilizes React for building the user interface and Axios for making HTTP requests to the backend API.

## 🔗 Backend

The Todoify Backend is deployed and accessible at: [https://todoify-backend.onrender.com](https://todoify-backend.onrender.com)

For more details, visit the backend repository: [https://github.com/geekyneha/todoify-backend](https://github.com/geekyneha/todoify-backend)

## 🛠️ Technologies Used

- **React**: ⚛️ A JavaScript library for building user interfaces.
- **Axios**: 🌐 Promise-based HTTP client for the browser and Node.js.
- **CSS**: 🎨 Styling the application for a responsive and user-friendly experience.

## 📄 API Endpoints

The frontend interacts with the following backend API routes:

| Method | Endpoint      | Description               |
|--------|---------------|---------------------------|
| GET    | `/get`        | 📄 Fetch all to-do tasks  |
| POST   | `/add`        | ➕ Add a new to-do task    |
| PUT    | `/update/:id` | ✅ Mark task as completed  |
| DELETE | `/delete/:id` | 🗑️ Delete a task           |

### 📥 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/geekyneha/todoify-frontend.git

2. **Navigate to the project directory**:

   ```bash
   cd todify-frontend

3. **Install dependencies**:

   ```bash
   npm install

5. **Start the server**:


    ```bash
    npm start 
   

Happy coding! 🚀
