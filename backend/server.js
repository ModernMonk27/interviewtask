import express from 'express';
import mongoose from 'mongoose';
import { Teacher,Student,HourlyAttendance,DailyAttendance } from './Models/DailyAttendence.js';
import { markDailyAttendance,markHourlyAttendance,createTeacher,createStudent } from './RouterController/AttendenceController.js';
// import cors from 'cors';
// import  bodyParser  from 'body-parser';


// Create Express application
const app = express();
// app.use(cors);
// app.use(bodyParser.urlencoded({ extended: true }));

// // Middleware for parsing JSON bodies
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const router = express.Router();
// MongoDB connection URL
const mongoURI = 'mongodb+srv://interview:ZpzPDJT6WgMdGp8c@cluster0.lkyo20b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Routes for hourly attendance



router.post('/hourly', markHourlyAttendance);

// Routes for daily attendance
router.post('/daily', markDailyAttendance);

// Route to create a new teacher
router.post('/teacher', createTeacher);

// Route to create a new student
router.post('/student', createStudent);
app.use('/api',router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





