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
            <div className="flex items-center bg-white rounded-full px-4 py-2 border border-[#E0E0E0] w-full md:w-[320px]">
              <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="#B0B0B0" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input className="flex-1 bg-transparent outline-none text-[#8B8B8B] placeholder-[#8B8B8B] text-sm sm:text-base" placeholder="Search" />
            </div>
            <div className="flex gap-2 bg-white rounded-full p-1 w-full md:w-auto">
              <button className="px-4 sm:px-6 py-2 rounded-lg bg-[#E6E6E6] text-black font-medium text-sm sm:text-base">View all</button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-black font-medium text-sm sm:text-base">Open</button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-black  font-medium text-sm sm:text-base">Unfulfilled</button>
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
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8366_269198)">
                        <path d="M10 0.5C4.47301 0.5 0 4.9725 0 10.5C0 16.0269 4.4725 20.5 10 20.5C15.527 20.5 20 16.0275 20 10.5C20 4.97309 15.5275 0.5 10 0.5ZM10 19.1046C5.25539 19.1046 1.39535 15.2446 1.39535 10.5C1.39535 5.75535 5.25539 1.89535 10 1.89535C14.7446 1.89535 18.6046 5.75535 18.6046 10.5C18.6046 15.2446 14.7446 19.1046 10 19.1046Z" fill="#9664E6"/>
                        <path d="M9.99793 8.83594C9.40559 8.83594 8.98438 9.08609 8.98438 9.45465V14.4697C8.98438 14.7857 9.40559 15.1015 9.99793 15.1015C10.5639 15.1015 11.0246 14.7857 11.0246 14.4697V9.45457C11.0246 9.08605 10.5639 8.83594 9.99793 8.83594Z" fill="#9664E6"/>
                        <path d="M10.0012 5.74219C9.3957 5.74219 8.92188 6.17656 8.92188 6.67676C8.92188 7.17699 9.39574 7.62453 10.0012 7.62453C10.5936 7.62453 11.0675 7.17699 11.0675 6.67676C11.0675 6.17656 10.5935 5.74219 10.0012 5.74219Z" fill="#9664E6"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_8366_269198">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>

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
              <div key={idx} className="border border-[#EAEAEA] rounded-xl p-4 bg-white mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-[#A0A0A0] font-medium">Name</span>
                  <span className="font-bold text-[#1C1E40] flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded border border-[#9664E6] mr-2"></span>{order.id}
                  </span>
                </div>
                <div className="flex justify-between mb-2 items-center">
                  <span className="text-[#A0A0A0] font-medium">Status</span>
                  <span className="flex items-center gap-2">
                    {statusIcon(order.statusColor)}
                    <span className="text-sm font-medium" style={{ color: order.statusColor }}>{order.status}</span>
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#A0A0A0] font-medium">Date</span>
                  <span className="text-[#1C1E40]">{order.date}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#A0A0A0] font-medium">Total</span>
                  <span className="font-bold text-[#1C1E40]">{order.total}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#A0A0A0] font-medium">Action</span>
                  <a href="#" className="flex items-center gap-1 text-[#9664E6] font-medium text-sm">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_8366_269198)">
                        <path d="M10 0.5C4.47301 0.5 0 4.9725 0 10.5C0 16.0269 4.4725 20.5 10 20.5C15.527 20.5 20 16.0275 20 10.5C20 4.97309 15.5275 0.5 10 0.5ZM10 19.1046C5.25539 19.1046 1.39535 15.2446 1.39535 10.5C1.39535 5.75535 5.25539 1.89535 10 1.89535C14.7446 1.89535 18.6046 5.75535 18.6046 10.5C18.6046 15.2446 14.7446 19.1046 10 19.1046Z" fill="#9664E6"/>
                        <path d="M9.99793 8.83594C9.40559 8.83594 8.98438 9.08609 8.98438 9.45465V14.4697C8.98438 14.7857 9.40559 15.1015 9.99793 15.1015C10.5639 15.1015 11.0246 14.7857 11.0246 14.4697V9.45457C11.0246 9.08605 10.5639 8.83594 9.99793 8.83594Z" fill="#9664E6"/>
                        <path d="M10.0012 5.74219C9.3957 5.74219 8.92188 6.17656 8.92188 6.67676C8.92188 7.17699 9.39574 7.62453 10.0012 7.62453C10.5936 7.62453 11.0675 7.17699 11.0675 6.67676C11.0675 6.17656 10.5935 5.74219 10.0012 5.74219Z" fill="#9664E6"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_8366_269198">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 