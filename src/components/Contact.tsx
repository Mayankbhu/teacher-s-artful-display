
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // In a real application, you would send this data to your backend
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-secondary/5 -top-20 -right-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-primary/5 -bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-medium mb-2">Get In Touch</h4>
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-muted-foreground">
            Have questions about my teaching methods or interested in collaborating? Feel free to reach out using the contact information below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:sarah.johnson@example.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    sarah.johnson@example.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-muted-foreground">
                    Sunshine Elementary School<br />
                    123 Learning Lane<br />
                    Education City, EC 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>3:00 PM - 4:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Parent-Teacher Conference Days</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
