// src/app/tracking/page.js
'use client';

import { useState } from 'react';

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ trackingId });
    // Implement tracking logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Track Your Ride
        </h2>
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Tracking ID</label>
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your tracking ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Track Now
        </button>
      </form>
    </div>
  );
}
