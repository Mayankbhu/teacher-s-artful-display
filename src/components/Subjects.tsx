
import React from 'react';
import { Calculator, BookOpen, Globe, Flask, Palette, Music } from 'lucide-react';

interface SubjectCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  percentage: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ icon, title, description, percentage }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
      <div className="flex items-start mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Proficiency</span>
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const subjectsData = [
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    title: "Language Arts",
    description: "Reading comprehension, writing, grammar, and literature",
    percentage: 95,
  },
  {
    icon: <Calculator className="h-5 w-5 text-primary" />,
    title: "Mathematics",
    description: "Arithmetic, problem-solving, and early algebra concepts",
    percentage: 90,
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    title: "Social Studies",
    description: "History, geography, cultures, and civic education",
    percentage: 92,
  },
  {
    icon: <Flask className="h-5 w-5 text-primary" />,
    title: "Science",
    description: "Natural sciences, experiments, and environmental studies",
    percentage: 88,
  },
  {
    icon: <Palette className="h-5 w-5 text-primary" />,
    title: "Art Education",
    description: "Visual arts, crafts, and creative expression",
    percentage: 85,
  },
  {
    icon: <Music className="h-5 w-5 text-primary" />,
    title: "Music",
    description: "Rhythm, singing, and music appreciation",
    percentage: 82,
  },
];

const Subjects: React.FC = () => {
  return (
    <section id="subjects" className="py-20 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-secondary/5 top-20 -right-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 -bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-medium mb-2">What I Teach</h4>
          <h2 className="text-3xl font-bold mb-6">Subject Areas</h2>
          <p className="text-muted-foreground">
            I specialize in teaching these core subject areas, using interactive methods to make learning engaging and effective for elementary students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsData.map((subject, index) => (
            <SubjectCard
              key={index}
              icon={subject.icon}
              title={subject.title}
              description={subject.description}
              percentage={subject.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
