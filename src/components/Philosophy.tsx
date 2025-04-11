
import React from 'react';
import { BookOpen, Lightbulb, Star, Users, Heart, Brain } from 'lucide-react';

interface PhilosophyCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center p-3 rounded-full ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const philosophyItems = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "Lifelong Learning",
    description: "Education is a journey that extends beyond the classroom, fostering curiosity and a love for continuous learning.",
    color: "bg-blue-100"
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-green-600" />,
    title: "Critical Thinking",
    description: "Encouraging students to question, analyze, and develop problem-solving skills that serve them throughout life.",
    color: "bg-green-100"
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: "Inclusive Environment",
    description: "Creating a classroom where diversity is celebrated and every student feels respected, valued, and supported.",
    color: "bg-purple-100"
  },
  {
    icon: <Star className="h-6 w-6 text-amber-600" />,
    title: "Individual Potential",
    description: "Recognizing and nurturing each student's unique talents, interests, and learning styles.",
    color: "bg-amber-100"
  },
  {
    icon: <Heart className="h-6 w-6 text-red-600" />,
    title: "Emotional Intelligence",
    description: "Developing social-emotional skills alongside academic knowledge for well-rounded personal growth.",
    color: "bg-red-100"
  },
  {
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: "Creative Expression",
    description: "Encouraging artistic exploration and original thinking as essential components of education.",
    color: "bg-indigo-100"
  },
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 top-20 -left-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-secondary/5 bottom-20 -right-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-medium mb-2">My Approach</h4>
          <h2 className="text-3xl font-bold mb-6">Teaching Philosophy</h2>
          <p className="text-muted-foreground">
            My educational approach is built on these core principles that guide how I create meaningful learning experiences for every student in my classroom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
