import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/health', healthRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Task Manager API 🛠️',
    status: 'Live',
    routes: {
      auth: '/api/auth',
      tasks: '/api/tasks',
      health: '/health'
    }
  });
});


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
