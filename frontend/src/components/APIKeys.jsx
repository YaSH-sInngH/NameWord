import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import NewSidebar from './NewSidebar';

const initialApiKeys = [
  {
    name: 'asdfgasd3452345612345',
    restrict: false,
    created: '24 Jun 2024',
    lastUsed: '24 Jun 2024',
    selected: false,
  },
  {
    name: 'asdfgasd3452345612345',
    restrict: true,
    created: '24 Jun 2024',
    lastUsed: '24 Jun 2024',
    selected: true,
  },
  {
    name: 'asdfgasd3452345612345',
    restrict: false,
    created: '24 Jun 2024',
    lastUsed: '24 Jun 2024',
    selected: false,
  },
  {
    name: 'asdfgasd3452345612345',
    restrict: false,
    created: '24 Jun 2024',
    lastUsed: '24 Jun 2024',
    selected: false,
  },
];

const APIKeys = () => {
  const [apiKeys, setApiKeys] = useState(initialApiKeys);

  const handleSelect = (idx) => {
    setApiKeys((prev) => prev.map((k, i) => i === idx ? { ...k, selected: !k.selected } : k));
  };

  const handleToggleRestrict = (idx) => {
    setApiKeys((prev) => prev.map((k, i) => i === idx ? { ...k, restrict: !k.restrict } : k));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: 1440, minHeight: 1024 }}>
      <NewNavbar activeSection="Domains" />
      <div>
        {/* Sidebar - fixed */}
        <div className="fixed top-[80px] left-0 w-[250px] h-[calc(100vh-80px)] z-20 bg-[#F7F7FC]">
          <NewSidebar />
        </div>
        {/* Main Content - scrollable */}
        <div className="ml-[250px] h-[calc(100vh-80px)] overflow-y-auto">
          <main className="bg-[#F9FAFC] rounded-[24px] flex flex-col gap-8 shadow-sm p-8" style={{ minHeight: 944, maxWidth: 1190 }}>
            {/* Heading and API Key Rotation Button */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-[#1C1E40]">API Keys</h1>
              <button className="border border-[#7C3AED] text-[#9664E6] rounded-[8px] px-6 py-2 font-semibold bg-white hover:bg-[#F7F3FF] transition">API Key Rotation</button>
            </div>
            {/* API Key List Section */}
            <div className="bg-white rounded-[16px] p-8 flex flex-col gap-6 shadow-sm" style={{ width: 1126, minHeight: 600 }}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-semibold text-[#1C1E40]">List of API keys</div>
                <button className="border border-[#EAEAEA] bg-[#F9FAFC] text-[#1C1E40] rounded-full px-5 py-2 text-sm font-medium">Domain forwarding</button>
              </div>
              {/* Search Bar */}
              <div className="bg-[#F9FAFC] rounded-[50px] px-4 py-3 flex items-center border border-[#EAEAEA] w-full mb-2">
                <span className="pr-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.16797 0.666016C12.308 0.666016 15.668 4.02602 15.668 8.16602C15.668 12.306 12.308 15.666 8.16797 15.666C4.02797 15.666 0.667969 12.306 0.667969 8.16602C0.667969 4.02602 4.02797 0.666016 8.16797 0.666016ZM8.16797 13.9993C11.3909 13.9993 14.0013 11.3889 14.0013 8.16602C14.0013 4.9431 11.3909 2.33268 8.16797 2.33268C4.94505 2.33268 2.33464 4.9431 2.33464 8.16602C2.33464 11.3889 4.94505 13.9993 8.16797 13.9993ZM15.2391 14.0586L17.5961 16.4156L16.4176 17.5941L14.0606 15.2371L15.2391 14.0586Z" fill="#7C3AED"/>
                  </svg>
                </span>
                <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none text-[#1C1E40] text-base" />
              </div>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-black text-sm border-b border-[#EAEAEA]">
                      <th className="py-3 px-2 font-semibold"><input type="checkbox" className="accent-[#7C3AED] w-4 h-4" /></th>
                      <th className="py-3 px-2 font-semibold">Name</th>
                      <th className="py-3 px-2 font-semibold">Restrict</th>
                      <th className="py-3 px-2 font-semibold">Creation date <span className="inline-block align-middle">&#8597;</span></th>
                      <th className="py-3 px-2 font-semibold">Last used <span className="inline-block align-middle">&#8597;</span></th>
                      <th className="py-3 px-2 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiKeys.map((key, idx) => (
                      <tr key={idx} className="border-b border-[#EAEAEA] hover:bg-[#F9FAFC]">
                        <td className="py-3 px-2 text-center">
                          <input type="checkbox" checked={key.selected} onChange={() => handleSelect(idx)} className="border-[#9664E6] accent-[#9664E6] w-4 h-4" />
                        </td>
                        <td className="py-3 px-2 font-semibold text-[#1C1E40]">{key.name}</td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[#6B7280] text-sm">Restrict usage to IP</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={key.restrict} onChange={() => handleToggleRestrict(idx)} className="sr-only peer" />
                              <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-[#7C3AED] rounded-full transition-all"></div>
                              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                            </label>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-[#1C1E40]">{key.created}</td>
                        <td className="py-3 px-2 text-[#1C1E40]">{key.lastUsed}</td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <button className="text-[#7C3AED] text-base font-medium flex">
                                <span className='pr-2'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_8366_174027)">
                                    <path d="M10.6172 0.5C5.0902 0.5 0.617188 4.9725 0.617188 10.5C0.617188 16.0269 5.08969 20.5 10.6172 20.5C16.1442 20.5 20.6172 16.0275 20.6172 10.5C20.6172 4.97309 16.1447 0.5 10.6172 0.5ZM10.6172 19.1046C5.87258 19.1046 2.01254 15.2446 2.01254 10.5C2.01254 5.75535 5.87258 1.89535 10.6172 1.89535C15.3618 1.89535 19.2218 5.75535 19.2218 10.5C19.2218 15.2446 15.3618 19.1046 10.6172 19.1046Z" fill="#9664E6"/>
                                    <path d="M10.6151 8.83594C10.0228 8.83594 9.60156 9.08609 9.60156 9.45465V14.4697C9.60156 14.7857 10.0228 15.1015 10.6151 15.1015C11.1811 15.1015 11.6418 14.7857 11.6418 14.4697V9.45457C11.6418 9.08605 11.1811 8.83594 10.6151 8.83594Z" fill="#9664E6"/>
                                    <path d="M10.6184 5.74268C10.0129 5.74268 9.53906 6.17705 9.53906 6.67725C9.53906 7.17748 10.0129 7.62502 10.6184 7.62502C11.2107 7.62502 11.6846 7.17748 11.6846 6.67725C11.6846 6.17705 11.2107 5.74268 10.6184 5.74268Z" fill="#9664E6"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_8366_174027">
                                    <rect width="20" height="20" fill="white" transform="translate(0.617188 0.5)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>  
                                </span>
                                Details</button>
                            <button className="text-[#F04438] hover:bg-[#FDECEC] rounded-full p-2 transition" title="Delete">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7812 3.49984H16.9479V5.1665H15.2812V15.9998C15.2812 16.4601 14.9082 16.8332 14.4479 16.8332H2.78125C2.32102 16.8332 1.94792 16.4601 1.94792 15.9998V5.1665H0.28125V3.49984H4.44792V0.999837C4.44792 0.539604 4.82102 0.166504 5.28125 0.166504H11.9479C12.4082 0.166504 12.7812 0.539604 12.7812 0.999837V3.49984ZM13.6146 5.1665H3.61458V15.1665H13.6146V5.1665ZM6.11458 7.6665H7.78125V12.6665H6.11458V7.6665ZM9.44792 7.6665H11.1146V12.6665H9.44792V7.6665ZM6.11458 1.83317V3.49984H11.1146V1.83317H6.11458Z" fill="#FC5585"/>
                            </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Buttons */}
              <div className="flex items-center justify-end gap-4 mt-6">
                <button className="border border-[#7C3AED] text-[#7C3AED] rounded-full px-6 py-2 font-semibold bg-white hover:bg-[#F7F3FF] transition">Generate random key</button>
                <button className="bg-[#7C3AED] text-white rounded-full px-6 py-2 font-semibold">Add new API key</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default APIKeys; 