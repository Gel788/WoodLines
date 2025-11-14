export default function Footer() {
  return (
    <footer className="bg-white border-t border-wood-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-normal text-wood-900 mb-4">
              WoodLines
            </h3>
            <p className="text-wood-600 text-sm">
              Индивидуальная мебель на заказ в Москве и Московской области
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-wood-900 mb-4">Услуги</h4>
            <ul className="space-y-2 text-wood-600 text-sm">
              <li>Кухни</li>
              <li>Шкафы</li>
              <li>Гардеробные</li>
              <li>Встраиваемая мебель</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-normal text-wood-900 mb-4">Контакты</h4>
            <ul className="space-y-2 text-wood-600 text-sm">
              <li>Москва и МО</li>
              <li>
                <a href="tel:+79104332332" className="hover:text-wood-900 transition-colors">
                  +7 910 433 2332
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-200 pt-8 text-center text-wood-400 text-sm">
          <p>&copy; {new Date().getFullYear()} WoodLines. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
