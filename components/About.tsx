'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Замер',
    description: 'Профессиональный замер с учетом всех нюансов помещения',
    icon: '📏',
  },
  {
    title: 'Проектировка',
    description: 'Детальная разработка проекта с 3D-визуализацией',
    icon: '✏️',
  },
  {
    title: 'Установка',
    description: 'Аккуратная и качественная установка "под ключ"',
    icon: '🔧',
  },
  {
    title: 'Собственное производство',
    description: 'Контроль качества на всех этапах изготовления',
    icon: '🏭',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-wood-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-wood-900 mb-6">
              Всё "под ключ"
            </h2>
            <div className="w-24 h-1 bg-wood-900 mb-8"></div>
            <p className="text-lg text-wood-600 leading-relaxed mb-8">
              От идеи до готового интерьера — мы берем на себя все этапы работы. 
              Собственное производство гарантирует высокое качество и соблюдение сроков.
            </p>
            <motion.a
              href="#contacts"
              className="inline-block px-8 py-4 bg-wood-900 text-white rounded-lg font-semibold hover:bg-wood-800 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-wood-700 to-wood-900"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23ffffff'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23ffffff' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-8xl">🏭</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: 'spring',
              }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold text-wood-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-wood-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
