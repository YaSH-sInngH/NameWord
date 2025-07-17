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
              {[1,2].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row w-full items-stretch gap-4 py-4 lg:py-6 border-b border-[#EAEAEA]">
                  {/* Top section for mobile - Icon + domain info + delete button */}
                  <div className="flex w-full justify-between items-start sm:hidden">
                    <div className="flex gap-3">
                      <div className="bg-[#F3EDFF] rounded-[12px] w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="22" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM18 7H2V16H18V7ZM3 3V5H5V3H3ZM7 3V5H9V3H7Z" fill="#5E30CC"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#A0A0A0] text-xs mb-0.5">Domain</div>
                        <div className="font-bold text-lg text-[#1C1E40] leading-tight">apple.com</div>
                        <div className="text-xs text-[#9664E6] mt-0.5">You can partially pay with reward points.</div>
                      </div>
                    </div>
                    <button className="p-2">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.168 3.99984H17.3346V5.6665H15.668V16.4998C15.668 16.9601 15.2949 17.3332 14.8346 17.3332H3.16797C2.70774 17.3332 2.33464 16.9601 2.33464 16.4998V5.6665H0.667969V3.99984H4.83464V1.49984C4.83464 1.0396 5.20774 0.666504 5.66797 0.666504H12.3346C12.7949 0.666504 13.168 1.0396 13.168 1.49984V3.99984ZM14.0013 5.6665H4.0013V15.6665H14.0013V5.6665ZM6.5013 8.1665H8.16797V13.1665H6.5013V8.1665ZM9.83463 8.1665H11.5013V13.1665H9.83463V8.1665ZM6.5013 2.33317V3.99984H11.5013V2.33317H6.5013Z" fill="#FC5585"/>
                      </svg>
                    </button>
                  </div>

                  {/* Desktop layout - Left: Icon + domain info */}
                  <div className="hidden sm:flex min-w-[230px] flex-1 gap-4">
                    <div className="bg-[#F3EDFF] rounded-[12px] w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="22" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM18 7H2V16H18V7ZM3 3V5H5V3H3ZM7 3V5H9V3H7Z" fill="#5E30CC"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-[#A0A0A0] text-xs mb-0.5">Domain</div>
                      <div className="font-bold text-lg text-[#1C1E40] leading-tight">apple.com</div>
                      <div className="text-xs text-[#9664E6] mt-0.5">You can partially pay with reward points.</div>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                        <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags for mobile */}
                  <div className="flex gap-2 sm:hidden">
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.easy</span>
                    <span className="bg-[#F7F7FC] rounded-full px-3 py-1 text-xs text-[#1C1E40] border border-[#EAEAEA]">.corp</span>
                  </div>

                  {/* Bottom section for mobile - Price + Period + Renewal */}
                  <div className="flex justify-between items-center sm:hidden">
                    <div className="flex items-center gap-2">
                      <span className="text-[#9664E6] font-bold text-lg leading-tight">$ 0.01</span>
                      <span className="text-[#A3A3A3] font-normal line-through text-base">$64.99</span>
                    </div>
                    <span className="text-[#1C1E40] font-medium text-sm flex items-center gap-2">
                      1 Year 
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.50042 3.78077L7.80028 0.480957L8.74308 1.42376L4.50042 5.66644L0.257812 1.42376L1.20062 0.480957L4.50042 3.78077Z" fill="black"/>
                      </svg>
                    </span>
                  </div>

                  {/* Renewal info for mobile */}
                  <div className="text-xs text-[#A3A3A3] sm:hidden">Renews 08/28/2025 for $100</div>

                  {/* Desktop layout - Middle: Period selector */}
                  <div className="hidden sm:flex items-start min-w-[100px] justify-center">
                    <span className="text-[#1C1E40] font-medium text-sm flex items-center gap-2">1 Year <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50042 3.78077L7.80028 0.480957L8.74308 1.42376L4.50042 5.66644L0.257812 1.42376L1.20062 0.480957L4.50042 3.78077Z" fill="black"/></svg></span>
                  </div>

                  {/* Desktop layout - Right: Price, delete, renewal info */}
                  <div className="hidden sm:flex flex-col items-end min-w-[180px] flex-shrink-0 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#9664E6] font-bold text-lg leading-tight">$ 0.01</span>
                      <span className="text-[#A3A3A3] font-normal line-through text-base ml-1">$64.99</span>
                      <button className="ml-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.168 3.99984H17.3346V5.6665H15.668V16.4998C15.668 16.9601 15.2949 17.3332 14.8346 17.3332H3.16797C2.70774 17.3332 2.33464 16.9601 2.33464 16.4998V5.6665H0.667969V3.99984H4.83464V1.49984C4.83464 1.0396 5.20774 0.666504 5.66797 0.666504H12.3346C12.7949 0.666504 13.168 1.0396 13.168 1.49984V3.99984ZM14.0013 5.6665H4.0013V15.6665H14.0013V5.6665ZM6.5013 8.1665H8.16797V13.1665H6.5013V8.1665ZM9.83463 8.1665H11.5013V13.1665H9.83463V8.1665ZM6.5013 2.33317V3.99984H11.5013V2.33317H6.5013Z" fill="#FC5585"/>
                        </svg>
                      </button>
                    </div>
                    <div className="text-xs text-[#A3A3A3] mt-6">Renews 08/28/2025 for $100</div>
                  </div>
                </div>
              ))}
              {/* Hosting Offer Section */}
              <div className="pt-4 lg:pt-6">
                {/* Tabs */}
                <div className="flex border-b bg-[#9664E617] mb-2">
                  <button className="flex-1 text-[#5D26BC] font-medium border-b-2 border-[#5D26BC] p-2 text-sm lg:text-base">Most popular</button>
                  <button className="flex-1 text-[#5D26BC] font-medium p-2 text-sm lg:text-base">WHOIS privacy</button>
                  <button className="flex-1 text-[#5D26BC] font-medium p-2 text-sm lg:text-base">SSL</button>
                </div>
                {/* Hosting Offer Card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
                  {/* Icon and Text */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="bg-[#F3EDFF] rounded-[12px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 16H20V12H0V16ZM2 13H4V15H2V13ZM0 0V4H20V0H0ZM4 3H2V1H4V3ZM0 10H20V6H0V10ZM2 7H4V9H2V7Z" fill="#5E30CC"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[#1C1E40] text-base mb-1">Need high-performance hosting?</div>
                      <div className="text-xs text-[#505050]">Give your domain name the performance of our Web+ hosting.</div>
                    </div>
                  </div>
                  {/* Price and Add Button */}
                  <div className="flex flex-col sm:items-end w-full sm:w-auto sm:min-w-[160px]">
                    <div className="flex items-center justify-between sm:justify-end w-full mb-1">
                      <span className="text-[#9664E6] font-bold text-base">$ 0.01 <span className="text-[#A3A3A3] font-normal line-through text-base ml-1">$64.99</span></span>
                    </div>
                    <div className="text-xs text-[#A3A3A3] sm:text-right">
                      <div>Excl. VAT</div>
                      <div>The 1st year instead of $8.00 Excl. VAT / month</div>
                    </div>
                    <button className="mt-2 px-6 py-2 rounded-full bg-[#9664E6] text-white font-medium text-sm w-full sm:w-auto">Add</button>
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