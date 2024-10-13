// src/app/driver/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DriverDashboard() {
  // Mock data for assigned rides
  const [rides, setRides] = useState([
    { id: '001', pickup: 'Location A', dropoff: 'Location B', status: 'Pending' },
    { id: '002', pickup: 'Location C', dropoff: 'Location D', status: 'In Transit' },
    { id: '003', pickup: 'Location E', dropoff: 'Location F', status: 'Completed' },
  ]);

  const [selectedRide, setSelectedRide] = useState(null);

  const handleRideClick = (ride) => {
    setSelectedRide(ride);
  };

  const handleCloseModal = () => {
    setSelectedRide(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Driver Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assigned Rides</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Ride ID</th>
              <th className="px-4 py-2">Pickup Location</th>
              <th className="px-4 py-2">Dropoff Location</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride) => (
              <tr
                key={ride.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRideClick(ride)}
              >
                <td className="px-4 py-2">{ride.id}</td>
                <td className="px-4 py-2">{ride.pickup}</td>
                <td className="px-4 py-2">{ride.dropoff}</td>
                <td className="px-4 py-2">{ride.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Live Map or Invoice */}
      {selectedRide && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-lg"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {selectedRide.status === 'In Transit' ? 'Live Location' : 'Ride Details'}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="p-4">
              {selectedRide.status === 'In Transit' ? (
                // Placeholder for Live Map
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Live Map Display Here</p>
                </div>
              ) : (
                // Placeholder for Ride Details / Invoice
                <div>
                  <p><strong>Ride ID:</strong> {selectedRide.id}</p>
                  <p><strong>Pickup Location:</strong> {selectedRide.pickup}</p>
                  <p><strong>Dropoff Location:</strong> {selectedRide.dropoff}</p>
                  <p><strong>Status:</strong> {selectedRide.status}</p>
                  {/* Additional details can be added here */}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
