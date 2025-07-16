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

const OrderHistory = () => (
  <div className="w-[1440px] h-[1024px] bg-[#F7F7FC] relative overflow-x-hidden">
    <NewNavbar activeSection="Wallet & Billing" />
    <Sidebar />
    <main className="ml-[250px] w-[1190px] pt-10 px-8 pb-10 flex flex-col gap-8 min-h-[944px]">
      {/* Title and Controls */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[28px] font-bold text-[#1C1E40] leading-[36px]">Order history</h1>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-[#9664E6] text-[#9664E6] bg-white font-medium hover:bg-[#F3EDFF] transition">Download all</button>
          <button className="px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium hover:bg-[#7B6ED6] transition">New order</button>
        </div>
      </div>
      {/* Tabs and Search */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 bg-[#F3EDFF] rounded-full p-1">
          <button className="px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium">View all</button>
          <button className="px-6 py-2 rounded-full text-[#9664E6] font-medium">Open</button>
          <button className="px-6 py-2 rounded-full text-[#9664E6] font-medium">Unfulfilled</button>
        </div>
        <div className="flex items-center bg-white rounded-full px-4 py-2 border border-[#E0E0E0] w-[320px]">
          <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" stroke="#B0B0B0" strokeWidth="2"/>
            <path d="M21 21l-4.35-4.35" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input className="flex-1 bg-transparent outline-none text-[#8B8B8B] placeholder-[#8B8B8B] text-base" placeholder="Search" />
        </div>
      </div>
      {/* Order Table */}
      <div className="bg-white rounded-[16px] p-6 shadow-sm">
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
    </main>
  </div>
);

export default OrderHistory; 