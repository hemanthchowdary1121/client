import React, { useState } from 'react';
import MyCalendar from './MyCalendar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Repairs() {
  const [repairType, setRepairType] = useState('');
  const [repairDescription, setRepairDescription] = useState('');
  const [repairDate, setRepairDate] = useState(new Date()); // Initialize with today's date
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!repairType || !repairDescription || !repairDate || !notes) {
      alert("Please fill in all the fields.");
      return;
    }

    // Create the repair details object
    const repairDetails = {
      repairType,
      repairDescription,
      repairDate,
      notes,
    };

    try {
      // Send the data to the server via a POST request
      const response = await axios.post('http://localhost:5000/schedule/schedule', repairDetails);

      // Handle the response
      if (response.status === 201) {
        // If successful, navigate to the payment page
        navigate('/payment',  {
            state: { repairType, repairDate }  // Pass the repair details here
          });
      } else {
        alert("Failed to schedule the repair. Please try again.");
      }
    } catch (error) {
      console.error("Error while scheduling repair:", error);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <div className="repair-container">
      <h2>Schedule Your Repair</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Repair Type</label>
          <input
            type="text"
            value={repairType}
            onChange={(e) => setRepairType(e.target.value)}
            placeholder="Enter repair type (e.g., Screen Repair)"
          />
        </div>

        <div className="input-container">
          <label>Repair Description</label>
          <textarea
            value={repairDescription}
            onChange={(e) => setRepairDescription(e.target.value)}
            placeholder="Describe the issue"
          />
        </div>

        <div className="input-container">
          <label>Preferred Date</label>
          <MyCalendar selectedDate={repairDate} onDateChange={setRepairDate} />
        </div>

        <div className="input-container">
          <label>Additional Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter any additional notes"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Schedule Repair</button>
        </div>
      </form>
    </div>
  );
}

export default Repairs;
