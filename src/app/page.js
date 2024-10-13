// app/page.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50">
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to <span className="text-blue-600">VeloCity</span>
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your seamless and reliable logistics platform. Book a ride, track your deliveries, and manage your logistics effortlessly.
      </motion.p>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/booking"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book a Ride
        </Link>
        <Link
          href="/tracking"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Track Your Ride
        </Link>
      </motion.div>
    </div>
  );
}
