import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';

function Payment() {
  const [depositAmount, setDepositAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [address, setAddress] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [repairType, setRepairType] = useState('');
  const [repairDate, setRepairDate] = useState('');
  const navigate = useNavigate();
  
  // Use useLocation to get the state from navigation
  const location = useLocation();

  // Set repairType and repairDate from the passed state
  useEffect(() => {
    if (location && location.state) {
      setRepairType(location.state.repairType);
      setRepairDate(location.state.repairDate);
    }
  }, [location]);

  // Handle payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!depositAmount || !cardNumber || !cardCvv || !cardExpirationDate || !address || !additionalNotes) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Encrypt card details using AES (with a secret key)
    const secretKey = 'I2kdWnMKE2UzCswPxXvwRFsoZm2hV2J6'; // Make sure to store this securely, like in environment variables
    const encryptedCardNumber = CryptoJS.AES.encrypt(cardNumber, secretKey).toString();
    const encryptedCardCvv = CryptoJS.AES.encrypt(cardCvv, secretKey).toString();

    // Create the payment and repair details object
    const paymentDetails = {
      depositAmount,
      cardNumber: encryptedCardNumber,
      cardCvv: encryptedCardCvv,
      cardExpirationDate,
      address,
      additionalNotes,
      repairType,
      repairDate,
    };

    try {
      // Send the payment data to the server
      const response = await axios.post('http://localhost:5000/api/payment', paymentDetails);

      // Handle successful response
      if (response.status === 200) {
        alert("Payment successful and repair scheduled!");
        navigate('/confirmation'); // Navigate to a confirmation page (or any other page)
      } else {
        alert("Failed to process the payment. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("There was an error processing the payment. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="input-container">
          <label>Deposit Amount</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter deposit amount"
            min="1"
            required
          />
        </div>

        <div className="input-container">
          <label>Card Details</label>
          <div className="card-details-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
              maxLength="16"
              required
              style={{ width: '30%' }}
            />
            <input
              type="text"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
              placeholder="CVV"
              maxLength="3"
              required
              style={{ width: '30%' }}
            />
            <input
              type="month"
              value={cardExpirationDate}
              onChange={(e) => setCardExpirationDate(e.target.value)}
              required
              style={{ width: '30%' }}
            />
          </div>
        </div>

        <div className="input-container">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="input-container">
          <label>Additional Notes</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Enter any additional notes"
          />
        </div>

        <div className="repair-details">
          <h4>Repair Details</h4>
          <p><strong>Repair Type:</strong> {repairType}</p>
          <p><strong>Scheduled Date:</strong> {repairDate ? new Date(repairDate).toLocaleDateString() : 'N/A'}</p>
        </div>

        <div className="form-actions">
          <button type="submit">Submit Payment</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
