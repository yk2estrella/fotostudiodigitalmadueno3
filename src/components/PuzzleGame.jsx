import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import img1 from '/img/img1.jpg';

const cols = 3;
const rows = 4;
const totalPieces = cols * rows;

const PuzzleGame = () => {
  const navigate = useNavigate();
  const hideTimerRef = useRef(null);

  const initializePuzzle = () => {
    const pieces = Array.from({ length: totalPieces }, (_, i) => ({
      id: i,
      currentPosition: i,
      correctPosition: i,
    }));

    const shuffled = [...pieces];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i].currentPosition, shuffled[j].currentPosition] =
        [shuffled[j].currentPosition, shuffled[i].currentPosition];
    }
    return shuffled;
  };

  const [pieces, setPieces] = useState(initializePuzzle);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [completedPieces, setCompletedPieces] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    const correct = pieces.filter(
      p => p.currentPosition === p.correctPosition
    ).length;

    setCompletedPieces(correct);

    if (correct === totalPieces && !isCompleted) {
      setIsCompleted(true);
      setShowCongrats(true);

      hideTimerRef.current = setTimeout(() => {
        setShowCongrats(false);
        hideTimerRef.current = null;
      }, 5000);
    }
  }, [pieces, isCompleted]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, []);

  const handleDragStart = (e, piece) => {
    setDraggedPiece(piece);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, targetPiece) => {
    e.preventDefault();
    if (!draggedPiece || draggedPiece.id === targetPiece.id) {
      setDraggedPiece(null);
      return;
    }

    setPieces(prev => {
      const newPieces = [...prev];
      const di = newPieces.findIndex(p => p.id === draggedPiece.id);
      const ti = newPieces.findIndex(p => p.id === targetPiece.id);

      const temp = newPieces[di].currentPosition;
      newPieces[di].currentPosition = newPieces[ti].currentPosition;
      newPieces[ti].currentPosition = temp;

      return newPieces;
    });

    setDraggedPiece(null);
  };

  const resetPuzzle = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    setPieces(initializePuzzle());
    setIsCompleted(false);
    setShowCongrats(false);
    setCompletedPieces(0);
  };

  const sortedPieces = [...pieces].sort(
    (a, b) => a.currentPosition - b.currentPosition
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(100% 100% at 50% 100%, #FF9875 0%, #B452FF 15%, #673DE6 30%, #1a1b1e 80%)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
        style={{ width: 'min(420px, 92vw)' }}
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-2xl font-bold text-white mb-2">
            ¿Quieres conocer el antiguo camino de la Stma Cruz de Chalpón?
          </h1>
          <p className="text-white/80 text-sm">
            Arrastra y suelta las piezas para completar el puzzle
          </p>
        </div>

        {/* PROGRESO */}
        <div className="mb-6 bg-white/10 rounded-full p-1">
          <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{
                width: `${(completedPieces / totalPieces) * 100}%`
              }}
            />
            <div className="relative h-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {completedPieces}/{totalPieces} piezas completadas
              </span>
            </div>
          </div>
        </div>

        {/* PUZZLE */}
        <div
          className="bg-white/5 rounded-2xl p-2 shadow-2xl"
          style={{ aspectRatio: `${cols} / ${rows}` }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gap: '0.5rem',
              height: '100%'
            }}
          >
            {sortedPieces.map(piece => {
              const row = Math.floor(piece.id / cols);
              const col = piece.id % cols;
              const isCorrect =
                piece.currentPosition === piece.correctPosition;

              const stepX = 100 / (cols - 1);
              const stepY = 100 / (rows - 1);

              return (
                <motion.div
                  key={piece.id}
                  draggable={!isCompleted}
                  onDragStart={(e) => handleDragStart(e, piece)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, piece)}
                  className={`relative rounded-lg overflow-hidden cursor-move ${
                    draggedPiece?.id === piece.id ? 'opacity-50 scale-95' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${col * stepX}% ${row * stepY}%`
                  }}
                >
                  {/* CHECK VERDE */}
                  {isCorrect && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* REINICIAR */}
        <button
          onClick={resetPuzzle}
          className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-semibold"
        >
          Reiniciar Puzzle
        </button>

        {/* OMITIR / CONTINUAR */}
        <AnimatePresence>
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => navigate('/welcome')}
            className="mt-3 w-full py-3 bg-white text-black rounded-full text-lg font-semibold"
          >
            {isCompleted ? 'Continuar' : 'Omitir'}
          </motion.button>
        </AnimatePresence>
      </motion.div>

      {/* FELICITACIÓN */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-center shadow-2xl text-white max-w-sm mx-4"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">¡Felicidades!</h2>
              <p>¡Completaste el puzzle del antiguo camino de la Stma Cruz de Chalpón! 🎉</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PuzzleGame;
