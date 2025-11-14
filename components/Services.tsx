'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Кухни',
    description: 'Индивидуальные кухни на заказ с учетом ваших пожеланий и особенностей помещения',
    gradient: 'from-wood-600 to-wood-800',
  },
  {
    title: 'Шкафы',
    description: 'Встроенные и корпусные шкафы для любой комнаты с оптимальным использованием пространства',
    gradient: 'from-wood-700 to-wood-900',
  },
  {
    title: 'Гардеробные',
    description: 'Современные гардеробные системы с продуманной организацией пространства',
    gradient: 'from-wood-500 to-wood-700',
  },
  {
    title: 'Встраиваемая мебель',
    description: 'Мебель, идеально вписывающаяся в интерьер и максимально использующая площадь',
    gradient: 'from-wood-800 to-wood-900',
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
                className={`relative aspect-[4/3] mb-6 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br ${service.gradient}`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23ffffff'/%3E%3Cpath d='M0 0l60 60M60 0L0 60' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
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
