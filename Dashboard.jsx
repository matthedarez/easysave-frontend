// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';

const API_BASE_URL = "https://easysave-backend-1fvh.onrender.com";

export default function Dashboard() {
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${API_BASE_URL}/api/savings`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setSavings(data))
      .catch(err => console.error('Error fetching savings:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Savings</h2>
      {savings.length === 0 ? (
        <p>No savings found.</p>
      ) : (
        <ul>
          {savings.map((item, index) => (
            <li key={index}>
              {item.name}: ₦{item.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
