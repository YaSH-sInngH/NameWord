import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', route: '/mystore' },
  { label: 'DNS / Nameservers', route: '/nameservers' },
  { label: 'Domain Ownership', active: true, route: '/ownership' },
];

const tabs = [
  'Registrant',
  'Administrative',
  'Billing',
  'Technical',
  'Child nameservers',
];

const DomainOwnership = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [privacy, setPrivacy] = useState(true);

  // Sidebar active logic
  const isActive = (item) => item.active || window.location.pathname === item.route;

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]">
      <NewNavbar activeSection="Domains" />
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex fixed top-[80px] left-0 w-[220px] md:w-[250px] h-[calc(100vh-80px)] bg-white p-4 md:p-6 flex-col gap-5 shadow-sm z-10">
        <div className="flex flex-col gap-5 mt-8 md:mt-0">
          {sidebarItems.map((item) => (
            <div key={item.label} className="mb-2">
              {item.dropdown ? (
                <div className="mb-2">
                  <label className="block text-xs text-[#6B7280] mb-1">{item.label}</label>
                  <select className="w-full rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white">
                    {item.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-base ${isActive(item) ? 'bg-[#F7F7FC] text-[#5E30CC] font-semibold' : 'text-[#1C1E40] hover:bg-[#F7F7FC]'}`}
                  onClick={() => item.route && navigate(item.route)}
                >
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
      {/* Mobile Bottom Nav */}
      <nav className="fixed lg:hidden bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 z-20 shadow-t">
        {sidebarItems.filter(item => !item.dropdown).map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center justify-center px-2 py-1 text-xs ${isActive(item) ? 'text-[#5E30CC] font-semibold' : 'text-[#1C1E40]'}`}
            onClick={() => item.route && navigate(item.route)}
          >
            <span className="mt-1">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
      <div className="flex">
        {/* Main Content */}
        <div className="lg:ml-[250px] h-[calc(100vh-80px)] overflow-y-auto w-full">
          <main className="bg-[#F9FAFC] rounded-[24px] flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-sm p-4 md:p-6 lg:p-8 mx-2 md:mx-4 lg:mx-0 my-4 lg:my-0" style={{ maxWidth: '1180px' }}>
            {/* Title and Tabs */}
            <div className="flex flex-col gap-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40]">Domain ownership</h1>
              <div className="flex flex-row gap-4 md:gap-8 border-b border-[#EAEAEA] mt-4 overflow-x-auto">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx)}
                    className={`py-3 px-1 text-sm md:text-base font-medium border-b-2 transition whitespace-nowrap ${
                      activeTab === idx ? 'border-[#5E30CC] text-[#5E30CC]' : 'border-transparent text-[#6B7280]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Registrant Tab Content */}
            {activeTab === 0 && (
              <>
                {/* First box: Registrant */}
                <div className="bg-white rounded-[16px] p-6 flex flex-col gap-2 mb-6 shadow-sm">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <span className="text-sm text-[#505050]">Name: <span className="font-semibold text-[#1C1E40]">Richard Adebayo</span></span>
                                <span className="text-sm text-[#505050]">Company: <span className="font-semibold text-[#1C1E40]">Blue One Repablic</span></span>
                                <span className="text-sm text-[#505050]">Address: <span className="font-semibold text-[#1C1E40]">26c Jakande Crescent, Logos, Victoria Island, Nigeria, 101243</span></span>
                                <span className="text-sm text-[#505050]">Email: <span className="font-semibold text-[#1C1E40]">richard@bluespaced.com</span></span>
                                <span className="text-sm text-[#505050]">Phone: <span className="font-semibold text-[#1C1E40]">+234 1234543234</span></span>
                            </div>
                            <button className="w-fit mt-4 px-5 py-2 rounded-full border border-[#7C3AED] text-[#7C3AED] bg-white font-medium text-sm">
                                Change contacts
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#9664E6] to-[#5E30CC] rounded-full"></span>
                            </button>
                        </div>
                </div>
                {/* Second box: Move domain */}
                <div className="bg-white rounded-[16px] p-6 flex flex-col gap-2 mb-6 shadow-sm">
                  <div className="font-semibold text-base text-[#1C1E40] mb-1">Move domain to another Nameword account</div>
                  <div className="text-[#6B7280] text-sm mb-4">This feature allows you to transfer your domain name to another Nameword account. It makes managing multiple domains under a single account or transferring ownership easy without losing the domain’s settings. This feature will not move your website files or databases to another account.</div>
                  <button className="w-fit bg-white border border-[#7C3AED] text-[#7C3AED] rounded-full px-6 py-2 font-medium text-base transition hover:bg-[#F6F1FF]">Initiate domain move</button>
                </div>
                {/* Third box: Privacy protection */}
                <div className="bg-white rounded-[16px] p-6 flex flex-col gap-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base text-[#1C1E40] flex items-center gap-2">Privacy protection (WPP) <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8366_185596)">
<path d="M7 0.5C3.13111 0.5 0 3.63075 0 7.5C0 11.3688 3.13075 14.5 7 14.5C10.8689 14.5 14 11.3693 14 7.5C14 3.63116 10.8693 0.5 7 0.5ZM7 13.5233C3.67877 13.5233 0.976746 10.8213 0.976746 7.5C0.976746 4.17875 3.67877 1.47675 7 1.47675C10.3212 1.47675 13.0233 4.17875 13.0233 7.5C13.0233 10.8213 10.3212 13.5233 7 13.5233Z" fill="black"/>
<path d="M6.99855 6.33594C6.58391 6.33594 6.28906 6.51105 6.28906 6.76903V10.2796C6.28906 10.5007 6.58391 10.7218 6.99855 10.7218C7.39476 10.7218 7.71723 10.5007 7.71723 10.2796V6.76898C7.71723 6.51102 7.39476 6.33594 6.99855 6.33594Z" fill="black"/>
<path d="M7.00163 4.16992C6.57777 4.16992 6.24609 4.47398 6.24609 4.82412C6.24609 5.17429 6.5778 5.48756 7.00163 5.48756C7.41627 5.48756 7.748 5.17429 7.748 4.82412C7.748 4.47398 7.41624 4.16992 7.00163 4.16992Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_8366_185596">
<rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacy}
                        onChange={() => setPrivacy(v => !v)}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DomainOwnership; 