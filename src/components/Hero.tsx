// import React from 'react';
// import SearchBar from './SearchBar';

// const Hero = () => {
//   return (
//     <div className="relative min-h-[600px] bg-[#f5f7f2] flex items-center">
//       <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
//       <div className="container mx-auto px-6 z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-5xl font-bold mb-6">
//             Find your perfect investment properties
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Explore a selection of high-value real estate opportunities designed for financial growth and stability
//           </p>
//           <SearchBar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;







import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div
      className="relative min-h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Find your perfect investment properties
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Explore a selection of high-value real estate opportunities designed for financial growth and stability
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
