// import React from 'react';

// const ProjectZuma: React.FC = () => {
//   return (
//     <div className="bg-white">
//       <div className="container mx-auto px-4 lg:px-20 py-12">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Left Column */}
//           <div className="col-span-12 lg:col-span-7 space-y-6">
//             {/* Hero Text */}
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight leading-none">SPLASH AWAY</h1>
//               <p className="text-lg text-gray-700 max-w-md mt-4">
//                 Get the perfect tan at Zuma Beach or watch the world go by as you float along the Zuma River. 
//                 Opt for a little adventure at the Boating Lake or perhaps paddle-board into the sunset.
//               </p>
//             </div>

//             {/* Main Beach Image */}
//             <div className="relative">
//               <img 
//                 src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
//                 alt="Zuma Beach"
//                 className="w-full h-64 md:h-80 object-cover rounded-lg" // reduced height
//               />
//               <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                 Zuma Beach
//               </div>
//             </div>

//             {/* Bottom Images */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
//                   alt="Lazy River"
//                   className="w-full aspect-video object-cover rounded-lg" // aspect ratio for smaller image
//                 />
//                 <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                   Lazy River
//                 </div>
//               </div>
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg"
//                   alt="Boating Lake"
//                   className="w-full aspect-video object-cover rounded-lg" // aspect ratio for smaller image
//                 />
//                 <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                   Boating Lake
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="col-span-12 lg:col-span-5">
//             <div className="space-y-6">
//               {/* Activity Images */}
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg"
//                   alt="Floating Cinema"
//                   className="w-full h-40 md:h-48 object-cover rounded-lg" // fixed height for smaller image
//                 />
//                 <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                   Floating Cinema
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg"
//                   alt="Paddle Boarding"
//                   className="w-full h-40 md:h-48 object-cover rounded-lg" // fixed height for smaller image
//                 />
//                 <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                   Paddle Boarding
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg"
//                   alt="Beach Café"
//                   className="w-full h-40 md:h-48 object-cover rounded-lg" // fixed height for smaller image
//                 />
//                 <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase text-white font-medium">
//                   Beach Café
//                 </div>
//               </div>

//               {/* Bottom Text */}
//               <p className="text-gray-700 text-lg mt-8">
//                 Stop off at the café and end the day at the outdoor floating cinema – 
//                 the opportunities are endless.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectZuma;




import React from 'react';

const ProjectZuma: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Hero Section */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Splash Away</h1>
              <p className="text-lg text-gray-700 mt-4 max-w-prose">
                Get the perfect tan at Zuma Beach or watch the world go by as you float along the Zuma River. 
                Opt for a little adventure at the Boating Lake or perhaps paddle-board into the sunset.
              </p>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
                alt="Zuma Beach"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white font-semibold bg-black/50 px-2 py-1 rounded">
                Zuma Beach
              </div>
            </div>

            {/* Two Small Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
                  alt="Lazy River"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white font-semibold bg-black/50 px-2 py-1 rounded">
                  Zuma Lake
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg"
                  alt="Boating Lake"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white font-semibold bg-black/50 px-2 py-1 rounded">
                  Zuma Boating Lake
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vertical Stack of Small Images */}
            {[
              {
                src: 'https://images.pexels.com/photos/13760308/pexels-photo-13760308.jpeg?auto=compress&cs=tinysrgb&w=600',
                label: 'Zuma Waterfall'
              },
              {
                src: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600',
                label: 'Zuma floating Cinema'
              },
              {
                src: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600',
                label: 'Zuma Beach'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white font-semibold bg-black/50 px-2 py-1 rounded">
                  {item.label}
                </div>
              </div>
            ))}

            {/* Closing Paragraph */}
            <p className="text-gray-700 text-lg mt-4">
              Stop off at the café and end the day at the outdoor floating cinema – 
              the opportunities are endless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectZuma;
