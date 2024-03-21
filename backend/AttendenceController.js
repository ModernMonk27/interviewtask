import { HourlyAttendance, DailyAttendance,Teacher,Student } from '../Models/DailyAttendence.js';

// Controller function to mark hourly attendance
const markHourlyAttendance = async (req, res) => {
  try {
    // Extract data from request body
    const { teacher_id, student_id, date, hour, present } = req.body;

    // Create or update hourly attendance record
    await HourlyAttendance.findOneAndUpdate(
      { teacher: teacher_id, student: student_id, date, hour },
      { present },
      { upsert: true }
    );

    res.status(200).json({ message: 'Hourly attendance marked successfully' });
  } catch (error) {
    console.error('Error marking hourly attendance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to mark daily attendance
const markDailyAttendance = async (req, res) => {
  try {
    // Extract data from request body
    const { teacher_id, student_id, date, present } = req.body;

    // Create or update daily attendance record
    await DailyAttendance.findOneAndUpdate(
      { teacher: teacher_id, student: student_id, date },
      { present },
      { upsert: true }
    );

    res.status(200).json({ message: 'Daily attendance marked successfully' });
  } catch (error) {
    console.error('Error marking daily attendance:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// controllers/attendanceController.js



// Controller function to create a new teacher
const createTeacher = async (req, res) => {
  console.log("entered");
  try {
    console.log("ok");
    const { name } = req.body;
    const teacher = new Teacher({ name });
    await teacher.save();
    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create a new student
const createStudent = async (req, res) => {
  try {
    console.log("entered");
    const { name } = req.body;
    const student = new Student({ name });
    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export {markDailyAttendance, markHourlyAttendance,createStudent,createTeacher};
