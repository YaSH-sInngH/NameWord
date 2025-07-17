import React from "react";
import { NewNavbar } from "./NewNavbar";

const HomeComingSoon = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F7FC] flex flex-col items-center" style={{opacity: 1}}>
      <NewNavbar />
      
      {/* Container with responsive width */}
      <div className="w-full flex justify-center mt-4 sm:mt-8 lg:mt-12 xl:mt-[80px] px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Main card with responsive dimensions */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-4xl xl:w-[1376px] 
                       h-[400px] sm:h-[450px] lg:h-[480px] xl:h-[495px] 
                       bg-[#3E239E] rounded-2xl sm:rounded-3xl xl:rounded-[32px] 
                       mx-auto flex items-center justify-center 
                       mt-6 sm:mt-8 lg:mt-10 xl:mt-12 overflow-hidden">
          
          {/* Left Dotted SVG - Hidden on mobile, visible on larger screens */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
            <svg width="156" height="431" viewBox="0 0 156 431" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25.4133" cy="42.1874" r="6" transform="rotate(15.7678 25.4133 42.1874)" fill="white" fillOpacity="0.14"/>
              <circle cx="87.0051" cy="59.5785" r="6" transform="rotate(15.7678 87.0051 59.5785)" fill="white" fillOpacity="0.14"/>
              <circle cx="148.597" cy="76.9696" r="6" transform="rotate(15.7678 148.597 76.9696)" fill="white" fillOpacity="0.14"/>
              <circle cx="9.10864" cy="99.9296" r="6" transform="rotate(15.7678 9.10864 99.9296)" fill="white" fillOpacity="0.14"/>
              <circle cx="70.7004" cy="117.321" r="6" transform="rotate(15.7678 70.7004 117.321)" fill="white" fillOpacity="0.14"/>
              <circle cx="132.292" cy="134.712" r="6" transform="rotate(15.7678 132.292 134.712)" fill="white" fillOpacity="0.14"/>
              <circle cx="-7.19605" cy="157.672" r="6" transform="rotate(15.7678 -7.19605 157.672)" fill="white" fillOpacity="0.14"/>
              <circle cx="54.3957" cy="175.063" r="6" transform="rotate(15.7678 54.3957 175.063)" fill="white" fillOpacity="0.14"/>
              <circle cx="115.988" cy="192.454" r="6" transform="rotate(15.7678 115.988 192.454)" fill="white" fillOpacity="0.14"/>
              <circle cx="38.0911" cy="232.805" r="6" transform="rotate(15.7678 38.0911 232.805)" fill="white" fillOpacity="0.14"/>
              <circle cx="99.6829" cy="250.196" r="6" transform="rotate(15.7678 99.6829 250.196)" fill="white" fillOpacity="0.14"/>
              <circle cx="21.7864" cy="290.547" r="6" transform="rotate(15.7678 21.7864 290.547)" fill="white" fillOpacity="0.14"/>
              <circle cx="83.3782" cy="307.938" r="6" transform="rotate(15.7678 83.3782 307.938)" fill="white" fillOpacity="0.14"/>
              <circle cx="5.48168" cy="348.289" r="6" transform="rotate(15.7678 5.48168 348.289)" fill="white" fillOpacity="0.14"/>
              <circle cx="67.0735" cy="365.681" r="6" transform="rotate(15.7678 67.0735 365.681)" fill="white" fillOpacity="0.14"/>
              <circle cx="50.7688" cy="423.423" r="6" transform="rotate(15.7678 50.7688 423.423)" fill="white" fillOpacity="0.14"/>
            </svg>
          </div>
          
          {/* Right Dotted SVG - Hidden on mobile, visible on larger screens */}
          <div className="absolute right-0 top-1/2 -translate-y-1/3 z-0 pointer-events-none hidden lg:block" style={{ boxShadow: '0px 24px 32px 0px #0710360F' }}>
            <svg width="237" height="381" viewBox="0 0 237 381" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="105.23" cy="7.40515" r="6" transform="rotate(15.7678 105.23 7.40515)" fill="white" fillOpacity="0.14"/>
              <circle cx="166.822" cy="24.7963" r="6" transform="rotate(15.7678 166.822 24.7963)" fill="white" fillOpacity="0.14"/>
              <circle cx="228.413" cy="42.1879" r="6" transform="rotate(15.7678 228.413 42.1879)" fill="white" fillOpacity="0.14"/>
              <circle cx="88.925" cy="65.1473" r="6" transform="rotate(15.7678 88.925 65.1473)" fill="white" fillOpacity="0.14"/>
              <circle cx="150.517" cy="82.5385" r="6" transform="rotate(15.7678 150.517 82.5385)" fill="white" fillOpacity="0.14"/>
              <circle cx="212.109" cy="99.9301" r="6" transform="rotate(15.7678 212.109 99.9301)" fill="white" fillOpacity="0.14"/>
              <circle cx="72.6204" cy="122.89" r="6" transform="rotate(15.7678 72.6204 122.89)" fill="white" fillOpacity="0.14"/>
              <circle cx="134.212" cy="140.281" r="6" transform="rotate(15.7678 134.212 140.281)" fill="white" fillOpacity="0.14"/>
              <circle cx="195.804" cy="157.672" r="6" transform="rotate(15.7678 195.804 157.672)" fill="white" fillOpacity="0.14"/>
              <circle cx="56.3157" cy="180.632" r="6" transform="rotate(15.7678 56.3157 180.632)" fill="white" fillOpacity="0.14"/>
              <circle cx="117.907" cy="198.023" r="6" transform="rotate(15.7678 117.907 198.023)" fill="white" fillOpacity="0.14"/>
              <circle cx="179.499" cy="215.414" r="6" transform="rotate(15.7678 179.499 215.414)" fill="white" fillOpacity="0.14"/>
              <circle cx="241.091" cy="232.806" r="6" transform="rotate(15.7678 241.091 232.806)" fill="white" fillOpacity="0.14"/>
              <circle cx="40.011" cy="238.374" r="6" transform="rotate(15.7678 40.011 238.374)" fill="white" fillOpacity="0.14"/>
              <circle cx="101.603" cy="255.765" r="6" transform="rotate(15.7678 101.603 255.765)" fill="white" fillOpacity="0.14"/>
              <circle cx="163.195" cy="273.157" r="6" transform="rotate(15.7678 163.195 273.157)" fill="white" fillOpacity="0.14"/>
              <circle cx="224.786" cy="290.548" r="6" transform="rotate(15.7678 224.786 290.548)" fill="white" fillOpacity="0.14"/>
              <circle cx="23.7063" cy="296.116" r="6" transform="rotate(15.7678 23.7063 296.116)" fill="white" fillOpacity="0.14"/>
              <circle cx="85.2981" cy="313.507" r="6" transform="rotate(15.7678 85.2981 313.507)" fill="white" fillOpacity="0.14"/>
              <circle cx="146.89" cy="330.899" r="6" transform="rotate(15.7678 146.89 330.899)" fill="white" fillOpacity="0.14"/>
              <circle cx="208.482" cy="348.29" r="6" transform="rotate(15.7678 208.482 348.29)" fill="white" fillOpacity="0.14"/>
              <circle cx="7.40161" cy="353.858" r="6" transform="rotate(15.7678 7.40161 353.858)" fill="white" fillOpacity="0.14"/>
              <circle cx="68.9934" cy="371.249" r="6" transform="rotate(15.7678 68.9934 371.249)" fill="white" fillOpacity="0.14"/>
            </svg>
          </div>
          
          {/* Scattered dots for mobile - visible only on mobile */}
          <div className="absolute inset-0 overflow-hidden lg:hidden">
            {/* Top scattered dots */}
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-16 left-8"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-20 right-12"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-32 left-16"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-28 right-8"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-12 left-24"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full top-40 right-20"></div>
            
            {/* Bottom scattered dots */}
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-16 left-6"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-24 right-14"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-32 left-20"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-20 right-6"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-12 left-12"></div>
            <div className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full bottom-36 right-16"></div>
          </div>
          
          {/* Main Content - Responsive text sizing */}
          <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">
              Coming soon
            </h1>
            <p className="text-white text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm lg:max-w-md">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComingSoon; 