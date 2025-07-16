import React, { useState } from "react";
import NewNavbar from "./NewNavbar";

const SearchDomain = () => {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div className="min-h-screen bg-[#F7F7FC] w-full">
      <NewNavbar activeSection="Domains" />
      <div className="relative w-[1440px] mx-auto flex flex-col items-center">
        {/* Left SVG Circle Placeholder */}
        <div className="absolute left-0 top-0 z-0" style={{ width: 300, height: 300 }}>
          {/* Left SVG goes here */}
        </div>
        {/* Right SVG Circle Placeholder */}
        <div className="absolute right-0 top-0 z-0" style={{ width: 300, height: 300 }}>
          {/* Right SVG goes here */}
        </div>
        {/* Search Section */}
        <section className="relative z-10 flex flex-col items-center justify-center w-full h-[540px]">
          <h1 className="text-3xl font-bold text-[#1C1E40] mb-2">Search domains</h1>
          <p className="text-[#505050] text-lg mb-8">Boost your brand's visibility and credibility with the right one.</p>
          {/* Search Bar */}
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-white border border-[#EAEAEA] rounded-full px-4 py-2 relative w-[560px]">
              <span className="material-icons text-[#A3A3A3] mr-2">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.8675 16 16 12.8675 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16ZM17.4853 16.0711L20.3137 18.8995L18.8995 20.3137L16.0711 17.4853L17.4853 16.0711Z" fill="#515151"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-[#1C1E40] text-base pr-24"
                style={{ border: 'none', boxShadow: 'none' }}
              />
              <button className="w-[104px] rounded-full bg-[#BFA5F8] text-white font-thin text-lg h-[40px] items-center justify-center shadow-none border-none">Go</button>
            </div>
          </div>  
          {/* Filters */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#505050] text-base font-medium mr-2">Filters</span>
            <span className="bg-[#F3EDFF] text-[#9664E6] rounded-full px-4 py-1 text-base font-medium">.io</span>
            <span className="bg-[#F7F7FC] text-[#1C1E40] rounded-full px-4 py-1 text-base font-medium border border-[#EAEAEA]">.com.br</span>
            <span className="bg-[#F7F7FC] text-[#1C1E40] rounded-full px-4 py-1 text-base font-medium border border-[#EAEAEA]">.xyz</span>
            <span className="bg-[#F7F7FC] text-[#1C1E40] rounded-full px-4 py-1 text-base font-medium border border-[#EAEAEA]">.easy</span>
            <span className="bg-[#F7F7FC] text-[#1C1E40] rounded-full px-4 py-1 text-base font-medium border border-[#EAEAEA]">.corp</span>
            <span className="bg-[#F7F7FC] text-[#1C1E40] rounded-full px-4 py-1 text-base font-medium border border-[#EAEAEA]">.co</span>
          </div>
          {/* Register/Transfer Toggle */}
          <div className="flex items-center gap-4 mb-12">
            <span className={`font-medium text-base ${isRegister ? 'text-[#1C1E40]' : 'text-[#A3A3A3]'}`}>Register</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isRegister}
                onChange={() => setIsRegister((v) => !v)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-7"></div>
            </label>
            <span className={`font-medium text-base ${!isRegister ? 'text-[#1C1E40]' : 'text-[#A3A3A3]'}`}>Transfer</span>
          </div>
        </section>
        
        
        {/* Hero Section Placeholder (replace with Homepage.jsx hero section) */}
        <div
            className="relative w-[1128px] h-[434px] rounded-tl-[24px] rounded-tr-[24px] bg-[#0C1141] shadow-[0px_-2px_64px_0px_#2745BE14] overflow-visible flex flex-col justify-between px-8 py-6"
            style={{
              border: '1.2px solid',
              borderImage: `linear-gradient(0deg, rgba(255,255,255,0.16), rgba(255,255,255,0.16)), conic-gradient(from 0deg at 50% 2.74%, #FFFFFF 0deg, rgba(255,255,255,0) 87.28deg, rgba(255,255,255,0) 271.8deg, #FFFFFF 360deg) 1`,
              borderImageSlice: 1,
            }}
          >
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8">
              {/* Get Domain Card (top left) */}
              <div className="relative flex flex-row items-center w-[524px] h-[151px] rounded-[15.94px] bg-[#23295A] px-8 py-6 overflow-hidden col-start-1 row-start-1">
                <svg width="126" height="53" viewBox="0 0 126 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 z-0">
                  <path d="M104.562 109.034C116.316 98.4192 123.573 83.7173 124.851 67.9317C126.128 52.1461 121.33 36.4684 111.436 24.1019C101.543 11.7354 87.3002 3.61358 71.6191 1.39586C55.9379 -0.82187 40.0017 3.03193 27.0667 12.1698C14.1316 21.3077 5.17403 35.04 2.02417 50.5608C-1.1257 66.0816 1.76991 82.2194 10.1193 95.6769C18.4688 109.134 31.6418 118.896 46.9469 122.966C62.252 127.037 78.5339 125.11 92.4658 117.579L83.0294 100.123C73.5468 105.249 62.4647 106.56 52.0475 103.79C41.6302 101.019 32.6642 94.3749 26.9812 85.2153C21.2982 76.0556 19.3274 65.0715 21.4713 54.5075C23.6152 43.9434 29.7121 34.5967 38.5162 28.3771C47.3203 22.1575 58.1671 19.5344 68.8403 21.0439C79.5135 22.5534 89.2075 28.0814 95.9416 36.4985C102.676 44.9157 105.942 55.5865 105.072 66.3308C104.202 77.0751 99.2628 87.0818 91.2627 94.3063L104.562 109.034Z" fill="white" fillOpacity="0.07"/>
                </svg>
                <svg width="71" height="124" viewBox="0 0 74 127" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute" style={{ top: '0px', left: '387px', pointerEvents: 'none' }}>
                  <path d="M1 28.5004C1 28.5004 31.0592 -8.55032 48 3.50038C66.1137 16.3854 15.8958 40.3189 30 57.5004C40.2801 70.0234 60.8817 53.4622 70.5 66.5004C82.0598 82.1703 48.2618 97.0986 57 114.5C59.5591 119.597 66 126 66 126" stroke="white" strokeOpacity="0.36" strokeWidth="1.5" strokeDasharray="10 10"/>
                </svg>
                <svg width="44" height="173" viewBox="0 0 46 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute" style={{ top: '0px', left: '487px', pointerEvents: 'none' }}>
                  <path d="M45 14.5018C45 14.5018 27.4315 2.56463 14.5 1.00178C-28.2125 -4.16027 55.8886 75.2682 30.5 110.002C21.6628 122.092 1 134.502 1 134.502" stroke="white" strokeOpacity="0.36" strokeWidth="1.5" strokeDasharray="10 10"/>
                </svg>
                <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#2B3162] z-10">
                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.875 16.2656V6.26562H2.875V16.2656H9.875ZM9.875 4.26562V1.26562C9.875 0.713345 10.3227 0.265625 10.875 0.265625H19.875C20.4273 0.265625 20.875 0.713345 20.875 1.26562V17.2656C20.875 17.8179 20.4273 18.2656 19.875 18.2656H1.875C1.32272 18.2656 0.875 17.8179 0.875 17.2656V5.26562C0.875 4.71335 1.32272 4.26562 1.875 4.26562H9.875ZM11.875 2.26562V16.2656H18.875V2.26562H11.875ZM3.875 13.2656H8.875V15.2656H3.875V13.2656ZM12.875 13.2656H17.875V15.2656H12.875V13.2656ZM12.875 10.2656H17.875V12.2656H12.875V10.2656ZM12.875 7.26562H17.875V9.26562H12.875V7.26562ZM3.875 10.2656H8.875V12.2656H3.875V10.2656Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-between ml-9 w-[346px] h-[125px] gap-2.5 z-10">
                  <div className="text-white text-lg font-northura mb-1">Get new domain</div>
                  <div className="text-[#D1D5F6] text-sm font-korolev">Find the perfect domain name using quick search from our range of available extensions</div>
                  <button
                    className="w-[124px] h-[32px] rounded-full flex items-center justify-center px-[20px] py-[10px] font-korolev text-white text-sm font-medium whitespace-nowrap mt-1"
                    style={{
                      background: 'linear-gradient(133.05deg, rgba(120, 101, 187, 0.7) 2.54%, rgba(48, 255, 219, 0.7) 100.88%)',
                      borderRadius: '398.44px',
                    }}
                  >
                    Get New Domain
                  </button>
                </div>
              </div>
              {/* Transfer Now Card (top right) */}
              <div className="relative flex flex-row items-center w-[524px] h-[151px] rounded-[15.94px] bg-[#23295A] px-8 py-6 overflow-hidden col-start-2 row-start-1">
                <svg width="126" height="53" viewBox="0 0 126 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 z-0">
                  <path d="M104.562 109.034C116.316 98.4192 123.573 83.7173 124.851 67.9317C126.128 52.1461 121.33 36.4684 111.436 24.1019C101.543 11.7354 87.3002 3.61358 71.6191 1.39586C55.9379 -0.82187 40.0017 3.03193 27.0667 12.1698C14.1316 21.3077 5.17403 35.04 2.02417 50.5608C-1.1257 66.0816 1.76991 82.2194 10.1193 95.6769C18.4688 109.134 31.6418 118.896 46.9469 122.966C62.252 127.037 78.5339 125.11 92.4658 117.579L83.0294 100.123C73.5468 105.249 62.4647 106.56 52.0475 103.79C41.6302 101.019 32.6642 94.3749 26.9812 85.2153C21.2982 76.0556 19.3274 65.0715 21.4713 54.5075C23.6152 43.9434 29.7121 34.5967 38.5162 28.3771C47.3203 22.1575 58.1671 19.5344 68.8403 21.0439C79.5135 22.5534 89.2075 28.0814 95.9416 36.4985C102.676 44.9157 105.942 55.5865 105.072 66.3308C104.202 77.0751 99.2628 87.0818 91.2627 94.3063L104.562 109.034Z" fill="white" fillOpacity="0.07"/>
                </svg>
                <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#2B3162] z-10">
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L17.2169 1.82598C17.6745 1.92766 18 2.33347 18 2.80217V12.7889C18 14.795 16.9974 16.6684 15.3282 17.7812L9 22L2.6718 17.7812C1.00261 16.6684 0 14.795 0 12.7889V2.80217C0 2.33347 0.32553 1.92766 0.78307 1.82598L9 0ZM9 2.04879L2 3.60434V12.7889C2 14.1263 2.6684 15.3752 3.7812 16.1171L9 19.5963L14.2188 16.1171C15.3316 15.3752 16 14.1263 16 12.7889V3.60434L9 2.04879ZM13.4524 7.22183L14.8666 8.63604L8.5026 15L4.25999 10.7574L5.67421 9.3431L8.5019 12.1709L13.4524 7.22183Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-between ml-8 w-[346px] h-[125px] gap-2.5 z-10">
                  <div className="text-white text-lg font-northura mb-1">Transfer your domain into Nameword</div>
                  <div className="text-[#D1D5F6] text-sm font-korolev">Easily transfer your existing domain with our fast and secure services</div>
                  <button
                    className="w-[124px] h-[32px] rounded-full flex items-center justify-center px-[20px] py-[10px] font-korolev text-white text-sm font-medium whitespace-nowrap mt-1"
                    style={{
                      background: 'linear-gradient(133.05deg, rgba(120, 101, 187, 0.7) 2.54%, rgba(48, 255, 219, 0.7) 100.88%)',
                      borderRadius: '398.44px',
                    }}
                  >
                    Transfer Now
                  </button>
                </div>
              </div>
              {/* Avatars Card (bottom left) */}
              <div className="relative w-[330px] h-[116px] rounded-[20px] bg-[#23295A] flex flex-col items-center justify-center overflow-hidden col-start-1 row-start-2 z-10">
                {/* Blue dot inside bottom-left */}
                <span className="absolute left-3 bottom-3 w-[12px] h-[12px] rounded-full bg-[#3E239E]" />
                {/* Green dot outside bottom-left */}
                <span className="absolute left-[-8px] bottom-[-8px] w-[6px] h-[6px] rounded-full bg-[#2CD0A8]" />
                {/* Avatars */}
                <div className="flex flex-row items-center justify-center gap-[-8px] mt-2">
                  {['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg', 'profile5.jpg', 'profile6.jpg', 'profile7.jpg', 'profile8.jpg', 'profile9.jpg'].map((img, idx) => (
                    <img
                      key={img}
                      src={`/profiles/${img}`}
                      alt="Customer"
                      className="w-[36px] h-[36px] rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                      style={{ zIndex: 10 - idx }}
                    />
                  ))}
                </div>
                {/* Text */}
                <div className="mt-3 text-white text-base font-korolev text-center">several customers around the world</div>
              </div>
              {/* Domain Input Card (bottom right) */}
              <div className="relative w-[524px] h-[64px] rounded-[50px] bg-[#23295A] flex flex-row items-center px-6 overflow-visible col-start-2 row-start-2 z-10">
                {/* Search icon */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                  <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="ml-3 text-white text-lg font-korolev">https://example</span>
              </div>
              {/* Carlos badge absolutely positioned outside the input card */}
              <div style={{ position: 'absolute', width: '104px', height: '62px', top: '259px', left: '760px', opacity: 1, borderRadius: '24px', zIndex: 30 }}>
                <svg width="104" height="62" viewBox="0 0 104 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_8366_273900)">
                    <path d="M11.8924 23.7116L7.33378 7.72003C7.0984 6.89431 7.95602 6.18128 8.73584 6.55434L23.8385 13.7794C24.6416 14.1636 24.5812 15.3161 23.7425 15.6133L17.5312 17.8141C17.3056 17.894 17.1164 18.0513 16.9978 18.2576L13.7318 23.9363C13.2908 24.7031 12.1347 24.5618 11.8924 23.7116Z" fill="#039855"/>
                    <path d="M6.85075 7.85461C6.49768 6.61604 7.78362 5.54695 8.95335 6.1065L24.0564 13.3316C25.2607 13.908 25.1699 15.6361 23.9119 16.0818L17.7012 18.2827C17.5885 18.3226 17.4939 18.4014 17.4346 18.5043L14.1679 24.1831C13.5065 25.3331 11.7731 25.1216 11.4093 23.8465L6.85075 7.85461Z" stroke="#039855"/>
                  </g>
                  <path d="M42 22.9995H84C94.4934 22.9995 103 31.5061 103 41.9995C103 52.4929 94.4934 60.9995 84 60.9995H42C31.5066 60.9995 23 52.4929 23 41.9995C23 31.5061 31.5066 22.9995 42 22.9995Z" fill="#039855"/>
                  <path d="M42 22.9995H84C94.4934 22.9995 103 31.5061 103 41.9995C103 52.4929 94.4934 60.9995 84 60.9995H42C31.5066 60.9995 23 52.4929 23 41.9995C23 31.5061 31.5066 22.9995 42 22.9995Z" stroke="#039855" strokeWidth="2"/>
                  <path d="M48.9432 40.1472H47.1705C47.1023 39.7685 46.9754 39.4351 46.7898 39.1472C46.6042 38.8594 46.3769 38.615 46.108 38.4143C45.839 38.2135 45.5379 38.062 45.2045 37.9597C44.875 37.8575 44.5246 37.8063 44.1534 37.8063C43.483 37.8063 42.8826 37.9749 42.3523 38.312C41.8258 38.6491 41.4091 39.1435 41.1023 39.795C40.7992 40.4465 40.6477 41.2419 40.6477 42.1813C40.6477 43.1283 40.7992 43.9275 41.1023 44.5791C41.4091 45.2306 41.8277 45.723 42.358 46.0563C42.8883 46.3897 43.4848 46.5563 44.1477 46.5563C44.5152 46.5563 44.8636 46.5071 45.1932 46.4086C45.5265 46.3063 45.8277 46.1567 46.0966 45.9597C46.3655 45.7628 46.5928 45.5222 46.7784 45.2381C46.9678 44.9503 47.0985 44.6207 47.1705 44.2495L48.9432 44.2552C48.8485 44.8272 48.6648 45.3537 48.392 45.8347C48.1231 46.312 47.7765 46.7249 47.3523 47.0734C46.9318 47.4181 46.4508 47.6851 45.9091 47.8745C45.3674 48.0639 44.7765 48.1586 44.1364 48.1586C43.1288 48.1586 42.2311 47.92 41.4432 47.4427C40.6553 46.9616 40.0341 46.2741 39.5795 45.3802C39.1288 44.4863 38.9034 43.42 38.9034 42.1813C38.9034 40.9389 39.1307 39.8726 39.5852 38.9825C40.0398 38.0885 40.661 37.4029 41.4489 36.9256C42.2367 36.4446 43.1326 36.2041 44.1364 36.2041C44.7538 36.2041 45.3295 36.2931 45.8636 36.4711C46.4015 36.6453 46.8845 36.9029 47.3125 37.2438C47.7405 37.581 48.0947 37.9938 48.375 38.4825C48.6553 38.9673 48.8447 39.5222 48.9432 40.1472ZM53.4474 48.1927C52.8944 48.1927 52.3944 48.0904 51.9474 47.8859C51.5005 47.6775 51.1463 47.3764 50.8849 46.9825C50.6274 46.5885 50.4986 46.1056 50.4986 45.5336C50.4986 45.0412 50.5933 44.6359 50.7827 44.3177C50.9721 43.9995 51.2277 43.7476 51.5497 43.562C51.8717 43.3764 52.2315 43.2363 52.6293 43.1416C53.027 43.0469 53.4323 42.9749 53.8452 42.9256C54.3679 42.865 54.7921 42.8158 55.1179 42.7779C55.4437 42.7363 55.6804 42.67 55.8281 42.5791C55.9759 42.4881 56.0497 42.3404 56.0497 42.1359V42.0961C56.0497 41.5999 55.9096 41.2154 55.6293 40.9427C55.3527 40.67 54.9399 40.5336 54.3906 40.5336C53.8187 40.5336 53.3679 40.6605 53.0384 40.9143C52.7126 41.1643 52.4872 41.4427 52.3622 41.7495L50.7656 41.3859C50.955 40.8556 51.2315 40.4275 51.5952 40.1018C51.9626 39.7722 52.3849 39.5336 52.8622 39.3859C53.3395 39.2344 53.8414 39.1586 54.3679 39.1586C54.7164 39.1586 55.0857 39.2003 55.4759 39.2836C55.8698 39.3631 56.2372 39.5109 56.5781 39.7268C56.9228 39.9427 57.205 40.2514 57.4247 40.6529C57.6444 41.0506 57.7543 41.5677 57.7543 42.2041V47.9995H56.0952V46.8063H56.027C55.9171 47.026 55.7524 47.2419 55.5327 47.4541C55.313 47.6662 55.0308 47.8423 54.6861 47.9825C54.3414 48.1226 53.9285 48.1927 53.4474 48.1927ZM53.8168 46.8291C54.2865 46.8291 54.688 46.7363 55.0213 46.5506C55.3584 46.365 55.6141 46.1226 55.7884 45.8234C55.9664 45.5203 56.0554 45.1965 56.0554 44.8518V43.7268C55.9948 43.7874 55.8774 43.8442 55.7031 43.8972C55.5327 43.9465 55.3376 43.99 55.1179 44.0279C54.8982 44.062 54.6842 44.0942 54.4759 44.1245C54.2675 44.151 54.0933 44.1738 53.9531 44.1927C53.6236 44.2344 53.3224 44.3044 53.0497 44.4029C52.7808 44.5014 52.5649 44.6435 52.402 44.8291C52.2429 45.0109 52.1634 45.2533 52.1634 45.5563C52.1634 45.9768 52.3187 46.295 52.6293 46.5109C52.9399 46.723 53.3357 46.8291 53.8168 46.8291ZM60.017 47.9995V39.2722H61.6591V40.6586H61.75C61.9091 40.1889 62.1894 39.8196 62.5909 39.5506C62.9962 39.2779 63.4545 39.1416 63.9659 39.1416C64.072 39.1416 64.197 39.1453 64.3409 39.1529C64.4886 39.1605 64.6042 39.17 64.6875 39.1813V40.8063C64.6193 40.7874 64.4981 40.7666 64.3239 40.7438C64.1496 40.7173 63.9754 40.7041 63.8011 40.7041C63.3996 40.7041 63.0417 40.7893 62.7273 40.9597C62.4167 41.1264 62.1705 41.3594 61.9886 41.6586C61.8068 41.9541 61.7159 42.2912 61.7159 42.67V47.9995H60.017ZM67.8565 36.3631V47.9995H66.1577V36.3631H67.8565ZM73.8182 48.1756C73 48.1756 72.286 47.9881 71.6761 47.6131C71.0663 47.2381 70.5928 46.7135 70.2557 46.0393C69.9186 45.365 69.75 44.5772 69.75 43.6756C69.75 42.7703 69.9186 41.9787 70.2557 41.3006C70.5928 40.6226 71.0663 40.0961 71.6761 39.7211C72.286 39.3461 73 39.1586 73.8182 39.1586C74.6364 39.1586 75.3504 39.3461 75.9602 39.7211C76.5701 40.0961 77.0436 40.6226 77.3807 41.3006C77.7178 41.9787 77.8864 42.7703 77.8864 43.6756C77.8864 44.5772 77.7178 45.365 77.3807 46.0393C77.0436 46.7135 76.5701 47.2381 75.9602 47.6131C75.3504 47.9881 74.6364 48.1756 73.8182 48.1756ZM73.8239 46.7495C74.3542 46.7495 74.7936 46.6094 75.142 46.3291C75.4905 46.0488 75.7481 45.6756 75.9148 45.2097C76.0852 44.7438 76.1705 44.2306 76.1705 43.67C76.1705 43.1131 76.0852 42.6018 75.9148 42.1359C75.7481 41.6662 75.4905 41.2893 75.142 41.0052C74.7936 40.7211 74.3542 40.5791 73.8239 40.5791C73.2898 40.5791 72.8466 40.7211 72.4943 41.0052C72.1458 41.2893 71.8864 41.6662 71.7159 42.1359C71.5492 42.6018 71.4659 43.1131 71.4659 43.67C71.4659 44.2306 71.5492 44.7438 71.7159 45.2097C71.8864 45.6756 72.1458 46.0488 72.4943 46.3291C72.8466 46.6094 73.2898 46.7495 73.8239 46.7495ZM86.3224 41.4029L84.7827 41.6756C84.7183 41.4787 84.616 41.2912 84.4759 41.1131C84.3395 40.9351 84.1539 40.7893 83.919 40.6756C83.6842 40.562 83.3906 40.5052 83.0384 40.5052C82.5573 40.5052 82.1558 40.6131 81.8338 40.8291C81.5118 41.0412 81.3509 41.3158 81.3509 41.6529C81.3509 41.9446 81.4588 42.1794 81.6747 42.3575C81.8906 42.5355 82.2391 42.6813 82.7202 42.795L84.1065 43.1131C84.9096 43.2988 85.508 43.5847 85.902 43.9711C86.2959 44.3575 86.4929 44.8594 86.4929 45.4768C86.4929 45.9995 86.3414 46.4654 86.0384 46.8745C85.7391 47.2798 85.3205 47.598 84.7827 47.8291C84.2486 48.0601 83.6293 48.1756 82.9247 48.1756C81.9474 48.1756 81.1501 47.9673 80.5327 47.5506C79.9152 47.1302 79.5365 46.5336 79.3963 45.7609L81.0384 45.5109C81.1406 45.9389 81.3509 46.2628 81.669 46.4825C81.9872 46.6984 82.402 46.8063 82.9134 46.8063C83.4702 46.8063 83.9152 46.6908 84.2486 46.4597C84.5819 46.2249 84.7486 45.9389 84.7486 45.6018C84.7486 45.3291 84.6463 45.0999 84.4418 44.9143C84.241 44.7287 83.9323 44.5885 83.5156 44.4938L82.0384 44.17C81.224 43.9844 80.6217 43.6889 80.2315 43.2836C79.8452 42.8783 79.652 42.365 79.652 41.7438C79.652 41.2287 79.7959 40.7779 80.0838 40.3916C80.3717 40.0052 80.7694 39.7041 81.277 39.4881C81.7846 39.2685 82.366 39.1586 83.0213 39.1586C83.9645 39.1586 84.7069 39.3631 85.2486 39.7722C85.7902 40.1775 86.1482 40.7211 86.3224 41.4029Z" fill="white"/>
                  <defs>
                    <filter id="filter0_d_8366_273900" x="4.28796" y="4.45459" width="23.1241" height="23.979" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8366_273900"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8366_273900" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Hexagon and Dotted Lines (absolutely positioned between bottom cards) */}
              <div className="pointer-events-none absolute" style={{ width: '56px', height: '66px', top: '245px', left: '424px', opacity: 1, zIndex: 0, transform: 'none' }}>
                {/* Dotted SVG from avatars to hexagon */}
                <svg width="200" height="107" viewBox="0 0 202 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-170px] top-[-10px] z-20">
                  <path d="M1 69.5002C1 69.5002 17.0219 107.682 38 108.5C59.8004 109.35 57.2002 76.0842 78 69.5002C104.787 61.0211 85.9033 101.499 114 101.5C149 101.501 125 -19.9993 201.5 4.00021" stroke="white" strokeOpacity="0.36" strokeWidth="1.5" strokeDasharray="10 10"/>
                </svg>
                {/* SVG Hexagon with centered logo */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg width="56" height="66" viewBox="0 0 56 66" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-xl'>
                    <polygon points="28,6 52,19 52,47 28,60 4,47 4,19" fill="#3C4067" stroke="#3C4067" strokeWidth="2" style={{ filter: 'blur(0.5px)' }} strokeLinejoin="round" strokeLinecap="round"/>
                  </svg>
                  <span className="absolute flex items-center justify-center w-full h-full">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-auto">
                      <path d="M2 0V16H18V18H0V0H2ZM16.9393 2.93934L19.0607 5.06066L13 11.1213L10 8.121L6.06066 12.0607L3.93934 9.9393L10 3.87868L13 6.879L16.9393 2.93934Z" fill="white"/>
                    </svg>
                  </span>
                </div>
                {/* Dotted SVG from hexagon to domain input */}
                <svg width="66" height="56" viewBox="0 0 66 56" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-[-50px] top-[-0px] z-20'>
                  <path d="M64.5 38C64.5 38 42.2695 60.1853 28.5 53.5C14.6958 46.7979 28.0668 27.4979 18.5 15.5C12.9481 8.53719 0.5 1.5 0.5 1.5" stroke="white" strokeOpacity="0.36" strokeWidth="1.5" strokeDasharray="10 10"/>
                </svg>
              </div>
              {/* Rectangle decorations below domain input card */}
              <div style={{ position: 'absolute', width: '149px', height: '9px', top: '307px', left: '574px', borderRadius: '10px', background: '#4F5375', opacity: 1, zIndex: 20 }} />
              <div style={{ position: 'absolute', width: '99px', height: '9px', top: '332px', left: '574px', borderRadius: '10px', background: '#4F5375', opacity: 1, zIndex: 20 }} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default SearchDomain; 