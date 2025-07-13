// import logo from "../assets/logo.png";
// import { NavLink, Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-slate-800 shadow-md flex items-center justify-between py-3 px-10 fixed top-0 left-0 w-full text-white z-50">
//       <Link to="/" className="flex items-center gap-3">
//         <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
//         <span className="text-xl font-bold text-blue-400">Smriti</span>
//       </Link>

//       <div className="flex gap-6 items-center">
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) =>
//             isActive
//               ? "text-red-500 font-semibold"
//               : "text-white hover:text-sky-300 transition duration-300"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/about"
//           end
//           className={({ isActive }) =>
//             isActive
//               ? "text-red-500 font-semibold"
//               : "text-white hover:text-sky-300 transition duration-300"
//           }
//         >
//           About
//         </NavLink>

//         <NavLink
//           to="/contact"
//           end
//           className={({ isActive }) =>
//             isActive
//               ? "text-red-500 font-semibold"
//               : "text-white hover:text-sky-300 transition duration-300"
//           }
//         >
//           Contact
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
