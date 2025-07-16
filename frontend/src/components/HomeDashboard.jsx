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
    <div className="w-[1440px] min-h-[1239px] bg-[#F7F7FC] mx-auto flex flex-col items-center">
      <NewNavbar />
      {/* Main Content Column */}
      <div className="w-[1376px] flex flex-col mx-auto">
        {/* Greeting Section */}
        <div className="w-[441px] flex flex-col gap-[12px] m-6 items-start">
          <h1 className="text-[32px] font-bold text-[#1C1E40] leading-[40px]">Hi, Derek!</h1>
          <a href="#" className="text-[#505050] text-base">Complete all necessary actions on a single page</a>
        </div>
        {/* Card Stack Section */}
        <div className="w-full h-[342px] flex flex-col gap-0 mb-8 relative">
          {/* Stacked Cards - Figma style: only top card is interactive, others are shadowed behind */}
          {[ 3, 2, 1].map((i) => (
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
              <h2 className="text-white text-xl font-bold mb-4">Protect your brand. Buy example.com <br/> right now!</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium text-base">Save 85%</span>
                <span className="text-white/60 text-lg line-through">$72.99</span>
                <span className="text-white text-2xl font-bold">$10.99</span>
                <span className="text-white/80 text-base">/ Year</span>
              </div>
              <button className="w-[180px] h-[40px] bg-white text-[#5E30CC] font-semibold text-lg rounded-full">Buy now</button>
            </div>
            <button className="absolute top-8 right-8 border border-white text-white px-6 py-2 rounded-full font-medium text-base bg-transparent hover:bg-white/10">More options</button>
            <div className="absolute right-[20px] bottom-0 w-2/3 h-full pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="300" cy="130" r="120" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
                <circle cx="350" cy="130" r="80" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
              </svg>
            </div>
          </div>
          {/* Dots for carousel */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] flex justify-center items-center gap-2 z-30">
            <span className="w-3 h-3 rounded-full bg-[#5E30CC] opacity-80"></span>
            <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
            <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
            <span className="w-2 h-2 rounded-full bg-[#5E30CC] opacity-30"></span>
          </div>
        </div>
        {/* Search Bar Section */}
        <div className="w-full h-[182px] bg-white rounded-[20px] flex flex-col px-8 py-8 mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 bg-[#F7F7FC] rounded-[20px] h-[56px] px-6">
            <span className="text-[#A0A0A0] flex items-center justify-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="#A0A0A0" strokeWidth="2"/><path d="M15 15L19 19" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <input type="text" placeholder="Search" className="w-full bg-transparent outline-none text-base text-[#1C1E40] h-[40px]" />
          </div>
          <div className="flex items-center gap-4 mt-4 ml-2">
            <span className="text-[#1C1E40] text-base font-bold">Register</span>
            <CustomToggle checked={true} onChange={() => {}} />
            <span className="text-[#1C1E40] text-base font-bold ml-2">Transfer</span>
          </div>
        </div>
        {/* Domain List Section */}
        <div className="w-full bg-white rounded-[20px] px-0 py-0 shadow-sm overflow-hidden">
          <h3 className="text-xl font-bold text-[#1C1E40] px-6 pt-6 pb-2">Domain list</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#A0A0A0] text-base font-medium" style={{height: 64}}>
                <th className="px-6 py-2"><input type="checkbox" /></th>
                <th className="px-6 py-2">Domain name</th>
                <th className="px-6 py-2">Status</th>
                <th className="px-6 py-2">Expires</th>
                <th className="px-6 py-2">Auto-renew</th>
                <th className="px-6 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((domain, idx) => (
                <tr key={idx} className="border-b border-[#EAEAEA]" style={{height: 64, padding: 24}}>
                  <td className="px-6"><input type="checkbox" className="accent-[#9664E6] w-4 h-4" /></td>
                  <td className="px-6 text-[#1C1E40] font-medium">{domain.name}</td>
                  <td className="px-6">
                    <span className={`inline-flex items-center gap-2 font-medium text-sm`}>
                      <span className={`w-3 h-3 rounded-full ${statusColor[domain.status.color]} inline-block`}></span>
                      <span className={domain.status.color === 'red' ? 'text-[#FC5585]' : domain.status.color === 'green' ? 'text-green-600' : domain.status.color === 'blue' ? 'text-blue-500' : 'text-orange-400'}>{domain.status.label}</span>
                    </span>
                  </td>
                  <td className="px-6 text-[#505050]">{domain.expires}</td>
                  <td className="px-6">
                    <div className="flex items-center gap-4">
                      <CustomToggle checked={toggleStates[idx]} onChange={() => handleToggle(idx)} />
                      <button className="px-4 py-1 border border-[#9664E6] text-[#5E30CC] rounded-full font-medium bg-white ml-2">Manage</button>
                    </div>
                  </td>
                  <td className="px-6">
                    <button className="ml-2">
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
  );
};

export default HomeDashboard; 