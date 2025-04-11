
import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
    alt: "Students working on art project",
    title: "Creative Arts Project",
    category: "Art Class"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
    alt: "Science experiment with kids",
    title: "Hands-on Science",
    category: "Science Lab"
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    alt: "Students reading books",
    title: "Reading Circle",
    category: "Literature Hour"
  },
  {
    src: "https://images.unsplash.com/photo-1564898153108-92d9211d8d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Math class with manipulatives",
    title: "Math Exploration",
    category: "Mathematics"
  },
  {
    src: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Group project collaboration",
    title: "Team Project",
    category: "Collaboration"
  },
  {
    src: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Music class with instruments",
    title: "Music Exploration",
    category: "Music"
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  
  return (
    <section id="gallery" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 -top-20 -left-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-secondary/5 -bottom-20 -right-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] w-12 bg-secondary"></div>
          <h2 className="text-3xl font-bold mx-4 flex items-center">
            Classroom Gallery <Sparkles className="ml-2 h-5 w-5 text-secondary" />
          </h2>
          <div className="h-[1px] w-12 bg-secondary"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-secondary font-semibold">{image.category}</span>
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4">
                <span className="text-sm text-primary font-semibold">{selectedImage.category}</span>
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
