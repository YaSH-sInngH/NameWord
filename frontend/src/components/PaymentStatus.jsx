import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const payments = [
  { status: "successful", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "pending", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "failed", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "pending", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "successful", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "failed", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
  { status: "successful", name: "appleplus.com", date: "08.07.2024", due: "09.07.2024", total: "$ 0.01" },
];

const statusStyles = {
  successful: {
    bg: "#E6F9ED",
    color: "#22C55E",
    icon: (
      <svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#22C55E" opacity="0.15"/><path d="M5.5 8.5L7.5 10.5L11 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  pending: {
    bg: "#FFF4E5",
    color: "#F59E42",
    icon: (
      <svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#F59E42" opacity="0.15"/><path d="M8 4V8L10.5 10.5" stroke="#F59E42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  failed: {
    bg: "#FDE7EB",
    color: "#F43F5E",
    icon: (
      <svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#F43F5E" opacity="0.15"/><path d="M10.5 5.5L5.5 10.5M5.5 5.5L10.5 10.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
};

export default function PaymentStatus() {
  return (
    <div className="min-h-screen bg-[#F7F7FC] relative">
      <NewNavbar activeSection="Wallet & Billing" />
      <Sidebar />
      <main className="pt-6 lg:ml-[250px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-[1188px] mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#1C1E40] leading-tight lg:leading-[36px] mb-6 lg:mb-8">Payment status</h1>
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-[16px] p-6 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="text-black text-base font-bold font-northuraExpanded h-[64px]">
                  <th className="py-2">Status</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Due Date</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, idx) => {
                  const style = statusStyles[p.status];
                  return (
                    <tr key={idx} className="border-t border-[#F0F0F0] text-[#1C1E40] text-base hover:bg-[#F7F7FC]">
                      <td className="py-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ background: style.bg, color: style.color }}>
                          {style.icon}
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 font-semibold">{p.name}</td>
                      <td className="py-3">{p.date}</td>
                      <td className="py-3">{p.due}</td>
                      <td className="py-3">{p.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Mobile Card Layout */}
          <div className="lg:hidden space-y-4">
            {payments.map((p, idx) => {
              const style = statusStyles[p.status];
              return (
                <div key={idx} className="border border-[#F0F0F0] rounded-lg p-4 bg-white flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ background: style.bg, color: style.color }}>
                      {style.icon}
                      {p.status}
                    </span>
                    <span className="font-semibold text-base text-[#1C1E40]">{p.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#505050]">Date</span>
                    <span className="text-[#1C1E40]">{p.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#505050]">Due Date</span>
                    <span className="text-[#1C1E40]">{p.due}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#505050]">Total</span>
                    <span className="text-sm font-semibold text-[#1C1E40]">{p.total}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
} 