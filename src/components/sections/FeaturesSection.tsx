
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/card';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      title: 'Fleet Management',
      description: 'Real-time tracking, maintenance scheduling, and comprehensive vehicle analytics all in one intuitive dashboard.',
      highlight: 'Real-time Status'
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
          <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
          <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Role-Based Access',
      description: 'Secure, granular permissions system ensuring the right people have access to the right information and controls.',
      highlight: 'Security Shields'
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.3"/>
        </svg>
      ),
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights, automated reports, and predictive analytics to optimize your fleet operations and reduce costs.',
      highlight: 'Growing Trends'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            Powerful Features for Modern Fleet Management
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-500 max-w-3xl mx-auto">
            Everything you need to manage, monitor, and optimize your enterprise vehicle fleet in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`animate-on-scroll h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="text-center h-full flex flex-col p-4 sm:p-6">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-primary-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block px-3 sm:px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-xs sm:text-sm font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
