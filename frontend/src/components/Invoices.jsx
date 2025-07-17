import React, { useState } from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const invoices = [
  { id: "#3456789", client: "Jackson Bennet", date: "06.04.2024", due: "Today", dueColor: "#22C55E", status: "Paid", total: "$ 0.01" },
  { id: "#3456789", client: "Jackson Bennet", date: "06.04.2024", due: "In 7 days", dueColor: "#505050", status: "Opened", total: "$ 0.01" },
  { id: "#3456789", client: "Jackson Bennet", date: "06.04.2024", due: "In 14 days", dueColor: "#505050", status: "Sent", total: "$ 0.01" },
  { id: "#3456789", client: "Jackson Bennet", date: "06.04.2024", due: "In 30 days", dueColor: "#505050", status: "Paid", total: "$ 0.01" },
  { id: "#3456789", client: "Jackson Bennet", date: "06.04.2024", due: "7 days ago", dueColor: "#F59E42", status: "Opened", total: "$ 0.01" },
];

const actionMenuItems = [
  { label: "Mark as paid" },
  { label: "Record a payment" },
  { label: "Download PDF" },
  { label: "Duplicate" },
  { label: "Send" },
  { label: "Delete", danger: true },
];

export default function Invoices() {
  const [menuOpenIdx, setMenuOpenIdx] = useState(null);

  return (
    <div className="min-h-screen bg-[#F7F7FC] relative">
      <NewNavbar activeSection="Wallet & Billing" />
      <Sidebar />
      <main className="pt-6 lg:ml-[250px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-[1188px] mx-auto">
          {/* Title and Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#1C1E40] leading-tight lg:leading-[36px]">Invoices</h1>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <button className="px-4 sm:px-6 py-2 rounded-full border border-[#9664E6] text-[#9664E6] bg-white font-medium hover:bg-[#F3EDFF] transition text-sm sm:text-base">Download all</button>
              <button className="px-4 sm:px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium hover:bg-[#7B6ED6] transition text-sm sm:text-base">New invoice</button>
            </div>
          </div>
          {/* Tabs and Search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            <div className="flex gap-2 bg-[#F3EDFF] rounded-full p-1 w-full md:w-auto">
              <button className="px-4 sm:px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm sm:text-base">Active</button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-[#9664E6] font-medium text-sm sm:text-base">Paid</button>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 border border-[#E0E0E0] w-full md:w-[320px]">
              <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="#B0B0B0" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input className="flex-1 bg-transparent outline-none text-[#8B8B8B] placeholder-[#8B8B8B] text-sm sm:text-base" placeholder="Search" />
            </div>
          </div>
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-[16px] p-6 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="text-black text-base font-bold font-northuraExpanded h-[64px]">
                  <th className="py-2">Invoice №</th>
                  <th className="py-2">Client</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Due Date</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Total</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, idx) => (
                  <tr key={idx} className="border-t border-[#F0F0F0] text-[#1C1E40] text-base hover:bg-[#F7F7FC]">
                    <td className="py-3 font-semibold">{inv.id}</td>
                    <td className="py-3">{inv.client}</td>
                    <td className="py-3">{inv.date}</td>
                    <td className="py-3" style={{ color: inv.dueColor === '#505050' ? '#505050' : inv.dueColor, fontWeight: inv.dueColor !== '#505050' ? 'bold' : 'normal' }}>{inv.due}</td>
                    <td className="py-3">{inv.status}</td>
                    <td className="py-3">{inv.total}</td>
                    <td className="py-3 text-right relative">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F7FC]"
                        onClick={() => setMenuOpenIdx(menuOpenIdx === idx ? null : idx)}
                      >
                        <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="3" cy="3" r="3" fill="#9664E6"/>
                          <circle cx="12" cy="3" r="3" fill="#9664E6"/>
                          <circle cx="21" cy="3" r="3" fill="#9664E6"/>
                        </svg>
                      </button>
                      {menuOpenIdx === idx && (
                        <div className="absolute right-0 mt-2 w-[180px] rounded-[12px] bg-white shadow-lg z-20 flex flex-col border border-[#E0E0E0]">
                          {actionMenuItems.map((item, i) => (
                            <button
                              key={item.label}
                              className={`w-full px-4 py-2 text-left text-base font-medium hover:bg-[#F3EDFF] transition-colors ${item.danger ? 'text-red-500' : 'text-[#1C1E40]'}`}
                              onClick={() => setMenuOpenIdx(null)}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Card Layout */}
          <div className="lg:hidden space-y-4">
            {invoices.map((inv, idx) => (
              <div key={idx} className="border border-[#F0F0F0] rounded-lg p-4 bg-white flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-base text-[#1C1E40]">{inv.id}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ color: inv.dueColor === '#505050' ? '#505050' : inv.dueColor, background: inv.dueColor === '#505050' ? '#F3EDFF' : inv.dueColor }}>{inv.due}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Client</span>
                  <span className="text-[#1C1E40]">{inv.client}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Date</span>
                  <span className="text-[#1C1E40]">{inv.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Status</span>
                  <span className="text-[#1C1E40]">{inv.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Total</span>
                  <span className="text-sm font-semibold text-[#1C1E40]">{inv.total}</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm">Details</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 