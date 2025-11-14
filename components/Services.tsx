'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Кухни',
    description: 'Индивидуальные кухни на заказ с учетом ваших пожеланий и особенностей помещения',
    image: '/images/Кухня.jpg',
  },
  {
    title: 'Шкафы',
    description: 'Встроенные и корпусные шкафы для любой комнаты с оптимальным использованием пространства',
    image: '/images/шкафы.jpg',
  },
  {
    title: 'Гардеробные',
    description: 'Современные гардеробные системы с продуманной организацией пространства',
    image: '/images/гардеробные .jpg',
  },
  {
    title: 'Встраиваемая мебель',
    description: 'Мебель, идеально вписывающаяся в интерьер и максимально использующая площадь',
    image: '/images/Встраиваемая мебель.JPG',
  },
]

export default function Services() {
  return (
    <section
      id="services"
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
            Наши услуги
          </h2>
          <p className="text-xl text-wood-600 max-w-2xl mx-auto">
            Полный цикл работ от замера до установки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative aspect-[4/3] mb-6 rounded-lg overflow-hidden shadow-lg bg-wood-100"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <motion.div
                  className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/20 transition-colors duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {service.title}
                  </h3>
                </motion.div>
              </motion.div>
              <p className="text-wood-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
