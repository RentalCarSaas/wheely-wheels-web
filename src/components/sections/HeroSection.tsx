
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { WheelLogo } from '@/components/ui/WheelLogo';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-background opacity-10" />
      
      {/* Floating Wheel Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-20 left-10 opacity-20 rtl:left-auto rtl:right-10">
        <WheelLogo className="animate-float" />
      </div>
      <div className="hidden md:block absolute bottom-20 right-10 opacity-20 rtl:right-auto rtl:left-10" style={{ animationDelay: '1s' }}>
        <WheelLogo className="animate-float" />
      </div>
      <div className="hidden lg:block absolute top-1/2 left-1/4 opacity-15 rtl:left-auto rtl:right-1/4" style={{ animationDelay: '2s' }}>
        <WheelLogo className="animate-float" />
      </div>

      <Container className="text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Logo */}
          <div className="mb-6 sm:mb-8">
            <WheelLogo className="mx-auto mb-4 scale-125 sm:scale-150" animate />
          </div>

          {/* Hero Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight px-2">
            {t('hero.title').split(' ').map((word, index, array) => {
              if (word === 'Car' && array[index + 1] === 'Rentals') {
                return (
                  <React.Fragment key={index}>
                    <span className="gradient-text">{word} {array[index + 1]}</span>
                    <br className="hidden sm:block" />
                  </React.Fragment>
                );
              }
              if (word === 'Rentals') {
                return null; // Skip as it's already rendered with 'Car'
              }
              return word + ' ';
            })}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-500 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="w-full sm:w-auto min-w-[200px] bg-accent text-white hover:bg-accent/90"
            >
              {t('hero.getStartedFree')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-w-[200px]"
            >
              {t('common.learnMore')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-sm sm:text-base text-charcoal-500 mb-4 sm:mb-6 px-4">{t('hero.trustIndicator')}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 rtl:space-x-reverse opacity-60 px-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-charcoal-500 text-center">
                  {t('hero.enterprisesOnboarded')}
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-300" />
              <div className="flex items-center space-x-4">
                <div className="text-xl sm:text-2xl font-bold text-accent">50K+</div>
                <div className="text-xs sm:text-sm text-charcoal-500 text-center">
                  {t('hero.carsManaged')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
