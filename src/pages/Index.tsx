import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-security-gray-50 to-security-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-security-blue rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl text-security-gray-900">ООО «Фалькон-СБ»</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-security-gray-600 hover:text-security-blue transition-colors">Услуги</a>
              <a href="#about" className="text-security-gray-600 hover:text-security-blue transition-colors">О нас</a>
              <a href="#pricing" className="text-security-gray-600 hover:text-security-blue transition-colors">Тарифы</a>
              <a href="#contact" className="text-security-gray-600 hover:text-security-blue transition-colors">Контакты</a>
              <a href="tel:89995689252" className="text-security-blue font-semibold">8 (999) 568-92-52</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-security-gray-900 mb-6 leading-tight">
                Обслуживание систем безопасности
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-security-blue" size={24} />
                  <span className="text-lg text-security-gray-700">Охранно-пожарная сигнализация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Camera" className="text-security-blue" size={24} />
                  <span className="text-lg text-security-gray-700">Видеонаблюдение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Lock" className="text-security-blue" size={24} />
                  <span className="text-lg text-security-gray-700">Системы контроля и управления доступом</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-security-blue hover:bg-security-blue-600 text-white">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-security-blue text-security-blue hover:bg-security-blue-50">
                  <Icon name="Phone" size={20} className="mr-2" />
                  8 (999) 568-92-52
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/eb3867c9-911b-409a-a805-c53284a9246a.jpg" 
                alt="Система безопасности" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-security-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-security-gray-600 max-w-3xl mx-auto">
              Профессиональная команда с многолетним опытом в сфере безопасности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Award", title: "Более 10 лет на рынке", desc: "Системы безопасности" },
              { icon: "Users", title: "Опыт сотрудников", desc: "Более 20 лет" },
              { icon: "GraduationCap", title: "Постоянное обучение", desc: "Повышение квалификации" },
              { icon: "FileCheck", title: "Лицензии", desc: "На все виды услуг" },
              { icon: "Building", title: "Надежный поставщик", desc: "Госконтракты" },
              { icon: "MapPin", title: "Бесплатный выезд", desc: "Предварительные расчеты" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-security-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-security-blue" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-security-gray-900 mb-2">{item.title}</h3>
                  <p className="text-security-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-security-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-security-gray-900 mb-4">
              Как мы работаем
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Консультация", desc: "Выбор услуг и обсуждение потребностей", icon: "MessageCircle" },
              { step: "02", title: "Выезд специалиста", desc: "Бесплатная оценка объекта", icon: "Car" },
              { step: "03", title: "Проект и смета", desc: "Индивидуальная разработка решения", icon: "FileText" },
              { step: "04", title: "Договор", desc: "Заключение соглашения на обслуживание", icon: "PenTool" },
              { step: "05", title: "Установка", desc: "Монтаж и настройка оборудования", icon: "Settings" },
              { step: "06", title: "Поддержка", desc: "Ежемесячное обслуживание 24/7", icon: "Headphones" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-security-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon name={item.icon as any} className="text-security-blue" size={24} />
                          <h3 className="text-lg font-semibold text-security-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-security-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-security-gray-900 mb-4">
              Тарифы и цены
            </h2>
            <p className="text-xl text-security-gray-600">
              Выберите подходящий тариф для вашего объекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Малый", area: "до 100 м²", price: "от 5 000 ₽", features: ["Базовая сигнализация", "2-4 камеры", "Мобильное приложение"] },
              { name: "Средний", area: "100-500 м²", price: "от 15 000 ₽", features: ["Полная система", "8-12 камер", "Контроль доступа", "24/7 мониторинг"] },
              { name: "Большой", area: "500-1000 м²", price: "от 30 000 ₽", features: ["Комплексная защита", "16+ камер", "Многоуровневый доступ", "Интеграция с ОВД"] },
              { name: "Индивидуальный", area: "любая", price: "по расчету", features: ["Персональное решение", "Неограниченное количество", "Полная интеграция", "VIP поддержка"] }
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${index === 2 ? 'border-security-blue shadow-lg scale-105' : ''}`}>
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-security-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-security-gray-900">{plan.name}</CardTitle>
                  <p className="text-security-gray-600">{plan.area}</p>
                  <div className="text-3xl font-bold text-security-blue mt-4">{plan.price}</div>
                  <p className="text-sm text-security-gray-500">в месяц</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span className="text-security-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${index === 2 ? 'bg-security-blue hover:bg-security-blue-600' : 'bg-security-gray-600 hover:bg-security-gray-700'} text-white`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-security-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-security-gray-900 mb-4">
              Наши клиенты
            </h2>
            <p className="text-xl text-security-gray-600">
              Доверяют нам безопасность своих объектов
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Торговые центры", icon: "ShoppingBag" },
              { name: "Производство", icon: "Factory" },
              { name: "Заводы", icon: "Zap" },
              { name: "Застройщики", icon: "Building2" },
              { name: "Магазины", icon: "Store" },
              { name: "Образование", icon: "GraduationCap" }
            ].map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-security-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={client.icon as any} className="text-security-blue" size={32} />
                  </div>
                  <h3 className="font-medium text-security-gray-900">{client.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-security-gray-900 mb-6">
                Наше расположение
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-security-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-security-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-security-gray-900 mb-1">Адрес</h3>
                    <p className="text-security-gray-600">г. Екатеринбург, ул. Первомайская, д. 77</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-security-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-security-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-security-gray-900 mb-1">Телефон</h3>
                    <p className="text-security-gray-600">8 (999) 568-92-52</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-security-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" className="text-security-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-security-gray-900 mb-1">ИНН</h3>
                    <p className="text-security-gray-600">6686056647</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-security-gray-900">
                  Получить бесплатную консультацию
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-security-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-security-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-security-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea placeholder="Опишите ваши потребности в системе безопасности" rows={4} />
                </div>
                <Button className="w-full bg-security-blue hover:bg-security-blue-600 text-white" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-security-gray-500 text-center">
                  Мы перезвоним в течение 15 минут
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-security-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-security-blue rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <span className="font-bold text-xl">ООО «Фалькон-СБ»</span>
              </div>
              <p className="text-security-gray-300 mb-4">
                Профессиональные услуги по обслуживанию систем безопасности в Екатеринбурге
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-security-gray-300">
                <li>Охранно-пожарная сигнализация</li>
                <li>Видеонаблюдение</li>
                <li>Контроль доступа</li>
                <li>Техническое обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-security-gray-300">
                <p>г. Екатеринбург</p>
                <p>ул. Первомайская, д. 77</p>
                <p>Телефон: 8 (999) 568-92-52</p>
                <p>ИНН: 6686056647</p>
              </div>
            </div>
          </div>
          <div className="border-t border-security-gray-700 mt-8 pt-8 text-center text-security-gray-400">
            <p>&copy; 2024 ООО «Фалькон-СБ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;