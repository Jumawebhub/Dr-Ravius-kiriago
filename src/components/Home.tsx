import React from 'react';
import { Calendar } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const handleBookAppointment = () => {
    setActiveSection('booking');
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Your Health Is Our <span className="text-blue-600">Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Providing exceptional healthcare services with a personal touch. 
              Our experienced medical professionals are dedicated to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBookAppointment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Book Appointment
              </button>
              <button 
                onClick={() => {
                  setActiveSection('services');
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-colors"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Doctor with patient" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;