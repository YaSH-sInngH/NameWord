import React, { useState } from "react";
import NewNavbar from "./NewNavbar";

const domains = [
  {
    name: "example.com",
    status: { label: "Active", color: "green" },
    expires: "2025-01-19",
    autoRenew: false,
  },
  {
    name: "example.com",
    status: { label: "Rejected", color: "red" },
    expires: "2025-01-19",
    autoRenew: true,
  },
  {
    name: "example.com",
    status: { label: "Scheduled", color: "blue" },
    expires: "2025-01-19",
    autoRenew: false,
  },
  {
    name: "example.com",
    status: { label: "In Progress", color: "orange" },
    expires: "2025-01-19",
    autoRenew: false,
  },
];

const statusColor = {
  green: "bg-green-500",
  red: "bg-[#FC5585]",
  blue: "bg-blue-500",
  orange: "bg-orange-400",
};

const CustomToggle = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`w-[48px] h-[24px] rounded-full flex items-center transition-colors duration-200 focus:outline-none ${checked ? "bg-gradient-to-r from-[#9664E6] to-[#5E30CC]" : "bg-[#EAEAEA]"}`}
    style={{ padding: 0 }}
    aria-pressed={checked}
  >
    <span
      className={`inline-block w-[20px] h-[20px] rounded-full bg-white shadow transform transition-transform duration-200 ${checked ? "translate-x-[24px]" : "translate-x-[4px]"}`}
    />
  </button>
);

