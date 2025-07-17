import React, { useState } from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { label: 'Select domain', dropdown: true, options: ['mystore.com'] },
  { label: 'Domain Overview', route: '/mystore' },
  { label: 'DNS / Nameservers', active: true, route: '/nameservers' },
  { label: 'Domain Ownership' },
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
                      <tr key={idx} className="border-b border-[#EAEAEA]">
                        <td className="py-2 px-2">{rec.type}</td>
                        <td className="py-2 px-2">{rec.name}</td>
                        <td className="py-2 px-2">{rec.priority}</td>
                        <td className="py-2 px-2">{rec.content}</td>
                        <td className="py-2 px-2">{rec.ttl}</td>
                        <td className="py-2 px-2 flex gap-2">
                          <button className="text-[#5E30CC] hover:underline">Edit</button>
                          <button className="text-[#F04438] hover:underline">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Nameservers;