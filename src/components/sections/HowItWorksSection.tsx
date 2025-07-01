
import React from 'react';
import { Container } from '@/components/ui/Container';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Subscribe to a Pack',
      description: 'Choose the perfect plan for your enterprise needs and get instant access to our platform.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Invite Your Agents',
      description: 'Add team members with role-based permissions and customize their access levels.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.001 1.001 0 0 0 19 8H5c-.55 0-1 .45-1 1s.45 1 1 1h2l-2.54 7.63A1.001 1.001 0 0 0 5 18H7.5v6h4v-6h1v6h4zM12 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'View Dashboards',
      description: 'Access real-time analytics, reports, and insights through our intuitive dashboard interface.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <Container>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-xl text-charcoal-500 max-w-3xl mx-auto">
            Get started with Wheely in three simple steps and transform your fleet management experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center animate-on-scroll`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-500 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl">
            <span className="text-lg font-medium text-charcoal">Ready to get started?</span>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-600 transition-colors"
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
