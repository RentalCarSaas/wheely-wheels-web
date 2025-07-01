import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses starting their fleet journey',
      features: [
        'Up to 25 vehicles',
        'Basic analytics dashboard',
        'Email support',
        'Mobile app access',
        'Standard reporting'
      ],
      backFeatures: [
        'Vehicle tracking',
        'Maintenance alerts',
        'Driver management',
        'Basic integrations',
        '24/7 monitoring'
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing enterprises with expanding fleets',
      features: [
        'Up to 100 vehicles',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom reports'
      ],
      backFeatures: [
        'Real-time tracking',
        'Predictive maintenance',
        'Role-based access',
        'Advanced integrations',
        'Custom dashboards'
      ],
      popular: true,
      color: 'accent'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solution for large-scale operations',
      features: [
        'Unlimited vehicles',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      backFeatures: [
        'Multi-location support',
        'Advanced security',
        'Custom workflows',
        'Enterprise integrations',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'charcoal'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-charcoal-500 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with scalable options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`animate-on-scroll ${plan.popular ? 'transform scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card 
                className={`relative h-full group perspective-1000 ${plan.popular ? 'ring-2 ring-accent shadow-2xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Front Side */}
                <div className="group-hover:opacity-0 group-hover:rotate-y-180 transition-all duration-500 h-full">
                  <CardHeader className="text-center pt-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold text-${plan.color}`}>{plan.price}</span>
                      <span className="text-charcoal-500">{plan.period}</span>
                    </div>
                    <p className="text-charcoal-500">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-charcoal-500">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? 'default' : 'outline'} 
                      className="w-full"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>
                  </CardContent>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0 rotate-y-180 transition-all duration-500 bg-gradient-to-br from-primary to-accent p-8 text-white rounded-xl">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <ul className="space-y-3">
                    {plan.backFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal">30-Day Money Back Guarantee</p>
              <p className="text-sm text-charcoal-500">Try risk-free with full refund option</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
