import React from 'react';
import { Link } from 'react-router-dom';
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
import arabicImage from '../../assets/Vector (8).png';

const Sidebar = () => {
  const items = [
    { img: home, text: 'Home', link: '/' },
    { img: img2, text: 'Price/Order', link: '/route2' },
    { img: img3, text: 'Requests', link: '/route3' },
    { img: img4, text: 'Shipments', link: '/route4' },
    { img: img5, text: 'Cart', link: '/route5' },
    { img: img6, text: 'Orders', link: '/route6' },
    { img: img7, text: 'Warehouse', link: '/route7' },
    { img: img8, text: 'Contact', link: '/route8' },
  ];

  return (
    <div className="col-span-1 bg-custom-red h-full p-5 pt-8 rounded-tr-xl">
      {/* Sidebar content here */}
      <div className="w-100 pt-3 flex space-x-4">
        <div className='pt-3'>
          <img src={bar} alt="bar" />
        </div>
        <div className='pb-8'>
          <img src={user} alt="user" />
        </div>
      </div>

      {/* Additional content with 8 items */}
      {items.map((item, index) => (
        <div key={index} className="w-full flex items-center space-x-4 py-2 pb-3">
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
        <div >
          <img src={arabicImage} alt="Arabic text" />
        </div>
        <div >
          <span className="text-white">العربية</span>
        </div>
        <div >
          <img src={img9} alt="Logout icon" />
        </div>
      </div>
      <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
        <div className="w-1/2">
          <Link to="/logout" className="text-white no-underline">
            Logout
          </Link>
        </div>
        
      </div>

      {/* Images in a single line */}
      <div className="w-full flex items-center space-x-4">
        {[img10, img11, img12, img13, img14].map((img, index) => (
          <div key={index} className="w-1/5">
            <img src={img} alt={`img-${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
