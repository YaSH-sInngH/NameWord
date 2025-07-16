import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', active: true },
  { label: 'DNS / Nameservers' },
  { label: 'Domain Ownership' },
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
  const [activeTab, setActiveTab] = useState(0);
  const [autoRenew, setAutoRenew] = useState(true);
  const [transferLock, setTransferLock] = useState(true);
  const [domainBlocking, setDomainBlocking] = useState(true);
  const [reminder, setReminder] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: 1440 }}>
      <NewNavbar activeSection="Domains" />
      <div className="flex">
        {/* Custom Sidebar */}
        <div className="fixed top-[80px] left-0 w-[250px] h-[calc(100vh-80px)] z-20 bg-white border-r border-[#EAEAEA] flex flex-col pt-8">
          <div className="px-6 pb-4 text-xs text-[#6B7280] font-semibold tracking-wide" onClick={()=> navigate('/domain')}>Main menu</div>
          <div className="flex flex-col gap-2 px-2">
            {/* Dropdown for select domain */}
            <div className="mb-2">
              <label className="block text-xs text-[#6B7280] mb-1">Select domain</label>
              <select className="w-full rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white">
                <option>mystore.com</option>
              </select>x``
            </div>
            <button className={`flex items-center gap-3 px-4 py-3 rounded-[8px] text-base font-medium transition ${true ? 'bg-[#F7F3FF] text-[#5E30CC]' : 'text-[#1C1E40] hover:bg-[#F9FAFC]'}`}>Domain Overview</button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-[8px] text-base font-medium text-[#1C1E40] hover:bg-[#F9FAFC]">DNS / Nameservers</button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-[8px] text-base font-medium text-[#1C1E40] hover:bg-[#F9FAFC]">Domain Ownership</button>
          </div>
        </div>
        {/* Main Content - scrollable */}
        <div className="ml-[250px] h-[calc(100vh-80px)] overflow-y-auto">
          <main className="bg-[#F9FAFC] rounded-[24px] flex flex-col gap-8 shadow-sm p-8" style={{ minHeight: 1350, maxWidth: 1180 }}>
            {/* Domain name and tabs */}
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-[#1C1E40]">mystore.com</h1>
                <button className="bg-[linear-gradient(90deg,#9664E6_0%,#5E30CC_100%)] text-white text-base rounded-full px-6 py-2 font-thin">Alternative domains</button>
              </div>
              <div className="flex flex-row gap-8 border-b border-[#EAEAEA] mt-4">
                {tabs.map((tab, idx) => (
                  <button key={tab} onClick={() => setActiveTab(idx)} className={`py-3 px-1 text-base font-medium border-b-2 transition ${activeTab === idx ? 'border-[#5E30CC] text-[#5E30CC]' : 'border-transparent text-[#6B7280]'}`}>{tab}</button>
                ))}
              </div>
            </div>
            {/* Top Cards: Renew/Sell */}
            <div className="flex flex-row gap-6 w-full">
              {/* Renew Card */}
              <div className="flex flex-col flex-1 bg-white rounded-[16px] p-6 gap-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-base text-[#1C1E40]">Renew your domain</span>
                  <button className="bg-[#5E30CC] text-white rounded-full px-5 py-2 font-semibold">Renew now</button>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Automatic renewal</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={autoRenew} onChange={() => setAutoRenew(v => !v)} className="sr-only peer" />
                      <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Renewal date</span>
                    <span className="text-base font-semibold text-[#1C1E40]">05 April 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Renewal price</span>
                    <span className="text-base font-semibold text-[#1C1E40]">$5.99/ year</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Transfer lock</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={transferLock} onChange={() => setTransferLock(v => !v)} className="sr-only peer" />
                      <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">Authorization code</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-[#1C1E40]">{showAuth ? '1234-5678-ABCD' : '••••••••••••'}</span>
                      <button onClick={() => setShowAuth(v => !v)} className="text-[#5E30CC] text-lg font-bold">{showAuth ? '🙈' : '👁️'}</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sell Card */}
              <div className="flex flex-col flex-1 bg-white rounded-[16px] p-6 gap-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-base text-[#1C1E40]">Sell your domain</span>
                  <button className="bg-[#5E30CC] text-white rounded-full px-5 py-2 font-semibold">Sell now</button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[#515151]">Estimated domain value:</span>
                  <span className="text-lg font-bold text-[#5E30CC]">Up to $100 <span className="text-[#5E30CC] text-base">(USD)</span></span>
                </div>
              </div>
            </div>
            {/* Transfer Section */}
            <div className="flex flex-row gap-6 w-full">
              <div className="flex flex-1 flex-col bg-white rounded-[16px] p-6 gap-2">
                <div className="font-semibold text-base text-[#1C1E40] mb-2">Transfer</div>
                <div className="flex flex-row gap-4">
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
              <div className="flex flex-col justify-between bg-white rounded-[16px] p-6 gap-2 min-w-[260px] max-w-[260px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-base text-[#1C1E40]">Domain blocking</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={domainBlocking} onChange={() => setDomainBlocking(v => !v)} className="sr-only peer" />
                    <div className="w-10 h-5 bg-[#E0E0E0] peer-checked:bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-full transition-all"></div>
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </div>
            </div>
            {/* Most Popular Section */}
            <div className="bg-[#F7F3FF] rounded-[16px] p-6 w-full flex flex-col gap-4">
              <span className="text-base font-semibold text-[#1C1E40] mb-2">Most popular</span>
              <div className="flex flex-row gap-6 w-full">
                {mostPopular.map((item, idx) => (
                  <div key={idx} className="flex flex-col flex-1 items-start justify-center gap-2 bg-gradient-to-br from-[#9664E6] to-[#5E30CC] rounded-[12px] p-4 w-full h-full min-w-[340px] max-w-[120px]">
                    <div className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-white mb-1">{item.icon}</div>
                    <span className="font-bold text-sm text-white mb-0.5 leading-tight">{item.title}</span>
                    <span className="text-xs text-white text-left opacity-90 leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Activate Expiration Reminder */}
            <div className="bg-white rounded-[16px] p-6 flex flex-col gap-4 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-base text-[#1C1E40]">Activate Expiration Reminder</span>
              </div>
              <div className="text-sm text-[#6B7280]">Sending reminders about domain renewal via email and SMS</div>
              <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={reminder} onChange={() => setReminder(v => !v)} className="sr-only peer" />
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