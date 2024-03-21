import mongoose from "mongoose";

// Define Teacher Schema
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject : {
    type: String
  }
  // You can add more teacher fields here as needed
});

// Define Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // You can add more student fields here as needed
});

// Define Hourly Attendance Schema
const hourlyAttendanceSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  hour: {
    type: Number,
    required: true
  },
  present: {
    type: Boolean,
    default: false
  }
});

// Define Daily Attendance Schema
const dailyAttendanceSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  present: {
    type: Boolean,
    default: false
  }
});

// Create Teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);

// Create Student model
const Student = mongoose.model('Student', studentSchema);

// Create Hourly Attendance model
const HourlyAttendance = mongoose.model('HourlyAttendance', hourlyAttendanceSchema);

// Create Daily Attendance model
const DailyAttendance = mongoose.model('DailyAttendance', dailyAttendanceSchema);

export  {Teacher,Student,HourlyAttendance,DailyAttendance};
