import React from "react";
import NewNavbar from "./NewNavbar";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Cart" />
      <main className="w-full max-w-[1376px] mx-auto py-4 lg:py-8 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Cart Items Section */}
          <div className="bg-white border border-[#EAEAEA] rounded-[16px] w-full lg:w-[880px] p-4 lg:p-8 flex flex-col lg:min-h-[681px]">
            <h1 className="text-xl lg:text-2xl font-bold text-[#1C1E40] mb-4 lg:mb-6">Your Cart</h1>
            
            {/* Cart Items */}
            <div className="flex flex-col gap-4 lg:gap-6 flex-1">
              {/* Cart Item 1 */}
              <div className="flex flex-col sm:flex-row gap-4 border-b border-[#EAEAEA] pb-4 lg:pb-6">
                <div className="flex gap-3 lg:gap-4 items-start flex-1">
                  <div className="bg-[#F3EDFF] rounded-[12px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-[#9664E6] text-xl lg:text-2xl">dns</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#1C1E40] text-sm lg:text-base">Domain</div>
                    <div className="font-bold text-base lg:text-lg text-[#1C1E40]">apple.com</div>
                    <div className="text-xs text-[#9664E6] mt-1">You can partially pay with reward points.</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                      <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2 sm:min-w-[140px] sm:flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1C1E40] font-medium text-sm lg:text-base">1 Year</span>
                    <span className="material-icons text-[#A3A3A3] text-base">expand_more</span>
                  </div>
                  <div className="text-[#9664E6] font-bold text-base lg:text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-sm lg:text-base ml-1">$64.99</span></div>
                  <div className="text-xs text-[#A3A3A3]">Renews 08/28/2025 for $100</div>
                  <button className="mt-2 self-start sm:self-end">
                    <span className="material-icons text-[#F43F5E]">delete</span>
                  </button>
                </div>
              </div>
              
              {/* Cart Item 2 */}
              <div className="flex flex-col sm:flex-row gap-4 border-b border-[#EAEAEA] pb-4 lg:pb-6">
                <div className="flex gap-3 lg:gap-4 items-start flex-1">
                  <div className="bg-[#F3EDFF] rounded-[12px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-[#9664E6] text-xl lg:text-2xl">dns</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#1C1E40] text-sm lg:text-base">Domain</div>
                    <div className="font-bold text-base lg:text-lg text-[#1C1E40]">apple.com</div>
                    <div className="text-xs text-[#9664E6] mt-1">You can partially pay with reward points.</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                      <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2 sm:min-w-[140px] sm:flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1C1E40] font-medium text-sm lg:text-base">1 Year</span>
                    <span className="material-icons text-[#A3A3A3] text-base">expand_more</span>
                  </div>
                  <div className="text-[#9664E6] font-bold text-base lg:text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-sm lg:text-base ml-1">$64.99</span></div>
                  <div className="text-xs text-[#A3A3A3]">Renews 08/28/2025 for $100</div>
                  <button className="mt-2 self-start sm:self-end">
                    <span className="material-icons text-[#F43F5E]">delete</span>
                  </button>
                </div>
              </div>
              
              {/* Hosting Offer Section */}
              <div className="pt-4 lg:pt-6">
                <div className="flex gap-4 lg:gap-8 items-center border-b border-[#EAEAEA] pb-2 overflow-x-auto">
                  <div className="flex gap-4 lg:gap-8">
                    <button className="text-[#9664E6] font-medium border-b-2 border-[#9664E6] pb-2 whitespace-nowrap text-sm lg:text-base">Most popular</button>
                    <button className="text-[#A3A3A3] font-medium pb-2 whitespace-nowrap text-sm lg:text-base">WHOIS privacy</button>
                    <button className="text-[#A3A3A3] font-medium pb-2 whitespace-nowrap text-sm lg:text-base">SSL</button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex gap-3 lg:gap-4 items-start flex-1">
                    <div className="bg-[#F3EDFF] rounded-[12px] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-[#9664E6] text-lg lg:text-xl">dns</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[#1C1E40] text-sm lg:text-base">Need high-performance hosting?</div>
                      <div className="text-xs text-[#505050] mt-1">Give your domain name the performance of our Web+ hosting.</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 sm:min-w-[140px] sm:flex-shrink-0">
                    <div className="text-[#9664E6] font-bold text-base lg:text-lg">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-sm lg:text-base ml-1">$64.99</span></div>
                    <div className="text-xs text-[#A3A3A3]">Excl. VAT<br/>The 1st year instead of $8.00 Excl. VAT / month</div>
                    <button className="mt-2 px-4 lg:px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm self-start sm:self-end">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary Section */}
          <div className="bg-white border border-[#EAEAEA] rounded-[12px] w-full lg:w-[400px] p-4 lg:p-6 flex flex-col gap-4 lg:gap-8 lg:min-h-[1058px]">
            <h2 className="text-lg lg:text-xl font-bold text-[#1C1E40]">Order Summary</h2>
            
            <div className="flex flex-col gap-4 lg:gap-6 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[#1C1E40] font-medium underline cursor-pointer text-sm lg:text-base">2 items</span>
                <span className="material-icons text-[#F43F5E] cursor-pointer">delete</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#1C1E40] text-sm lg:text-base">Subtotal</span>
                <span className="text-[#1C1E40] font-bold text-sm lg:text-base">$17,00</span>
              </div>
              
              <div>
                <a href="#" className="text-[#9664E6] text-xs underline">Have a promo code?</a>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#1C1E40] text-sm lg:text-base">Wallet Balance</span>
                <span className="text-[#1C1E40] font-bold text-sm lg:text-base">$5.000</span>
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="accent-[#9664E6] mt-1 flex-shrink-0" />
                <span className="text-xs text-[#505050] leading-relaxed">Use Wallet Balance First <span className="italic">(Pay Remaining via DynoPay)</span></span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#1C1E40] text-sm lg:text-base">Reward points</span>
                <span className="text-[#1C1E40] font-bold text-sm lg:text-base">500</span>
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                <input type="text" value="10" readOnly className="w-12 lg:w-16 px-2 py-1 border border-[#EAEAEA] rounded text-[#1C1E40] text-sm flex-shrink-0" />
                <span className="text-xs text-[#505050] flex-1 min-w-0">Apply Reward Points</span>
                <input type="checkbox" checked readOnly className="accent-[#9664E6] flex-shrink-0" />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                  <span>Taxes & Fees</span>
                  <a href="#" className="text-[#9664E6] underline">Edit</a>
                </div>
                
                <div className="flex justify-between items-center text-[#1C1E40]">
                  <span className="text-sm lg:text-base">Total Excl. VAT</span>
                  <span className="font-bold text-sm lg:text-base">$18,00</span>
                </div>
                
                <div className="flex justify-between items-center text-[#1C1E40]">
                  <span className="text-sm lg:text-base">Reward Points</span>
                  <span className="font-bold text-sm lg:text-base">10</span>
                </div>
                
                <div className="flex justify-between items-center text-[#1C1E40]">
                  <span className="text-sm lg:text-base">VAT (20%)</span>
                  <span className="font-bold text-sm lg:text-base">$4,00</span>
                </div>
                
                <div className="flex justify-between items-center text-[#1C1E40] text-base lg:text-lg mt-2 pt-2 border-t border-[#EAEAEA]">
                  <span className="font-semibold">Total Incl. VAT</span>
                  <span className="font-bold">$23,00</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 lg:gap-3 mt-4">
                <button className="w-full py-2 lg:py-3 rounded-full bg-[#9664E6] text-white font-bold text-sm lg:text-base">Proceed to checkout</button>
                <button className="w-full py-2 lg:py-3 rounded-full border border-[#9664E6] text-[#9664E6] font-bold text-sm lg:text-base">Wallet Balance</button>
                <button className="w-full py-2 lg:py-3 rounded-full border border-[#9664E6] text-[#9664E6] font-bold text-sm lg:text-base">Wallet Balance & Reward Points</button>
                <button className="w-full py-2 lg:py-3 rounded-full border border-[#EAEAEA] text-[#9664E6] font-bold text-sm lg:text-base">Save for later</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart; 