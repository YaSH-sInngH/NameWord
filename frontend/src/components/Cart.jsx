import React from "react";
import NewNavbar from "./NewNavbar";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Cart" />
      <main className="w-[1376px] mx-auto py-8 flex gap-8">
        {/* Cart Items Section */}
        <div
          className="bg-white border border-[#EAEAEA] rounded-[16px] w-[880px] h-[681px] p-8 flex flex-col"
          style={{ minWidth: 880, minHeight: 681 }}
        >
          <h1 className="text-2xl font-bold text-[#1C1E40] mb-6">Your Cart</h1>
          {/* Example cart items */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Cart Item 1 */}
            <div className="flex items-start justify-between border-b border-[#EAEAEA] pb-6">
              <div className="flex gap-4 items-center">
                <div className="bg-[#F3EDFF] rounded-[12px] w-12 h-12 flex items-center justify-center">
                  <span className="material-icons text-[#9664E6] text-2xl">dns</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1C1E40]">Domain</div>
                  <div className="font-bold text-lg text-[#1C1E40]">apple.com</div>
                  <div className="text-xs text-[#9664E6] mt-1">You can partially pay with reward points.</div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[120px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#1C1E40] font-medium">1 Year</span>
                  <span className="material-icons text-[#A3A3A3] text-base">expand_more</span>
                </div>
                <div className="text-[#9664E6] font-bold text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-base ml-1">$64.99</span></div>
                <div className="text-xs text-[#A3A3A3]">Renews 08/28/2025 for $100</div>
                <button className="mt-2"><span className="material-icons text-[#F43F5E]">delete</span></button>
              </div>
            </div>
            {/* Cart Item 2 (duplicate for demo) */}
            <div className="flex items-start justify-between border-b border-[#EAEAEA] pb-6">
              <div className="flex gap-4 items-center">
                <div className="bg-[#F3EDFF] rounded-[12px] w-12 h-12 flex items-center justify-center">
                  <span className="material-icons text-[#9664E6] text-2xl">dns</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1C1E40]">Domain</div>
                  <div className="font-bold text-lg text-[#1C1E40]">apple.com</div>
                  <div className="text-xs text-[#9664E6] mt-1">You can partially pay with reward points.</div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[120px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#1C1E40] font-medium">1 Year</span>
                  <span className="material-icons text-[#A3A3A3] text-base">expand_more</span>
                </div>
                <div className="text-[#9664E6] font-bold text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-base ml-1">$64.99</span></div>
                <div className="text-xs text-[#A3A3A3]">Renews 08/28/2025 for $100</div>
                <button className="mt-2"><span className="material-icons text-[#F43F5E]">delete</span></button>
              </div>
            </div>
            {/* Hosting Offer */}
            <div className="pt-6">
              <div className="flex gap-8 bg-purple-200 items-center border-b border-[#EAEAEA] pb-2">
                <div className="flex gap-8">
                  <button className="text-[#9664E6] font-medium border-b-2 border-[#9664E6] pb-2">Most popular</button>
                  <button className="text-[#A3A3A3] font-medium pb-2">WHOIS privacy</button>
                  <button className="text-[#A3A3A3] font-medium pb-2">SSL</button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#F3EDFF] rounded-[12px] w-10 h-10 flex items-center justify-center">
                    <span className="material-icons text-[#9664E6] text-xl">dns</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1E40]">Need high-performance hosting?</div>
                    <div className="text-xs text-[#505050]">Give your domain name the performance of our Web+ hosting.</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 min-w-[120px]">
                  <div className="text-[#9664E6] font-bold text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-base ml-1">$64.99</span></div>
                  <div className="text-xs text-[#A3A3A3]">Excl. VAT<br/>The 1st year instead of $8.00 Excl. VAT / month</div>
                  <button className="mt-2 px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary Section */}
        <div
          className="bg-white border border-[#EAEAEA] rounded-[12px] w-[400px] h-[1058px] p-6 flex flex-col gap-8"
          style={{ minWidth: 400, minHeight: 1058, paddingTop: 22, paddingRight: 24, paddingBottom: 22, paddingLeft: 24, borderWidth: 1.5 }}
        >
          <h2 className="text-xl font-bold text-[#1C1E40] mb-4">Order Summary</h2>
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex justify-between items-center">
              <span className="text-[#1C1E40] font-medium underline cursor-pointer">2 items</span>
              <span className="material-icons text-[#F43F5E] cursor-pointer">delete</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#1C1E40]">Subtotal</span>
              <span className="text-[#1C1E40] font-bold">$17,00</span>
            </div>
            <div>
              <a href="#" className="text-[#9664E6] text-xs underline">Have a promo code?</a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#1C1E40]">Wallet Balance</span>
              <span className="text-[#1C1E40] font-bold">$5.000</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-[#9664E6]" />
              <span className="text-xs text-[#505050]">Use Wallet Balance First <span className="italic">(Pay Remaining via DynoPay)</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#1C1E40]">Reward points</span>
              <span className="text-[#1C1E40] font-bold">500</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="text" value="10" readOnly className="w-16 px-2 py-1 border border-[#EAEAEA] rounded text-[#1C1E40] text-sm" />
              <span className="text-xs text-[#505050]">Apply Reward Points</span>
              <input type="checkbox" checked readOnly className="accent-[#9664E6] ml-2" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                <span>Taxes & Fees</span>
                <a href="#" className="text-[#9664E6] underline">Edit</a>
              </div>
              <div className="flex justify-between items-center text-[#1C1E40]">
                <span>Total Excl. VAT</span>
                <span className="font-bold">$18,00</span>
              </div>
              <div className="flex justify-between items-center text-[#1C1E40]">
                <span>Reward Points</span>
                <span className="font-bold">10</span>
              </div>
              <div className="flex justify-between items-center text-[#1C1E40]">
                <span>VAT (20%)</span>
                <span className="font-bold">$4,00</span>
              </div>
              <div className="flex justify-between items-center text-[#1C1E40] text-lg mt-2">
                <span>Total Incl. VAT</span>
                <span className="font-bold">$23,00</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-full bg-[#9664E6] text-white font-bold text-base mt-2">Proceed to checkout</button>
            <button className="w-full py-3 rounded-full border border-[#9664E6] text-[#9664E6] font-bold text-base mt-2">Wallet Balance</button>
            <button className="w-full py-3 rounded-full border border-[#9664E6] text-[#9664E6] font-bold text-base mt-2">Wallet Balance & Reward Points</button>
            <button className="w-full py-3 rounded-full border border-[#EAEAEA] text-[#9664E6] font-bold text-base mt-2">Save for later</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart; 