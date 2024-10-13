// src/app/user/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  // Mock data for bookings
  const [bookings, setBookings] = useState([
    { id: 'A123', pickup: 'Location X', dropoff: 'Location Y', status: 'Completed' },
    { id: 'B456', pickup: 'Location Z', dropoff: 'Location W', status: 'In Transit' },
    { id: 'C789', pickup: 'Location M', dropoff: 'Location N', status: 'Pending' },
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Bookings</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Booking ID</th>
              <th className="px-4 py-2">Pickup Location</th>
              <th className="px-4 py-2">Dropoff Location</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => handleBookingClick(booking)}
              >
                <td className="px-4 py-2">{booking.id}</td>
                <td className="px-4 py-2">{booking.pickup}</td>
                <td className="px-4 py-2">{booking.dropoff}</td>
                <td className="px-4 py-2">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Live Map or Invoice */}
      {selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-lg"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {selectedBooking.status === 'Completed' ? 'Invoice Summary' : 'Live Location'}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="p-4">
              {selectedBooking.status === 'In Transit' ? (
                // Placeholder for Live Map
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Live Map Display Here</p>
                </div>
              ) : selectedBooking.status === 'Completed' ? (
                // Placeholder for Invoice Summary
                <div>
                  <p><strong>Booking ID:</strong> {selectedBooking.id}</p>
                  <p><strong>Pickup Location:</strong> {selectedBooking.pickup}</p>
                  <p><strong>Dropoff Location:</strong> {selectedBooking.dropoff}</p>
                  <p><strong>Status:</strong> {selectedBooking.status}</p>
                  <p><strong>Total Cost:</strong> $100</p>
                  {/* Additional invoice details can be added here */}
                </div>
              ) : (
                <p className="text-gray-600">Your ride is being prepared. Please check back later.</p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
