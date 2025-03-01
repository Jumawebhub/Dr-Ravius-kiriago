import { Facebook, X, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Ravius kiriago</h3>
            <p className="text-gray-400 mb-4">
            Dr. Ravius Kiriago is an experienced professional specializing in orthopedic trauma, therapeutic massage, and physiotherapy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ndubis.rafinah/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </a>
              <a href="https://www.instagram.com/raviuskiriago/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Orthopaedic Trauma Medicine</li>
              <li className="text-gray-400">Therapeutic massage</li>
              <li className="text-gray-400">General Medicine</li>
              <li className="text-gray-400">Physiotheraphy</li>
              <li className="text-gray-400">Diagnostics</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                <p className="text-gray-400"> Dr. Ravius kiriago<br />Nairobi Kenya, 00100</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <p className="text-gray-400">+254 713 539949</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <p className="text-gray-400">raviuskiriago2@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Ravius kiriago. All rights reserved. Distributed by Jumawebhub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;