import React from "react";
import headsetImg from '../assets/headset.png';
import { useNavigate } from 'react-router-dom';

export const NewNavbar = ({ activeSection }) => {
  const navigate = useNavigate();
  // Navigation menu items data
  const navItems = [
    { label: "Home", width: "w-[78px]", route: "/home" },
    { label: "Domains", width: "w-[99px]", route: "/domain" },
    { label: "Wallet & Billing", width: "flex-[0_0_auto]", route: "/wallet" },
  ];

  // Icon buttons data
  const iconButtons = [
    { src: "/information-2-line.svg", alt: "Information line" },
    {
      src: "/notification-2-line.svg",
      alt: "Notification line",
      hasNotification: true,
    },
    { src: "/shopping-cart-2-line.svg", alt: "Shopping cart line" },
  ];

  return (
    <header 
      className="w-[1440px] h-[80px] flex items-center justify-between px-8 py-6 bg-[#000535] border-b-[1.5px] border-[#4d4d4d] relative overflow-hidden"
      style={{
        width: "1440px",
        height: "80px",
        justifyContent: "space-between",
        angle: "0deg",
        opacity: 1,
        left: "0.38px",
        paddingTop: "24px",
        paddingRight: "32px",
        paddingBottom: "24px",
        paddingLeft: "32px",
        borderBottomWidth: "1.5px"
      }}
    >
      {/* Left section with logo and navigation */}
      <div className="inline-flex items-center gap-[72px] relative z-[5]">
        {/* Logo */}
        <div className="relative w-fit font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Nameword
        </div>

        {/* Navigation menu */}
        <div className="inline-flex items-center gap-2 p-2 bg-[#1c204c] rounded-[100px]">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2.5 px-4 py-2 ${item.width} bg-[#1c204c] rounded-[100px] cursor-pointer hover:bg-[#2a2d5a] transition-colors ${activeSection === item.label ? "bg-slate-500 text-white font-bold" : ""}`}
              onClick={()=> navigate(item.route)}
            >
              <span className="relative w-fit mt-[-1.00px] font-medium text-[#a6b0ba] text-base tracking-[0] leading-4 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right section with controls */}
      <div className="inline-flex gap-4 items-center relative z-[4]">
        {/* Support button */}
        <div className="flex w-[137px] justify-end gap-3.5 items-center relative">
          <button className="relative w-[137px] h-9 bg-[#1c1e40] rounded-lg text-white hover:bg-[#2a2d5a] transition-colors">
            <div className="inline-flex items-center gap-2">
              <div className="relative w-[23.95px] h-[23.95px]">
                <img
                  src={headsetImg}
                  className="absolute w-[18px] h-[17px] top-[3px] left-[3px]"
                  alt="Group"
                />
              </div>
              <span className="font-normal text-white text-base">
                Support
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99955 4.97633L10.1244 0.851562L11.3029 2.03007L5.99955 7.33341L0.696289 2.03007L1.8748 0.851562L5.99955 4.97633Z" fill="white"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Language selector */}
        <div className="inline-flex items-center justify-end gap-3.5 relative">
          <button className="relative w-[66px] h-9 bg-[#1c1e40] rounded-lg text-white hover:bg-[#2a2d5a] transition-colors">
            <div className="inline-flex items-center gap-2">
              <span className="font-medium text-white text-base">
                EN
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99955 4.97633L10.1244 0.851562L11.3029 2.03007L5.99955 7.33341L0.696289 2.03007L1.8748 0.851562L5.99955 4.97633Z" fill="white"/>
              </svg>

            </div>
          </button>
        </div>

        {/* Theme toggle */}
        <div className="inline-flex items-center gap-2 p-1 bg-[#1a1e4c] rounded-[50px] overflow-hidden shadow-[0px_8px_32px_#0710360a]">
          <div className="relative w-[26px] h-[26px] rounded-[50px] overflow-hidden bg-[linear-gradient(90deg,rgba(150,100,230,1)_0%,rgba(94,48,204,1)_100%)]">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="26" height="26" rx="13" fill="url(#paint0_linear_8909_9288)"/>
            <path d="M12.9997 16.7918C15.0938 16.7918 16.7913 15.0942 16.7913 13.0002C16.7913 10.9061 15.0938 9.2085 12.9997 9.2085C10.9056 9.2085 9.20801 10.9061 9.20801 13.0002C9.20801 15.0942 10.9056 16.7918 12.9997 16.7918Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.1653 17.1648L17.0895 17.089M17.0895 8.91067L17.1653 8.83484L17.0895 8.91067ZM8.83533 17.1648L8.91116 17.089L8.83533 17.1648ZM13.0003 7.21317V7.1665V7.21317ZM13.0003 18.8332V18.7865V18.8332ZM7.21366 12.9998H7.16699H7.21366ZM18.8337 12.9998H18.787H18.8337ZM8.91116 8.91067L8.83533 8.83484L8.91116 8.91067Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_8909_9288" x1="0" y1="13" x2="26" y2="13" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9664E6"/>
            <stop offset="1" stop-color="#5E30CC"/>
            </linearGradient>
            </defs>
            </svg>

          </div>
          <div className="relative w-[26px] h-[26px] rounded-[50px] overflow-hidden cursor-pointer hover:bg-[#2a2d5a] transition-colors">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.18381 13.2452C7.39381 16.2494 9.94298 18.6936 12.9938 18.8277C15.1463 18.9211 17.0713 17.9177 18.2263 16.3369C18.7046 15.6894 18.448 15.2577 17.6488 15.4036C17.258 15.4736 16.8555 15.5027 16.4355 15.4852C13.583 15.3686 11.2496 12.9827 11.238 10.1652C11.2321 9.40689 11.3896 8.68939 11.6755 8.03605C11.9905 7.31272 11.6113 6.96855 10.8821 7.27772C8.57215 8.25189 6.99131 10.5794 7.18381 13.2452Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </div>

        {/* Icon buttons */}
        <button className="relative w-[52px] h-[52px] rounded-[500px] overflow-hidden p-0 bg-transparent hover:bg-[#1a1e4c] transition-colors flex items-center justify-center">
          {/* Info Icon */}
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3828 20C4.85996 20 0.382812 15.5228 0.382812 10C0.382812 4.47715 4.85996 0 10.3828 0C15.9056 0 20.3828 4.47715 20.3828 10C20.3828 15.5228 15.9056 20 10.3828 20ZM10.3828 18C14.8011 18 18.3828 14.4183 18.3828 10C18.3828 5.58172 14.8011 2 10.3828 2C5.96453 2 2.38281 5.58172 2.38281 10C2.38281 14.4183 5.96453 18 10.3828 18ZM11.3828 8.5V13H12.3828V15H8.38281V13H9.38281V10.5H8.38281V8.5H11.3828ZM11.8828 6C11.8828 6.82843 11.2112 7.5 10.3828 7.5C9.55441 7.5 8.88281 6.82843 8.88281 6C8.88281 5.17157 9.55441 4.5 10.3828 4.5C11.2112 4.5 11.8828 5.17157 11.8828 6Z" fill="white"/>
          </svg>
        </button>
        
        <button className="relative w-[52px] h-[52px] rounded-[500px] overflow-hidden p-0 bg-transparent hover:bg-[#1a1e4c] transition-colors flex items-center justify-center">
          {/* Notification Icon */}
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3828 18H0.382812V16H1.38281V9.0314C1.38281 4.04348 5.41225 0 10.3828 0C15.3534 0 19.3828 4.04348 19.3828 9.0314V16H20.3828V18ZM3.38281 16H17.3828V9.0314C17.3828 5.14806 14.2488 2 10.3828 2C6.51682 2 3.38281 5.14806 3.38281 9.0314V16ZM7.88281 19H12.8828C12.8828 20.3807 11.7635 21.5 10.3828 21.5C9.00211 21.5 7.88281 20.3807 7.88281 19Z" fill="white"/>
          </svg>
        </button>

        <button className="relative w-[52px] h-[52px] rounded-[500px] overflow-hidden p-0 bg-transparent hover:bg-[#1a1e4c] transition-colors flex items-center justify-center" onClick={()=>navigate('/cart')}>
          {/* Cart Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.38717 5.41662L0.144531 2.17398L1.55874 0.759766L4.80138 4.00241H20.0431C20.5954 4.00241 21.0431 4.45013 21.0431 5.00241C21.0431 5.09973 21.0289 5.19654 21.001 5.28976L18.601 13.2898C18.4741 13.7128 18.0847 14.0025 17.6431 14.0025H5.38717V16.0025H16.3872V18.0025H4.38717C3.83488 18.0025 3.38717 17.5547 3.38717 17.0025V5.41662ZM5.38717 6.00241V12.0025H16.8991L18.6991 6.00241H5.38717ZM4.88717 22.0025C4.05874 22.0025 3.38717 21.3309 3.38717 20.5025C3.38717 19.674 4.05874 19.0025 4.88717 19.0025C5.7156 19.0025 6.38717 19.674 6.38717 20.5025C6.38717 21.3309 5.7156 22.0025 4.88717 22.0025ZM16.8872 22.0025C16.0587 22.0025 15.3872 21.3309 15.3872 20.5025C15.3872 19.674 16.0587 19.0025 16.8872 19.0025C17.7156 19.0025 18.3872 19.674 18.3872 20.5025C18.3872 21.3309 17.7156 22.0025 16.8872 22.0025Z" fill="white"/>
          </svg>
        </button>

        {/* User avatar */}
        <div className="w-[52px] h-[52px] bg-white rounded-[500px] overflow-hidden" onClick={()=>navigate('/profile')}>
          <img
            src="/profiles/profile7.jpg"
            alt="User profile"
            className="w-[52px] h-[52px] object-cover"
          />
        </div>
      </div>

    </header>
  );
}; 

   export default NewNavbar;