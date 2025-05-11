'use client'; // Only if you're using Next.js App Router

import { motion } from 'framer-motion';

export default function SlideUpBox({children}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}     // Starts 100px below with 0 opacity
      animate={{ y: 0, opacity: 1 }}       // Animates to position with full opacity
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-6 text-white rounded-md shadow-lg"
      style={{overflow:"hidden"}}
    >
     {children}
    </motion.div>
  );
}
