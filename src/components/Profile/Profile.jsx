// import React from 'react';
// import { Link } from 'react-router-dom';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import bar from "../../assets/1.png";
// import user from '../../assets/Customer.png';
// import home from '../../assets/Vector.png';
// import img2 from '../../assets/2.png';
// import img3 from '../../assets/Vector (2).png';
// import img4 from '../../assets/Vector (3).png';
// import img5 from '../../assets/Vector (4).png';
// import img6 from '../../assets/Vector (5).png';
// import img7 from '../../assets/Vector (6).png';
// import img8 from '../../assets/Vector (7).png';
// import img9 from '../../assets/Vector (9).png';
// import img10 from '../../assets/1713419057Facebook_PNG 1.png';
// import img11 from '../../assets/Instagram_logo_2016 1.png';
// import img12 from '../../assets/Logo_of_Twitter 1.png';
// import img13 from '../../assets/tiktok-app-icon-logo-0F5AD7AE01-seeklogo 1.png';
// import img14 from '../../assets/Telegram_logo 1.png';
// import img15 from '../../assets/Vector (11).png';
// import img16 from '../../assets/Vector (12).png';
// import editIcon from '../../assets/Vector (13).png'; // Replace with your edit icon image
// import arabicImage from '../../assets/Vector (8).png';

// function Profile() {
//   const items = [
//     { img: home, text: 'Home', link: '/route1' },
//     { img: img2, text: 'Price/Order', link: '/route2' },
//     { img: img3, text: 'Requests', link: '/route3' },
//     { img: img4, text: 'Shipments', link: '/route4' },
//     { img: img5, text: 'Cart', link: '/route5' },
//     { img: img6, text: 'Orders', link: '/route6' },
//     { img: img7, text: 'Warehouse', link: '/route7' },
//     { img: img8, text: 'Contact', link: '/route8' },
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar 1/6 width */}
//       <div className="w-1/6 bg-custom-red h-full p-5 pt-8 rounded-tr-xl">
//         {/* Sidebar content here */}
//         <div className="w-100 pt-3 flex space-x-4">
//           <div className='pt-3'>
//             <img src={bar} alt="bar" />
//           </div>
//           <div className='pb-8'>
//             <img src={user} alt="user" />
//           </div>
//         </div>

//         {/* Additional content with 8 items */}
//         {items.map((item, index) => (
//           <div key={index} className="w-full flex items-center space-x-4 py-2 pb-3">
//             <div className="w-1/4">
//               <img src={item.img} alt={item.text} />
//             </div>
//             <div className="w-3/4">
//               <Link to={item.link} className="text-white no-underline">
//                 {item.text}
//               </Link>
//             </div>
//           </div>
//         ))}

//         {/* Arabic image and text */}
//         <div className="w-full flex items-center space-x-4 py-2 pt-4 mt-11">
//           <div className="w-1/2">
//             <img src={arabicImage} alt="Arabic text" />
//           </div>
//           <div className="w-1/2">
//             <span className="text-white">العربية</span>
//        </div>
//         </div>
//         <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
        
//         <div className="w-1/2">
//         <Link to="/logout" className="text-white no-underline">
//         Logout
//       </Link>
//         </div>
//         <div className="w-1/2">
//           <img src={img9} alt="Arabic text" />
//         </div>
//       </div>

      
       

//         {/* Images in a single line */}
//         <div className="w-full flex items-center space-x-4 ">
//           {[img10, img11, img12, img13, img14].map((img, index) => (
//             <div key={index} className="w-1/5">
//               <img src={img} alt={`img-${index}`} className="w-full h-auto" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content 3/6 width */}
//       <div className="w-3/6 h-full flex flex-col p-5">
//         {/* First div with image and text */}
//         <div className="w-full flex items-center space-x-4 py-4">
//           <div className="">
//             <img src={img15} alt="Example" className="w-full h-auto" />
//           </div>
//           <div className="w-3/4">
//             <span className="text-gray-800 font-bold">Example Text</span>
//           </div>
//         </div>
        
//         {/* Form with labels, inputs, and edit icons */}
//         <form className=" space-y-4">
//           {[
//             { label: 'Name', type: 'text', placeholder: 'Enter your name' },
//             { label: 'Email', type: 'email', placeholder: 'Enter your email' },
//             { label: 'Password', type: 'password', placeholder: 'Enter your password' },
//             { label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
//             { label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number' },
//             { label: 'Interests', type: 'text', placeholder: 'Enter your interests' }
//           ].map((field, index) => (
//             <div key={index} className="flex flex-col space-y-2">
//               <label className="text-custom-red font-semibold">{field.label}</label>
//               <div className="relative">
//               <input 
//                 type={field.type} 
//                 placeholder={field.placeholder} 
//                 className=" border border-gray-300 rounded-lg py-3 w-full pr-10" // Adjust padding to make space for the icon
//               />
//               <Link to="/edit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                 <img src={editIcon} alt="Edit" className="w-6 h-6 cursor-pointer" />
//               </Link>
//             </div>
            
//             </div>
//           ))}
          
//         </form>
//       </div>

//       {/* Sidebar 2/6 width */}
//       <div className="w-2/6 h-full p-5 ">
//       <div className='mt-10'></div>
//       <div className='p-10'></div>
      
//       <div className=' bg-gray-200 flex px-5 py-2 rounded-lg '>
      
