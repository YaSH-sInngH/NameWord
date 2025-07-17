import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate, useLocation } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', active: true, route: '/mystore' },
  { label: 'DNS / Nameservers', route: '/nameservers'},
  { label: 'Domain Ownership'},
];

const tabs = ['Domain Overview', 'Activity record', 'Domain forwarding'];

const mostPopular = [
  {
    title: 'SSL certificates',
    desc: 'Improve your website’s security by encrypting connexions',
    icon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.53125C19 10.1384 16.0759 13.0625 12.4688 13.0625H8.3125V15.4375H5.9375V17.8125L4.75 19H0V14.25L6.13167 8.11833C6.00483 7.61025 5.9375 7.07862 5.9375 6.53125C5.9375 2.92414 8.86164 0 12.4688 0C16.0759 0 19 2.92414 19 6.53125ZM15.4375 4.75C15.4375 5.40583 14.9059 5.9375 14.25 5.9375C13.5941 5.9375 13.0625 5.40583 13.0625 4.75C13.0625 4.09417 13.5941 3.5625 14.25 3.5625C14.9059 3.5625 15.4375 4.09417 15.4375 4.75Z" fill="#9664E6"/>
        </svg>        
    ),
    color: 'bg-[#F4EBFF]'
  },
  {
    title: 'WHOIS privacy',
    desc: 'Protect the confidentiality of your personal information',
    icon: (
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33203 20C12.0603 18.484 14.3334 16.266 15.9159 13.5758C17.4984 10.8856 18.3326 7.82112 18.332 4.7V4L9.33203 0L0.332031 4V4.7C0.331507 7.82112 1.16571 10.8856 2.74818 13.5758C4.33065 16.266 6.6038 18.484 9.33203 20ZM8.33203 4H10.332V6H8.33203V4ZM8.33203 8H10.332V16H8.33203V8Z" fill="#9664E6"/>
        </svg>
    ),
    color: 'bg-[#F4EBFF]'
  },
  {
    title: 'Hosting plans',
    desc: 'Explore our range of web hosting plans and pick yours!',
    icon: (
        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.667969 16H20.668V12H0.667969V16ZM2.66797 13H4.66797V15H2.66797V13ZM0.667969 0V4H20.668V0H0.667969ZM4.66797 3H2.66797V1H4.66797V3ZM0.667969 10H20.668V6H0.667969V10ZM2.66797 7H4.66797V9H2.66797V7Z" fill="#9664E6"/>
        </svg>
    ),
    color: 'bg-[#F4EBFF]'
  },
];

