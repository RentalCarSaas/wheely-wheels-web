
import React from 'react';
import { Container } from '@/components/ui/Container';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              About Wheely
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-charcoal-500 leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-xs sm:text-sm text-charcoal-500">Enterprises Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-xs sm:text-sm text-charcoal-500">Vehicles Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-charcoal-500">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Team Photo Mosaic */}
          <div className="animate-on-scroll px-4" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              <div className="space-y-3 sm:space-y-4">
                <div className="h-36 sm:h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-sm sm:text-base">Sarah Chen</p>
                    <p className="text-xs sm:text-sm text-charcoal-500">CEO & Founder</p>
                  </div>
                </div>
                <div className="h-24 sm:h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">Mike Rodriguez</p>
                    <p className="text-xs text-charcoal-500">CTO</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div className="h-24 sm:h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">Emily Johnson</p>
                    <p className="text-xs text-charcoal-500">Head of Product</p>
                  </div>
                </div>
                <div className="h-36 sm:h-48 bg-gradient-to-br from-accent-200 to-accent-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-charcoal text-sm sm:text-base">David Park</p>
                    <p className="text-xs sm:text-sm text-charcoal-500">VP Engineering</p>
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
