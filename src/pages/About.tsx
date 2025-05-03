import React, { useEffect } from 'react';
import { Shield, Target, Compass, Users, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, mirror: true });
  }, []);

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-center" data-aos="fade-left">
        <img
          src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Altshire</h1>
          <p className="text-lg text-gray-100">
            Transforming real estate development through innovation, transparency, and excellence.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Target className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              Altshire Homes and Castles is a leading property development organization dedicated to reimagining the journey of our customers
              (homeowners) to redefine luxury and affordability without compromising quality and sustainability through technology and innovation.
              Redesigning the approach to estate development to improve customers' affordability, efficiency, and experience.
            </p>
            <p>
              At Altshire Homes and Castles, everything starts with you and continues with you until your dream home goals are met and satisfied. 
              With our team of experts (local and abroad), technology, and innovations, we deliver every luxury you deserve at an affordable cost 
              in beautiful, fresh, and natural locations.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg h-[400px]" data-aos="fade-left">
            <img src="/real_estate_one.jpg" alt="Real estate" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-right lg:order-2" data-aos="fade-left">
            <Compass className="w-12 h-12 text-green-600 mb-4 inline-block" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              To be the global leader in redefining luxury living, creating sustainable and accessible dream homes that enrich lives and transform communities.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg h-[400px]" data-aos="fade-right">
            <img 
              src="https://images.pexels.com/photos/8407010/pexels-photo-8407010.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              To revolutionize the property development experience by placing the customer at the heart of every decision, employing sustainable practices,
              and utilizing cutting-edge technology to build affordable and inclusive homes for all.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg h-[400px]" data-aos="fade-left">
            <img 
              src="https://images.pexels.com/photos/435901/pexels-photo-435901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" data-aos="fade-up">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'Customer-Centricity',
                desc: 'We place the homeowner at the heart of every decision, ensuring their needs and aspirations are met with exceptional service and personalized attention.',
              },
              {
                title: 'Innovation',
                desc: 'We embrace cutting-edge technology and creative solutions to redefine property development and enhance the living experience.',
              },
              {
                title: 'Sustainability',
                desc: 'We are committed to environmentally responsible practices, creating homes that minimize our impact on the planet and promote long-term well-being.',
              },
              {
                title: 'Quality and Excellence',
                desc: 'We strive for the highest standards in craftsmanship, materials, and design, delivering homes that exceed expectations and stand the test of time.',
              },
              {
                title: 'Affordability and Value',
                desc: 'We believe that luxury should be accessible, and we are dedicated to providing exceptional homes at competitive prices.',
              },
              {
                title: 'Integrity and Transparency',
                desc: 'We conduct our business with honesty, transparency, and ethical principles, building trust with our customers and partners.',
              },
              {
                title: 'Collaboration and Expertise',
                desc: 'We foster a collaborative environment, leveraging the diverse skills and knowledge of our local and international team to achieve outstanding results.',
              },
              {
                title: 'Community and Connection',
                desc: 'We are committed to creating thriving communities, where residents feel connected, supported, and proud to call home.',
              },
              {
                title: 'Forward Thinking',
                desc: 'We are always looking to the future of home development, and how we can better serve our customers, and the world.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800" data-aos="fade-up">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[{
              name: 'Sarah Johnson',
              title: 'Chief Executive Officer',
              desc: 'With 15+ years in real estate development, Sarah leads our vision for democratizing property development.',
              img: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800',
            }, {
              name: 'Michael Chen',
              title: 'Chief Technology Officer',
              desc: 'Michael brings cutting-edge technology solutions to make real estate development seamless and accessible.',
              img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
            }, {
              name: 'Emily Rodriguez',
              title: 'Chief development Officer',
              desc: 'Emily\'s expertise in market analysis ensures our investors receive the best opportunities for growth.',
              img: 'https://images.pexels.com/photos/31626524/pexels-photo-31626524/free-photo-of-young-professional-in-urban-business-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }].map((member, idx) => (
              <div key={idx} className="group text-left bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
                <div className="w-full aspect-square overflow-hidden rounded-xl mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 text-sm mb-2 uppercase tracking-wide">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our development Community</h2>
          <p className="mb-6">Start your journey towards financial freedom with Livest</p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section> */}
    </div>
  );
}

export default AboutUsPage;
