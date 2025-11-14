'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-wood-900 via-wood-800 to-wood-700 flex items-center justify-center"
        >
          {/* Main Logo Animation */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-serif font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,255,255,0.8)',
                    '0 0 20px rgba(255,255,255,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                WoodLines
              </motion.h1>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-wood-600 rounded-full overflow-hidden mt-8">
              <motion.div
                className="h-full bg-gradient-to-r from-wood-300 via-white to-wood-300"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              className="text-wood-200 mt-4 text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Загрузка...
            </motion.p>
          </div>

          {/* Decorative Circles */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-wood-500 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-wood-400 rounded-full"
            animate={{ rotate: -360, scale: [1, 0.8, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
