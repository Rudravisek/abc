import React from 'react';
import { ShoppingCart, TrendingUp, Users, MessageSquare, ArrowRight, Target, BarChart, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-primary text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xl font-bold">GrowthCommerce</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your E-commerce Business With Data-Driven Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We help e-commerce businesses scale through strategic marketing, optimization, and technology solutions.
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Transforming E-commerce Businesses Into Market Leaders
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At GrowthCommerce, we believe that every e-commerce business has the potential to become a market leader. Our mission is to unlock that potential through data-driven strategies, cutting-edge technology, and proven growth methodologies.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">300%</div>
                  <div className="text-sm text-gray-600">Average Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Strategic Focus</h3>
                    <p className="text-gray-600">We develop targeted strategies that align with your business goals and market position.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <BarChart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-600">Every strategy is backed by comprehensive data analysis and market research.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Global Expertise</h3>
                    <p className="text-gray-600">Our team brings international e-commerce experience across various markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Growth Strategy</h3>
              <p className="text-gray-600">Custom-tailored strategies to scale your e-commerce business effectively.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Customer Acquisition</h3>
              <p className="text-gray-600">Data-driven marketing strategies to attract and convert quality customers.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Optimization</h3>
              <p className="text-gray-600">Continuous improvement of your store's performance and conversion rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Ready to Scale Your E-commerce Business?</h2>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2">
            <span>Contact Us Today</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xl font-bold">GrowthCommerce</span>
            </div>
            <div className="text-gray-400">
              © 2024 GrowthCommerce. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;