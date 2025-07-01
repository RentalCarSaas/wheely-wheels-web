
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { WheelLogo } from '@/components/ui/WheelLogo';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-background opacity-10" />
      
      {/* Floating Wheel Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <WheelLogo className="animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20" style={{ animationDelay: '1s' }}>
        <WheelLogo className="animate-float" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-15" style={{ animationDelay: '2s' }}>
        <WheelLogo className="animate-float" />
      </div>

      <Container className="text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Logo */}
          <div className="mb-8">
            <WheelLogo className="mx-auto mb-4 scale-150" animate />
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
            Streamlining{' '}
            <span className="gradient-text">Car Rentals</span>
            <br />
            for Enterprises of All Sizes
          </h1>

          <p className="text-xl md:text-2xl text-charcoal-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower your business with our comprehensive fleet management platform. 
            Simplify operations, reduce costs, and scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg" 
              onClick={scrollToContact}
              className="min-w-[200px]"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px]"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-charcoal-500 mb-6">Trusted by leading enterprises worldwide</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-charcoal-500">Enterprises<br />Onboarded</div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-charcoal-500">Cars<br />Managed</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
