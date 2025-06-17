import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Настройка сервера",
      description:
        "Полная настройка и конфигурация вашего SA:MP/CRMP сервера с оптимизацией производительности",
      features: [
        "Базовая настройка",
        "Оптимизация",
        "Безопасность",
        "Мониторинг",
      ],
    },
    {
      icon: "Package",
      title: "Кастомные моды",
      description:
        "Разработка и интеграция уникальных модификаций с регулярными обновлениями",
      features: [
        "Уникальные скрипты",
        "Регулярные обновления",
        "Тестирование",
        "Поддержка",
      ],
    },
    {
      icon: "Monitor",
      title: "Лаунчеры",
      description:
        "Создание персонализированных лаунчеров с расширенными возможностями кастомизации",
      features: ["Брендинг", "Автообновление", "Интеграция", "UX/UI дизайн"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для создания и поддержки игровых серверов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon as any}
                    className="w-6 h-6 text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
