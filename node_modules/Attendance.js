// models/Attendance.js

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['IN', 'OUT'], required: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
