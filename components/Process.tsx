'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Консультация',
    description: 'Обсуждение ваших пожеланий и требований к мебели',
    gradient: 'from-wood-500 to-wood-700',
  },
  {
    number: '02',
    title: 'Замер',
    description: 'Выезд специалиста для точного замера помещения',
    gradient: 'from-wood-600 to-wood-800',
  },
  {
    number: '03',
    title: 'Проектирование',
    description: 'Разработка дизайн-проекта с 3D-визуализацией',
    gradient: 'from-wood-700 to-wood-900',
  },
  {
    number: '04',
    title: 'Изготовление',
    description: 'Производство мебели на собственном производстве',
    gradient: 'from-wood-800 to-wood-900',
  },
  {
    number: '05',
    title: 'Установка',
    description: 'Доставка и профессиональная установка "под ключ"',
    gradient: 'from-wood-600 to-wood-800',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-wood-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-wood-600 max-w-2xl mx-auto">
            Простой и понятный процесс от первого звонка до готовой мебели
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: 'spring',
              }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className={`relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br ${step.gradient}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='%23ffffff'/%3E%3Cpath d='M0 0l80 80M80 0L0 80' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
                  backgroundSize: '80px 80px'
                }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl">{index === 0 ? '💬' : index === 1 ? '📏' : index === 2 ? '✏️' : index === 3 ? '🔨' : '🚚'}</span>
                </div>
              </motion.div>
              <div className="w-full lg:w-1/2">
                <div className="text-6xl font-serif font-bold text-wood-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-3xl font-serif font-bold text-wood-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-wood-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