//       <div className="w-1/2 pr-2">
//           <div className="flex flex-col items-center">
//             <img src={img16} alt="Example" className="mb-2" />
//             <div className="text-left">
//               <p className="text-custom-red text-left font-bold">VIP PACKAGES</p>
//               <p className="text-gray-800 text-left font-bold" >1875.00 SAR</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2 pl-2  pt-5 mt-2">
//           <div className="flex flex-col items-center">
//             <p className="text-gray-800 font-bold">Subscription Plan</p>
//             <p className="text-gray-800">3 months left</p>
//           </div>
//         </div>
//       </div>
        
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import bar from "../../assets/1.png";
import user from '../../assets/Customer.png';
import home from '../../assets/Vector.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/Vector (2).png';
import img4 from '../../assets/Vector (3).png';
import img5 from '../../assets/Vector (4).png';
import img6 from '../../assets/Vector (5).png';
import img7 from '../../assets/Vector (6).png';
import img8 from '../../assets/Vector (7).png';
import img9 from '../../assets/Vector (9).png';
import img10 from '../../assets/1713419057Facebook_PNG 1.png';
import img11 from '../../assets/Instagram_logo_2016 1.png';
import img12 from '../../assets/Logo_of_Twitter 1.png';
import img13 from '../../assets/tiktok-app-icon-logo-0F5AD7AE01-seeklogo 1.png';
import img14 from '../../assets/Telegram_logo 1.png';
import img15 from '../../assets/Vector (11).png';
import img16 from '../../assets/Vector (12).png';
import editIcon from '../../assets/Vector (13).png'; // Replace with your edit icon image
import arabicImage from '../../assets/Vector (8).png';

function Profile() {
  const items = [
    { img: home, text: 'Home', link: '/route1' },
    { img: img2, text: 'Price/Order', link: '/route2' },
    { img: img3, text: 'Requests', link: '/route3' },
    { img: img4, text: 'Shipments', link: '/route4' },
    { img: img5, text: 'Cart', link: '/route5' },
    { img: img6, text: 'Orders', link: '/route6' },
    { img: img7, text: 'Warehouse', link: '/route7' },
    { img: img8, text: 'Contact', link: '/route8' },
  ];

  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Sidebar 1/6 width */}
      <div className="col-span-1 bg-custom-red h-full p-5 pt-8 rounded-tr-xl">
        {/* Sidebar content here */}
        <div className="flex space-x-4 pt-3">
          <div>
            <img src={bar} alt="bar" />
          </div>
          <div>
            <img src={user} alt="user" />
          </div>
        </div>

        {/* Additional content with 8 items */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 py-2">
            <div className="w-1/4">
              <img src={item.img} alt={item.text} />
            </div>
            <div className="w-3/4">
              <Link to={item.link} className="text-white no-underline">
                {item.text}
              </Link>
            </div>
          </div>
        ))}

        {/* Arabic image and text */}
        <div className="w-full flex items-center space-x-4 py-2 pt-4 mt-11">
        <div className="w-1/2">
          <img src={arabicImage} alt="Arabic text" />
        </div>
        <div className="w-1/2">
          <span className="text-white">العربية</span>
        </div>
      </div>
      <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
        <div className="w-1/2">
          <Link to="/logout" className="text-white no-underline">
            Logout
          </Link>
        </div>
        <div className="w-1/2">
          <img src={img9} alt="Logout icon" />
        </div>
      </div>

        {/* Images in a single line */}
        <div className="flex items-center space-x-4">
          {[img10, img11, img12, img13, img14].map((img, index) => (
            <div key={index} className="w-1/5">
              <img src={img} alt={`img-${index}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content 3/6 width */}
      <div className="col-span-3 h-full p-5">
        {/* First div with image and text */}
        <div className="flex items-center space-x-4 py-4">
          <div>
            <img src={img15} alt="Example" className="w-full h-auto" />
          </div>
          <div className="w-3/4">
            <span className="text-gray-800 font-bold">Example Text</span>
          </div>
        </div>

        {/* Form with labels, inputs, and edit icons */}
        <form className="space-y-4">
          {[
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Password', type: 'password', placeholder: 'Enter your password' },
            { label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
            { label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number' },
            { label: 'Interests', type: 'text', placeholder: 'Enter your interests' }
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-custom-red font-semibold">{field.label}</label>
              <div className="relative">
                <input 
                  type={field.type} 
                  placeholder={field.placeholder} 
                  className="border border-gray-300 rounded-lg py-3 w-full pr-10" // Adjust padding to make space for the icon
                />
                <Link to="/edit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <img src={editIcon} alt="Edit" className="w-6 h-6 cursor-pointer" />
                </Link>
              </div>
            </div>
          ))}
        </form>
      </div>

      {/* Sidebar 2/6 width */}
      <div className="col-span-2 h-full p-5">
        <div className='mt-10'></div>
        <div className='p-10'></div>

        <div className='bg-gray-200 flex px-5 py-2 rounded-lg'>
          <div className="w-1/2 pr-2">
            <div className="flex flex-col items-center">
              <img src={img16} alt="Example" className="mb-2" />
              <div className="text-left">
                <p className="text-custom-red font-bold">VIP PACKAGES</p>
                <p className="text-gray-800 font-bold">1875.00 SAR</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-2 pt-5 mt-2">
            <div className="flex flex-col items-center">
              <p className="text-gray-800 font-bold">Subscription Plan</p>
              <p className="text-gray-800">3 months left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

