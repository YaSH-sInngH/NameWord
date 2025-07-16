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
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: 1440, minHeight: 1024 }}>
      <NewNavbar activeSection="Domains" />
      <NewSidebar />
      <main
        className="absolute top-[80px] left-[250px] w-[1190px] h-[944px] bg-[#F9FAFC] rounded-[24px] p-[40px_32px] flex flex-col gap-8 shadow-sm"
        style={{ paddingTop: 40, paddingRight: 32, paddingBottom: 40, paddingLeft: 32 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#1C1E40]">Domain</h1>
          <button className="pt-[14px] pb-[14px] pl-[24px] pr-[24px] rounded-full bg-[#5E30CC] text-white font-medium text-base" onClick={()=> navigate('/search')}>Search domain</button>
        </div>
        <div className="bg-white rounded-[16px] p-6 shadow-sm w-[1126px] flex flex-col gap-[0px] mx-auto">

        <div className="flex items-center justify-between mb-4 ">
            <div className="text-2xl font-semibold text-[#1C1E40]">Domain list</div>
          </div>
          <div className="bg-[#F9FAFC] rounded-[50px] px-4 py-3 flex items-center mb-4 border border-[#EAEAEA]">
            <span className="pr-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.16797 0.666016C12.308 0.666016 15.668 4.02602 15.668 8.16602C15.668 12.306 12.308 15.666 8.16797 15.666C4.02797 15.666 0.667969 12.306 0.667969 8.16602C0.667969 4.02602 4.02797 0.666016 8.16797 0.666016ZM8.16797 13.9993C11.3909 13.9993 14.0013 11.3889 14.0013 8.16602C14.0013 4.9431 11.3909 2.33268 8.16797 2.33268C4.94505 2.33268 2.33464 4.9431 2.33464 8.16602C2.33464 11.3889 4.94505 13.9993 8.16797 13.9993ZM15.2391 14.0586L17.5961 16.4156L16.4176 17.5941L14.0606 15.2371L15.2391 14.0586Z" fill="black"/>
                </svg>
            </span>
            <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none text-[#1C1E40] text-base" />
          </div>
          {/* Table Header */}
          <div className={`${gridCols} h-[68px] px-0 py-0 border-b border-[#EAEAEA] items-center`} style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 24, paddingRight: 24}}>
            <div className="flex items-center justify-center">
              <CustomCheckbox checked={allChecked} onChange={handleAllCheck} />
            </div>
            <div className="font-semibold text-base text-black flex items-center">Domain name</div>
            <div className="font-semibold text-base text-black flex items-center justify-center">Status</div>
            <div className="font-semibold text-base text-black flex items-center justify-center">Date of registration</div>
            <div className="font-semibold text-base text-black flex items-center justify-center">Expires</div>
            <div className="font-semibold text-base text-black flex items-center justify-center">Auto-renew</div>
          </div>
          {/* Table Rows */}
          {domainData.map((row, idx) => (
            <div
              key={idx}
              className={`${gridCols} ${row.showExpires ? 'h-[117px]' : 'h-[88px]'} border-b border-[#EAEAEA] items-center bg-white`}
              style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: 24, paddingRight: 24 }}
            >
              {/* Checkbox */}
              <div className="flex items-center justify-center">
                <CustomCheckbox checked={row.checked} onChange={() => handleRowCheck(idx)} />
              </div>
              {/* Domain name */}
              <div className="flex flex-col justify-center text-base">
                <span className="font-medium text-[#1C1E40]">{row.domain}</span>
                <span className="text-xs text-[#A3A3A3]">{row.email}</span>
              </div>
              {/* Status */}
              <div className="flex items-center justify-center">
                <span className="inline-flex items-center text-[#22C55E] font-medium">
                  <span className="w-[15px] h-[15px] rounded-full bg-[#039855] inline-block mr-1">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9987 14.1673C3.3168 14.1673 0.332031 11.1825 0.332031 7.50065C0.332031 3.81875 3.3168 0.833984 6.9987 0.833984C10.6806 0.833984 13.6654 3.81875 13.6654 7.50065C13.6654 11.1825 10.6806 14.1673 6.9987 14.1673ZM6.9987 12.834C9.94423 12.834 12.332 10.4462 12.332 7.50065C12.332 4.55513 9.94423 2.16732 6.9987 2.16732C4.05318 2.16732 1.66536 4.55513 1.66536 7.50065C1.66536 10.4462 4.05318 12.834 6.9987 12.834ZM6.33376 10.1673L3.50536 7.33892L4.44817 6.39605L6.33376 8.28172L10.105 4.51046L11.0478 5.45327L6.33376 10.1673Z" fill="white"/>
                    </svg>
                  </span>
                  {row.status}
                </span>
              </div>
              {/* Date of registration */}
              <div className="flex items-center justify-center">
                <span className="text-[#1C1E40] font-medium">{row.registration}</span>
              </div>
              {/* Expires, Manage, Transfer */}
              <div className="flex flex-col items-center justify-center gap-1">
                {row.showExpires ? (
                  <>
                    <span className="text-[#F04438] font-medium flex items-center gap-1">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><circle cx="9" cy="9" r="8" stroke="#F04438" strokeWidth="2"/><path d="M9 5v4l2.5 2.5" stroke="#F04438" strokeWidth="2" strokeLinecap="round"/></svg>
                      {row.expires}
                    </span>
                    <span className="text-xs text-[#F04438]">Expires</span>
                  </>
                ) : (
                  <span className="text-[#1C1E40] font-medium">{row.expires}</span>
                )}
                <div className="flex gap-2 mt-1">
                  <button className="px-4 py-1 rounded-full border border-[#BFA5F8] text-[#7C3AED] bg-white font-medium">Manage</button>
                  <button className="rounded-full bg-[#7C3AED] text-white font-medium px-4 py-1">Transfer</button>
                </div>
              </div>
              {/* Auto-renew toggle + 3 dots */}
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
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="4" cy="10" r="1.5" fill="#A3A3A3"/><circle cx="10" cy="10" r="1.5" fill="#A3A3A3"/><circle cx="16" cy="10" r="1.5" fill="#A3A3A3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DomainDashboard;