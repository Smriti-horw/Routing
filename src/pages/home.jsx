// import logo from "../assets/logo.png";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center px-4">
//       <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-2xl rounded-2xl p-10 max-w-5xl w-full">
//         <img
//           src={logo}
//           alt="Smriti Neupane"
//           className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-400 shadow-md"
//         />

//         <div className="text-center md:text-left space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Welcome to My Portfolio😒
//           </h1>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             🙋‍♀️ Hi, I’m{" "}
//             <span className="font-semibold text-sky-700">Smriti Neupane</span>,
//             a fresh high school graduate from Nepal. I’m 18 years old and full
//             of enthusiasm for the future. Over the past year, I’ve worked hard
//             to complete my schooling with dedication, while actively
//             participating in cultural and extracurricular programs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";

// const Home = () => {
//   // <h1>Home Section</h1>;
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Smriti");
//   }, [count]);
//   const increment = () => {
//     const result = count + 1;
//     setCount(result);
//   };
//   const decrement = () => {
//     const result = count - 1;
//     setCount(result);
//   };
//   return (
//     <div className="m-6">
//       <button onClick={increment}>+</button>
//       <p>{count}</p>

//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import NewCard from "../components/card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await fetch("https://fakestoreapi.com/products");

      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
      }
    };
    fetchData();
  }, []);

  const handleAddProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });

    if (res.ok) {
      alert("successfully added new product");
    }
  };
  console.log("data.....", data);
  return (
    <>
      <h1>Data Fetching</h1>
      <button
        onClick={handleAddProduct}
        className="bg-red-500 text-white p-2 m-4 rounded-md"
      >
        Add new item
      </button>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <div>{item.rating.rate}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <NewCard />
    </>
  );
};
export default Home;
