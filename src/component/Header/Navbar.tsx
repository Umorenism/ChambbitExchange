// const Navbar = () => {
//   return (
//     <nav className="w-full fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md backdrop-blur-md z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <div className="text-xl font-bold">Connect</div>

//         {/* Menu Icon */}
//         <div className="text-3xl flex ">
//           <div>
//             <img src="" alt="icons" />
//           </div>
//           <p>1</p>
//           <p>1</p>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import pics from "../../asset/loggg.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">Connect</div>

        {/* Menu Icons */}
        <div className="flex items-center space-x-4">
          {/* Replace with actual image sources */}
          <img src={pics} alt="icon 1" className="w-6 h-6" />
          <img src={pics} alt="icon 2" className="w-6 h-6" />
          <img src={pics} alt="icon 3" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
