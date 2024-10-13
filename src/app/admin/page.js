// src/app/admin/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  // Mock data
  const [users, setUsers] = useState([
    { id: 'U001', name: 'John Doe', email: 'john@example.com' },
    { id: 'U002', name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [drivers, setDrivers] = useState([
    { id: 'D001', name: 'Mike Johnson', vehicle: 'Truck' },
    { id: 'D002', name: 'Emily Davis', vehicle: 'Van' },
  ]);

  const [bookings, setBookings] = useState([
    { id: 'B001', user: 'John Doe', driver: 'Mike Johnson', status: 'Completed' },
    { id: 'B002', user: 'Jane Smith', driver: 'Emily Davis', status: 'In Progress' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');

  const handleRowClick = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalType('');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Users Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(user, 'user')}
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drivers Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Drivers</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Driver ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Vehicle</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr
                key={driver.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(driver, 'driver')}
              >
                <td className="px-4 py-2">{driver.id}</td>
                <td className="px-4 py-2">{driver.name}</td>
                <td className="px-4 py-2">{driver.vehicle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bookings Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bookings</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Booking ID</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Driver</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(booking, 'booking')}
              >
                <td className="px-4 py-2">{booking.id}</td>
                <td className="px-4 py-2">{booking.user}</td>
                <td className="px-4 py-2">{booking.driver}</td>
                <td className="px-4 py-2">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for User, Driver, or Booking Details */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-lg"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {modalType === 'user' ? 'User Details' : modalType === 'driver' ? 'Driver Details' : 'Booking Details'}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="p-4">
              {modalType === 'user' && (
                <div>
                  <p><strong>User ID:</strong> {selectedItem.id}</p>
                  <p><strong>Name:</strong> {selectedItem.name}</p>
                  <p><strong>Email:</strong> {selectedItem.email}</p>
                  {/* Additional user details */}
                </div>
              )}
              {modalType === 'driver' && (
                <div>
                  <p><strong>Driver ID:</strong> {selectedItem.id}</p>
                  <p><strong>Name:</strong> {selectedItem.name}</p>
                  <p><strong>Vehicle:</strong> {selectedItem.vehicle}</p>
                  {/* Additional driver details */}
                </div>
              )}
              {modalType === 'booking' && (
                <div>
                  <p><strong>Booking ID:</strong> {selectedItem.id}</p>
                  <p><strong>User:</strong> {selectedItem.user}</p>
                  <p><strong>Driver:</strong> {selectedItem.driver}</p>
                  <p><strong>Status:</strong> {selectedItem.status}</p>
                  {/* Additional booking details */}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
