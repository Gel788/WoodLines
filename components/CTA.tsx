'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      id="contacts"
      className="relative py-32 bg-wood-900 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-800 via-wood-900 to-wood-800">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23ffffff' opacity='0.05'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23ffffff' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-wood-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Готовы начать?
            </h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Свяжитесь с нами для консультации и расчета стоимости вашего проекта
            </p>

            <div className="space-y-4">
              <motion.a
                href="tel:+79999999999"
                className="block px-8 py-4 bg-white text-wood-900 rounded-lg text-lg font-semibold hover:bg-wood-50 transition-colors shadow-xl text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Позвонить нам
              </motion.a>
              <motion.a
                href="mailto:info@woodlines.ru"
                className="block px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Написать нам
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📍</span>
                <h3 className="font-serif font-bold text-lg">Адрес</h3>
              </div>
              <p className="text-white/90">Москва и Московская область</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⏰</span>
                <h3 className="font-serif font-bold text-lg">Рабочие часы</h3>
              </div>
              <p className="text-white/90">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-white/90">Сб-Вс: 10:00 - 18:00</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✅</span>
                <h3 className="font-serif font-bold text-lg">Гарантия</h3>
              </div>
              <p className="text-white/90">На все виды работ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
