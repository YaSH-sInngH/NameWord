import React from 'react';
import { useNavigate } from 'react-router-dom';
import globeImg from '../assets/globe.png';
import girlImg from '../assets/image1.png';
import domainImg from '../assets/image2.png';
import pod1 from '../assets/pod1.png'
import pod2 from '../assets/pod2.png'
import pod3 from '../assets/pod3.png'
import kleberImg from '../assets/image3.png';
import newImg from '../assets/new.png';
import mapImg from '../assets/map.png'
import NImg from '../assets/N.png'
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';
import ClientsFeedback from './ClientsFeedback';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full text-white justify-center bg-white">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto md:h-[65.5rem] bg-[#3E239E] rounded-b-[56px] pt-[20px] lg:pt-[180px] xl:pt-[206px] pr-[146px] pl-[146px] gap-[10px] overflow-hidden"
      >
        {/* SVG Background */}
        <svg
          width="1152"
          height="1126"
          viewBox="0 0 1152 1126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 pointer-events-none h-[1048px] w-auto top-10"
          style={{ opacity: 0.05 }}
        >
          <path
            d="M315.594 1126L120.34 1043.02L225.538 405.231L156.071 477.469L0 323.863L312.141 0L497.566 94.7956L410.565 621.945L800.542 82.8452L996.062 163.677L926.993 641.28L988.624 570.654L1152 716.203L847.961 1064.64L658.684 976.019L717.261 570.788L315.594 1126Z"
            fill="white"
          />
        </svg>
        {/* Hero Content */}
        <div className="w-[180px] lg:w-full flex flex-col items-center ">
          <h1 className="text-2xl md:text-6xl font-northuraLight text-center mb-8 leading-tight">Looking For The Perfect <br className="hidden md:block" />Domain?</h1>
          <p className="text-center text-sm font-korolevLight mb-8 mx-auto">Nameword is trusted by businesses and brands that value online credibility</p>
          <div className="flex items-center justify-between w-[100%] lg:w-[500px] h-[51px] lg:h-[69px] bg-white border border-[#E0E0E0] rounded-[50px] pl-[16px] pr-[4px] py-[4px] gap-2 shadow-[0_8px_32px_0_rgba(62,35,158,0.15)] mb-0 lg:mb-6">
              {/* Search Icon */}
              <svg className="mr-1" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="#B0B0B0" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                className="flex-1 bg-transparent outline-none text-[#8B8B8B] placeholder-[#8B8B8B] text-xs lg:text-sm font-korolevLight"
                placeholder="Search your dream domain name or keyword..."
              />
              <button
                className="flex items-center justify-center w-[91px] lg:w-[159px] h-[31px] lg:h-[61px] rounded-full px-[36px] py-[22px] font-korolevHeavy text-white text-xs lg:text-sm transition bg-gradient-to-r from-[#3E239E] to-[#8B7BC5] shadow-md"
              >
                Search Now
              </button>
          </div>
          {/* Home Card Container: 2x2 grid for all four cards */}
          <div
            className="relative md:w-[720px] xl:w-[1128px] h-auto mt-[20px] lg:[mt-122px] xl:mt-[122px] ml-[10px] rounded-tl-[24px] rounded-tr-[24px] bg-[#0C1141] shadow-[0px_-2px_64px_0px_#2745BE14] overflow-visible flex flex-col justify-between px-8 py-6"
            style={{
              border: '1.2px solid',
              borderImage: `linear-gradient(0deg, rgba(255,255,255,0.16), rgba(255,255,255,0.16)), conic-gradient(from 0deg at 50% 2.74%, #FFFFFF 0deg, rgba(255,255,255,0) 87.28deg, rgba(255,255,255,0) 271.8deg, #FFFFFF 360deg) 1`,
              borderImageSlice: 1,
            }}
          >
            <div className="w-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 md:gap-x-6 gap-y-4 md:gap-y-8 p-4 lg:p-0">
              {/* Get Domain Card (top left) */}
              <div className="relative flex flex-row items-center w-full lg:h-[151px] rounded-[15.94px] bg-[#23295A] px-1 py-2 lg:px-8 lg:py-6 overflow-hidden col-start-1 row-start-1">
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
                <div className="flex flex-col justify-between ml-9 sm:w-[180px] sm:h-[] md:w-[250px] md:h-[80px] lg:w-[346px] lg:h-[125px] gap-2.5 z-10">
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
              <div className="relative flex flex-row items-center w-full lg:h-[151px] rounded-[15.94px] bg-[#23295A] px-1 py-2 lg:px-8 lg:py-6 overflow-hidden col-start-2 row-start-1">
                <svg width="126" height="53" viewBox="0 0 126 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 z-0">
                  <path d="M104.562 109.034C116.316 98.4192 123.573 83.7173 124.851 67.9317C126.128 52.1461 121.33 36.4684 111.436 24.1019C101.543 11.7354 87.3002 3.61358 71.6191 1.39586C55.9379 -0.82187 40.0017 3.03193 27.0667 12.1698C14.1316 21.3077 5.17403 35.04 2.02417 50.5608C-1.1257 66.0816 1.76991 82.2194 10.1193 95.6769C18.4688 109.134 31.6418 118.896 46.9469 122.966C62.252 127.037 78.5339 125.11 92.4658 117.579L83.0294 100.123C73.5468 105.249 62.4647 106.56 52.0475 103.79C41.6302 101.019 32.6642 94.3749 26.9812 85.2153C21.2982 76.0556 19.3274 65.0715 21.4713 54.5075C23.6152 43.9434 29.7121 34.5967 38.5162 28.3771C47.3203 22.1575 58.1671 19.5344 68.8403 21.0439C79.5135 22.5534 89.2075 28.0814 95.9416 36.4985C102.676 44.9157 105.942 55.5865 105.072 66.3308C104.202 77.0751 99.2628 87.0818 91.2627 94.3063L104.562 109.034Z" fill="white" fillOpacity="0.07"/>
                </svg>
                <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#2B3162] z-10">
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L17.2169 1.82598C17.6745 1.92766 18 2.33347 18 2.80217V12.7889C18 14.795 16.9974 16.6684 15.3282 17.7812L9 22L2.6718 17.7812C1.00261 16.6684 0 14.795 0 12.7889V2.80217C0 2.33347 0.32553 1.92766 0.78307 1.82598L9 0ZM9 2.04879L2 3.60434V12.7889C2 14.1263 2.6684 15.3752 3.7812 16.1171L9 19.5963L14.2188 16.1171C15.3316 15.3752 16 14.1263 16 12.7889V3.60434L9 2.04879ZM13.4524 7.22183L14.8666 8.63604L8.5026 15L4.25999 10.7574L5.67421 9.3431L8.5019 12.1709L13.4524 7.22183Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-between ml-0 lg:ml-8 w-[346px] h-[125px] gap-2.5 z-10">
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
              <div className="relative flex flex-row items-center w-full lg:h-[116px] rounded-[20px] bg-[#23295A] flex flex-col items-center justify-center overflow-hidden col-start-1 row-start-2 z-10">
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
              <div className="relative flex flex-row items-center w-full lg:h-[151px] rounded-[50px] bg-[#23295A] flex flex-row items-center px-6 overflow-visible col-start-2 row-start-2 z-10">
                {/* Search icon */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                  <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="ml-3 text-white text-lg font-korolev">https://example</span>
              </div>
              {/* Carlos badge absolutely positioned outside the input card */}
              <div className='hidden xl:block' style={{ position: 'absolute', width: '104px', height: '62px', top: '259px', left: '760px', opacity: 1, borderRadius: '24px', zIndex: 30 }}>
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
      </section>

      
      {/* Features Section */}
      <section
      className="responsive-section relative flex flex-col items-center justify-center w-full mx-auto bg-white xl:max-w-[90rem] 2xl:max-w-[100%] xl:h-[895px] xl:pt-[80px] xl:pr-[180px] xl:pb-[80px] xl:pl-[180px] xl:gap-[22px] lg:py-[70px] lg:px-[60px] lg:gap-[30px] md:py-[60px] md:px-[40px] md:gap-[28px] py-[40px] px-[20px] gap-[32px]"
      style={{
        height: 'auto'
      }}
    >
      {/* Frame for globe and feature cards */}
      <div className="responsive-frame relative flex items-center justify-center w-full mx-auto xl:max-w-[1080px] xl:h-[639px] xl:flex-row lg:max-w-[900px] lg:flex-col lg:gap-[50px] md:max-w-full md:flex-col md:gap-[40px] flex-col gap-[32px]" style={{ opacity: 1 }}>
        {/* Globe background - positioned behind cards */}
        <img
          src={globeImg}
          alt="Globe Background"
          className="responsive-globe xl:w-[639px] xl:h-[639px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[200px] h-[200px] flex-shrink-0"
          style={{
            opacity: 1,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
            display: 'block',
            margin: '0 auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
          <div className='block md:hidden z-99'>
            <svg width="134" height="23" viewBox="0 0 134 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.986 8.4V21.552C15.986 21.872 15.826 22.032 15.506 22.032H13.426C13.106 22.032 12.946 21.872 12.946 21.552V8.4C12.946 5.488 11.122 4.72 8.498 4.72H8.21C5.618 4.72 3.762 5.488 3.762 8.4V21.552C3.762 21.872 3.602 22.032 3.282 22.032H1.202C0.882 22.032 0.722 21.872 0.722 21.552V8.4C0.722 3.376 3.666 2 8.21 2H8.498C13.042 2 15.986 3.376 15.986 8.4ZM27.1 17.936V14.512H23.356C21.884 14.512 21.308 15.312 21.308 16.368V17.712C21.308 18.384 21.564 18.768 21.916 18.992C22.268 19.248 22.684 19.312 23.132 19.312H25.628C26.524 19.312 27.1 18.832 27.1 17.936ZM18.972 7.92V6.224C18.972 5.904 19.132 5.744 19.452 5.744H24.764C28.092 5.744 30.14 6.704 30.14 10.352V21.52C30.14 21.84 29.98 22 29.66 22H28.06L27.516 20.976C27.1 21.648 26.396 22 25.148 22H21.884C19.772 22 18.268 20.848 18.268 18.544V16.336C18.268 13.616 20.38 12.368 22.876 12.368H27.1V10.576C27.1 8.784 25.852 8.432 24.284 8.432H19.452C19.132 8.432 18.972 8.272 18.972 7.92ZM36.1683 9.904V21.52C36.1683 21.84 36.0083 22 35.6883 22H33.6083C33.2883 22 33.1283 21.84 33.1283 21.52V6.224C33.1283 5.904 33.2883 5.744 33.6083 5.744H35.2083L35.7523 6.768C36.1683 6.096 36.8723 5.744 38.1203 5.744H40.0723C41.2883 5.744 42.1203 6.128 42.6643 6.864C43.2083 6.128 43.9443 5.744 45.1283 5.744H47.0163C48.9683 5.744 50.1843 6.768 50.1843 8.592V21.52C50.1843 21.84 50.0243 22 49.7043 22H47.6243C47.3043 22 47.1443 21.84 47.1443 21.52V10C47.1443 8.848 46.5363 8.432 45.7363 8.432H44.4883C43.5603 8.432 43.1763 9.008 43.1763 10.032V21.52C43.1763 21.84 43.0163 22 42.6963 22H40.6163C40.2963 22 40.1363 21.84 40.1363 21.52V10C40.1363 8.848 39.5923 8.432 38.6963 8.432H37.4483C36.6483 8.432 36.1683 8.944 36.1683 9.904ZM59.2403 19.344H64.8083C65.1283 19.344 65.2883 19.472 65.2883 19.824V21.52C65.2883 21.84 65.1283 22 64.8083 22H58.9203C54.8563 22 53.1283 20.784 53.1283 16.496V11.024C53.1283 7.024 55.1443 5.744 58.8563 5.744H59.6562C62.9203 5.744 65.2883 6.672 65.2883 10.352V10.896C65.2883 13.232 63.9123 14.512 61.4803 14.512H56.1683V16.496C56.1683 18.672 57.1283 19.344 59.2403 19.344ZM62.7283 10.896V10.384C62.7283 8.848 61.8323 8.4 60.2323 8.4H59.0483C57.0963 8.4 56.1683 9.072 56.1683 11.088V12.368H60.9043C62.0883 12.368 62.7283 11.92 62.7283 10.896ZM80.6933 8.08L77.7173 20.56C77.4613 21.552 76.8213 22 75.8293 22H73.8453C72.8213 22 72.2133 21.552 71.9573 20.56L66.5813 2.576C66.4853 2.256 66.6133 2.096 66.9333 2.096H69.2053C69.4933 2.096 69.6533 2.224 69.7493 2.48L74.5493 18.928C74.6453 19.184 74.7093 19.344 74.9013 19.344H75.0293C75.1573 19.344 75.2853 19.184 75.3493 18.928L79.2533 2.48C79.3173 2.224 79.5093 2.096 79.7653 2.096H81.6533C81.8773 2.096 82.0373 2.224 82.1013 2.48L86.0373 18.928C86.1013 19.184 86.1653 19.344 86.3573 19.344H86.4853C86.6773 19.344 86.7413 19.184 86.8373 18.928L91.6373 2.48C91.7333 2.224 91.8933 2.096 92.1493 2.096H94.4533C94.7733 2.096 94.9013 2.256 94.7733 2.576L89.4293 20.56C89.1413 21.552 88.5333 22 87.5413 22H85.5573C84.5653 22 83.8933 21.552 83.6693 20.56L80.6933 8.08ZM101.659 19.376H102.107C105.307 19.376 106.683 17.168 106.683 14.16V13.552C106.683 10.48 105.243 8.368 102.043 8.368H101.691C98.5233 8.368 97.1153 10.544 97.1153 13.552V14.16C97.1153 16.272 97.7552 17.552 98.6833 18.32C99.5473 19.12 100.699 19.376 101.659 19.376ZM102.011 22.064H101.787C96.8593 22.064 94.2993 18.736 94.2993 14V13.712C94.2993 8.944 96.8273 5.648 101.787 5.648H102.011C106.619 5.648 109.499 8.56 109.499 13.712V14C109.499 19.152 106.619 22.064 102.011 22.064ZM111.753 21.52V6.224C111.753 5.904 111.913 5.744 112.233 5.744H113.833L114.377 6.768C114.793 6.096 115.497 5.744 116.745 5.744H119.817C120.137 5.744 120.265 5.872 120.297 6.224V7.952C120.297 8.272 120.169 8.4 119.817 8.432H116.169C115.273 8.432 114.793 8.976 114.793 9.904V21.52C114.793 21.84 114.665 21.968 114.313 22H112.233C111.913 22 111.785 21.872 111.753 21.52ZM130.214 17.936V8.432H126.31C124.838 8.432 124.262 9.232 124.262 10.256V17.36C124.262 18.16 124.55 18.672 124.966 18.928C125.35 19.216 125.894 19.312 126.374 19.312H128.742C129.638 19.312 130.214 18.832 130.214 17.936ZM132.774 22H131.174L130.63 20.976C130.214 21.648 129.51 22 128.262 22H124.87C122.726 22 121.222 20.848 121.222 18.544V9.712C121.222 6.992 123.334 5.744 125.83 5.744H130.214V0.976C130.214 0.655998 130.374 0.495998 130.694 0.495998H132.774C133.094 0.495998 133.254 0.655998 133.254 0.976V21.52C133.254 21.84 133.094 22 132.774 22Z" fill="#5E30CC"/>
            </svg>
          </div>
        {/* Feature Cards Container */}
        <div className="xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full static flex flex-col gap-4 w-full max-w-[335px] md:max-w-[600px] md:grid md:grid-cols-2 md:gap-5 lg:max-w-[700px] lg:gap-6 mx-auto z-10">
          {/* Zero Hidden Fees */}
          <div className="xl:absolute xl:top-[71px] xl:left-[138px] xl:w-[300px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-5 md:h-4 lg:w-5 lg:h-4 xl:w-5 xl:h-4" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0004 12C12.2095 12 14.0004 10.2091 14.0004 8C14.0004 5.79086 12.2095 4 10.0004 4C7.79123 4 6.00037 5.79086 6.00037 8C6.00037 10.2091 7.79123 12 10.0004 12ZM19.0049 0.00292969H1.00488C0.452603 0.00292969 0.00488281 0.45064 0.00488281 1.00293V15.0029C0.00488281 15.5552 0.452603 16.0029 1.00488 16.0029H19.0049C19.5572 16.0029 20.0049 15.5552 20.0049 15.0029V1.00293C20.0049 0.45064 19.5572 0.00292969 19.0049 0.00292969ZM2.00488 11.6463V4.35371C3.13065 4.017 4.01836 3.12892 4.35455 2.00293H15.6462C15.9833 3.13193 16.8748 4.02175 18.0049 4.3564V11.6436C16.8729 11.9788 15.9802 12.8711 15.6444 14.0029H4.3563C4.02144 12.8742 3.13261 11.9836 2.00488 11.6463Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">Zero Hidden Fees</span>
          </div>
          
          {/* Intuitive Interface */}
          <div className="xl:absolute xl:top-[71px] xl:left-[648px] xl:w-[300px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20ZM16 18V2H2V18H16ZM4 4H8V8H4V4ZM4 10H14V12H4V10ZM4 14H14V16H4V14ZM10 5H14V7H10V5Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">Intuitive Interface</span>
          </div>
          
          {/* 24/7 Customer Support */}
          <div className="xl:absolute xl:top-[229px] xl:left-[0px] xl:w-[370px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-[22px] xl:h-[22px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9381 7H20C21.1046 7 22 7.89543 22 9V13C22 14.1046 21.1046 15 20 15H18.9381C18.446 18.9463 15.0796 22 11 22V20C14.3137 20 17 17.3137 17 14V8C17 4.68629 14.3137 2 11 2C7.68629 2 5 4.68629 5 8V15H2C0.89543 15 0 14.1046 0 13V9C0 7.89543 0.89543 7 2 7H3.06189C3.55399 3.05369 6.92038 0 11 0C15.0796 0 18.446 3.05369 18.9381 7ZM2 9V13H3V9H2ZM19 9V13H20V9H19ZM6.75944 14.7849L7.81958 13.0887C8.74161 13.6662 9.8318 14 11 14C12.1682 14 13.2584 13.6662 14.1804 13.0887L15.2406 14.7849C14.0112 15.5549 12.5576 16 11 16C9.4424 16 7.98882 15.5549 6.75944 14.7849Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">24/7 Customer Support</span>
          </div>
          
          {/* Secure Payments */}
          <div className="xl:absolute xl:top-[245px] xl:left-[753px] xl:w-[300px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-4 md:h-5 lg:w-4 lg:h-5 xl:w-[18px] xl:h-[21px]" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3ZM16 9H2V19H16V9ZM8 14.7324C7.4022 14.3866 7 13.7403 7 13C7 11.8954 7.8954 11 9 11C10.1046 11 11 11.8954 11 13C11 13.7403 10.5978 14.3866 10 14.7324V17H8V14.7324ZM5 7H13V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">Secure Payments</span>
          </div>
          
          {/* No Website Downtimes */}
          <div className="xl:absolute xl:top-[484px] xl:left-[105px] xl:w-[360px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-5 md:h-4 lg:w-5 lg:h-4 xl:w-5 xl:h-[18px]" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM18 7H2V16H18V7ZM3 3V5H5V3H3ZM7 3V5H9V3H7Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">No Website Downtimes</span>
          </div>
          
          {/* Competitive Plans */}
          <div className="xl:absolute xl:top-[463px] xl:left-[712px] xl:w-[300px] xl:h-[84px] static w-full h-16 md:h-[74px] lg:h-[80px] xl:px-6 px-4 md:px-5 lg:px-6 bg-white rounded-[20px] shadow-[0_8px_32px_0_#2745BE0F] backdrop-blur-[32px] flex items-center z-10" style={{ opacity: 1 }}>
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] xl:w-[52px] xl:h-[52px] bg-[#F7F3FF] rounded-[12px] mr-3 md:mr-4 lg:mr-[18px]" style={{ opacity: 1 }}>
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-[19px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.9998 15L4.12197 18.5902L5.72007 11.8906L0.489258 7.40983L7.35479 6.85942L9.9998 0.5L12.6449 6.85942L19.5104 7.40983L14.2796 11.8906L15.8777 18.5902L9.9998 15Z" fill="#3E239E"/>
              </svg>
            </span>
            <span className="font-northura text-xl md:text-2xl lg:text-lg xl:text-xl text-black">Competitive Plans</span>
          </div>
        </div>
      </div>
      
      {/* Description below globe */}
      <div className="w-full max-w-[335px] md:max-w-[500px] lg:max-w-[550px] xl:w-[639px] xl:mt-8 text-center text-[#888] text-lg md:text-xl lg:text-[22px] xl:text-xl z-20">
        Your domain name is the foundation of your online identity. Elevate your brand's visibility and credibility with the right one.
      </div>
      </section>
      
      
      {/* Pricing Section (Figma Spec) */}
      <section className="w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto flex flex-col items-center justify-center bg-white relative pt-10 md:pt-16 lg:pt-20 pr-4 md:pr-8 lg:pr-[72px] pb-10 md:pb-16 lg:pb-20 pl-4 md:pl-8 lg:pl-[72px] gap-8 md:gap-12 lg:gap-16 min-h-[400px] md:min-h-[500px] lg:h-[662px]">
      {/* Title */}
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center px-4">
          Unbeatable Pricing and Plans.
        </h2>
      </div>

      {/* Desktop Layout (1440px and above) */}
      <div className="hidden xl:block w-[1296px] h-[272px] bg-[#F7F6FF] rounded-[40px] flex items-center justify-center relative shadow-[0_8px_32px_0_#2745BE0F] overflow-visible">
        {/* SVG lines behind cards */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 z-0 width-[1397px]" viewBox="0 0 1296 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-49 26.0003C-49 26.0003 72.7605 -6.68211 150.5 3.5003C238.104 14.9748 270.163 94.185 358.5 92.5003C443.083 90.8872 471.435 5.85256 556 3.5003C634.398 1.31958 667.081 68.7654 745.5 70.0003C827.614 71.2934 862.878 2.99726 945 3.5003C1025.64 3.99428 1059.86 71.0446 1140.5 70.0003C1218.19 68.9942 1328 3.5003 1328 3.5003" stroke="#5E30CC" strokeWidth="1.5"/>
        </svg>
        {/* Pricing Cards - absolutely positioned */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[32px] left-[78px]">
            <span className="text-base font-medium text-black">.com</span>
            <span className="text-sm font-medium text-gray-400 line-through">$15.00</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$4.99</span>
          </div>
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[82px] left-[274px]">
            <span className="text-base font-medium text-black">.shop</span>
            <span className="text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[32px] left-[472px]">
            <span className="text-base font-medium text-black">.pro</span>
            <span className="text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[82px] left-[669px]">
            <span className="text-base font-medium text-black">.net</span>
            <span className="text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[32px] left-[866px]">
            <span className="text-base font-medium text-black">.online</span>
            <span className="text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="absolute w-[155.86px] h-[157px] rounded-[17.81px] pt-[20px] pr-[43px] pb-[20px] pl-[43px] gap-[28px] bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] opacity-100 flex flex-col items-center justify-between top-[82px] left-[1068px]">
            <span className="text-base font-medium text-black">.org</span>
            <span className="text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-2xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="xl:hidden w-full max-w-[600px] bg-[#F7F6FF] rounded-[20px] md:rounded-[30px] p-6 md:p-8 shadow-[0_8px_32px_0_#2745BE0F]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Pricing Cards */}
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.com</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$15.00</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$4.99</span>
          </div>
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.shop</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.pro</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.net</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.online</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
          <div className="w-full h-[120px] md:h-[140px] rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[linear-gradient(138.21deg,rgba(255,255,255,0.67)_3.46%,#fff_97.67%)] backdrop-blur-[12px] flex flex-col items-center justify-between">
            <span className="text-sm md:text-base font-medium text-black">.org</span>
            <span className="text-xs md:text-sm font-medium text-gray-400 line-through">$34.80</span>
            <span className="text-lg md:text-xl font-bold text-[#6C4EE6]">$0.99</span>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="w-full flex justify-center">
        <button className="w-[160px] md:w-[180px] lg:w-[200px] h-[44px] md:h-[46px] lg:h-[48px] rounded-full bg-gradient-to-r from-[#6C4EE6] to-[#8B7BC5] text-white font-semibold text-base md:text-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
          Get Started
        </button>
      </div>
    </section>
      
      
      {/* Popular Domains Section */}
      <section
      className="relative w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto flex flex-col items-center justify-center bg-white"
      style={{
        height: 'auto',
        opacity: 1,
        paddingTop: '80px',
        paddingBottom: '80px',
        gap: '64px',
      }}
    >
      {/* Dotted SVG Graph - absolutely positioned left - hidden on mobile */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden xl:block">
        <svg width="229" height="431" viewBox="0 0 229 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36.7355" cy="24.7958" r="6" transform="rotate(15.7678 36.7355 24.7958)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="98.3273" cy="42.1874" r="6" transform="rotate(15.7678 98.3273 42.1874)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="159.919" cy="59.5785" r="6" transform="rotate(15.7678 159.919 59.5785)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="221.511" cy="76.9696" r="6" transform="rotate(15.7678 221.511 76.9696)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="20.4308" cy="82.538" r="6" transform="rotate(15.7678 20.4308 82.538)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="82.0226" cy="99.9296" r="6" transform="rotate(15.7678 82.0226 99.9296)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="143.614" cy="117.321" r="6" transform="rotate(15.7678 143.614 117.321)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="205.206" cy="134.712" r="6" transform="rotate(15.7678 205.206 134.712)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="4.12615" cy="140.28" r="6" transform="rotate(15.7678 4.12615 140.28)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="65.7179" cy="157.672" r="6" transform="rotate(15.7678 65.7179 157.672)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="127.31" cy="175.063" r="6" transform="rotate(15.7678 127.31 175.063)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="188.901" cy="192.454" r="6" transform="rotate(15.7678 188.901 192.454)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="49.4152" cy="215.414" r="6" transform="rotate(15.7678 49.4152 215.414)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="111.007" cy="232.805" r="6" transform="rotate(15.7678 111.007 232.805)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="172.599" cy="250.196" r="6" transform="rotate(15.7678 172.599 250.196)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="33.1105" cy="273.156" r="6" transform="rotate(15.7678 33.1105 273.156)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="94.7022" cy="290.547" r="6" transform="rotate(15.7678 94.7022 290.547)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="156.294" cy="307.938" r="6" transform="rotate(15.7678 156.294 307.938)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="16.8058" cy="330.898" r="6" transform="rotate(15.7678 16.8058 330.898)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="78.3975" cy="348.289" r="6" transform="rotate(15.7678 78.3975 348.289)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="139.989" cy="365.681" r="6" transform="rotate(15.7678 139.989 365.681)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="0.501092" cy="388.641" r="6" transform="rotate(15.7678 0.501092 388.641)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="62.0928" cy="406.032" r="6" transform="rotate(15.7678 62.0928 406.032)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="123.685" cy="423.423" r="6" transform="rotate(15.7678 123.685 423.423)" fill="#D9D9D9" fillOpacity="0.32"/>
        </svg>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[296px] flex flex-col items-center justify-center">
        {/* Section Title */}
        <div className="mb-8 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-northuraExpanded text-black text-center">
            Choose from the most popular domains
          </h2>
        </div>

        {/* Cards Grid Layout */}
        <div className="w-full max-w-[848px] z-10">
          {/* Desktop and Tablet Layout (md and up) */}
          <div className="hidden md:grid md:grid-cols-2 gap-[32px] h-auto md:h-[449px]">
            {/* Left column: Credible (top), Secure (bottom) */}
            <div className="flex flex-col gap-[32px] h-full">
              {/* Credible Card */}
              <div className="w-full max-w-[408px] h-[218px] rounded-[20px] bg-[#F3EDFF] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[36px] pb-[56px] gap-[10px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_8366_278018)">
                  <rect x="14" y="17" width="40" height="40" rx="6" fill="white"/>
                  <path d="M34 26L42.2169 27.826C42.6745 27.9277 43 28.3335 43 28.8022V38.7889C43 40.795 41.9974 42.6684 40.3282 43.7812L34 48L27.6718 43.7812C26.0026 42.6684 25 40.795 25 38.7889V28.8022C25 28.3335 25.3255 27.9277 25.7831 27.826L34 26ZM34 28.0488L27 29.6043V38.7889C27 40.1263 27.6684 41.3752 28.7812 42.1171L34 45.5963L39.2188 42.1171C40.3316 41.3752 41 40.1263 41 38.7889V29.6043L34 28.0488ZM38.4524 33.2218L39.8666 34.636L33.5026 41L29.26 36.7574L30.6742 35.3431L33.5019 38.1709L38.4524 33.2218Z" fill="#3E239E"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_8366_278018" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="10" dy="7"/>
                  <feGaussianBlur stdDeviation="12"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0171701 0 0 0 0 0.0891686 0 0 0 0 0.179167 0 0 0 0.06 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8366_278018"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8366_278018" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
                  <span className="text-xl font-northura text-[#23295A]">Credible.</span>
                </div>
                <div className="text-[#23295A] text-sm font-korolevLight">
                  Our domains help you establish a strong online reputation, ensuring that your brand is recognized and trusted by your audience.
                </div>
              </div>
              
              {/* Secure Card */}
              <div className="w-full max-w-[408px] h-[195px] rounded-[20px] bg-[#EAFFFB] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[36px] pb-[56px] gap-[10px]">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_8366_278026)">
                  <rect x="14" y="17" width="40" height="40" rx="6" fill="white"/>
                  <path d="M40 33H42C42.5523 33 43 33.4477 43 34V46C43 46.5523 42.5523 47 42 47H26C25.4477 47 25 46.5523 25 46V34C25 33.4477 25.4477 33 26 33H28V32C28 28.6863 30.6863 26 34 26C37.3137 26 40 28.6863 40 32V33ZM27 35V45H41V35H27ZM33 39H35V41H33V39ZM29 39H31V41H29V39ZM37 39H39V41H37V39ZM38 33V32C38 29.7909 36.2091 28 34 28C31.7909 28 30 29.7909 30 32V33H38Z" fill="#3E239E"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_8366_278026" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="10" dy="7"/>
                  <feGaussianBlur stdDeviation="12"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0171701 0 0 0 0 0.0891686 0 0 0 0 0.179167 0 0 0 0.06 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8366_278026"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8366_278026" result="shape"/>
                  </filter>
                  </defs>
                  </svg>

                  <span className="text-xl font-northura text-[#23295A]">Secure.</span>
                </div>
                <div className="text-[#23295A] text-sm font-korolevLight">
                  Robust security features safeguard your website and data, providing peace of mind against cyber threats.
                </div>
              </div>
            </div>

            {/* Right column: Popular Card */}
            <div className="w-full max-w-[408px] h-[449px] rounded-[20px] bg-[#D8D3EC] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[24px] pb-[50px] gap-[10px]">
              <div className="flex items-center gap-2 mb-2">
                  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_8366_278035)">
                  <rect x="14" y="17" width="40" height="40" rx="6" fill="white"/>
                  <path d="M24 47C24 42.5817 27.5817 39 32 39C36.4183 39 40 42.5817 40 47H38C38 43.6863 35.3137 41 32 41C28.6863 41 26 43.6863 26 47H24ZM32 38C28.685 38 26 35.315 26 32C26 28.685 28.685 26 32 26C35.315 26 38 28.685 38 32C38 35.315 35.315 38 32 38ZM32 36C34.21 36 36 34.21 36 32C36 29.79 34.21 28 32 28C29.79 28 28 29.79 28 32C28 34.21 29.79 36 32 36ZM40.2837 39.7028C43.0644 40.9561 45 43.752 45 47H43C43 44.564 41.5483 42.4671 39.4628 41.5271L40.2837 39.7028ZM39.5962 28.4132C41.5944 29.237 43 31.2036 43 33.5C43 36.3702 40.8042 38.7252 38 38.9776V36.9646C39.6967 36.7222 41 35.264 41 33.5C41 32.1193 40.2016 30.926 39.041 30.3563L39.5962 28.4132Z" fill="#3E239E"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_8366_278035" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="10" dy="7"/>
                  <feGaussianBlur stdDeviation="12"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0171701 0 0 0 0 0.0891686 0 0 0 0 0.179167 0 0 0 0.06 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8366_278035"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8366_278035" result="shape"/>
                  </filter>
                  </defs>
                </svg>

                <span className="text-xl font-northura text-[#23295A]">Popular.</span>
              </div>
              <div className="text-[#23295A] text-sm font-korolevLight">
                Choose from the most sought after domain extensions and establish a prominent online presence that sets your business apart.
              </div>
              
              {/* Domain input */}
              <div className="mt-6 w-full flex flex-row items-center bg-white rounded-full px-4 py-2 gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 8.33317H16.6667C17.1269 8.33317 17.5 8.70625 17.5 9.1665V17.4998C17.5 17.9601 17.1269 18.3332 16.6667 18.3332H3.33333C2.8731 18.3332 2.5 17.9601 2.5 17.4998V9.1665C2.5 8.70625 2.8731 8.33317 3.33333 8.33317H4.16667V7.49984C4.16667 4.27818 6.77834 1.6665 10 1.6665C13.2217 1.6665 15.8333 4.27818 15.8333 7.49984V8.33317ZM14.1667 8.33317V7.49984C14.1667 5.19865 12.3012 3.33317 10 3.33317C7.69882 3.33317 5.83333 5.19865 5.83333 7.49984V8.33317H14.1667ZM9.16667 11.6665V14.9998H10.8333V11.6665H9.16667Z" fill="#3E239E"/>
                </svg>
                <span className="text-[#8B8B8B] text-sm font-korolevLight">https://</span>
                <input 
                  className="flex-1 bg-transparent outline-none text-[#23295A] text-sm font-korolevLight" 
                  placeholder="yourdomain" 
                />
                <span className="text-[#23295A] text-sm font-korolevLight">.com</span>
              </div>

              {/* Avatar rows */}
              <div className="mt-4 flex flex-col gap-2">
                <svg width="100%" height="68" viewBox="0 0 360 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="360" height="68" rx="13.2277" fill="white"/>
                  <rect x="12" y="12" width="44" height="44" rx="12" fill="#F9FAFC"/>
                  <rect x="29.2507" y="29.251" width="8.81848" height="8.81848" fill="#BEC5D9"/>
                  <rect x="68" y="20" width="110.231" height="8.81848" rx="4.40924" fill="#F9FAFC"/>
                  <rect x="68" y="39.8184" width="72.7525" height="8.81848" rx="4.40924" fill="#BEC5D9"/>
                </svg>
                <svg width="100%" height="68" viewBox="0 0 360 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="360" height="68" rx="13.2277" fill="white"/>
                  <rect x="12" y="12" width="44" height="44" rx="12" fill="#F9FAFC"/>
                  <rect x="29.2507" y="29.251" width="8.81848" height="8.81848" fill="#BEC5D9"/>
                  <rect x="68" y="20" width="110.231" height="8.81848" rx="4.40924" fill="#F9FAFC"/>
                  <rect x="68" y="39.8184" width="72.7525" height="8.81848" rx="4.40924" fill="#BEC5D9"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Layout (sm and below) */}
          <div className="flex flex-col gap-[32px] md:hidden">
            {/* Credible Card */}
            <div className="w-full rounded-[20px] bg-[#F3EDFF] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[36px] pb-[56px] gap-[10px]">
              <div className="flex items-center gap-2 mb-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#7C5CD6"/>
                  <path d="M8 12.5L11 15.5L16 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-northura text-[#23295A]">Credible.</span>
              </div>
              <div className="text-[#23295A] text-sm font-korolevLight">
                Our domains help you establish a strong online reputation, ensuring that your brand is recognized and trusted by your audience.
              </div>
            </div>

            {/* Secure Card */}
            <div className="w-full rounded-[20px] bg-[#EAFFFB] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[36px] pb-[56px] gap-[10px]">
              <div className="flex items-center gap-2 mb-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#2CD0A8"/>
                  <path d="M12 16V12M12 12V10M12 12H10M12 12H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-northura text-[#23295A]">Secure.</span>
              </div>
              <div className="text-[#23295A] text-sm font-korolevLight">
                Robust security features safeguard your website and data, providing peace of mind against cyber threats.
              </div>
            </div>

            {/* Popular Card */}
            <div className="w-full rounded-[20px] bg-[#D8D3EC] shadow-[0px_25px_52px_0px_#9664E60F] flex flex-col px-[24px] pt-[24px] pb-[50px] gap-[10px]">
              <div className="flex items-center gap-2 mb-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#7C5CD6"/>
                  <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-northura text-[#23295A]">Popular.</span>
              </div>
              <div className="text-[#23295A] text-sm font-korolevLight">
                Choose from the most sought after domain extensions and establish a prominent online presence that sets your business apart.
              </div>
              
              {/* Domain input */}
              <div className="mt-6 w-full flex flex-row items-center bg-white rounded-full px-4 py-2 gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" stroke="#B0B0B0" strokeWidth="2"/>
                  <path d="M18 18l-3.5-3.5" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[#8B8B8B] text-sm font-korolevLight">https://</span>
                <input 
                  className="flex-1 bg-transparent outline-none text-[#23295A] text-sm font-korolevLight" 
                  placeholder="yourdomain" 
                />
                <span className="text-[#23295A] text-sm font-korolevLight">.com</span>
              </div>

              {/* Avatar rows */}
              <div className="mt-4 flex flex-col gap-2">
                <svg width="100%" height="68" viewBox="0 0 360 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="360" height="68" rx="13.2277" fill="white"/>
                  <rect x="12" y="12" width="44" height="44" rx="12" fill="#F9FAFC"/>
                  <rect x="29.2507" y="29.251" width="8.81848" height="8.81848" fill="#BEC5D9"/>
                  <rect x="68" y="20" width="110.231" height="8.81848" rx="4.40924" fill="#F9FAFC"/>
                  <rect x="68" y="39.8184" width="72.7525" height="8.81848" rx="4.40924" fill="#BEC5D9"/>
                </svg>
                <svg width="100%" height="68" viewBox="0 0 360 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="360" height="68" rx="13.2277" fill="white"/>
                  <rect x="12" y="12" width="44" height="44" rx="12" fill="#F9FAFC"/>
                  <rect x="29.2507" y="29.251" width="8.81848" height="8.81848" fill="#BEC5D9"/>
                  <rect x="68" y="20" width="110.231" height="8.81848" rx="4.40924" fill="#F9FAFC"/>
                  <rect x="68" y="39.8184" width="72.7525" height="8.81848" rx="4.40924" fill="#BEC5D9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right dotted SVG - hidden on mobile */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden xl:block">
        <svg width="169" height="374" viewBox="0 0 169 374" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6.01687" cy="7.56512" r="6" transform="rotate(-0.161289 6.01687 7.56512)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.0166" cy="7.38494" r="6" transform="rotate(-0.161289 70.0166 7.38494)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.016" cy="7.20477" r="6" transform="rotate(-0.161289 134.016 7.20477)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="6.18483" cy="67.5651" r="6" transform="rotate(-0.161289 6.18483 67.5651)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.1846" cy="67.3849" r="6" transform="rotate(-0.161289 70.1846 67.3849)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.184" cy="67.2048" r="6" transform="rotate(-0.161289 134.184 67.2048)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="6.35476" cy="127.565" r="6" transform="rotate(-0.161289 6.35476 127.565)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.3545" cy="127.385" r="6" transform="rotate(-0.161289 70.3545 127.385)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.354" cy="127.205" r="6" transform="rotate(-0.161289 134.354 127.205)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="6.52468" cy="187.565" r="6" transform="rotate(-0.161289 6.52468 187.565)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.5244" cy="187.385" r="6" transform="rotate(-0.161289 70.5244 187.385)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.524" cy="187.205" r="6" transform="rotate(-0.161289 134.524 187.205)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="6.69265" cy="247.565" r="6" transform="rotate(-0.161289 6.69265 247.565)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.6924" cy="247.385" r="6" transform="rotate(-0.161289 70.6924 247.385)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.692" cy="247.205" r="6" transform="rotate(-0.161289 134.692 247.205)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="6.86257" cy="307.565" r="6" transform="rotate(-0.161289 6.86257 307.565)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="70.8623" cy="307.385" r="6" transform="rotate(-0.161289 70.8623 307.385)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="134.862" cy="307.205" r="6" transform="rotate(-0.161289 134.862 307.205)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="7.03054" cy="367.563" r="6" transform="rotate(-0.161289 7.03054 367.563)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="71.0303" cy="367.383" r="6" transform="rotate(-0.161289 71.0303 367.383)" fill="#9664E6" fillOpacity="0.09"/>
          <circle cx="135.03" cy="367.203" r="6" transform="rotate(-0.161289 135.03 367.203)" fill="#9664E6" fillOpacity="0.09"/>
        </svg>
      </div>
    </section>
      
      
      {/* How it Works Section */}
      <section className="relative w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto bg-[#4227A2] rounded-tl-[56px] rounded-tr-[56px] flex flex-col items-center justify-center overflow-visible pt-[40px] md:pt-[60px] xl:pt-[80px] px-4 md:px-8 lg:px-16 xl:px-[296px] pb-[40px] md:pb-[60px] xl:pb-[80px] gap-[32px] md:gap-[48px] xl:gap-[64px] min-h-[600px] md:min-h-[680px] xl:h-[760px] opacity-100">
      
      {/* Left Dotted SVG - Hidden on mobile and tablet */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-0">
        <svg width="229" height="431" viewBox="0 0 229 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="98.3273" cy="42.1874" r="6" transform="rotate(15.7678 98.3273 42.1874)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="159.919" cy="59.5785" r="6" transform="rotate(15.7678 159.919 59.5785)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="221.511" cy="76.9696" r="6" transform="rotate(15.7678 221.511 76.9696)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="82.0226" cy="99.9296" r="6" transform="rotate(15.7678 82.0226 99.9296)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="143.614" cy="117.321" r="6" transform="rotate(15.7678 143.614 117.321)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="205.206" cy="134.712" r="6" transform="rotate(15.7678 205.206 134.712)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="65.7179" cy="157.672" r="6" transform="rotate(15.7678 65.7179 157.672)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="127.31" cy="175.063" r="6" transform="rotate(15.7678 127.31 175.063)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="188.901" cy="192.454" r="6" transform="rotate(15.7678 188.901 192.454)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="49.4152" cy="215.414" r="6" transform="rotate(15.7678 49.4152 215.414)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="111.007" cy="232.805" r="6" transform="rotate(15.7678 111.007 232.805)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="172.599" cy="250.196" r="6" transform="rotate(15.7678 172.599 250.196)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="33.1105" cy="273.156" r="6" transform="rotate(15.7678 33.1105 273.156)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="94.7022" cy="290.547" r="6" transform="rotate(15.7678 94.7022 290.547)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="156.294" cy="307.938" r="6" transform="rotate(15.7678 156.294 307.938)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="16.8058" cy="330.898" r="6" transform="rotate(15.7678 16.8058 330.898)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="78.3975" cy="348.289" r="6" transform="rotate(15.7678 78.3975 348.289)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="139.989" cy="365.681" r="6" transform="rotate(15.7678 139.989 365.681)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="0.501092" cy="388.641" r="6" transform="rotate(15.7678 0.501092 388.641)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="62.0928" cy="406.032" r="6" transform="rotate(15.7678 62.0928 406.032)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="123.685" cy="423.423" r="6" transform="rotate(15.7678 123.685 423.423)" fill="#D9D9D9" fillOpacity="0.32"/>
        </svg>
      </div>

      {/* Right Dotted SVG - Hidden on mobile and tablet */}
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <svg width="229" height="431" viewBox="0 0 229 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="98.3273" cy="42.1874" r="6" transform="rotate(15.7678 98.3273 42.1874)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="159.919" cy="59.5785" r="6" transform="rotate(15.7678 159.919 59.5785)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="221.511" cy="76.9696" r="6" transform="rotate(15.7678 221.511 76.9696)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="82.0226" cy="99.9296" r="6" transform="rotate(15.7678 82.0226 99.9296)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="143.614" cy="117.321" r="6" transform="rotate(15.7678 143.614 117.321)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="205.206" cy="134.712" r="6" transform="rotate(15.7678 205.206 134.712)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="65.7179" cy="157.672" r="6" transform="rotate(15.7678 65.7179 157.672)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="127.31" cy="175.063" r="6" transform="rotate(15.7678 127.31 175.063)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="188.901" cy="192.454" r="6" transform="rotate(15.7678 188.901 192.454)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="49.4152" cy="215.414" r="6" transform="rotate(15.7678 49.4152 215.414)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="111.007" cy="232.805" r="6" transform="rotate(15.7678 111.007 232.805)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="172.599" cy="250.196" r="6" transform="rotate(15.7678 172.599 250.196)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="33.1105" cy="273.156" r="6" transform="rotate(15.7678 33.1105 273.156)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="94.7022" cy="290.547" r="6" transform="rotate(15.7678 94.7022 290.547)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="156.294" cy="307.938" r="6" transform="rotate(15.7678 156.294 307.938)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="16.8058" cy="330.898" r="6" transform="rotate(15.7678 16.8058 330.898)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="78.3975" cy="348.289" r="6" transform="rotate(15.7678 78.3975 348.289)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="139.989" cy="365.681" r="6" transform="rotate(15.7678 139.989 365.681)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="0.501092" cy="388.641" r="6" transform="rotate(15.7678 0.501092 388.641)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="62.0928" cy="406.032" r="6" transform="rotate(15.7678 62.0928 406.032)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="123.685" cy="423.423" r="6" transform="rotate(15.7678 123.685 423.423)" fill="#D9D9D9" fillOpacity="0.32"/>
        </svg>
      </div>

      {/* Top Text */}
      <div className="w-full max-w-[1293px] flex flex-col items-center justify-center gap-[16px] md:gap-[20px] xl:gap-[24px] mb-4 md:mb-6 xl:mb-8">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-northuraHeavy text-white text-center">How it works</h2>
        <p className="text-sm md:text-base xl:text-base font-korolevLight text-white text-center max-w-[90%] md:max-w-full">You want to build your brand identity – here are the steps ahead</p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1293px] flex flex-col md:flex-col lg:flex-row items-center justify-center gap-[24px] md:gap-[28px] xl:gap-[32px] mt-4 md:mt-6 xl:mt-8">
        
        {/* Card 1 */}
        <div className="w-full flex-1 min-w-0 h-[240px] md:h-[260px] lg:h-[272px] bg-[#3E239E] rounded-[24px] flex flex-col items-center pt-8 pb-6 px-6 relative shadow-lg" style={{ boxShadow: '0px 50px 80px 0px #9664E640' }}>
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[64px] xl:h-[64px] bg-white rounded-full flex items-center justify-center absolute -top-6 xl:-top-8 left-1/2 -translate-x-1/2">
            <span className="text-[#4227A2] text-xl md:text-2xl xl:text-2xl font-bold">1</span>
          </div>
          <h3 className="w-full mt-8 md:mt-10 xl:mt-12 text-lg md:text-xl xl:text-xl font-northuraHeavy text-white text-center">Find your perfect domain</h3>
          <p className="line-clamp-3 mt-3 md:mt-4 xl:mt-4 text-xs md:text-sm xl:text-sm font-korolevLight text-white text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Card 2 */}
        <div className="w-full flex-1 min-w-0 h-[240px] md:h-[260px] lg:h-[272px] bg-[#3E239E] rounded-[24px] flex flex-col items-center pt-8 pb-6 px-6 relative shadow-lg" style={{ boxShadow: '0px 50px 80px 0px #9664E640' }}>
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[64px] xl:h-[64px] bg-white rounded-full flex items-center justify-center absolute -top-6 xl:-top-8 left-1/2 -translate-x-1/2">
            <span className="text-[#4227A2] text-xl md:text-2xl xl:text-2xl font-bold">2</span>
          </div>
          <h3 className="mt-8 md:mt-10 xl:mt-12 text-lg md:text-xl xl:text-xl font-northuraHeavy text-white text-center">Accommodation</h3>
          <p className="line-clamp-3 mt-3 md:mt-4 xl:mt-4 text-xs md:text-sm xl:text-sm font-korolevLight text-white text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Card 3 */}
        <div className="w-full flex-1 min-w-0 h-[240px] md:h-[260px] lg:h-[272px] bg-[#3E239E] rounded-[24px] flex flex-col items-center pt-8 pb-6 px-6 relative shadow-lg" style={{ boxShadow: '0px 50px 80px 0px #9664E640' }}>
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[64px] xl:h-[64px] bg-white rounded-full flex items-center justify-center absolute -top-6 xl:-top-8 left-1/2 -translate-x-1/2">
            <span className="text-[#4227A2] text-xl md:text-2xl xl:text-2xl font-bold">3</span>
          </div>
          <h3 className="mt-8 md:mt-10 xl:mt-12 text-lg md:text-xl xl:text-xl font-northuraHeavy text-white text-center">Add SSL certificate</h3>
          <p className="line-clamp-3 mt-3 md:mt-4 xl:mt-4 text-xs md:text-sm xl:text-sm font-korolevLight text-white text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Card 4 */}
        <div className="flex-1 min-w-0 h-[240px] md:h-[260px] lg:h-[272px] bg-[#3E239E] rounded-[24px] flex flex-col items-center pt-8 pb-6 px-6 relative shadow-lg" style={{ boxShadow: '0px 50px 80px 0px #9664E640' }}>
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[64px] xl:h-[64px] bg-white rounded-full flex items-center justify-center absolute -top-6 xl:-top-8 left-1/2 -translate-x-1/2">
            <span className="text-[#4227A2] text-xl md:text-2xl xl:text-2xl font-bold">4</span>
          </div>
          <h3 className="mt-8 md:mt-10 xl:mt-12 text-lg md:text-xl xl:text-xl font-northuraHeavy text-white text-center">Website design</h3>
          <p className="line-clamp-3 mt-3 md:mt-4 xl:mt-4 text-xs md:text-sm xl:text-sm font-korolevLight text-white text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

      </div>
    </section>
      

      {/* Brands Section */}
      <section className="w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto h-auto min-h-[783px] flex flex-col lg:flex-row items-center justify-center relative gap-[24px] px-4 py-8 lg:py-0 lg:px-0">
      {/* Left: Main image with floating cards */}
      <div className="relative w-full max-w-[665px] h-[400px] sm:h-[500px] md:h-[550px] lg:w-[665px] lg:h-[623px] flex items-center justify-center">
        <img src={girlImg} alt="Brand" className="w-full h-full object-cover rounded-[32px]" />
      </div>
      
      {/* Right: Text and button */}
      <div className="w-full max-w-[472px] h-auto flex flex-col gap-4 justify-center mt-8 lg:mt-0 lg:ml-16 lg:w-[472px] lg:h-[343px] text-center lg:text-left" style={{ opacity: 1 }}>
        <span className="text-[#5E30CC] text-sm font-medium mb-2">Connect With Your Target Audience.</span>
        <h1 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-northuraHeavy font-medium text-black leading-tight mb-2">Build Your Brand Identity.</h1>
        <p className="text-[#6B6B6B] text-sm sm:text-base font-korolevLight mb-4 px-4 lg:px-0">
          Your online presence is your digital storefront, where potential customers first discover you, allowing you to establish a unique identity that sets you apart from the competition.
        </p>
        <button className="w-[180px] h-[48px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-semibold text-base mt-4 self-center lg:self-start">
          Get Started
        </button>
      </div>
      </section>
      

      {/* Find your Domain Section */}
      <section className="w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto h-auto min-h-[658px] flex flex-col lg:flex-row items-center justify-center relative gap-[24px] px-4 lg:px-0 py-8 lg:py-0">
      {/* Left: Use domainImg (image2.png) for the illustration */}
      <div className="w-full max-w-[665px] h-[300px] sm:h-[400px] lg:h-[498px] flex items-center justify-center order-2 lg:order-1">
        <img src={domainImg} alt="Find your domain illustration" className="w-full h-full object-contain" />
      </div>
      
      {/* Right: Text and button */}
      <div className="w-full max-w-[471px] h-auto lg:h-[243px] flex flex-col gap-4 justify-center lg:ml-16 order-1 lg:order-2 text-center lg:text-left px-4 lg:px-0" style={{ opacity: 1 }}>
        <h1 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-northuraHeavy text-black leading-tight mb-2">Find Your Domain</h1>
        <p className="text-[#6B6B6B] text-sm sm:text-base font-korolevLight mb-4">
          Choose and use a domain name that represents the essence of your brand and business.
        </p>
        <button className="w-[180px] h-[48px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-semibold text-base mt-4 self-center lg:self-start">
          Find a Domain
        </button>
      </div>
      </section>

      {/* Bestsellers Section */}
      <section className="w-full max-w-[90rem] 2xl:max-w-[100%] h-auto min-h-[726px] flex flex-col justify-between gap-[32px] md:gap-[64px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[72px] pt-[40px] md:pt-[80px] pb-[40px] md:pb-[80px] opacity-100 mx-auto">
      {/* Heading Content */}
      <div className="w-full max-w-[653px] h-auto flex flex-col gap-[16px] md:gap-[24px] opacity-100 mx-auto items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin font-northuraExpanded text-black">
          Our <span className="text-[#7F53AC]">Bestsellers</span>
        </h2>
        <p className="text-[#6B6B6B] text-sm md:text-base font-korolevLight px-4 md:px-0">
          We don't just provide the domain itself—we also handle the transfer process and can offer you additional services
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="w-full max-w-[1296px] h-auto bg-[#F6F6FF] rounded-[28px] md:rounded-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] lg:gap-[32px] mx-auto items-center justify-center p-[20px] md:p-[32px] lg:p-[40px] font-korolev">
        {/* Card 1 */}
        <div className="w-full max-w-[368px] h-auto md:h-[259px] bg-white rounded-[16px] shadow-[17px_15px_32px_0px_#2745BE0F] p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6 mx-auto">
          <div className="w-10 h-10 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-2">
            {/* SSL Icon */}
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 6.53125C19 10.1384 16.0759 13.0625 12.4688 13.0625H8.3125V15.4375H5.9375V17.8125L4.75 19H0V14.25L6.13167 8.11833C6.00483 7.61025 5.9375 7.07862 5.9375 6.53125C5.9375 2.92414 8.86164 0 12.4688 0C16.0759 0 19 2.92414 19 6.53125ZM15.4375 4.75C15.4375 5.40583 14.9059 5.9375 14.25 5.9375C13.5941 5.9375 13.0625 5.40583 13.0625 4.75C13.0625 4.09417 13.5941 3.5625 14.25 3.5625C14.9059 3.5625 15.4375 4.09417 15.4375 4.75Z" fill="#5E30CC"/>
            </svg>
          </div>
          <div className="font-bold text-lg text-black">SSL certificates</div>
          <div className="text-[#6B6B6B] text-xs lg:text-sm text-center">Improve your website's security by encrypting connexions</div>
          <button className="w-full h-[44px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-semibold text-base mt-auto">Start Now</button>
        </div>
        
        {/* Card 2 */}
        <div className="w-full max-w-[368px] h-auto md:h-[259px] bg-white rounded-[16px] shadow-[17px_15px_32px_0px_#2745BE0F] p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6 mx-auto">
          <div className="w-10 h-10 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-2">
            {/* Privacy Icon */}
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.33203 20C12.0603 18.484 14.3334 16.266 15.9159 13.5758C17.4984 10.8856 18.3326 7.82112 18.332 4.7V4L9.33203 0L0.332031 4V4.7C0.331507 7.82112 1.16571 10.8856 2.74818 13.5758C4.33065 16.266 6.6038 18.484 9.33203 20ZM8.33203 4H10.332V6H8.33203V4ZM8.33203 8H10.332V16H8.33203V8Z" fill="#5E30CC"/>
            </svg>
          </div>
          <div className="font-bold text-lg text-black">WHOIS privacy</div>
          <div className="text-[#6B6B6B] text-xs lg:text-sm text-center">Protect the confidentiality of your personal information</div>
          <button className="w-full h-[44px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-semibold text-base mt-auto">Start Now</button>
        </div>
        
        {/* Card 3 */}
        <div className="w-full max-w-[368px] h-auto md:h-[259px] bg-white rounded-[16px] shadow-[17px_15px_32px_0px_#2745BE0F] p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6 mx-auto md:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-2">
            {/* Hosting Icon */}
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.667969 16H20.668V12H0.667969V16ZM2.66797 13H4.66797V15H2.66797V13ZM0.667969 0V4H20.668V0H0.667969ZM4.66797 3H2.66797V1H4.66797V3ZM0.667969 10H20.668V6H0.667969V10ZM2.66797 7H4.66797V9H2.66797V7Z" fill="#5E30CC"/>
            </svg>
          </div>
          <div className="font-bold text-lg text-black">Hosting plans</div>
          <div className="text-[#6B6B6B] text-xs lg:text-sm text-center">Explore  our range of web hosting plans  and pick yours!</div>
          <button className="w-full h-[44px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-semibold text-base mt-auto">Start Now</button>
        </div>
      </div>
      </section>



      {/* Web & Email Hosting Section */}
      <section className="
      w-full max-w-[90rem] min-h-[1022px] 
      xl:h-[1022px] xl:px-[143px] xl:pt-[80px] 
      2xl:max-w-[100%]
      
      /* Large screens (1200px-1439px) */
      lg:px-[100px] lg:pt-[70px] lg:min-h-[900px]
      
      /* Tablet screens (768px-1199px) */
      md:px-[60px] md:pt-[50px] md:min-h-[800px]
      
      /* Mobile screens (below 768px) */
      px-[20px] pt-[40px] min-h-[700px]
      
      flex flex-col gap-[64px] pb-0 
      rounded-tl-[56px] rounded-tr-[56px] 
      bg-[#3E239E] opacity-100 mx-auto relative
    ">
      {/* Left SVG - hidden on mobile */}
      <div className="absolute left-[-60px] -translate-y-1/5 z-0 hidden lg:block xl:block">
        <svg width="229" height="431" viewBox="0 0 229 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="98.3273" cy="42.1874" r="6" transform="rotate(15.7678 98.3273 42.1874)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="159.919" cy="59.5785" r="6" transform="rotate(15.7678 159.919 59.5785)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="221.511" cy="76.9696" r="6" transform="rotate(15.7678 221.511 76.9696)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="82.0226" cy="99.9296" r="6" transform="rotate(15.7678 82.0226 99.9296)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="143.614" cy="117.321" r="6" transform="rotate(15.7678 143.614 117.321)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="205.206" cy="134.712" r="6" transform="rotate(15.7678 205.206 134.712)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="65.7179" cy="157.672" r="6" transform="rotate(15.7678 65.7179 157.672)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="127.31" cy="175.063" r="6" transform="rotate(15.7678 127.31 175.063)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="188.901" cy="192.454" r="6" transform="rotate(15.7678 188.901 192.454)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="49.4152" cy="215.414" r="6" transform="rotate(15.7678 49.4152 215.414)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="111.007" cy="232.805" r="6" transform="rotate(15.7678 111.007 232.805)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="172.599" cy="250.196" r="6" transform="rotate(15.7678 172.599 250.196)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="33.1105" cy="273.156" r="6" transform="rotate(15.7678 33.1105 273.156)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="94.7022" cy="290.547" r="6" transform="rotate(15.7678 94.7022 290.547)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="156.294" cy="307.938" r="6" transform="rotate(15.7678 156.294 307.938)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="16.8058" cy="330.898" r="6" transform="rotate(15.7678 16.8058 330.898)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="78.3975" cy="348.289" r="6" transform="rotate(15.7678 78.3975 348.289)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="139.989" cy="365.681" r="6" transform="rotate(15.7678 139.989 365.681)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="0.501092" cy="388.641" r="6" transform="rotate(15.7678 0.501092 388.641)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="62.0928" cy="406.032" r="6" transform="rotate(15.7678 62.0928 406.032)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="123.685" cy="423.423" r="6" transform="rotate(15.7678 123.685 423.423)" fill="#D9D9D9" fillOpacity="0.32"/>
        </svg>
      </div>

      {/* Right SVG - hidden on mobile */}
      <div className="absolute right-0 z-0 hidden lg:block xl:block">
        <svg width="229" height="431" viewBox="0 0 229 431" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="98.3273" cy="42.1874" r="6" transform="rotate(15.7678 98.3273 42.1874)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="159.919" cy="59.5785" r="6" transform="rotate(15.7678 159.919 59.5785)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="221.511" cy="76.9696" r="6" transform="rotate(15.7678 221.511 76.9696)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="82.0226" cy="99.9296" r="6" transform="rotate(15.7678 82.0226 99.9296)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="143.614" cy="117.321" r="6" transform="rotate(15.7678 143.614 117.321)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="205.206" cy="134.712" r="6" transform="rotate(15.7678 205.206 134.712)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="65.7179" cy="157.672" r="6" transform="rotate(15.7678 65.7179 157.672)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="127.31" cy="175.063" r="6" transform="rotate(15.7678 127.31 175.063)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="188.901" cy="192.454" r="6" transform="rotate(15.7678 188.901 192.454)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="49.4152" cy="215.414" r="6" transform="rotate(15.7678 49.4152 215.414)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="111.007" cy="232.805" r="6" transform="rotate(15.7678 111.007 232.805)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="172.599" cy="250.196" r="6" transform="rotate(15.7678 172.599 250.196)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="33.1105" cy="273.156" r="6" transform="rotate(15.7678 33.1105 273.156)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="94.7022" cy="290.547" r="6" transform="rotate(15.7678 94.7022 290.547)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="156.294" cy="307.938" r="6" transform="rotate(15.7678 156.294 307.938)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="16.8058" cy="330.898" r="6" transform="rotate(15.7678 16.8058 330.898)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="78.3975" cy="348.289" r="6" transform="rotate(15.7678 78.3975 348.289)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="139.989" cy="365.681" r="6" transform="rotate(15.7678 139.989 365.681)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="0.501092" cy="388.641" r="6" transform="rotate(15.7678 0.501092 388.641)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="62.0928" cy="406.032" r="6" transform="rotate(15.7678 62.0928 406.032)" fill="#D9D9D9" fillOpacity="0.32"/>
          <circle cx="123.685" cy="423.423" r="6" transform="rotate(15.7678 123.685 423.423)" fill="#D9D9D9" fillOpacity="0.32"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="
        xl:w-[1154px] xl:h-[497px] 
        
        /* Large screens */
        lg:w-full lg:max-w-[1000px] lg:h-auto
        
        /* Tablet and mobile */
        w-full h-auto
        
        flex flex-col gap-[64px] md:gap-[48px] justify-between mx-auto items-center z-10 relative
      ">
        {/* Heading */}
        <h2 className="
          xl:text-4xl lg:text-3xl md:text-3xl text-2xl 
          font-bold text-white text-center 
          xl:mb-8 lg:mb-6 md:mb-4 mb-4
        ">
          Web & Email Hosting
        </h2>

        {/* Cards Row */}
        <div className="
          w-full 
          xl:grid xl:grid-cols-3 xl:gap-[32px]
          lg:grid lg:grid-cols-3 lg:gap-[24px]
          md:grid md:grid-cols-2 md:gap-[20px]
          flex flex-col gap-[16px]
          xl:mb-8 lg:mb-6 md:mb-4 mb-4
        ">
          {/* Card 1 */}
          <div className="
            bg-[#4B2FB3] bg-opacity-40 rounded-[24px] 
            xl:p-8 lg:p-6 md:p-6 p-4 
            flex flex-col gap-4 text-white
            md:col-span-1
          ">
            <div className="
              xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-10 md:h-10 w-8 h-8
              bg-[#6C63FF] bg-opacity-20 rounded-full 
              flex items-center justify-center mb-2
            ">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6">
                <rect width="40" height="40" rx="8" fill="#D8D3EC"/>
                <path d="M25.6177 13.9681L27.0711 12.5147L28.4853 13.9289L27.0319 15.3823C28.2635 16.922 29 18.875 29 21C29 25.9706 24.9706 30 20 30C15.0294 30 11 25.9706 11 21C11 16.0294 15.0294 12 20 12C22.125 12 24.078 12.7365 25.6177 13.9681ZM20 28C23.866 28 27 24.866 27 21C27 17.134 23.866 14 20 14C16.134 14 13 17.134 13 21C13 24.866 16.134 28 20 28ZM19 16H21V22H19V16ZM16 9H24V11H16V9Z" fill="#3F249F"/>
              </svg>
            </div>
            <div className="font-bold xl:text-lg lg:text-base md:text-base text-sm">
              Reliability and Uptime
            </div>
            <div className="xl:text-sm lg:text-xs md:text-xs text-xs text-[#E0D7FF]">
              Consistently high uptime (99.9% or higher) ensures your website and emails are always accessible, minimizing downtime and disruptions to your business.
            </div>
          </div>

          {/* Card 2 */}
          <div className="
            bg-[#4B2FB3] bg-opacity-40 rounded-[24px] 
            xl:p-8 lg:p-6 md:p-6 p-4 
            flex flex-col gap-4 text-white
            md:col-span-1
          ">
            <div className="
              xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-10 md:h-10 w-8 h-8
              bg-[#6C63FF] bg-opacity-20 rounded-full 
              flex items-center justify-center mb-2
            ">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6">
                <rect width="40" height="40" rx="8" fill="#D6D0EB"/>
                <path d="M20 9L28.2169 10.826C28.6745 10.9277 29 11.3335 29 11.8022V21.7889C29 23.795 27.9974 25.6684 26.3282 26.7812L20 31L13.6718 26.7812C12.0026 25.6684 11 23.795 11 21.7889V11.8022C11 11.3335 11.3255 10.9277 11.7831 10.826L20 9ZM20 11.0488L13 12.6043V21.7889C13 23.1263 13.6684 24.3752 14.7812 25.1171L20 28.5963L25.2188 25.1171C26.3316 24.3752 27 23.1263 27 21.7889V12.6043L20 11.0488ZM24.4524 16.2218L25.8666 17.636L19.5026 24L15.26 19.7574L16.6742 18.3431L19.5019 21.1709L24.4524 16.2218Z" fill="#3E239E"/>
              </svg>
            </div>
            <div className="font-bold xl:text-lg lg:text-base md:text-base text-sm">
              Security
            </div>
            <div className="xl:text-sm lg:text-xs md:text-xs text-xs text-[#E0D7FF]">
              Robust security features, including SSL certificates, spam filters, and malware protection, safeguard your website and emails from cyber threats.
            </div>
          </div>

          {/* Card 3 */}
          <div className="
            bg-[#4B2FB3] bg-opacity-40 rounded-[24px] 
            xl:p-8 lg:p-6 md:p-6 p-4 
            flex flex-col gap-4 text-white
            md:col-span-2 xl:col-span-1 lg:col-span-1
          ">
            <div className="
              xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-10 md:h-10 w-8 h-8
              bg-[#6C63FF] bg-opacity-20 rounded-full 
              flex items-center justify-center mb-2
            ">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6">
                <rect width="40" height="40" rx="8" fill="#D6D0EB"/>
                <path d="M13 11V27H29V29H11V11H13ZM28.2929 14.2929L29.7071 15.7071L24 21.4142L21 18.415L16.7071 22.7071L15.2929 21.2929L21 15.5858L24 18.585L28.2929 14.2929Z" fill="#4226A1"/>
              </svg>
            </div>
            <div className="font-bold xl:text-lg lg:text-base md:text-base text-sm">
              Scalability and Performance
            </div>
            <div className="xl:text-sm lg:text-xs md:text-xs text-xs text-[#E0D7FF]">
              Handle increased traffic and data without compromising speed or functionality, and grow your business without hosting limitations.
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="
          xl:px-8 xl:py-3 lg:px-6 lg:py-3 md:px-6 md:py-2 px-4 py-2
          bg-white bg-opacity-20 text-white rounded-full font-semibold 
          xl:text-base lg:text-sm md:text-sm text-sm
          mx-auto hover:bg-opacity-30 transition-all duration-200
        ">
          Host with Nameword
        </button>
      </div>

      {/* Bottom Content: Images in grid with rounded background */}
      <div className="
        xl:w-[1154px] xl:h-[381px] 
        lg:w-full lg:max-w-[1084px] lg:h-auto
        md:w-full md:h-auto
        w-full h-auto
        relative mx-auto flex items-end justify-center
      ">
        {/* Rounded background behind images */}
        <div className="
          xl:absolute xl:top-[42.38px] xl:left-[30.62px] xl:w-[1084px] xl:h-[313px]
          lg:relative lg:top-0 lg:left-0 lg:w-full lg:h-auto lg:min-h-[280px]
          md:relative md:top-0 md:left-0 md:w-full md:h-auto md:min-h-[240px]
          relative top-0 left-0 w-full h-auto min-h-[200px]
          bg-[#0C1141] 
          xl:rounded-tl-[32px] xl:rounded-tr-[32px] 
          lg:rounded-[24px] md:rounded-[20px] rounded-[16px]
          opacity-100 z-0 
          flex xl:flex-row lg:flex-row md:flex-col flex-col 
          justify-center items-center
          xl:gap-[32px] lg:gap-[24px] md:gap-[16px] gap-[12px]
          xl:p-[32px] lg:p-[24px] md:p-[20px] p-[16px]
        ">            
          <img 
            src={pod1} 
            alt="Pod 1" 
            className="
              xl:rounded-[24px] xl:w-[506px] xl:h-[265px] 
              lg:rounded-[20px] lg:w-[45%] lg:h-[220px]
              md:rounded-[16px] md:w-full md:h-[200px]
              rounded-[12px] w-full h-[160px]
              object-cover
            " 
          />
          <img 
            src={pod2} 
            alt="Pod 2" 
            className="
              xl:rounded-[24px] xl:w-[506px] xl:h-[265px] 
              lg:rounded-[20px] lg:w-[45%] lg:h-[220px]
              md:rounded-[16px] md:w-full md:h-[200px]
              rounded-[12px] w-full h-[160px]
              object-cover
            " 
          />
        </div>
      </div>
       </section>


      {/* Pro Website Designs Section */}
      <section className="w-full max-w-[90rem] 2xl:max-w-[100%] h-auto min-h-[832px] xl:h-[832px] flex flex-col xl:flex-row items-center gap-6 md:gap-12 xl:gap-[74px] rounded-br-[56px] rounded-bl-[56px] bg-[#020738] opacity-100 mx-auto px-4 md:px-8 xl:px-0 py-8 xl:py-0">
      {/* Left: Image with floating cards */}
      <div className="relative w-full max-w-[823px] h-[400px] md:h-[500px] xl:h-[612px] xl:ml-auto order-1 xl:order-1">
        <img src={kleberImg} alt="Kleber" className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]" />
        
        {/* Floating Kleber label - responsive positioning */}
        <img 
          src={newImg} 
          alt="Kleber label" 
          className="absolute hidden lg:block " 
          style={{ 
            width: '100px', 
            height: '60px', 
            top: '75%', 
            left: '10%', 
            zIndex: 10,
            ...(window.innerWidth >= 768 && window.innerWidth < 1280 && {
              width: '130px',
              height: '80px',
              top: '70%',
              left: '20%'
            }),
            ...(window.innerWidth >= 1280 && {
              width: '165px',
              height: '99px',
              top: '450px',
              left: '330px'
            })
          }}
        />
        
        {/* Floating domain card - responsive positioning */}
        <div 
          className="absolute hidden lg:block " 
          style={{ 
            width: '180px', 
            height: '170px', 
            top: '60%', 
            left: '50%', 
            zIndex: 10,
            ...(window.innerWidth >= 768 && window.innerWidth < 1280 && {
              width: '220px',
              height: '210px',
              top: '55%',
              left: '55%'
            }),
            ...(window.innerWidth >= 1280 && {
              width: '287px',
              height: '272px',
              top: '399px',
              left: '505px'
            })
          }}
        >
          <img 
            src={pod3} 
            alt="Domain card" 
            className="w-full h-full object-cover rounded-[24px]" 
          />
        </div>
      </div>

      {/* Right: Text and button */}
      <div className="flex flex-col justify-between w-full max-w-[540px] xl:w-[540px] h-auto xl:h-[250px] gap-4 md:gap-6 xl:gap-8 order-2 xl:order-2 text-center xl:text-left">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-northuraHeavy text-white mb-2 xl:mb-4">Pro Website Designs</h2>
        <p className="text-[#B0B0B0] text-sm md:text-base xl:text-base font-korolevLight mb-4 xl:mb-8 px-4 xl:px-0">
          A well designed website is crucial for attracting and retaining customers. Our NameWord design team creates responsive, aesthetically pleasing websites that provide a superior user experience across all devices.
        </p>
        <div className="flex justify-center xl:justify-start">
          <button className="w-[160px] h-[70px] md:w-[160px] md:h-[50px] xl:w-[180px] xl:h-[50px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] text-white rounded-full font-korolevExpanded font-thin text-xs lg:text-sm">Explore Web Designs</button>
        </div>
      </div>
      </section>


      {/* Why nameword? Section */}
      <section
        className="relative flex flex-col items-center w-full max-w-[90rem] 2xl:max-w-[100%] mx-auto gap-8 sm:gap-[40px] md:gap-[64px] pt-8 sm:pt-[40px] md:pt-[80px] px-4 sm:px-6 md:px-[40px] lg:px-[144px] pb-8 sm:pb-[40px] md:pb-[80px] opacity-100"
        style={{ background: '#fff' }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className='w-full max-w-[653px] flex flex-col justify-center items-center'>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-northuraHeavy text-black text-center mb-2">
              Why <span className="text-[#6C4EE6]">nameword</span><span className="text-black">?</span>
            </h2>
            <p className="text-[#6C6C6C] text-xs sm:text-sm font-korolevLight text-center mb-4 sm:mb-6 max-w-[480px] mx-auto">
              Create your free account to unlock all our services and enjoy secure payment options.
            </p>
            <button
              className="mb-8 sm:mb-12 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#6C4EE6] text-white text-sm sm:text-base font-korolevHeavy shadow-md hover:scale-[1.03] transition-all"
              onClick={() => navigate('/signup')}
            >
              Get Started
            </button>
          </div>

          {/* Cards and Dotted Lines */}
          <div className="relative w-full max-w-[72rem] h-[420px] sm:h-[450px] flex items-center justify-center mt-2">
            {/* Map background */}
            <img
              src={mapImg}
              alt="Map Background"
              className="absolute left-0 top-0 w-full h-full object-contain z-0 pointer-events-none select-none"
            />
            {/* Center NameWord label */}
            <div className="absolute left-1/2 top-[110px] sm:top-[182px] -translate-x-1/2 -translate-y-1/2 bg-white px-6 sm:px-8 py-1.5 sm:py-2 rounded-full shadow-lg border border-[#E0E0E0] text-[#6C4EE6] font-northuraHeavy text-base sm:text-lg z-10">
              NameWord
            </div>
            {/* Cards Container for mobile/tablet responsiveness */}
            <div className="w-full h-full flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-6 md:gap-8 items-center justify-center">
              {/* Secure Payments */}
              <div className="relative flex items-center w-full max-w-[260px] h-[56px] sm:h-[64px] bg-white rounded-[16px] backdrop-blur-[24px] shadow-[0px_8px_16px_0px_#0710360F] px-4 sm:px-6 z-10 mx-auto mt-2 sm:mt-0">
                <span className="flex items-center justify-center w-8 h-8 sm:w-[36px] sm:h-[36px] bg-[#F7F3FF] rounded-[8px] mr-3 sm:mr-4">
                  {/* Lock Icon */}
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3ZM16 9H2V19H16V9ZM8 14.7324C7.4022 14.3866 7 13.7403 7 13C7 11.8954 7.8954 11 9 11C10.1046 11 11 11.8954 11 13C11 13.7403 10.5978 14.3866 10 14.7324V17H8V14.7324ZM5 7H13V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7Z" fill="#6C4EE6"/>
                  </svg>
                </span>
                <span className="font-northura text-xs sm:text-base text-black">Secure Payments</span>
              </div>
              {/* Money-Back Guarantee */}
              <div className="relative flex items-center w-full max-w-[260px] h-[56px] sm:h-[64px] bg-white rounded-[16px] backdrop-blur-[24px] shadow-[0px_8px_16px_0px_#0710360F] px-4 sm:px-6 z-10 mx-auto mt-2 sm:mt-0">
                <span className="flex items-center justify-center w-8 h-8 sm:w-[36px] sm:h-[36px] bg-[#F7F3FF] rounded-[8px] mr-3 sm:mr-4">
                  {/* Camera Icon */}
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0004 12C12.2095 12 14.0004 10.2091 14.0004 8C14.0004 5.79086 12.2095 4 10.0004 4C7.79123 4 6.00037 5.79086 6.00037 8C6.00037 10.2091 7.79123 12 10.0004 12ZM19.0049 0.00292969H1.00488C0.452603 0.00292969 0.00488281 0.45064 0.00488281 1.00293V15.0029C0.00488281 15.5552 0.452603 16.0029 1.00488 16.0029H19.0049C19.5572 16.0029 20.0049 15.5552 20.0049 15.0029V1.00293C20.0049 0.45064 19.5572 0.00292969 19.0049 0.00292969ZM2.00488 11.6463V4.35371C3.13065 4.017 4.01836 3.12892 4.35455 2.00293H15.6462C15.9833 3.13193 16.8748 4.02175 18.0049 4.3564V11.6436C16.8729 11.9788 15.9802 12.8711 15.6444 14.0029H4.3563C4.02144 12.8742 3.13261 11.9836 2.00488 11.6463Z" fill="#6C4EE6"/>
                  </svg>
                </span>
                <span className="font-northura text-xs sm:text-base text-black">Money-Back Guarantee</span>
              </div>
              {/* 24/7 Support */}
              <div className="relative flex items-center w-full max-w-[260px] h-[56px] sm:h-[64px] bg-white rounded-[16px] backdrop-blur-[24px] shadow-[0px_8px_16px_0px_#0710360F] px-4 sm:px-6 z-10 mx-auto mt-2 sm:mt-0">
                <span className="flex items-center justify-center w-8 h-8 sm:w-[36px] sm:h-[36px] bg-[#F7F3FF] rounded-[8px] mr-3 sm:mr-4">
                  {/* Headset Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9381 7H20C21.1046 7 22 7.89543 22 9V13C22 14.1046 21.1046 15 20 15H18.9381C18.446 18.9463 15.0796 22 11 22V20C14.3137 20 17 17.3137 17 14V8C17 4.68629 14.3137 2 11 2C7.68629 2 5 4.68629 5 8V15H2C0.89543 15 0 14.1046 0 13V9C0 7.89543 0.89543 7 2 7H3.06189C3.55399 3.05369 6.92038 0 11 0C15.0796 0 18.446 3.05369 18.9381 7ZM2 9V13H3V9H2ZM19 9V13H20V9H19ZM6.75944 14.7849L7.81958 13.0887C8.74161 13.6662 9.8318 14 11 14C12.1682 14 13.2584 13.6662 14.1804 13.0887L15.2406 14.7849C14.0112 15.5549 12.5576 16 11 16C9.4424 16 7.98882 15.5549 6.75944 14.7849Z" fill="#6C4EE6"/>
                  </svg>
                </span>
                <span className="font-northura text-xs sm:text-base text-black">24/7 Support</span>
              </div>
              {/* Trusted by Thousands */}
              <div className="relative flex items-center w-full max-w-[260px] h-[56px] sm:h-[64px] bg-white rounded-[16px] backdrop-blur-[24px] shadow-[0px_8px_16px_0px_#0710360F] px-4 sm:px-6 z-10 mx-auto mt-2 sm:mt-0">
                <span className="flex items-center justify-center w-8 h-8 sm:w-[36px] sm:h-[36px] bg-[#F7F3FF] rounded-[8px] mr-3 sm:mr-4">
                  {/* Star Icon */}
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.9998 15L4.12197 18.5902L5.72007 11.8906L0.489258 7.40983L7.35479 6.85942L9.9998 0.5L12.6449 6.85942L19.5104 7.40983L14.2796 11.8906L15.8777 18.5902L9.9998 15Z" fill="#6C4EE6"/>
                  </svg>
                </span>
                <span className="font-northura text-xs sm:text-base text-black">Trusted by Thousands</span>
              </div>
            </div>
            {/* Dotted SVG lines (for visual connection, optional) - Hide on mobile, show on md+ */}
            {/* You can add SVG lines here with responsive classes if needed */}
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center bg-white relative" style={{gap: '64px', opacity: 1, paddingTop: '80px', paddingRight: '72px', paddingBottom: '80px', paddingLeft: '72px', minHeight: '907px'}}>
        <Testimonials />
      </section>
          
      {/* Clients Feedback Section */}
      <section className="w-full max-w-[1438px] mx-auto flex flex-col items-center justify-center bg-white relative" style={{gap: '148px', opacity: 1, paddingTop: '80px', paddingRight: '72px', paddingBottom: '80px', paddingLeft: '72px', minHeight: '688px'}}>
        <ClientsFeedback />
      </section>

      {/* Ready to Elevate Your Online Presence Section */}
      <section className="relative w-full 2xl:max-w-[100%] flex justify-center items-center py-20 px-16 lg:px-16 md:px-8 sm:px-4" style={{ background: '#fff' }}>  
        {/* N SVG Background */}
        <div className="absolute left-0 top-0 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ width: 352, height: 436 }}>
          <img src={NImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        
        {/* Star SVGs - Only visible on desktop */}
        <div className='hidden lg:hidden xl:block'>
          <span className="absolute left-12 top-12 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ opacity: 0.7, top: '200px', left: '150px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.66869 15.6723C12.4495 19.2767 24.9222 12.6485 28.5267 0.867443C24.9222 12.6485 31.5508 25.121 43.3316 28.7255C31.5508 25.121 19.0781 31.7492 15.4735 43.5303C19.0781 31.7492 12.4495 19.2767 0.66869 15.6723Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </span>
          <span className="absolute left-12 top-12 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ opacity: 0.7, top: '300px', left: '190px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.66869 15.6723C12.4495 19.2767 24.9222 12.6485 28.5267 0.867443C24.9222 12.6485 31.5508 25.121 43.3316 28.7255C31.5508 25.121 19.0781 31.7492 15.4735 43.5303C19.0781 31.7492 12.4495 19.2767 0.66869 15.6723Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </span>
          <span className="absolute left-12 top-12 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ opacity: 0.7, top: '300px', left: '1150px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.66869 15.6723C12.4495 19.2767 24.9222 12.6485 28.5267 0.867443C24.9222 12.6485 31.5508 25.121 43.3316 28.7255C31.5508 25.121 19.0781 31.7492 15.4735 43.5303C19.0781 31.7492 12.4495 19.2767 0.66869 15.6723Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </span>
          <span className="absolute left-12 top-12 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ opacity: 0.7, top: '400px', left: '1250px' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.66869 15.6723C12.4495 19.2767 24.9222 12.6485 28.5267 0.867443C24.9222 12.6485 31.5508 25.121 43.3316 28.7255C31.5508 25.121 19.0781 31.7492 15.4735 43.5303C19.0781 31.7492 12.4495 19.2767 0.66869 15.6723Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </span>
        </div>
        
        {/* Right background SVG */}
        <div className="absolute right-20 bottom-0 z-20 pointer-events-none lg:block md:hidden sm:hidden" style={{ width: 352, height: 436 }}>
          <svg width="401" height="363" viewBox="0 0 401 363" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" d="M179.166 639.001L68.3182 591.91L128.04 229.968L88.6026 270.963L0 183.792L177.205 0.000976562L282.473 53.7971L233.081 352.952L454.475 47.0153L565.473 92.8869L526.261 363.925L561.25 323.844L654 406.443L481.395 604.178L373.941 553.887L407.195 323.921L179.166 639.001Z" fill="white"/>
          </svg>
        </div>
        
        {/* Main Content Box */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-5xl px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-[32px] bg-gradient-to-r from-[#8B7BC5] to-[#3E239E] mx-auto">
          <h2 className="text-2xl sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] font-northura text-center mb-2 sm:mb-3 md:mb-4 text-white leading-tight">Ready to Elevate Your Online Presence?</h2>
          <p className="text-center text-xs sm:text-[12px] md:text-[14px] lg:text-base xl:text-lg font-korolevLight mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 text-white leading-snug">
            Get started with NameWord today by creating your free account and taking the first step toward building a powerful online presence. Whether you need help with domain selection, web hosting, or website design, we've got you covered
          </p>
          <button
            className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 px-5 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 rounded-full bg-black text-white text-sm sm:text-[14px] md:text-base lg:text-lg xl:text-xl font-northuraHeavy hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3E239E] focus:ring-offset-2"
            onClick={() => navigate('/signup')}
          >
            Create Free Account
          </button>
        </div>
      </section>
      

    <Footer />
    </div>
  );
};

export default Homepage;