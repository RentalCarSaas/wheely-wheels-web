
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WheelLogo } from '@/components/ui/WheelLogo';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('header.features'), href: '#features' },
    { label: t('header.howItWorks'), href: '#how-it-works' },
    { label: t('header.pricing'), href: '#pricing' },
    { label: t('header.about'), href: '#about' },
    { label: t('header.contact'), href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <WheelLogo animate />
            <span className="text-2xl font-bold text-charcoal">Wheely</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-charcoal hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <Button 
              className="bg-accent text-white hover:bg-accent/90"
              onClick={() => scrollToSection('#contact')}
            >
              {t('common.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-charcoal hover:text-primary transition-colors duration-200 font-medium rtl:text-right"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-4 mt-4">
                <LanguageSwitcher />
                <Button 
                  className="w-full bg-accent text-white hover:bg-accent/90"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('common.getStarted')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
