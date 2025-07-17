import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const orders = [
  { id: "#3456789", status: "Successful", statusColor: "#22C55E", statusBg: "#E6F9ED", date: "24 Jun 2024", total: "$ 23", action: "Details" },
  { id: "#3456789", status: "Rejected", statusColor: "#F43F5E", statusBg: "#FDE7EB", date: "24 Jun 2024", total: "$ 23", action: "Details" },
  { id: "#3456789", status: "Scheduled", statusColor: "#3B82F6", statusBg: "#E7F1FD", date: "24 Jun 2024", total: "$ 23", action: "Details" },
  { id: "#3456789", status: "In Progress", statusColor: "#F59E42", statusBg: "#FFF4E5", date: "24 Jun 2024", total: "$ 23", action: "Details" },
];

const statusIcon = (color) => (
  <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ background: color }}></span>
);

export default function OrderHistory() {
  return (
    <div className="min-h-screen bg-[#F7F7FC] relative">
      <NewNavbar activeSection="Wallet & Billing" />
      <Sidebar />
      <main className="pt-6 lg:ml-[250px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-[1188px] mx-auto">
          {/* Title and Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#1C1E40] leading-tight lg:leading-[36px]">Order history</h1>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <button className="px-4 sm:px-6 py-2 rounded-full border border-[#9664E6] text-[#9664E6] bg-white font-medium hover:bg-[#F3EDFF] transition text-sm sm:text-base">Download all</button>
              <button className="px-4 sm:px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium hover:bg-[#7B6ED6] transition text-sm sm:text-base">New order</button>
            </div>
          </div>
          {/* Tabs and Search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            <div className="flex gap-2 bg-[#F3EDFF] rounded-full p-1 w-full md:w-auto">
              <button className="px-4 sm:px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm sm:text-base">View all</button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-[#9664E6] font-medium text-sm sm:text-base">Open</button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-[#9664E6] font-medium text-sm sm:text-base">Unfulfilled</button>
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
                  <th className="py-2 w-12"><input type="checkbox" className="w-5 h-5 rounded border-[#9664E6]" /></th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx} className="border-t border-[#F0F0F0] text-[#1C1E40] text-base hover:bg-[#F7F7FC]">
                    <td className="py-3"><input type="checkbox" className="w-5 h-5 rounded border-[#9664E6]" /></td>
                    <td className="py-3 font-semibold">{order.id}</td>
                    <td className="py-3 flex items-center">
                      {statusIcon(order.statusColor)}
                      <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: order.statusBg, color: order.statusColor }}>{order.status}</span>
                    </td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3">{order.total}</td>
                    <td className="py-3 text-right">
                      <button className="flex items-center gap-1 text-[#9664E6] hover:underline">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#9664E6" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#9664E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Card Layout */}
          <div className="lg:hidden space-y-4">
            {orders.map((order, idx) => (
              <div key={idx} className="border border-[#F0F0F0] rounded-lg p-4 bg-white flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-base text-[#1C1E40]">{order.id}</div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: order.statusBg, color: order.statusColor }}>{order.status}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  {statusIcon(order.statusColor)}
                  <span className="text-xs text-[#505050]">{order.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Date</span>
                  <span className="text-[#1C1E40]">{order.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#505050]">Total</span>
                  <span className="text-[#1C1E40]">{order.total}</span>
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