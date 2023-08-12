import { configureStore } from '@reduxjs/toolkit';
import teacherAttendanceReducer from './teacherAttendanceSlice';

const store = configureStore({
  reducer: {
    teacherAttendance: teacherAttendanceReducer,
  },
});

export default store;