import React, { useState } from 'react';
import NewSidebar from './NewSidebar';
import NewNavbar from './NewNavbar';

const loginActivity = [
  {
    status: 'Login successful',
    date: '01.02.2024',
    time: '19:00',
    device: 'Desktop',
    success: true,
  },
  {
    status: 'Login failed',
    date: '01.02',
    time: '19:00',
    device: 'Desktop',
    success: false,
  },
  {
    status: 'Login failed',
    date: '01.02',
    time: '19:00',
    device: 'Desktop',
    success: false,
  },
  {
    status: 'Login failed',
    date: '01.02',
    time: '19:00',
    device: 'Mobile',
    success: false,
  },
];

const DomainSecurity = () => {
  const [registerLock, setRegisterLock] = useState(true);
  const [whoisPrivacy, setWhoisPrivacy] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: 1440, minHeight: 1024 }}>
      <NewNavbar activeSection="Domains" />
      <NewSidebar />
      <main
        className="absolute top-[80px] left-[250px] w-[1190px] h-[944px] bg-[#F9FAFC] rounded-[24px] p-[40px_32px] flex flex-col gap-8 shadow-sm"
        style={{ paddingTop: 40, paddingRight: 32, paddingBottom: 40, paddingLeft: 32 }}
      >
        <h1 className="text-3xl font-bold text-[#1C1E40] mb-6">Domain security</h1>
        <div
          className="flex flex-row gap-6"
          style={{ width: 1126, height: 476, opacity: 1 }}
        >
          {/* Login Activity */}
          <div
            className="flex flex-col bg-white rounded-[16px] p-6 gap-6"
            style={{ width: 518, height: 476 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xl font-semibold text-[#1C1E40]">Login activity</div>
              <button className="text-black text-sm font-semibold">View all</button>
            </div>
            <div className="flex flex-col gap-4">
              {loginActivity.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-center justify-between rounded-[12px] px-4 py-3"
                  style={{ minHeight: 72 }}
                >
                  <div className="flex flex-row items-center gap-3">
                    <span className={`w-10 h-10 flex items-center justify-center rounded-full ${item.success ? 'bg-[#E6F9F0]' : 'bg-[#FDECEC]'}`}> 
                      {item.success ? (
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="40" height="40" rx="12" fill="#1CD09C" fill-opacity="0.2"/>
                        <path d="M12 24.5H28V13.5H12V24.5ZM21 26.5V28.5H25V30.5H15V28.5H19V26.5H10.9918C10.4441 26.5 10 26.0511 10 25.4925V12.5075C10 11.9511 10.4553 11.5 10.9918 11.5H29.0082C29.556 11.5 30 11.9489 30 12.5075V25.4925C30 26.0489 29.5447 26.5 29.0082 26.5H21Z" fill="#099D73"/>
                        </svg>                                       
                      ) : (
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="40" height="40" rx="12" fill="#FF2665" fill-opacity="0.2"/>
                        <path d="M12 24.5H28V13.5H12V24.5ZM21 26.5V28.5H25V30.5H15V28.5H19V26.5H10.9918C10.4441 26.5 10 26.0511 10 25.4925V12.5075C10 11.9511 10.4553 11.5 10.9918 11.5H29.0082C29.556 11.5 30 11.9489 30 12.5075V25.4925C30 26.0489 29.5447 26.5 29.0082 26.5H21Z" fill="#FF1A5B"/>
                        </svg>
                      )}
                    </span>
                    <div className="flex flex-col">
                      <span className={`font-semibold font-northuraExpanded text-base ${item.success ? 'text-black' : 'text-black'}`}>{item.status}</span>
                      <span className="text-xs text-[#A3A3A3]">Date: {item.date} &nbsp; at {item.time}</span>
                      <span className="text-xs text-[#A3A3A3]">Device: {item.device}</span>
                    </div>
                  </div>
                  <button className="text-[#7C3AED] text-sm font-medium">View more</button>
                </div>
              ))}
            </div>
          </div>
          {/* Security Settings */}
          <div
            className="flex flex-col bg-white rounded-[16px] p-6 gap-6"
            style={{ width: 584, height: 476 }}
          >
            <div className="text-xl font-semibold text-[#1C1E40] mb-2">Security settings</div>
            <div className="flex flex-col gap-6 mt-4">
              {/* Register Lock Toggle */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-base text-[#1C1E40]">Enable register locking</span>
                  <span className="text-xs text-[#A3A3A3]">Prevents the creation of new accounts associated with this domain.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={registerLock}
                    onChange={() => setRegisterLock((v) => !v)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#7C3AED] rounded-full transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
              {/* WHOIS Privacy Toggle */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-base text-[#1C1E40]">WHOIS Privacy</span>
                  <span className="text-xs text-[#A3A3A3]">Enhance your privacy by keeping your domain registration information private.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={whoisPrivacy}
                    onChange={() => setWhoisPrivacy((v) => !v)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#7C3AED] rounded-full transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DomainSecurity; 