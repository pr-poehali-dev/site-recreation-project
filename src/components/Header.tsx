import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Gamepad2" className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">
              GameServer Pro
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Возможности
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
            Начать проект
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
