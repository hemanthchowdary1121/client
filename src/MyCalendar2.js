import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

function MyCalendar({ selectedDate, onDateChange }) {
  const today = new Date();
  
  // Disable dates after today
  const handleDateChange = (newDate) => {
    if (newDate >= today) {
        onDateChange(newDate); // Update the selected date
      } else {
        alert("You cannot select a date in the past.");
      }
  };

  return (
    <div style={{ height: '300px', width: '77%', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={today}
      />
    </div>
  );
}

export default MyCalendar;
