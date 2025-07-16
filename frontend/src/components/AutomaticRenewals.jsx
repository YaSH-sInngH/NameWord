import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const timeline = [
  {
    label: "Invoice final",
    color: "#22C55E",
    bg: "#E6F9ED",
    content: "Thank you for approving invoice #132 ($ 23) of [invoice date] we look forward to your payment by [date]",
    actions: true,
  },
  {
    label: "Invoice on hold",
    color: "#6366F1",
    bg: "#F3EDFF",
    content: "Expert ( Expert first name) can process your request for change until tomorrow, Date",
  },
  {
    label: "Invoice sent",
    color: "#6366F1",
    bg: "#F3EDFF",
    content: "Invoice #132 ($ 23) will be final unless you request any change by [DATE+1] at [TIME]",
  },
  {
    label: "Visit completed",
    color: "#6366F1",
    bg: "#F3EDFF",
    content: "12 January 2023 @ 11:43h",
  },
  {
    label: "Visit started",
    color: "#8B5CF6",
    bg: "#F3EDFF",
    content: "Start: 12 January 2023 @ 11:43h\nThe expert has started the clock: he or you can stop it when the Visit is complete",
  },
];

const AutomaticRenewals = () => (
  <div className="w-[1440px] bg-[#F7F7FC] relative">
    <NewNavbar activeSection="Wallet & Billing" />
    <Sidebar />
    <main className="ml-[250px] w-[1190px] pt-10 px-8 pb-10 flex flex-col gap-8 min-h-[944px] h-[944px] overflow-y-auto">
      <h1 className="text-[28px] font-bold text-[#1C1E40] leading-[36px] mb-6">Automatic invoice generation</h1>
      <div className="bg-white rounded-[16px] p-8 shadow-sm flex flex-col gap-6 relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-[#9664E6] to-[#F3EDFF] opacity-40 z-0" style={{borderRadius: '4px'}}></div>
        {timeline.map((item, idx) => (
          <div key={idx} className="relative flex gap-4 items-start z-10">
            {/* Timeline dot */}
            <span className="mt-2 w-4 h-4 flex items-center justify-center">
              <span className="block w-3 h-3 rounded-full" style={{ background: '#9664E6', border: '2px solid #fff' }}></span>
            </span>
            {/* Card */}
            <div className={`flex-1 rounded-[12px] p-6 mb-2`} style={{ background: item.bg }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: item.color, color: '#fff' }}>{item.label}</span>
              </div>
              <div className="text-[#1C1E40] text-base mb-2 whitespace-pre-line">{item.content}</div>
              {item.actions && (
                <button className="px-8 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-base mt-2">Actions</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default AutomaticRenewals; 