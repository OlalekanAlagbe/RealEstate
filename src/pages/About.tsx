import React from 'react';
import { Shield, Target, Compass, Users, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative bg-[#f5f7f2] mt-.5 py-24 overflow-hidden">
        {/* Pixel background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pixel pattern"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Altshire</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Transforming real estate investment through innovation, transparency, and excellence.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-10 bg-white">
        <div className="container px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#f5f7f2] p-8 rounded-2xl shadow-sm">
              <div className="mb-4">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700">
                Altshire Homes and Castles a leading property development organization dedicated to reimagining the journey map of our customers 
                (home owners) to redefine luxury and affordability without compromising quality and 
                sustainability through technology and innovation. Redesigning approach to estate development to improve customers affordability, 
                efficiency and experience.
              </p>
              <p className="text-gray-700">
                At Altshire Homes and Castles, everything starts with you and continues with you until we 
                know your goals of a dream home are met and satisfied. With our team of experts (local and abroad), technology
                and innovations, we are able to deliver every luxury you deserve at an affordable cost in a beautiful, fresh and natural locations.
              </p>
            </div>
                      <div className="bg-[#f5f7f2] p-0 rounded-2xl shadow-sm overflow-hidden h-full">
            <img 
              src="/real_estate_one.jpg" 
              alt="Real estate" 
              className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-[#f5f7f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6 text-green-600" />,
                title: 'Trust & Security',
                desc: 'Building lasting relationships through transparency and reliability.',
              },
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                title: 'Community Focus',
                desc: 'Creating value for our investors and the communities we serve.',
              },
              {
                icon: <Award className="w-6 h-6 text-green-600" />,
                title: 'Excellence',
                desc: 'Maintaining the highest standards in everything we do.',
              },
              {
                icon: <Shield className="w-6 h-6 text-green-600" />,
                title: 'Innovation',
                desc: 'Continuously improving and adapting to serve you better.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Directors Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Sarah Johnson',
                title: 'Chief Executive Officer',
                desc: 'With 15+ years in real estate investment, Sarah leads our vision for democratizing property investment.',
                img: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                name: 'Michael Chen',
                title: 'Chief Technology Officer',
                desc: 'Michael brings cutting-edge technology solutions to make real estate investment seamless and accessible.',
                img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                name: 'Emily Rodriguez',
                title: 'Chief Investment Officer',
                desc: 'Emily\'s expertise in market analysis ensures our investors receive the best opportunities for growth.',
                img: 'https://images.pexels.com/photos/2381068/pexels-photo-2381068.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((director, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl shadow-md">
                  <img src={director.img} alt={director.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{director.name}</h3>
                <p className="text-green-600 font-medium mb-2">{director.title}</p>
                <p className="text-gray-600 text-sm">{director.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Investment Community</h2>
          <p className="text-white opacity-90 mb-8">Start your journey towards financial freedom with Livest</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
