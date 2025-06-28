
import { useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Celero Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Products
            </button>
            <a
              href="https://www.linkedin.com/company/celerodigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </button>
              <a
                href="https://www.linkedin.com/company/celerodigital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
