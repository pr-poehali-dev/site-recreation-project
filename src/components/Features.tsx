import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстрый запуск",
      description:
        "Запустите свой сервер за 24 часа с нашими готовыми решениями",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Многуровневая защита от DDoS атак и взломов",
    },
    {
      icon: "Users",
      title: "Сообщество",
      description: "Поддержка игрового сообщества и модерация",
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description: "Детальная статистика игроков и производительности",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка на русском языке",
    },
    {
      icon: "Smartphone",
      title: "Мобильное управление",
      description: "Управляйте сервером с любого устройства",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Преимущества, которые делают ваш сервер лучшим в своей категории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Icon
                  name={feature.icon as any}
                  className="w-8 h-8 text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
