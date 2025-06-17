import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для создания уникального игрового сервера
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-gray-300">@gameserver_support</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">support@gameserver.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Время работы</div>
                    <div className="text-gray-300">24/7 - всегда на связи</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-6">Начните уже сегодня</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Получите бесплатную консультацию и план развития вашего сервера.
              Наши эксперты помогут выбрать оптимальное решение.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Написать в Telegram
              </Button>
              <div className="text-sm text-gray-400">
                Ответим в течение 15 минут
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
