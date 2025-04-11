
import React from 'react';
import { Sparkles, Brain, Heart, Award, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const statsItems = [
  { 
    icon: <Clock className="h-6 w-6" />, 
    value: '10+', 
    label: 'Years of Experience',
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    icon: <Users className="h-6 w-6" />, 
    value: '500+', 
    label: 'Students Taught',
    color: 'bg-green-50 text-green-600'
  },
  { 
    icon: <Award className="h-6 w-6" />, 
    value: '15+', 
    label: 'Awards & Recognitions',
    color: 'bg-purple-50 text-purple-600'
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-secondary/5 -top-20 -right-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 -bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] w-12 bg-secondary"></div>
          <h2 className="text-3xl font-bold mx-4 flex items-center">
            About Me <Sparkles className="ml-2 h-5 w-5 text-secondary" />
          </h2>
          <div className="h-[1px] w-12 bg-secondary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Teacher in classroom" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Passionate Elementary Educator</h3>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in elementary education, I specialize in creating vibrant, 
              inclusive learning environments where curiosity thrives and every child feels valued. 
              My teaching philosophy centers on the belief that education extends beyond textbooks to 
              develop critical thinking, creativity, and character.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {statsItems.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-4 rounded-lg flex flex-col items-center justify-center text-center",
                    item.color
                  )}
                >
                  {item.icon}
                  <div className="text-2xl font-bold mt-2">{item.value}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Creative Teaching</h4>
                  <p className="text-sm text-muted-foreground">
                    Using innovative methods to make learning engaging and memorable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Personalized Attention</h4>
                  <p className="text-sm text-muted-foreground">
                    Tailoring approaches to meet each student's unique learning needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
