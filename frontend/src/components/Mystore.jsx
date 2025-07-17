import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate, useLocation } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', active: true, route: '/mystore' },
  { label: 'DNS / Nameservers', route: '/nameservers'},
  { label: 'Domain Ownership', route: '/ownership'},
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

            {/* Tab Content Switcher */}
            {activeTab === 0 && (
              <>
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
                            {showAuth ? '🙈' : 
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.5C4.14881 15.5 0.256312 8.6555 0.0945 8.36431C-0.0315 8.13763 -0.0315 7.86219 0.0945 7.6355C0.256312 7.3445 4.14881 0.5 12 0.5C19.8512 0.5 23.7437 7.3445 23.9055 7.63569C24.0315 7.86237 24.0315 8.13781 23.9055 8.3645C23.7437 8.6555 19.8512 15.5 12 15.5ZM1.63256 7.99887C2.52469 9.35094 6.02738 14 12 14C17.9916 14 21.4787 9.35469 22.3674 8.00112C21.4753 6.64906 17.9726 2 12 2C6.00844 2 2.52131 6.64531 1.63256 7.99887ZM12 12.5C9.51863 12.5 7.5 10.4814 7.5 8C7.5 5.51862 9.51863 3.5 12 3.5C14.4814 3.5 16.5 5.51862 16.5 8C16.5 10.4814 14.4814 12.5 12 12.5ZM12 5C10.3459 5 9 6.34588 9 8C9 9.65413 10.3459 11 12 11C13.6541 11 15 9.65413 15 8C15 6.34588 13.6541 5 12 5Z" fill="black"/>
                            </svg>}
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
                    <div className="flex items-center justify-between mb-2 w-full">
                      <span className="font-semibold text-base text-[#1C1E40]">Transfer</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-[#1C1E40]">Domain blocking</span>
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
              </>
            )}
            {activeTab === 1 && (
              <div className="bg-white rounded-[16px] p-4 md:p-6 w-full flex flex-col gap-4">
                <span className="text-base font-semibold text-[#1C1E40] mb-2">Activity record</span>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-[#6B7280] text-left border-b border-[#EAEAEA]">
                        <th className="py-2 px-3 font-medium">Date and time</th>
                        <th className="py-2 px-3 font-medium">Domains</th>
                        <th className="py-2 px-3 font-medium">Activity</th>
                        <th className="py-2 px-3 font-medium">Status</th>
                        <th className="py-2 px-3 font-medium">User</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#F3F3F3]">
                        <td className="py-2 px-3 whitespace-nowrap">24 Jun 2024<br/><span className='text-xs text-[#6B7280]'>22:08</span></td>
                        <td className="py-2 px-3 font-semibold text-[#1C1E40]">example.com</td>
                        <td className="py-2 px-3 text-black">Change nameservers</td>
                        <td className="py-2 px-3"><span className="inline-flex items-center gap-1 text-green-600 font-medium"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.796875" width="24" height="24" rx="12" fill="#039855"/><path d="M12.7917 18.6673C9.10977 18.6673 6.125 15.6825 6.125 12.0007C6.125 8.31875 9.10977 5.33398 12.7917 5.33398C16.4735 5.33398 19.4583 8.31875 19.4583 12.0007C19.4583 15.6825 16.4735 18.6673 12.7917 18.6673ZM12.7917 17.334C15.7372 17.334 18.125 14.9462 18.125 12.0007C18.125 9.05513 15.7372 6.66732 12.7917 6.66732C9.84615 6.66732 7.45833 9.05513 7.45833 12.0007C7.45833 14.9462 9.84615 17.334 12.7917 17.334ZM12.1267 14.6673L9.29833 11.8389L10.2411 10.8961L12.1267 12.7817L15.898 9.01046L16.8408 9.95327L12.1267 14.6673Z" fill="white"/></svg>Successful</span></td>
                        <td className="py-2 px-3 text-black">John Krasik</td>
                      </tr>
                      <tr className="border-b border-[#F3F3F3]">
                        <td className="py-2 px-3 whitespace-nowrap">24 Jun 2024<br/><span className='text-xs text-[#6B7280]'>22:08</span></td>
                        <td className="py-2 px-3 font-semibold text-[#1C1E40]">example.com</td>
                        <td className="py-2 px-3 text-black">Change nameservers</td>
                        <td className="py-2 px-3"><span className="inline-flex items-center gap-1 text-red-500 font-medium"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#FF4768"/> <g clip-path="url(#clip0_8366_178605)"> <g clip-path="url(#clip1_8366_178605)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7969 17.5C15.8344 17.5 18.2969 15.0376 18.2969 12C18.2969 8.96243 15.8344 6.5 12.7969 6.5C9.75931 6.5 7.29688 8.96243 7.29688 12C7.29688 15.0376 9.75931 17.5 12.7969 17.5ZM12.7969 19C16.6629 19 19.7969 15.866 19.7969 12C19.7969 8.13401 16.6629 5 12.7969 5C8.93088 5 5.79688 8.13401 5.79688 12C5.79688 15.866 8.93088 19 12.7969 19Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7969 9.375C11.7969 9.15 11.9969 9 12.2969 9H13.2969C13.5969 9 13.7969 9.15 13.7969 9.375V12.375C13.7969 12.6 13.5969 12.75 13.2969 12.75H12.2969C11.9969 12.75 11.7969 12.6 11.7969 12.375V9.375ZM11.7969 13.875C11.7969 13.65 11.9969 13.5 12.2969 13.5H13.2969C13.5969 13.5 13.7969 13.65 13.7969 13.875V14.625C13.7969 14.85 13.5969 15 13.2969 15H12.2969C11.9969 15 11.7969 14.85 11.7969 14.625V13.875Z" fill="white"/> </g> </g> <defs> <clipPath id="clip0_8366_178605"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> <clipPath id="clip1_8366_178605"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> </defs> </svg>Rejected</span></td>
                        <td className="py-2 px-3 text-black">John Krasik</td>
                      </tr>
                      <tr className="border-b border-[#F3F3F3]">
                        <td className="py-2 px-3 whitespace-nowrap">24 Jun 2024<br/><span className='text-xs text-[#6B7280]'>22:08</span></td>
                        <td className="py-2 px-3 font-semibold text-[#1C1E40]">example.com</td>
                        <td className="py-2 px-3 text-black">Change nameservers</td>
                        <td className="py-2 px-3"><span className="inline-flex items-center gap-1 text-blue-500 font-medium"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#FF5722"/> <g clip-path="url(#clip0_8366_178625)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7969 17.5C15.8344 17.5 18.2969 15.0376 18.2969 12C18.2969 8.96243 15.8344 6.5 12.7969 6.5C9.75931 6.5 7.29688 8.96243 7.29688 12C7.29688 15.0376 9.75931 17.5 12.7969 17.5ZM12.7969 19C16.6629 19 19.7969 15.866 19.7969 12C19.7969 8.13401 16.6629 5 12.7969 5C8.93088 5 5.79688 8.13401 5.79688 12C5.79688 15.866 8.93088 19 12.7969 19Z" fill="white"/> <g clip-path="url(#clip1_8366_178625)"> <path d="M12.7969 13C13.3492 13 13.7969 12.5523 13.7969 12C13.7969 11.4477 13.3492 11 12.7969 11C12.2446 11 11.7969 11.4477 11.7969 12C11.7969 12.5523 12.2446 13 12.7969 13Z" fill="white"/> <path d="M15.7969 13C16.3492 13 16.7969 12.5523 16.7969 12C16.7969 11.4477 16.3492 11 15.7969 11C15.2446 11 14.7969 11.4477 14.7969 12C14.7969 12.5523 15.2446 13 15.7969 13Z" fill="white"/> <path d="M9.79688 13C10.3492 13 10.7969 12.5523 10.7969 12C10.7969 11.4477 10.3492 11 9.79688 11C9.24459 11 8.79688 11.4477 8.79688 12C8.79688 12.5523 9.24459 13 9.79688 13Z" fill="white"/> </g> </g> <defs> <clipPath id="clip0_8366_178625"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> <clipPath id="clip1_8366_178625"> <rect width="8" height="8" fill="white" transform="translate(8.79688 8)"/> </clipPath> </defs> </svg>In Progress</span></td>
                        <td className="py-2 px-3 text-black">John Krasik</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 whitespace-nowrap">24 Jun 2024<br/><span className='text-xs text-[#6B7280]'>22:08</span></td>
                        <td className="py-2 px-3 font-semibold text-[#1C1E40]">example.com</td>
                        <td className="py-2 px-3 text-black">Change nameservers</td>
                        <td className="py-2 px-3"><span className="inline-flex items-center gap-1 text-gray-500 font-medium"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#0987FF"/> <g clip-path="url(#clip0_8366_178651)"> <path d="M12.7969 4.5C14.786 4.5 16.6941 5.28977 18.1006 6.69629C19.5071 8.10281 20.2969 10.0109 20.2969 12C20.2969 13.9891 19.5071 15.8972 18.1006 17.3037C16.6941 18.7102 14.786 19.5 12.7969 19.5C10.8078 19.5 8.89969 18.7102 7.49316 17.3037C6.08664 15.8972 5.29688 13.9891 5.29688 12C5.29688 10.0109 6.08664 8.10281 7.49316 6.69629C8.89969 5.28977 10.8078 4.5 12.7969 4.5Z" stroke="white"/> <path d="M12.7907 16.1596C11.6859 16.1596 10.6263 15.7207 9.84511 14.9394C9.06389 14.1582 8.625 13.0987 8.625 11.9938C8.625 10.889 9.06389 9.82946 9.84511 9.04823C10.6263 8.26701 11.6859 7.82813 12.7907 7.82812C13.8955 7.82813 14.9551 8.26701 15.7363 9.04823C16.5175 9.82946 16.9564 10.889 16.9564 11.9938C16.9564 13.0987 16.5175 14.1582 15.7363 14.9394C14.9551 15.7207 13.8955 16.1596 12.7907 16.1596ZM12.7907 14.9687C13.5797 14.9687 14.3364 14.6553 14.8943 14.0974C15.4521 13.5395 15.7656 12.7828 15.7656 11.9938C15.7656 11.2049 15.4521 10.4482 14.8943 9.8903C14.3364 9.3324 13.5797 9.01898 12.7907 9.01898C12.0017 9.01898 11.2451 9.3324 10.6872 9.8903C10.1293 10.4482 9.81586 11.2049 9.81586 11.9938C9.81586 12.7828 10.1293 13.5395 10.6872 14.0974C11.2451 14.6553 12.0017 14.9687 12.7907 14.9687Z" fill="white"/> <path d="M12.8351 9.62305H12.7608C12.6129 9.62305 12.4711 9.68181 12.3665 9.7864C12.2619 9.89099 12.2031 10.0328 12.2031 10.1808V12.0402C12.2031 12.3488 12.4523 12.5979 12.7608 12.5979H12.8351C13.1437 12.5979 13.3928 12.3488 13.3928 12.0402V10.1808C13.3928 10.0328 13.3341 9.89099 13.2295 9.7864C13.1249 9.68181 12.983 9.62305 12.8351 9.62305Z" fill="white"/> <path d="M14.026 11.4053H12.7608C12.6129 11.4053 12.4711 11.464 12.3665 11.5686C12.2619 11.6732 12.2031 11.8151 12.2031 11.963V12.0373C12.2031 12.3458 12.4523 12.595 12.7608 12.595H14.026C14.3346 12.595 14.5837 12.3458 14.5837 12.0373V11.963C14.5837 11.8151 14.5249 11.6732 14.4203 11.5686C14.3158 11.464 14.1739 11.4053 14.026 11.4053Z" fill="white"/> </g> <defs> <clipPath id="clip0_8366_178651"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> </defs> </svg>Scheduled</span></td>
                        <td className="py-2 px-3 text-black">John Krasik</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-white rounded-[16px] p-4 md:p-6 w-full flex flex-col gap-4">
                <span className="text-base font-semibold text-[#1C1E40] mb-2">Domain forwarding</span>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-[#6B7280] text-left border-b border-[#EAEAEA]">
                        <th className="py-2 px-3 font-medium">Domain name</th>
                        <th className="py-2 px-3 font-medium">Expires</th>
                        <th className="py-2 px-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1,2,3,4].map((i) => (
                        <tr key={i} className="border-b border-[#F3F3F3]">
                          <td className="py-2 px-3 font-semibold text-[#1C1E40]">example.com<br/><span className='text-xs text-[#6B7280]'>example@gmail.com</span></td>
                          <td className="py-2 px-3 text-black">2025-01-19</td>
                          <td className="py-2 px-3 flex flex-row gap-4">
                              <button className="w-5 h-5 flex items-center justify-center">
                                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2.76361 3.71107L2.44623 2.38137C2.35859 1.98458 1.99759 1.70878 1.59173 1.72863C1.06382 1.75382 0.691903 2.25688 0.823506 2.76872L1.65358 6.2062C1.76134 6.65241 2.20959 6.92747 2.65619 6.82146L6.09532 5.99782C7.17822 5.73514 6.78434 4.11093 5.70144 4.37352L4.04779 4.77221C5.19261 3.32651 6.87967 2.31633 8.86224 2.10464C12.7828 1.686 16.2821 4.51382 16.7008 8.43432C16.7908 9.57697 18.5166 9.39088 18.3609 8.25545C17.8788 3.7403 14.0352 0.37797 9.13975 0.424301C6.26581 0.708396 4.17667 1.94137 2.76361 3.71107ZM13.1314 11.9776C12.004 12.2085 12.4109 13.9059 13.5204 13.6004L15.1725 13.2016C14.0276 14.6468 12.3408 15.6527 10.358 15.8644C6.43749 16.283 2.93975 13.4617 2.5211 9.54113C2.48095 9.10472 2.10964 8.77393 1.67149 8.78429C1.17917 8.79689 0.805121 9.23147 0.865823 9.7202C1.38011 14.5364 5.71926 18.0405 10.5354 17.5262C12.9585 17.2676 15.0453 16.0304 16.4583 14.2628L16.7805 15.5942C16.9835 16.7597 18.7453 16.3379 18.3984 15.2068L17.5732 11.7677C17.4793 11.371 17.1124 11.1004 16.6349 11.1402L13.1314 11.9776Z" fill="#5E30CC"/>
                                  </svg>
                              </button>
                              <button className="w-5 h-5 flex items-center justify-center">
                                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.7812 4.99935H18.9479V6.66602H17.2812V17.4993C17.2812 17.9596 16.9082 18.3327 16.4479 18.3327H4.78125C4.32102 18.3327 3.94792 17.9596 3.94792 17.4993V6.66602H2.28125V4.99935H6.44792V2.49935C6.44792 2.03912 6.82102 1.66602 7.28125 1.66602H13.9479C14.4082 1.66602 14.7812 2.03912 14.7812 2.49935V4.99935ZM15.6146 6.66602H5.61458V16.666H15.6146V6.66602ZM8.11458 9.16602H9.78125V14.166H8.11458V9.16602ZM11.4479 9.16602H13.1146V14.166H11.4479V9.16602ZM8.11458 3.33268V4.99935H13.1146V3.33268H8.11458Z" fill="#FC5585"/>
                                  </svg>
                              </button>
                              
                            <button className="bg-white border border-[#EAEAEA] text-[#5E30CC] rounded-full px-4 py-1 text-xs font-medium mr-2">

                              Domain details
                              
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Domain Forwarding Form - Figma style */}
                <div className="bg-white border border-[#EAEAEA] rounded-[12px] p-4 flex flex-col gap-4 w-full">
                  <span className="text-sm font-semibold text-[#1C1E40] mb-1">Forwarding a domain or subdomain allows you to automatically redirect visitors to other websites.</span>
                  <div className="flex flex-col gap-3">
                    {/* Domain Row */}
                    <div className="flex flex-row items-center gap-4 w-full">
                      <input className="flex-1 rounded-[8px] border border-[#EAEAEA] px-4 py-3 text-base text-[#1C1E40] bg-[#FAFAFA] focus:outline-none" placeholder="Domain" />
                      <button className="bg-[#5E30CC] text-white rounded-full px-6 py-2 font-semibold text-base whitespace-nowrap">Add forwarding</button>
                    </div>
                    {/* Subdomain Row */}
                    <div className="flex flex-row items-center gap-4 w-full">
                      <input className="flex-1 rounded-[8px] border border-[#EAEAEA] px-4 py-3 text-base text-[#1C1E40] bg-[#FAFAFA] focus:outline-none" placeholder="Subdomain" />
                      <button className="bg-[#5E30CC] text-white rounded-full px-6 py-2 font-semibold text-base whitespace-nowrap">Add forwarding</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mystore; 