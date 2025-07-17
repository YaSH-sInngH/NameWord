import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', route: '/mystore' },
  { label: 'DNS / Nameservers', active: true, route: '/nameservers' },
  { label: 'Domain Ownership', route: '/ownership' },
];

const tabs = [
  'DNS records',
  'Child nameservers',
  'DNSSEC',
  'Forwarding',
  'DNS history',
];

const initialRecords = [
  { type: 'CAA', name: '@', priority: 0, content: '34.156.77.345', ttl: 300 },
  { type: 'CAA', name: '@', priority: 0, content: '34.156.77.345', ttl: 300 },
  { type: 'CAA', name: '@', priority: 0, content: '34.156.77.345', ttl: 300 },
];

const Nameservers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [records, setRecords] = useState(initialRecords);

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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40]">DNS / Nameservers</h1>
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
            {/* Tab Content */}
            {activeTab === 0 && (
              <>
                {/* Nameservers Card */}
                <div className="bg-white rounded-[16px] p-4 md:p-6 flex flex-col gap-2 mb-4">
                  <div className="font-semibold text-base text-[#1C1E40] mb-2">Nameservers</div>
                  <div className="text-[#505050] text-sm mb-2">
                    Nameservers handle internet requests for your domain. You can use Nameword nameservers or use custom nameservers to point to other hosting provider.
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="bg-[#F7F7FC] rounded px-4 py-2 text-[#1C1E40] text-base">ns1.dns-parking.com</div>
                    <div className="bg-[#F7F7FC] rounded px-4 py-2 text-[#1C1E40] text-base">ns1.dns-parking.com</div>
                  </div>
                  <button className="w-fit bg-[#5E30CC] text-white rounded-full px-6 py-2 font-medium text-base mt-2">Change nameservers</button>
                </div>
                {/* Manage DNS Records Card */}
                <div className="bg-white rounded-[16px] p-4 md:p-6 flex flex-col gap-4">
                  <div className="font-semibold text-base text-[#1C1E40] mb-2">Manage DNS records</div>
                  <div className="text-[#505050] text-sm mb-4">
                    These records define how your domain behaves. Common uses include pointing your domain at web servers or configuring email delivery for your domain.
                  </div>
                  {/* Add Record Form */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
                    <select className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[120px]">
                      <option>A</option>
                      <option>AAAA</option>
                      <option>CNAME</option>
                      <option>MX</option>
                      <option>TXT</option>
                      <option>SRV</option>
                      <option>CAA</option>
                    </select>
                    <input className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[180px]" placeholder="Name" />
                    <input className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[180px]" placeholder="Points to" />
                    <input className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[120px]" placeholder="TTL" />
                    <button className="bg-[#5E30CC] text-white rounded-full px-6 py-2 font-medium text-base w-full md:w-auto">Add record</button>
                  </div>
                  {/* DNS Records Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="text-[#1C1E40] font-semibold border-b border-[#EAEAEA]">
                          <th className="py-2 px-2 text-left">Type</th>
                          <th className="py-2 px-2 text-left">Name</th>
                          <th className="py-2 px-2 text-left">Priority</th>
                          <th className="py-2 px-2 text-left">Content</th>
                          <th className="py-2 px-2 text-left">TTL</th>
                          <th className="py-2 px-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((rec, idx) => (
                          <tr key={idx} className="border-b border-[#EAEAEA] text-black">
                            <td className="py-2 px-2">{rec.type}</td>
                            <td className="py-2 px-2">{rec.name}</td>
                            <td className="py-2 px-2">{rec.priority}</td>
                            <td className="py-2 px-2">{rec.content}</td>
                            <td className="py-2 px-2">{rec.ttl}</td>
                            <td className="py-2 px-2 flex gap-2">
                              <button className="text-[#5E30CC] hover:underline"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8366_185239)">
<path d="M15.545 12.8948C15.0077 12.8948 14.5735 13.329 14.5735 13.8663V16.918C14.5735 17.4543 14.1382 17.8896 13.6019 17.8896H2.91468C2.37836 17.8896 1.94313 17.4543 1.94313 16.918V4.28768C1.94313 3.75136 2.3784 3.31614 2.91468 3.31614H8.55946C9.09672 3.31614 9.531 2.88185 9.531 2.34459C9.531 1.80734 9.09672 1.37305 8.55946 1.37305H2.91468C1.30771 1.37297 0 2.68072 0 4.28768V16.918C0 18.525 1.30771 19.8327 2.91468 19.8327H13.6019C15.2088 19.8327 16.5165 18.526 16.5165 16.918V13.8663C16.5166 13.329 16.0823 12.8948 15.545 12.8948Z" fill="#5E30CC"/>
<path d="M18.911 1.24925C18.2057 0.543914 17.2846 0.188295 16.3568 0.168882C15.3803 0.147515 14.3981 0.501141 13.6597 1.2405L7.0822 7.81801C6.1223 8.78182 5.59375 10.0604 5.59375 11.4186V13.5949C5.59375 14.1322 6.02804 14.5664 6.5653 14.5664H8.74159C10.0998 14.5664 11.3784 14.0379 12.3432 13.077L18.9119 6.50826C20.3596 5.05973 20.3596 2.69884 18.911 1.24925ZM10.9704 11.7024C10.3748 12.296 9.58204 12.6234 8.74166 12.6234H7.53688V11.4186C7.53688 10.5782 7.8643 9.78543 8.45694 9.19083L12.793 4.85474L15.3055 7.36719L10.9704 11.7024ZM17.5372 5.13551L16.6793 5.99343L14.1668 3.48097L15.0247 2.6231C15.7184 1.9294 16.8454 1.93135 17.5372 2.6231C18.229 3.31578 18.229 4.44279 17.5372 5.13551Z" fill="#5E30CC"/>
</g>
<defs>
<clipPath id="clip0_8366_185239">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
                              <button className="text-[#F04438] hover:underline"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.168 4.99935H18.3346V6.66602H16.668V17.4993C16.668 17.9596 16.2949 18.3327 15.8346 18.3327H4.16797C3.70774 18.3327 3.33464 17.9596 3.33464 17.4993V6.66602H1.66797V4.99935H5.83464V2.49935C5.83464 2.03912 6.20774 1.66602 6.66797 1.66602H13.3346C13.7949 1.66602 14.168 2.03912 14.168 2.49935V4.99935ZM15.0013 6.66602H5.0013V16.666H15.0013V6.66602ZM7.5013 9.16602H9.16797V14.166H7.5013V9.16602ZM10.8346 9.16602H12.5013V14.166H10.8346V9.16602ZM7.5013 3.33268V4.99935H12.5013V3.33268H7.5013Z" fill="#FC5585"/>
</svg>
</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
            {activeTab === 1 && (
              <div className="bg-white rounded-[16px] p-6 flex flex-col gap-6 mb-4 shadow-sm">
                <div className='flex flex-col gap-4'>
                  <div className="font-semibold text-base text-[#1C1E40] mb-1">Create child nameservers</div>
                  <div className="text-[#6B7280] text-sm mb-4">Register new child nameservers under your domain name</div>
                  {/* Child nameserver rows */}
                  <div className="flex flex-col gap-6">
                    {[1, 2].map((idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-3 md:gap-4 items-center w-full">
                        <div className="flex flex-row w-full md:w-auto gap-2 md:gap-0 md:flex-nowrap">
                          <input
                            className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[220px]"
                            placeholder={`Nameserver Child ${idx}`}
                          />
                          <span className="hidden md:flex items-center px-3 py-2 bg-[#F7F7FC] border border-[#EAEAEA] border-l-0 rounded-r-[8px] text-base text-[#1C1E40] min-w-[100px]">.store.com</span>
                        </div>
                        <input
                          className="rounded-[8px] border border-[#EAEAEA] px-3 py-2 text-base text-[#1C1E40] bg-white w-full md:w-[220px]"
                          placeholder="IPv4 address"
                        />
                        <div className="flex flex-row gap-2 mt-2 md:mt-0">
                          <button className="bg-[#7C3AED] text-white rounded-full px-5 py-2 font-medium text-sm transition hover:bg-[#5E30CC]">Save</button>
                          <button className="border border-[#7C3AED] text-[#7C3AED] rounded-full px-5 py-2 font-medium text-sm bg-white transition hover:bg-[#F6F1FF]">Edit</button>
                          <button className="p-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.168 3.99984H17.3346V5.6665H15.668V16.4998C15.668 16.9601 15.2949 17.3332 14.8346 17.3332H3.16797C2.70774 17.3332 2.33464 16.9601 2.33464 16.4998V5.6665H0.667969V3.99984H4.83464V1.49984C4.83464 1.0396 5.20774 0.666504 5.66797 0.666504H12.3346C12.7949 0.666504 13.168 1.0396 13.168 1.49984V3.99984ZM14.0013 5.6665H4.0013V15.6665H14.0013V5.6665ZM6.5013 8.1665H8.16797V13.1665H6.5013V8.1665ZM9.83463 8.1665H11.5013V13.1665H9.83463V8.1665ZM6.5013 2.33317V3.99984H11.5013V2.33317H6.5013Z" fill="#FC5585"/></svg></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-fit px-5 py-2 rounded-full border border-[#7C3AED] text-[#7C3AED] bg-white font-medium text-sm transition hover:bg-[#F6F1FF]">Add more</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Nameservers;