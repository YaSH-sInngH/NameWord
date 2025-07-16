import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const BillingSettings = () => (
  <div className="w-[1440px] h-[1025px] bg-[#F7F7FC] relative overflow-x-hidden">
    <NewNavbar activeSection="Wallet & Billing" />
    <Sidebar activeSection="Billing settings" />
    <main className="absolute top-[80.5px] left-[250px] w-[1190px] h-[944px] bg-[#F9FAFC] rounded-[20px] p-[40px_32px] flex flex-col gap-8 shadow-sm">
      {/* Title */}
      <h1 className="text-[28px] font-bold text-[#1C1E40] leading-[36px] mb-4">Billing settings</h1>
      {/* User controls and Security cards */}
      <div className="flex flex-col gap-6">
        {/* User controls */}
        <div className="flex items-center justify-between bg-white rounded-[16px] px-8 py-6 shadow-sm">
          <div>
            <div className="font-semibold text-lg text-[#1C1E40]">User controls <span className="text-xs font-normal text-[#A6B0BA]">when you click on "Manage" you'll be redirected to the Dinopay system to manage your payment</span></div>
            <div className="text-[#505050] text-base mt-1">View & Manage Recurring Payments</div>
          </div>
          <button className="w-[110px] h-[40px] rounded-[20px] bg-[#F3EDFF] text-[#5E30CC] font-bold text-base flex items-center justify-center">Manage</button>
        </div>
        {/* Security */}
        <div className="flex items-center justify-between bg-white rounded-[16px] px-8 py-6 shadow-sm">
          <div>
            <div className="font-semibold text-lg text-[#1C1E40]">Security <span className="text-xs font-normal text-[#A6B0BA]">when you click on "Manage" you'll be redirected to the Dinopay system to manage your payment</span></div>
            <div className="text-[#505050] text-base mt-1">Set or Change Wallet PIN</div>
          </div>
          <button className="w-[110px] h-[40px] rounded-[20px] bg-[#F3EDFF] text-[#5E30CC] font-bold text-base flex items-center justify-center">Manage</button>
        </div>
      </div>
      {/* QR Section */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" stroke="#5E30CC" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-[#505050] text-base">Transaction ID:</span>
            <span className="font-bold text-[#1C1E40] text-base">#ABC123456</span>
            <button className="ml-2 px-2 py-1 bg-[#F7F7FC] rounded text-xs text-[#5E30CC] font-medium">Copy</button>
          </div>
          {/* QR Code */}
          <div className="my-4">
            <img src="/assets/qr-placeholder.png" alt="QR Code" className="w-[120px] h-[120px]" />
          </div>
          <div className="text-center text-[#1C1E40] text-base font-medium mb-6">Dinopay - using the transfer ID or QRCode you<br/>can easily manage your billing</div>
          <button className="w-[160px] h-[40px] rounded-[20px] bg-[#9664E6] text-white font-bold text-base flex items-center justify-center">Manage</button>
        </div>
      </div>
    </main>
  </div>
);

export default BillingSettings; 