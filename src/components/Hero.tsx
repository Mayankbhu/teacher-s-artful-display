
import React from 'react';
import { ArrowDown } from 'lucide-react';
import Book3D from './Book3D';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      <div className="absolute w-64 h-64 rounded-full bg-primary/10 top-20 -left-20 animate-float-slow"></div>
      <div className="absolute w-48 h-48 rounded-full bg-secondary/10 bottom-20 -right-10 animate-float"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h4 className="text-secondary font-medium mb-2 animate-fade-in">Hello, I'm</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-shadow">
            Sarah Johnson
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary">
            Elementary School Teacher
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Dedicated to creating an engaging, inclusive classroom where every student can discover their potential through creative teaching methods and personalized learning approaches.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-md custom-rotate">
            <Book3D />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <a href="#about" className="text-primary hover:text-primary/80 transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
