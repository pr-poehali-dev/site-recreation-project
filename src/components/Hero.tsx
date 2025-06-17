import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Создайте свой
            <span className="text-purple-400 block">SA:MP/CRMP сервер</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Мы предоставляем услуги для создания своего сервера, который по
            достоинству оценит ваша аудитория. Лучшие моды с частыми
            обновлениями и лаунчеры с обширной кастомизацией.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            >
              <Icon name="Rocket" className="mr-2" />
              Запустить сервер
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">100+</div>
              <div className="text-gray-300">Готовых модов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-300">Техподдержка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">99%</div>
              <div className="text-gray-300">Время работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
