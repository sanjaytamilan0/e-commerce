import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db/db.js'; // Ensure the correct path and extension
import userRoutes from './routes/userRoute.js'; // Ensure the correct path and extension
import http from 'http'; 
import cors from 'cors';

config();
connectDB();

const app = express();

app.use(cors()); // Enable CORS
app.use(json());

app.use('/api/users', userRoutes);

const PORT = 5002;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
