import { createSlice } from '@reduxjs/toolkit';

const teacherAttendanceSlice = createSlice({
  name: 'teacherAttendance',
  initialState: [],
  reducers: {
    addAttendance: (state, action) => {
      state.push(action.payload);
    },
    deleteAttendance: (state, action) => {
      return state.filter((attendance) => attendance.id !== action.payload);
    },
    updateAttendance: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.findIndex((attendance) => attendance.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...newData };
      }
    },
  },
});

export const { addAttendance, deleteAttendance, updateAttendance } =
  teacherAttendanceSlice.actions;

export default teacherAttendanceSlice.reducer;
