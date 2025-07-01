
import React from 'react';
import { Container } from '@/components/ui/Container';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              About Wheely
            </h2>
            <div className="space-y-6 text-lg text-charcoal-500 leading-relaxed">
              <p>
                Founded in 2020, Wheely was born from the frustration of managing corporate vehicle fleets 
                with outdated tools and fragmented systems. Our founders, veterans of the automotive and 
                tech industries, recognized the need for a comprehensive, modern solution.
              </p>
              <p>
                Today, we're proud to serve over 500 enterprises worldwide, managing more than 50,000 
                vehicles across diverse industries. From small businesses to Fortune 500 companies, 
                our platform scales to meet the unique needs of every organization.
              </p>
              <p>
                Our mission is simple: to revolutionize fleet management through intelligent automation, 
                real-time insights, and user-centric design. We believe that managing a fleet should be 
                as easy as a few clicks, not a complex operational burden.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-charcoal-500">Enterprises Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-sm text-charcoal-500">Vehicles Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-charcoal-500">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Team Photo Mosaic */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal">Sarah Chen</p>
                    <p className="text-sm text-charcoal-500">CEO & Founder</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-sm">Mike Rodriguez</p>
                    <p className="text-xs text-charcoal-500">CTO</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-sm">Emily Johnson</p>
                    <p className="text-xs text-charcoal-500">Head of Product</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-accent-200 to-accent-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal">David Park</p>
                    <p className="text-sm text-charcoal-500">VP Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
