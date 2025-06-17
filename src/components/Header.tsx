import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Gamepad2" className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              GameServer Pro
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Возможности
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-purple-600 hover:bg-purple-700">
            Начать проект
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
