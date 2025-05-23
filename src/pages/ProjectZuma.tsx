// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ProjectZuma = () => {

//  const navigate = useNavigate();
//  const secondColumnImageData = [
//   { src: "https://media.istockphoto.com/id/612833112/photo/weymouth-harbour.jpg?s=1024x1024&w=is&k=20&c=0akvxdZaOgWcu8fkdBKktmo8u4OiYLyxBcLsx8ocBC4=", label: "Zuma Beach" },
//   { src: "https://images.pexels.com/photos/1202728/pexels-photo-1202728.jpeg", label: "Zuma Cinema" },
//   { src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg", label: "Zuma Cafe" }
// ]
//   useEffect(() => {
//         AOS.init({ duration: 800, mirror: true });
//     }, []);

//   return (
//     <div className="px-4 lg:px-20 mx-auto flex flex-col md:flex-row gap-10 p-6 min-h-[600px]">
//       {/* Container 1 */}
//       <div className="flex-[1] flex flex-col gap-6 h-full relative">
//         {/* Back Arrow Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-0 top-0 mt-2 ml-1 flex items-center text-gray-700 hover:text-cyan-700  rounded-full p-1 md:static md:mt-0 md:ml-0"
//           aria-label="Go back"
//           type="button"
//         >
//           <ArrowLeft className="w-6 h-6" />
//           <span className="sr-only">Back</span>
//         </button>
//         {/* Top Section - Text + Image Side-by-Side */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 h-1/2">
//           {/* Text Content */}
//           <div data-aos="fade-up" className="flex-1 text-center md:text-left">
//             <h1 className="text-4xl font-bold text-[#] mb-4">Splash Away</h1>
//             <p className="text-gray-700 max-w-md mx-auto md:mx-0">
//               Get the perfect tan at Zuma Beach or watch the world go by as you float along the Zuma River.
//               Opt for a little adventure at the Boating Lake or perhaps paddle-board into the sunset.
//             </p>
//           </div>

//           {/* Image */}
//           <div data-aos="fade-up" data-aos-delay="100" className="flex-1 h-full">
//             <img
//               src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt="Malibu Beach"
//               className="w-full h-full object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>

//         {/* Bottom Images (Two Side-by-Side) */}
//         <div className="grid grid-cols-2 gap-4 flex-1 h-1/2">
//           {[{
//             src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
//             label: 'Lazy River'
//           }, {
//             src: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg',
//             label: 'Water Park'
//           }].map((img, idx) => (
//             <div data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={idx} className="h-full flex flex-col relative">
//               <img
//                 src={img.src}
//                 alt={img.label}
//                 className="w-full h-full object-cover rounded-lg flex-1"
//               />
//               <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-xs px-3 py-1 rounded font-semibold tracking-wider">
//                 {img.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Container 2 */}
//       <div className="flex-[1] flex flex-col gap-4 h-full">
//         <div className="flex flex-col flex-1">
//           {/* Top 3 Images */}
//           <div className="flex gap-4 h-1/2">
//             {secondColumnImageData.map((img, idx) => (
//               <div data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={idx} className="flex-1 relative">
//                 <img
//                   src={img.src}
//                   alt={img.label}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//                 <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-semibold tracking-wider">
//                   {img.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Wide Image */}
//           <div data-aos="fade-up" data-aos-delay={`${(secondColumnImageData.length) * 100}`} className="flex-1 mt-4 relative">
//             <img
//               src="https://media.istockphoto.com/id/1369254947/photo/sea-kayaking-at-tropical-bay-summer-vacations.jpg?s=1024x1024&w=is&k=20&c=hXTcIpnz1Q1Wzkpwb8VKbwCW3E6gVzcW-S8no72qqa4="
//               alt="Boating Lake"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-xs px-3 py-1 rounded font-semibold tracking-wider">
//               Boating Lake
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectZuma;







import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectZuma = () => {
  const navigate = useNavigate();
  const estate = {
    name: "Zuma Oasis Estate",
    location: "Abuja, Nigeria",
    status: "Coming Soon",
    price: "₦50,000,000",
    images: [
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    shortDescription: "A beautiful estate with stunning views.",
  };
  const secondColumnImageData = [
    {
      src: "https://media.istockphoto.com/id/612833112/photo/weymouth-harbour.jpg?s=1024x1024&w=is&k=20&c=0akvxdZaOgWcu8fkdBKktmo8u4OiYLyxBcLsx8ocBC4=",
      label: "Zuma Beach"
    },
    {
      src: "https://images.pexels.com/photos/1202728/pexels-photo-1202728.jpeg",
      label: "Zuma Cinema"
    },
    {
      src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
      label: "Zuma Cafe"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, mirror: true });
  }, []);

  return (
    <div className="w-full">
      {/* Top Section Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-20 py-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to listings
          </button>
                
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{estate.name}</h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 text-gray-500 mr-1" />
                <p className="text-gray-600">{estate.location}</p>
              </div>
            </div>
                  
            <div className="mt-4 md:mt-0 flex flex-col md:items-end">
              <div className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-2 ${
                estate.status === 'Now Selling' 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-amber-100 text-amber-800'
              }`}>
                {estate.status}
              </div>
              <p className="text-2xl font-bold text-green-600">{estate.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 lg:px-20 mx-auto flex flex-col md:flex-row gap-10 p-6 min-h-[600px]">
        {/* Container 1 */}
        <div className="flex-[1] flex flex-col gap-6 h-full relative">
          {/* Top Section - Text + Image Side-by-Side */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 h-1/2">
            {/* Text Content */}
            <div data-aos="fade-up" className="flex-1 text-left md:text-left">
              <h1 className="text-3xl font-bold text-[#] mb-4">Splash Away</h1>
              <p className="text-gray-700 max-w-md mx-auto md:mx-0">
                Get the perfect tan at Zuma Beach or watch the world go by as you float along the Zuma River.
                Opt for a little adventure at the Boating Lake or perhaps paddle-board into the sunset.
              </p>
            </div>

            {/* Image */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex-1 h-full">
              <img
                src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Zuma Overview"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Bottom Images (Two Side-by-Side) */}
          <div className="grid grid-cols-2 gap-4 flex-1 h-1/2">
            {[{
              src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
              label: 'Lazy River'
            }, {
              src: 'https://images.pexels.com/photos/1268865/pexels-photo-1268865.jpeg',
              label: 'Water Park'
            }].map((img, idx) => (
              <div data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={idx} className="h-full flex flex-col relative">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover rounded-lg flex-1"
                />
                <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-xs px-3 py-1 rounded font-semibold tracking-wider">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Container 2 */}
        <div className="flex-[1] flex flex-col gap-4 h-full">
          <div className="flex flex-col flex-1">
            {/* Top 3 Images */}
            <div className="flex gap-4 h-1/2">
              {secondColumnImageData.map((img, idx) => (
                <div data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={idx} className="flex-1 relative">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-semibold tracking-wider">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Wide Image */}
            <div data-aos="fade-up" data-aos-delay={`${(secondColumnImageData.length) * 100}`} className="flex-1 mt-4 relative">
              <img
                src="https://media.istockphoto.com/id/1369254947/photo/sea-kayaking-at-tropical-bay-summer-vacations.jpg?s=1024x1024&w=is&k=20&c=hXTcIpnz1Q1Wzkpwb8VKbwCW3E6gVzcW-S8no72qqa4="
                alt="Boating Lake"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 bg-black/70 text-white text-xs px-3 py-1 rounded font-semibold tracking-wider">
                Boating Lake
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectZuma;
