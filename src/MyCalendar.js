import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar


function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the selected date
  };

  return (
    <div style={{height:'300px', width:'77%', marginLeft:'auto', marginRight:'auto', marginTop:'40px'}}>
      <Calendar onChange={handleDateChange} value={date} minDate={new Date(2023, 0, 1)} maxDate={new Date(2024, 11, 31)} />
    </div>
  );
}

export default MyCalendar;
