'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Главная', href: '#home' },
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Процесс', href: '#process' },
    { label: 'Контакты', href: '#contacts' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-wood-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            className={`text-2xl font-serif font-bold transition-colors ${
              isScrolled ? 'text-wood-900' : 'text-white'
            }`}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.95 }}
          >
            WoodLines
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 text-sm font-medium uppercase tracking-wider ${
                  isScrolled
                    ? 'text-wood-700 hover:text-wood-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <motion.a
              href="#contacts"
              className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 uppercase tracking-wider rounded-lg ${
                isScrolled
                  ? 'bg-wood-900 text-white hover:bg-wood-800'
                  : 'bg-white text-wood-900 hover:bg-wood-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-wood-800' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-wood-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-wood-700 hover:text-wood-900 transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacts"
                className="block px-6 py-2 bg-wood-900 text-white rounded-sm text-center text-sm font-medium uppercase tracking-wider hover:bg-wood-800 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
