import { Heart, Brain, Stethoscope, Baby, Activity, Pill } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: 'Orthopaedic Trauma Medicine',
      description: 'Orthopaedic trauma medicine focuses on treating musculoskeletal injuries from trauma, including fractures, dislocations, soft tissue damage, and infections. Treatment ranges from non-surgical methods like casts to surgical interventions. Rehabilitation and a multidisciplinary approach are crucial for recover',
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: 'Therapeutic massage',
      description: 'Therapeutic massage is a type of bodywork that involves manipulating muscles and soft tissues to relieve pain, reduce stress, improve circulation, and promote relaxation. It can aid in treating conditions like muscle tension, joint pain, and injuries, enhancing overall wellness.',
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages, focusing on prevention, diagnosis, and treatment.',
    },
    {
      icon: <Baby className="w-10 h-10 text-blue-600" />,
      title: 'Physiotheraphy',
      description: 'Physiotherapy is a healthcare discipline that uses physical techniques like exercises, manual therapy, and modalities (e.g., heat, cold, ultrasound) to treat injuries, improve mobility, reduce pain, and restore function. It helps manage conditions like musculoskeletal injuries, neurological disorders, and post-surgical recovery.',
    },
    {
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: 'Diagnostics',
      description: 'Advanced diagnostic services including laboratory tests, imaging, and specialized screenings.',
    },
    {
      icon: <Pill className="w-10 h-10 text-blue-600" />,
      title: 'Pharmacy',
      description: 'On-site pharmacy services providing prescribed medications and expert pharmaceutical advice.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of medical services to meet your healthcare needs. 
            Our team of specialists is dedicated to providing exceptional care in the following areas:
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;