import React, { useState } from "react";
import NewSidebar from "./NewSidebar";
import NewNavbar from "./NewNavbar";
import { useNavigate } from 'react-router-dom';

const initialDomainData = [
  {
    domain: "example.com",
    email: "example@gmail.com",
    status: "Active",
    registration: "2025-01-19",
    expires: "2025-01-19",
    autoRenew: true,
    showExpires: true,
    checked: false,
  },
  {
    domain: "example.com",
    email: "example@gmail.com",
    status: "Active",
    registration: "2025-01-19",
    expires: "2025-01-19",
    autoRenew: false,
    showExpires: false,
    checked: false,
  },
  {
    domain: "example.com",
    email: "example@gmail.com",
    status: "Active",
    registration: "2025-01-19",
    expires: "2025-01-19",
    autoRenew: true,
    showExpires: true,
    checked: false,
  },
  {
    domain: "example.com",
    email: "example@gmail.com",
    status: "Active",
    registration: "2025-01-19",
    expires: "2025-01-19",
    autoRenew: false,
    showExpires: false,
    checked: false,
  },
];

const CustomCheckbox = ({ checked, onChange }) => (
  <span className="inline-flex items-center justify-center w-[21px] h-[21px] rounded-[6px] border border-[#9664E6] bg-white relative cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="opacity-0 absolute w-full h-full cursor-pointer z-10"
      style={{ margin: 0 }}
    />
    {checked && (
      <span className="w-[13px] h-[13px] bg-[#9664E6] rounded-[3px] block absolute"></span>
    )}
  </span>
);

const gridCols = "grid grid-cols-[40px_220px_120px_180px_250px_180px] w-[1126px]";