const Mystore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [autoRenew, setAutoRenew] = useState(true);
  const [transferLock, setTransferLock] = useState(true);
  const [domainBlocking, setDomainBlocking] = useState(true);
  const [reminder, setReminder] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  // Helper to determine active sidebar item
  const isActive = (item) => {
    if (item.route) return location.pathname === item.route;
    if (item.active) return true;
    return false;
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: '320px' }}>
      <NewNavbar activeSection="Domains" />
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex fixed top-[80px] left-0 w-[220px] md:w-[250px] h-[calc(100vh-80px)] bg-white p-4 md:p-6 flex-col gap-5 shadow-sm z-10">
        <div className="flex flex-col gap-5 mt-8 md:mt-0">
          {sidebarItems.map((item, idx) => (
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
                  {/* Optionally add icons here if needed */}
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
            {/* Optionally add icons here if needed */}
            <span className="mt-1">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
      <div className="flex">
        {/* Main Content - responsive, shifted right for sidebar */}
        <div className="lg:ml-[250px] h-[calc(100vh-80px)] overflow-y-auto w-full">
          <main className="bg-[#F9FAFC] rounded-[24px] flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-sm p-4 md:p-6 lg:p-8 mx-2 md:mx-4 lg:mx-0 my-4 lg:my-0" style={{ 
            minHeight: '1350px',
            maxWidth: '1180px'
          }}>
            {/* Domain name and tabs */}
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40]">mystore.com</h1>
                <button className="bg-[linear-gradient(90deg,#9664E6_0%,#5E30CC_100%)] text-white text-sm md:text-base rounded-full px-4 md:px-6 py-2 font-thin whitespace-nowrap">
                  Alternative domains
                </button>
              </div>
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

            {/* Top Cards: Renew/Sell - responsive */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full">
              {/* Renew Card */}
              <div className="flex flex-col flex-1 bg-white rounded-[16px] p-4 md:p-6 gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-3">
                  <span className="font-semibold text-base text-[#1C1E40]">Renew your domain</span>
                  <button className="bg-[#5E30CC] text-white rounded-full px-4 md:px-5 py-2 font-semibold text-sm md:text-base">
                    Renew now
                  </button>
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Automatic renewal</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={autoRenew} 
                        onChange={() => setAutoRenew(v => !v)} 
                        className="sr-only peer" 
                      />
                      <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Renewal date</span>
                    <span className="text-sm md:text-base font-semibold text-[#1C1E40]">05 April 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Renewal price</span>
                    <span className="text-sm md:text-base font-semibold text-[#1C1E40]">$5.99/ year</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Transfer lock</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={transferLock} 
                        onChange={() => setTransferLock(v => !v)} 
                        className="sr-only peer" 
                      />
                      <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Authorization code</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base font-semibold text-[#1C1E40]">
                        {showAuth ? '1234-5678-ABCD' : '••••••••••••'}
                      </span>
                      <button 
                        onClick={() => setShowAuth(v => !v)} 
                        className="text-[#5E30CC] text-lg font-bold"
                      >
                        {showAuth ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sell Card */}
              <div className="flex flex-col flex-1 bg-white rounded-[16px] p-4 md:p-6 gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-3">
                  <span className="font-semibold text-base text-[#1C1E40]">Sell your domain</span>
                  <button className="bg-[#5E30CC] text-white rounded-full px-4 md:px-5 py-2 font-semibold text-sm md:text-base">
                    Sell now
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[#515151]">Estimated domain value:</span>
                  <span className="text-lg font-bold text-[#5E30CC]">
                    Up to $100 <span className="text-[#5E30CC] text-base">(USD)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Transfer Section - responsive */}
            <div className="flex flex-col xl:flex-row gap-4 md:gap-6 w-full">
              <div className="flex flex-1 flex-col bg-white rounded-[16px] p-4 md:p-6 gap-2">
                <div className="font-semibold text-base text-[#1C1E40] mb-2">Transfer</div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-1 flex-col bg-[#F9FAFC] rounded-[12px] p-4 gap-2 border border-[#EAEAEA]">
                    <span className="font-semibold text-base text-[#5E30CC]">Transfer to</span>
                    <span className="text-sm text-[#6B7280]">Transfer domains from other registrars to yours seamlessly.</span>
                  </div>
                  <div className="flex flex-1 flex-col bg-[#F9FAFC] rounded-[12px] p-4 gap-2 border border-[#EAEAEA]">
                    <span className="font-semibold text-base text-[#5E30CC]">Transfer between accounts</span>
                    <span className="text-sm text-[#6B7280]">Easily transfer domains between your accounts.</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between bg-white rounded-[16px] p-4 md:p-6 gap-2 xl:min-w-[260px] xl:max-w-[260px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-base text-[#1C1E40]">Domain blocking</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={domainBlocking} 
                      onChange={() => setDomainBlocking(v => !v)} 
                      className="sr-only peer" 
                    />
                    <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Most Popular Section - responsive */}
            <div className="bg-[#F7F3FF] rounded-[16px] p-4 md:p-6 w-full flex flex-col gap-4">
              <span className="text-base font-semibold text-[#1C1E40] mb-2">Most popular</span>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                {mostPopular.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col flex-1 items-start justify-center gap-2 bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-[12px] p-4 w-full h-full md:min-w-[200px] lg:min-w-[340px] lg:max-w-[340px]"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-white mb-1">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-white mb-0.5 leading-tight">{item.title}</span>
                    <span className="text-xs text-white text-left opacity-90 leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activate Expiration Reminder */}
            <div className="bg-white rounded-[16px] p-4 md:p-6 flex flex-col gap-4 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-base text-[#1C1E40]">Activate Expiration Reminder</span>
              </div>
              <div className="text-sm text-[#6B7280]">Sending reminders about domain renewal via email and SMS</div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={reminder} 
                  onChange={() => setReminder(v => !v)} 
                  className="sr-only peer" 
                />
                <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
              </label>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-base text-[#1C1E40]">Reminder</span>
                <ul className="text-sm text-[#6B7280] list-disc pl-6">
                  <li>2 days before the expiration date</li>
                  <li>5 days before the expiration date</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mystore; 