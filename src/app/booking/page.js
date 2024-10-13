// app/booking/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Booking() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicle, setVehicle] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pickup, dropoff, vehicle });
    // Call your booking API here
    router.push('/confirmation'); // Redirect to a confirmation page
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Book Your Ride
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Pickup Location</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Dropoff Location</label>
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter dropoff location"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Vehicle Type</label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a vehicle</option>
            <option value="Van">Van</option>
            <option value="Truck">Truck</option>
            <option value="Bike">Bike</option>
          </select>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Confirm Booking
        </motion.button>
      </motion.form>
    </div>
  );
}
