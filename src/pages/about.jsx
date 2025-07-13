// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center px-6">
//       <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full space-y-6">
//         <h1 className="text-5xl font-bold text-center text-sky-700">
//           About Me
//         </h1>

//         <p className="text-gray-700 text-lg leading-relaxed">
//           Hi, I’m
//           <span className="font-semibold text-sky-800">Smriti Neupane</span>. I
//           am an SLC pass-out student. I love exploring new places, enjoying
//           life, and spending quality time doing things I love.
//         </p>

//         <div>
//           <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//             My Hobbies
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
//             <li>Dancing</li>
//             <li>Singing</li>
//             <li>Cooking</li>
//             <li>Watching movies</li>
//             <li>Travelling and having fun</li>
//           </ul>
//         </div>

//         <p className="text-gray-700 text-lg">
//           <span className="font-medium text-sky-800">My goal</span> is to become
//           a talented artist and inspire others through creativity and passion.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
// import { useState } from "react";

// const About = () => {
//   function Component1() {
//     const [user, setUser] = useState("Jesse Hall");

//     return (
//       <>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user} />
//       </>
//     );
//   }

//   function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }

//   function Component3({ user }) {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 user={user} />
//       </>
//     );
//   }

//   function Component4({ user }) {
//     return (
//       <>
//         <h1>Component 4</h1>
//         <Component5 user={user} />
//       </>
//     );
//   }

//   function Component5({ user }) {
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </>
//     );
//   }
//   return (
//     <div>
//       <div>hi i am About page</div>
//       <Component1 />
//     </div>
//   );
// };

// export default About;
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const About = () => {
  function Component1() {
    const [user, setUser] = useState({ name: "Jesse Hall" });

    return (
      <UserContext.Provider value={user}>
        <div>
          <h1>{`Hello ${user.name}!`}</h1>
          <Component2 />
        </div>
      </UserContext.Provider>
    );
  }

  function Component2() {
    return (
      <div>
        <h1>Component 2</h1>
        <Component3 />
      </div>
    );
  }

  function Component3() {
    return (
      <div>
        <h1>Component 3</h1>
        <Component4 />
      </div>
    );
  }

  function Component4() {
    return (
      <div>
        <h1>Component 4</h1>
        <Component5 />
      </div>
    );
  }

  function Component5() {
    const user = useContext(UserContext);

    return (
      <div>
        <h1>Component 5</h1>
        <h2>{`Hello ${user.name} again!`}</h2>
      </div>
    );
  }

  return (
    <div>
      <div>hi i am About page</div>
      <Component1 />
    </div>
  );
};

export default About;