const DomainDashboard = () => {
  const navigate = useNavigate();
  const [domainData, setDomainData] = useState(initialDomainData);
  const [allChecked, setAllChecked] = useState(false);

  // Handle header checkbox (select all)
  const handleAllCheck = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setDomainData((prev) => prev.map((row) => ({ ...row, checked: newChecked })));
  };

  // Handle row checkbox
  const handleRowCheck = (idx) => {
    setDomainData((prev) => {
      const updated = prev.map((row, i) =>
        i === idx ? { ...row, checked: !row.checked } : row
      );
      setAllChecked(updated.every((row) => row.checked));
      return updated;
    });
  };

  // Handle toggle
  const handleToggle = (idx) => {
    setDomainData((prev) =>
      prev.map((row, i) =>
        i === idx ? { ...row, autoRenew: !row.autoRenew } : row
      )
    );
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Domains" />
      <NewSidebar />
      <main className="lg:ml-[250px] px-4 sm:px-6 lg:px-8 pb-10">
        {/* Container for 1440px screens */}
        <div className="max-w-[1188px] mx-auto">
          <div className="pt-6 lg:pt-10 mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40]">Domain</h1>
              <button 
                className="w-full sm:w-auto pt-[14px] pb-[14px] pl-[24px] pr-[24px] rounded-full bg-[#5E30CC] text-white font-medium text-base" 
                onClick={() => navigate('/search')}
              >
                Search domain
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-[12px] lg:rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-sm w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1C1E40]">Domain list</div>
            </div>
            
            <div className="bg-[#F9FAFC] rounded-[50px] px-4 py-3 flex items-center mb-4 border border-[#EAEAEA]">
              <span className="pr-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.16797 0.666016C12.308 0.666016 15.668 4.02602 15.668 8.16602C15.668 12.306 12.308 15.666 8.16797 15.666C4.02797 15.666 0.667969 12.306 0.667969 8.16602C0.667969 4.02602 4.02797 0.666016 8.16797 0.666016ZM8.16797 13.9993C11.3909 13.9993 14.0013 11.3889 14.0013 8.16602C14.0013 4.9431 11.3909 2.33268 8.16797 2.33268C4.94505 2.33268 2.33464 4.9431 2.33464 8.16602C2.33464 11.3889 4.94505 13.9993 8.16797 13.9993ZM15.2391 14.0586L17.5961 16.4156L16.4176 17.5941L14.0606 15.2371L15.2391 14.0586Z" fill="black"/>
                </svg>
              </span>
              <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none text-[#1C1E40] text-base" />
            </div>

            {/* Desktop Table - Only visible on large screens */}
            <div className="hidden lg:block">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-black text-base font-bold h-[64px] border-b border-[#EAEAEA]">
                      <th className="py-2 w-[40px]">
                        <div className="flex items-center justify-center">
                          <CustomCheckbox checked={allChecked} onChange={handleAllCheck} />
                        </div>
                      </th>
                      <th className="py-2">Domain name</th>
                      <th className="py-2 text-center">Status</th>
                      <th className="py-2 text-center">Date of registration</th>
                      <th className="py-2 text-center">Expires</th>
                      <th className="py-2 text-center">Auto-renew</th>
                    </tr>
                  </thead>
                  <tbody>
                    {domainData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-[#EAEAEA] bg-white ${row.showExpires ? 'h-[117px]' : 'h-[88px]'}`}
                      >
                        <td className="py-3">
                          <div className="flex items-center justify-center">
                            <CustomCheckbox checked={row.checked} onChange={() => handleRowCheck(idx)} />
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex flex-col justify-center text-base">
                            <span className="font-medium text-[#1C1E40]">{row.domain}</span>
                            <span className="text-xs text-[#A3A3A3]">{row.email}</span>
                          </div>
                        </td>
                        <td className="py-3 text-center">
                          <span className="inline-flex items-center text-[#22C55E] font-medium">
                            <span className="w-[15px] h-[15px] rounded-full bg-[#039855] inline-block mr-1">
                              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.9987 14.1673C3.3168 14.1673 0.332031 11.1825 0.332031 7.50065C0.332031 3.81875 3.3168 0.833984 6.9987 0.833984C10.6806 0.833984 13.6654 3.81875 13.6654 7.50065C13.6654 11.1825 10.6806 14.1673 6.9987 14.1673ZM6.9987 12.834C9.94423 12.834 12.332 10.4462 12.332 7.50065C12.332 4.55513 9.94423 2.16732 6.9987 2.16732C4.05318 2.16732 1.66536 4.55513 1.66536 7.50065C1.66536 10.4462 4.05318 12.834 6.9987 12.834ZM6.33376 10.1673L3.50536 7.33892L4.44817 6.39605L6.33376 8.28172L10.105 4.51046L11.0478 5.45327L6.33376 10.1673Z" fill="white"/>
                              </svg>
                            </span>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 text-center">
                          <span className="text-[#1C1E40] font-medium">{row.registration}</span>
                        </td>
                        <td className="py-3 text-center">
                          <div className="flex flex-col items-center justify-center gap-1">
                            {row.showExpires ? (
                              <>
                                <span className="text-[#F04438] font-medium flex items-center gap-1">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="8" stroke="#F04438" strokeWidth="2"/>
                                    <path d="M9 5v4l2.5 2.5" stroke="#F04438" strokeWidth="2" strokeLinecap="round"/>
                                  </svg>
                                  {row.expires}
                                </span>
                                <span className="text-xs text-[#F04438]">Expires</span>
                              </>
                            ) : (
                              <span className="text-[#1C1E40] font-medium">{row.expires}</span>
                            )}
                            <div className="flex gap-2 mt-1">
                              <button className="px-4 py-1 rounded-full border border-[#BFA5F8] text-[#7C3AED] bg-white font-medium">
                                Manage
                              </button>
                              <button className="rounded-full bg-[#7C3AED] text-white font-medium px-4 py-1">
                                Transfer
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center justify-center gap-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={row.autoRenew}
                                onChange={() => handleToggle(idx)}
                                className="sr-only peer"
                              />
                              <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                            </label>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F7FC]">
                              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <circle cx="4" cy="10" r="1.5" fill="#A3A3A3"/>
                                <circle cx="10" cy="10" r="1.5" fill="#A3A3A3"/>
                                <circle cx="16" cy="10" r="1.5" fill="#A3A3A3"/>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-4">
              {domainData.map((row, idx) => (
                <div key={idx} className="border border-[#F0F0F0] rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <CustomCheckbox checked={row.checked} onChange={() => handleRowCheck(idx)} />
                      <div>
                        <div className="text-base font-medium text-[#1C1E40]">{row.domain}</div>
                        <div className="text-xs text-[#A3A3A3]">{row.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center text-[#22C55E] font-medium text-sm">
                        <span className="w-[15px] h-[15px] rounded-full bg-[#039855] inline-block mr-1">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.9987 14.1673C3.3168 14.1673 0.332031 11.1825 0.332031 7.50065C0.332031 3.81875 3.3168 0.833984 6.9987 0.833984C10.6806 0.833984 13.6654 3.81875 13.6654 7.50065C13.6654 11.1825 10.6806 14.1673 6.9987 14.1673ZM6.9987 12.834C9.94423 12.834 12.332 10.4462 12.332 7.50065C12.332 4.55513 9.94423 2.16732 6.9987 2.16732C4.05318 2.16732 1.66536 4.55513 1.66536 7.50065C1.66536 10.4462 4.05318 12.834 6.9987 12.834ZM6.33376 10.1673L3.50536 7.33892L4.44817 6.39605L6.33376 8.28172L10.105 4.51046L11.0478 5.45327L6.33376 10.1673Z" fill="white"/>
                          </svg>
                        </span>
                        {row.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#505050]">Registration</span>
                      <span className="text-sm text-[#1C1E40] font-medium">{row.registration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#505050]">Expires</span>
                      {row.showExpires ? (
                        <div className="text-sm text-[#F04438] font-medium flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="8" stroke="#F04438" strokeWidth="2"/>
                            <path d="M9 5v4l2.5 2.5" stroke="#F04438" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          {row.expires}
                        </div>
                      ) : (
                        <div className="text-sm text-[#1C1E40] font-medium">{row.expires}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded-full border border-[#BFA5F8] text-[#7C3AED] bg-white font-medium text-sm">
                        Manage
                      </button>
                      <button className="rounded-full bg-[#7C3AED] text-white font-medium px-3 py-1 text-sm">
                        Transfer
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A3A3A3]">Auto-renew</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={row.autoRenew}
                            onChange={() => handleToggle(idx)}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                          <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                        </label>
                      </div>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F7FC]">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                          <circle cx="4" cy="10" r="1.5" fill="#A3A3A3"/>
                          <circle cx="10" cy="10" r="1.5" fill="#A3A3A3"/>
                          <circle cx="16" cy="10" r="1.5" fill="#A3A3A3"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DomainDashboard;