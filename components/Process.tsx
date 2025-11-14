'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Консультация',
    description: 'Обсуждение ваших пожеланий и требований к мебели',
    image: '/images/консультация.jpg',
  },
  {
    number: '02',
    title: 'Замер',
    description: 'Выезд специалиста для точного замера помещения',
    image: '/images/замер.jpg',
  },
  {
    number: '03',
    title: 'Проектирование',
    description: 'Разработка дизайн-проекта с 3D-визуализацией',
    image: '/images/проектирование .jpg',
  },
  {
    number: '04',
    title: 'Изготовление',
    description: 'Производство мебели на собственном производстве',
    image: '/images/изготовление .jpg',
  },
  {
    number: '05',
    title: 'Установка',
    description: 'Доставка и профессиональная установка "под ключ"',
    image: '/images/установка.jpg',
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
                className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-wood-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
