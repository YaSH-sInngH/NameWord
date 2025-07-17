import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";
import qrcodeImg from '../assets/qrcode.png'

export default function BillingSettings() {
  return (
    <div className="min-h-screen bg-[#F7F7FC] relative">
      <NewNavbar activeSection="Wallet & Billing" />
      <Sidebar activeSection="Billing settings" />
      <main className="pt-6 lg:ml-[250px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-[1188px] mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#1C1E40] leading-tight lg:leading-[36px] mb-6 lg:mb-8">Billing settings</h1>
          {/* Cards Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-6 lg:mb-10">
            {/* User controls */}
            <div className="w-full lg:w-1/2 rounded-[16px] bg-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-semibold text-lg text-[#1C1E40] mb-1">
                  User controls
                  <span className="block text-xs font-normal text-[#A6B0BA] mt-1">when you click on "Manage" you'll be redirected to the Dinopay system to manage your payment</span>
                </div>
                <div className="text-[#505050] text-base mt-1">View & Manage Recurring Payments</div>
              </div>
              <button className="w-full max-w-[160px] h-[40px] rounded-[20px] bg-[#F3EDFF] text-[#5E30CC] font-bold text-base flex items-center justify-center mt-4">Manage</button>
            </div>
            {/* Security */}
            <div className="w-full lg:w-1/2 rounded-[16px] bg-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-semibold text-lg text-[#1C1E40] mb-1">
                  Security
                  <span className="block text-xs font-normal text-[#A6B0BA] mt-1">when you click on "Manage" you'll be redirected to the Dinopay system to manage your payment</span>
                </div>
                <div className="text-[#505050] text-base mt-1">Set or Change Wallet PIN</div>
              </div>
              <button className="w-full max-w-[160px] h-[40px] rounded-[20px] bg-[#F3EDFF] text-[#5E30CC] font-bold text-base flex items-center justify-center mt-4">Manage</button>
            </div>
          </div>
          {/* QR Section */}
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex flex-col items-center w-full max-w-[400px] mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2 mb-2 w-full justify-center">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" stroke="#5E30CC" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-[#505050] text-base">Transaction ID:</span>
                <span className="font-bold text-[#1C1E40] text-base">#ABC123456</span>
                <button className="ml-2 px-2 py-1 bg-[#F7F7FC] rounded text-xs text-[#5E30CC] font-medium">Copy</button>
              </div>
              {/* QR Code */}
              <div className="my-4">
                <img src={qrcodeImg} alt="QR Code" className="w-[120px] h-[120px] mx-auto" />
              </div>
              <div className="text-center text-[#1C1E40] text-base font-medium mb-6">Dinopay - using the transfer ID or QRCode you<br/>can easily manage your billing</div>
              <button className="w-full max-w-[160px] h-[40px] rounded-[20px] bg-[#9664E6] text-white font-bold text-base flex items-center justify-center">Manage</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 