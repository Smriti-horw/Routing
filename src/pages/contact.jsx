// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center px-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full space-y-6">
//         <h1 className="text-5xl font-bold text-center text-blue-700 -mt-10">
//           Contact
//         </h1>

//         <p className="text-gray-700 text-lg text-center">
//           Feel free to reach out! I’d love to connect with you.
//         </p>

//         <form className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         <div className="text-center text-gray-600 text-sm pt-4">
//           📧 Email:
//           <a
//             href="mailto:smritineupane@email.com"
//             className="underline hover:text-blue-600"
//           >
//             smritineupane@email.com
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { CiFacebook } from "react-icons/ci";
// const Contact = () => {
//   return (
//     <>
//       <card />
//       <CiFacebook className="text-5xl text-blue-400 " />
//     </>
//   );
// };

// export default Contact;

import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "../components/modal";
import Card from "../components/card";
// import SimpleForm from "../form/simpleForm";
// import LoginForm from "../form/loginForm";
import AddProductForm from "../form/addForm";

function Contact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            <AddProductForm />
            {/* <SimpleForm /> */}
            {/* <LoginForm /> */}
          </div>
        </Modal>
      ) : null}

      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-red-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}

export default Contact;
