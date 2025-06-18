import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Игровой мод Arizona Games",
      description:
        "Уникальный игровой мод с 3D персонажами и современной графикой для захватывающего игрового процесса",
      image:
        "https://cdn.poehali.dev/files/3bf72eed-066a-4229-aab8-9cd5a34db67c.png",
      price: "2,500₽",
      features: [
        "3D персонажи",
        "Современная графика",
        "Уникальный геймплей",
        "Техподдержка",
      ],
      badge: "Хит продаж",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовые продукты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные игровые моды и решения для вашего сервера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-lg font-bold">
                  {product.price}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
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

                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Купить
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Eye" className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
