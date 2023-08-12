
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addAttendance,deleteAttendance} from '../rtk/teacherAttendanceSlice';

const TeacherAttendanceForm = () => {
  const dispatch = useDispatch();
  const teacherAttendance = useSelector(
    (state) => state.teacherAttendance
  );

  const [newAttendance, setNewAttendance] = useState({
    teacherName: '',
    date: '',
    present: false,
  });

  const handleAddAttendance = () => {
    dispatch(addAttendance(newAttendance));
    setNewAttendance({
      teacherName: '',
      date: '',
      present: false,
    });
  };

  const handleDeleteAttendance = (id) => {
    dispatch(deleteAttendance(id));
  };



  return (
    <div className='all'>
      <h2>Saint Thomas School Teacher Attendance Form</h2>
      <div className='space'>
        <label className='in'>Teacher Name:</label>
        <input className='input' type="text"value={newAttendance.teacherName} onChange={(e) =>  setNewAttendance({
              ...newAttendance, teacherName: e.target.value,
            })
          }
        />
      </div>
      <div className='space'>
        <label className='in'>Date:</label>
        <input className="input2" type="date" value={newAttendance.date} onChange={(e) =>setNewAttendance({
              ...newAttendance, date: e.target.value,
            })
          }
        />
      </div>
      <div className='space'>
        <label className='in'>Time:</label>
        <input className="input3" type="time" value={newAttendance.time} onChange={(e) =>setNewAttendance({
              ...newAttendance, time: e.target.value,
            })
          }
        />
      </div>

      <div className='space'>
        <label className='in'>Class:</label>
        <input className='input4' type="text"value={newAttendance.class} onChange={(e) =>  setNewAttendance({
              ...newAttendance, class: e.target.value,
            })
          }
        />
      </div>
      <div className='space'>
        <label className='in'>Subject:</label>
        <input className='input5' type="text"value={newAttendance.subject} onChange={(e) =>  setNewAttendance({
              ...newAttendance, subject: e.target.value,
            })
          }
        />
      </div>
      <div className='space'>
        <label className='in'>Present:</label>
        <input type="checkbox"
          checked={newAttendance.present} onChange={(e) =>  setNewAttendance({  ...newAttendance,
              present: e.target.checked,
            })
          }
        />
        <p>(Tick the box to represent Present)</p>
        <button  className='btn' onClick={handleAddAttendance}>Add Attendance</button>
      </div>
      
   <br/>
   <hr/>
      <h2>Attendance Records</h2>
      <ol>
        {teacherAttendance.map((attendance) => (
          <li key={attendance.id}>
            <span className='space1'>{attendance.teacherName}</span>
            <span className='space1'>{attendance.date}</span>
            <span className='space1'>{attendance.time}</span>
            <span className='space1'>{attendance.class}</span>
            <span className='space1'>{attendance.subject}</span>
            <span className='space1'>Present: {attendance.present ? 'Yes' : 'No'}</span>
            <button  className='space1'  onClick={() => handleDeleteAttendance(attendance.id)}>
              Delete
            </button>
          
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TeacherAttendanceForm;
