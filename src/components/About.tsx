import { Award, Heart, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={24} />, value: '2+', label: 'Years Experience' },
    { icon: <Heart size={24} />, value: '100+', label: 'Patients Treated' },
    { icon: <Clock size={24} />, value: '24/7', label: 'Emergency Care' },
    { icon: <Users size={24} />, value: '3+', label: 'Specialists' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dr. Ravius kiriago</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/Ravo.png" 
              alt="Doctor portrait" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dedicated to Providing the Best Medical Care</h3>
            <p className="text-gray-600 mb-6">
            Dr. Ravius Kiriago is a highly skilled healthcare professional with four years of experience in orthopedic trauma medicine, therapeutic massage, and physiotherapy. His expertise lies in the diagnosis, treatment, and rehabilitation of musculoskeletal injuries, with a particular focus on trauma care.
            </p>
            <p className="text-gray-600 mb-6">
            With a compassionate and holistic approach, Dr. Kiriago combines the precision of orthopedic trauma management with the therapeutic benefits of massage and physiotherapy to help patients recover and regain mobility.
            </p>
            <p className="text-gray-600 mb-8">
            Dr. Kiriago is dedicated to improving the quality of life for his patients by addressing both the immediate pain and long-term functional recovery. His commitment to providing personalized care and fostering healing through evidence-based practices ensures that every patient receives the attention and treatment they need for a full recovery. Whether treating severe fractures, soft tissue injuries, or aiding in post-operative rehabilitation, Dr. Ravius Kiriago's multidisciplinary expertise makes him a trusted and valued professional in the field of musculoskeletal care.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
