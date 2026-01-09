import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navigation = ({ title, backTo = '/' }) => {
  const navigate = useNavigate();
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(backTo)}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </motion.button>
        
        <h1 className="text-xl font-bold text-white flex-1">{title}</h1>
      </div>
    </motion.nav>
  );
};

export default Navigation;