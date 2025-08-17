## Task Manager API##

A simple Task Manager REST API built with 
## Node.js, Express, MongoDB, and JWT Authentication ##.

# Features
- User registration & login with JWT authentication
- Secure routes for creating, reading, updating, and deleting tasks
- MongoDB database with Mongoose
- Passwords hashed using bcrypt

# Installation
#to use my project follow these steps and clone my project

1. Clone or download this project  
  
   git clone <my repo-url>
   cd task-manager-api
   

2. Install dependencies  
  
   npm install
   

3. Create a `.env` file in the root folder and add:
   env
   MONGO_URI=your_mongodb_connection_string 
    ## In mongodb website create a cluster and connect it you will get a url paste in `.env `file with variable name MONGO_URI  ## 
   JWT_SECRET=your_secret_key  #might be any key that is secret to you
   PORT=5000
 

4. Run the server  
 
  npm start
  
  



# API Authentication
Most routes require JWT authentication.  
When you log in, you’ll receive a token in terminal itself. Use it in headers like this:


Authorization: Bearer <your_token_here>




# API Endpoints

# 1.Auth Routes
-POST `/api/auth/register`  → Register new user  


-POST `/api/auth/login`     → Login user  


# 2. Task Routes
POST `/api/tasks`          → Create task  
 

GET `/api/tasks`          → Get all tasks  


PUT `/api/tasks/:id`       → Update a task  


DELETE `/api/tasks/:id`   → Delete a task  
  

# Example Workflow
1. Register a new user  
2. Login → Get JWT token  
3. Use token to create tasks  
4. Fetch, update, and delete tasks  



# Tech Stack
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- bcrypt for password hashing  



#  Notes
- Replace `<token>` with the JWT token from login response.  
- Replace `<task_id>` with the task ID from `GET /api/tasks`.  



