import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Sparkles } from 'lucide-react';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(100% 100% at 50% 100%, var(--Gradients-Main-Color-4, #FF9875) 0%, var(--Gradients-Main-Color-3, #B452FF) 15%, var(--Gradients-Main-Color-2, #673DE6) 30%, var(--neutral--800, #1a1b1e) 80%)`
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-3"
          >
            ¡Bienvenido!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base"
          >
            Has completado el desafío. Ahora descubre más información.
          </motion.p>
        </div>
        
        {/* Option Cards */}
        <div className="space-y-4">
          {/* About Topic Card */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/about-topic')}
            className="w-full group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 active:scale-95"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex-1 text-left">
                <h2 className="text-xl font-bold text-white mb-1">
                  Conoce más sobre la Santísima Cruz de Chalpón
                </h2>
                <p className="text-white/70 text-sm">
                  Descubre información detallada sobre el tema del puzzle.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>
          
          {/* About Us Card */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => navigate('/about-us')}
            className="w-full group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 active:scale-95"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex-1 text-left">
                <h2 className="text-xl font-bold text-white mb-1">
                  Conoce más sobre nosotros
                </h2>
                <p className="text-white/70 text-sm">
                  Descubre quiénes somos y dónde encontrarnos.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>
        </div>
        
        {/* Back to Puzzle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/')}
          className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold transition-all duration-200 active:scale-95"
        >
          Volver al Puzzle
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;