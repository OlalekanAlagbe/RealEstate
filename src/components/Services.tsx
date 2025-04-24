import React from 'react';
import { Building2, Ruler, FileSpreadsheet, Construction, Lightbulb, Home, Settings, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Architectural Design",
    description: "Expert architectural solutions tailored to your vision and needs"
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8" />,
    title: "Building Plan & Registration",
    description: "Comprehensive planning and documentation services"
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Survey & Engineering",
    description: "Precise surveying and structural engineering design"
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: "Construction Management",
    description: "End-to-end construction and renovation services"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Electrical Design",
    description: "Innovative electrical systems and solutions"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Real Estate Investment",
    description: "Strategic planning and advisory for property investments"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Asset Management",
    description: "Comprehensive facility and asset management services"
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Consulting Services",
    description: "Expert guidance for all your construction needs"
  }
];

function Services() {
    return (
      <div
      data-aos="fade-up"
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="min-h-screen bg-black  bg-opacity-20 md:bg-opacity-10 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-800 mb-4">Our Services</h2>
              <p className="text-gray-900 max-w-2xl mx-auto">
                Comprehensive design and construction solutions tailored to meet your needs.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500 transition-shadow duration-300 border border-gray-200"
                >
                  <div className="text-green-600 text-3xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;