const HomeDashboard = () => {
  const [toggleStates, setToggleStates] = useState(domains.map(d => d.autoRenew));

  const handleToggle = idx => {
    setToggleStates(states => states.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar />
      
      {/* Container with responsive widths */}
      <div className="w-full max-w-[1376px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Greeting Section */}
        <div className="w-full max-w-[441px] flex flex-col gap-3 mb-6">
          <h1 className="text-2xl sm:text-3xl xl:text-[32px] font-bold text-[#1C1E40] leading-[1.25]">Hi, Derek!</h1>
          <a href="#" className="text-[#505050] text-sm sm:text-base">Complete all necessary actions on a single page</a>
        </div>

        {/* Card Stack Section */}
        <div className="w-full mb-8">
          <div className="relative w-full max-w-[966px] mx-auto">
            {/* Mobile/Tablet: Simple single card */}
            <div className="xl:hidden">
              <div className="w-full h-[240px] sm:h-[276px] rounded-[20px] sm:rounded-[24px] bg-gradient-to-r from-[#8B5CF6] to-[#5E30CC] shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-lg sm:text-xl font-bold mb-4">
                    Protect your brand. Buy example.com <br className="hidden sm:inline"/> right now!
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <span className="bg-white/20 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-sm sm:text-base">Save 85%</span>
                    <span className="text-white/60 text-base sm:text-lg line-through">$72.99</span>
                    <span className="text-white text-xl sm:text-2xl font-bold">$10.99</span>
                    <span className="text-white/80 text-sm sm:text-base">/ Year</span>
                  </div>
                  <button className="w-full sm:w-[180px] h-[40px] bg-white text-[#5E30CC] font-semibold text-base sm:text-lg rounded-full">
                    Buy now
                  </button>
                </div>
                <button className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 border border-white text-white px-4 py-2 sm:px-6 rounded-full font-medium text-sm sm:text-base bg-transparent hover:bg-white/10">
                  More options
                </button>
              </div>
            </div>

            {/* Desktop: Original stacked design for xl screens */}
            <div className="hidden xl:block h-[342px] relative">
              {/* Stacked Cards */}
              {[3, 2, 1].map((i) => (
                <div
                  key={i}
                  className="absolute w-[966px] h-[276px] rounded-[24px] bg-[#BFA6F7] opacity-50 z-0"
                  style={{
                    top: `${i * 12}px`,
                    left: `calc(50% - 483px + ${i * 12}px)`
                  }}
                />
              ))}
              
              {/* Top Card */}
              <div className="absolute w-[966px] h-[276px] rounded-[24px] bg-gradient-to-r from-[#8B5CF6] to-[#5E30CC] z-10 shadow-xl top-0 left-1/2 -translate-x-1/2 p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold mb-4">
                    Protect your brand. Buy example.com <br/> right now!
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium text-base">Save 85%</span>
                    <span className="text-white/60 text-lg line-through">$72.99</span>
                    <span className="text-white text-2xl font-bold">$10.99</span>
                    <span className="text-white/80 text-base">/ Year</span>
                  </div>
                  <button className="w-[180px] h-[40px] bg-white text-[#5E30CC] font-semibold text-lg rounded-full">
                    Buy now
                  </button>
                </div>
                <button className="absolute top-8 right-8 border border-white text-white px-6 py-2 rounded-full font-medium text-base bg-transparent hover:bg-white/10">
                  More options
                </button>
                <div className="absolute right-[20px] bottom-0 w-2/3 h-full pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="130" r="120" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
                    <circle cx="350" cy="130" r="80" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dots for carousel */}
            <div className="flex justify-center items-center gap-2 mt-4 xl:mt-6">
              <span className="w-3 h-3 rounded-full bg-[#5E30CC] opacity-80"></span>
              <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
              <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
              <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
            </div>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="w-full bg-white rounded-[20px] flex flex-col p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 sm:mb-6 bg-[#F7F7FC] rounded-[20px] h-[56px] px-4 sm:px-6">
            <span className="text-[#A0A0A0] flex items-center justify-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="9" cy="9" r="7" stroke="#A0A0A0" strokeWidth="2"/>
                <path d="M15 15L19 19" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-transparent outline-none text-base text-[#1C1E40] h-[40px]" 
            />
          </div>
          <div className="flex items-center gap-4 ml-0 sm:ml-2">
            <span className="text-[#1C1E40] text-base font-bold">Register</span>
            <CustomToggle checked={true} onChange={() => {}} />
            <span className="text-[#1C1E40] text-base font-bold ml-2">Transfer</span>
          </div>
        </div>

        {/* Domain List Section */}
        <div className="w-full bg-white rounded-[20px] shadow-sm overflow-hidden">
          <h3 className="text-lg sm:text-xl font-bold text-[#1C1E40] px-4 sm:px-6 pt-4 sm:pt-6 pb-2">Domain list</h3>
          
          {/* Mobile View: Card-based layout */}
          <div className="block sm:hidden">
            {domains.map((domain, idx) => (
              <div key={idx} className="border-b border-[#EAEAEA] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="accent-[#9664E6] w-4 h-4" />
                    <span className="text-[#1C1E40] font-medium">{domain.name}</span>
                  </div>
                  <button className="text-[#FC5585]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.168 3.99984H17.3346V5.6665H15.668V16.4998C15.668 16.9601 15.2949 17.3332 14.8346 17.3332H3.16797C2.70774 17.3332 2.33464 16.9601 2.33464 16.4998V5.6665H0.667969V3.99984H4.83464V1.49984C4.83464 1.0396 5.20774 0.666504 5.66797 0.666504H12.3346C12.7949 0.666504 13.168 1.0396 13.168 1.49984V3.99984ZM14.0013 5.6665H4.0013V15.6665H14.0013V5.6665ZM6.5013 8.1665H8.16797V13.1665H6.5013V8.1665ZM9.83463 8.1665H11.5013V13.1665H9.83463V8.1665ZM6.5013 2.33317V3.99984H11.5013V2.33317H6.5013Z" fill="#FC5585"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-3 h-3 rounded-full ${statusColor[domain.status.color]} inline-block`}></span>
                  <span className={`font-medium text-sm ${domain.status.color === 'red' ? 'text-[#FC5585]' : domain.status.color === 'green' ? 'text-green-600' : domain.status.color === 'blue' ? 'text-blue-500' : 'text-orange-400'}`}>
                    {domain.status.label}
                  </span>
                </div>
                <div className="text-[#505050] text-sm mb-3">Expires: {domain.expires}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#505050]">Auto-renew:</span>
                    <CustomToggle checked={toggleStates[idx]} onChange={() => handleToggle(idx)} />
                  </div>
                  <button className="px-3 py-1 border border-[#9664E6] text-[#5E30CC] rounded-full font-medium text-sm bg-white">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and Desktop View: Table layout */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#A0A0A0] text-sm sm:text-base font-medium" style={{height: 64}}>
                  <th className="px-4 sm:px-6 py-2"><input type="checkbox" /></th>
                  <th className="px-4 sm:px-6 py-2">Domain name</th>
                  <th className="px-4 sm:px-6 py-2">Status</th>
                  <th className="px-4 sm:px-6 py-2">Expires</th>
                  <th className="px-4 sm:px-6 py-2">Auto-renew</th>
                  <th className="px-4 sm:px-6 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {domains.map((domain, idx) => (
                  <tr key={idx} className="border-b border-[#EAEAEA]" style={{height: 64}}>
                    <td className="px-4 sm:px-6">
                      <input type="checkbox" className="accent-[#9664E6] w-4 h-4" />
                    </td>
                    <td className="px-4 sm:px-6 text-[#1C1E40] font-medium">{domain.name}</td>
                    <td className="px-4 sm:px-6">
                      <span className="inline-flex items-center gap-2 font-medium text-sm">
                        <span className={`w-3 h-3 rounded-full ${statusColor[domain.status.color]} inline-block`}></span>
                        <span className={domain.status.color === 'red' ? 'text-[#FC5585]' : domain.status.color === 'green' ? 'text-green-600' : domain.status.color === 'blue' ? 'text-blue-500' : 'text-orange-400'}>
                          {domain.status.label}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 text-[#505050]">{domain.expires}</td>
                    <td className="px-4 sm:px-6">
                      <div className="flex items-center gap-2 lg:gap-4">
                        <CustomToggle checked={toggleStates[idx]} onChange={() => handleToggle(idx)} />
                        <button className="px-3 py-1 sm:px-4 border border-[#9664E6] text-[#5E30CC] rounded-full font-medium text-sm bg-white">
                          Manage
                        </button>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6">
                      <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.168 3.99984H17.3346V5.6665H15.668V16.4998C15.668 16.9601 15.2949 17.3332 14.8346 17.3332H3.16797C2.70774 17.3332 2.33464 16.9601 2.33464 16.4998V5.6665H0.667969V3.99984H4.83464V1.49984C4.83464 1.0396 5.20774 0.666504 5.66797 0.666504H12.3346C12.7949 0.666504 13.168 1.0396 13.168 1.49984V3.99984ZM14.0013 5.6665H4.0013V15.6665H14.0013V5.6665ZM6.5013 8.1665H8.16797V13.1665H6.5013V8.1665ZM9.83463 8.1665H11.5013V13.1665H9.83463V8.1665ZM6.5013 2.33317V3.99984H11.5013V2.33317H6.5013Z" fill="#FC5585"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard; 