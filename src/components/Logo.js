'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="flex items-center justify-center space-x-2"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white font-mono">Velo</h1>
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 font-mono"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        City
      </motion.h1>
    </motion.div>
  );
}
