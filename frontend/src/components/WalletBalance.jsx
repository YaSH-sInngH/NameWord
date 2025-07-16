import React from "react";
import NewNavbar from "./NewNavbar";
import Sidebar from "./Sidebar";

const transactions = [
  { id: "#245678", client: "Jackson Bennet", date: "08.04.2024", paid: "Today", total: "$118.43" },
  { id: "#245678", client: "Jackson Bennet", date: "06.04.2024", paid: "25.04.2024", total: "$118.43" },
  { id: "#245678", client: "Jackson Bennet", date: "08.04.2024", paid: "Yesterday", total: "$118.43" },
  { id: "#245678", client: "Jackson Bennet", date: "20.04.2024", paid: "20.04.2024", total: "$118.43" },
  { id: "#245678", client: "Jackson Bennet", date: "20.04.2024", paid: "20.04.2024", total: "$118.43" },
];

const WalletBalance = () => (
  <div className="w-[1440px] h-[1024px] bg-[#F7F7FC] relative overflow-x-hidden">
    <NewNavbar activeSection="Wallet & Billing" />
    <Sidebar />
    <main className="ml-[250px] w-[1188px] pt-10 px-8 pb-10 flex flex-col gap-8 min-h-[944px]">
      {/* Greeting */}
      <div className="mb-2">
        <h1 className="text-[28px] font-bold text-[#1C1E40] leading-[36px]">Hi, Derek!</h1>
        <p className="text-[#505050] text-base mt-1">Check your current wallet balance and reward points!</p>
      </div>
      {/* Cards */}
      <div className="flex gap-10 mb-4">
        {/* Wallet Balance Card */}
        <div className="w-[554.5px] h-[276px] rounded-[20px] bg-gradient-to-r from-[#8B5CF6] to-[#5E30CC] p-6 flex flex-col justify-between relative overflow-hidden opacity-100 gap-[10px]">
          {/* Left SVG */}
          <div className="absolute left-0 top-0 h-full z-0 opacity-40 pointer-events-none">
            <svg width="110" height="150" viewBox="0 0 110 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M119.325 203.056C94.8545 207.158 69.7278 202.2 48.6498 189.11C27.5718 176.02 11.9878 155.695 4.81593 131.942C-2.35594 108.19 -0.623922 82.6371 9.68768 60.0693C19.9993 37.5015 38.1834 19.4662 60.835 9.34022C83.4867 -0.785724 109.053 -2.30786 132.746 5.05882C156.439 12.4255 176.635 28.1758 189.551 49.3606C202.468 70.5455 207.219 95.712 202.917 120.148C198.614 144.584 185.551 166.614 166.175 182.112L145.138 155.812C158.117 145.431 166.866 130.675 169.748 114.308C172.63 97.9399 169.447 81.083 160.796 66.893C152.144 52.7031 138.617 42.1533 122.747 37.219C106.877 32.2847 89.7521 33.3042 74.5796 40.0867C59.4071 46.8693 47.2272 58.9496 40.3203 74.0659C33.4134 89.1821 32.2533 106.298 37.0571 122.208C41.861 138.118 52.2993 151.731 66.4177 160.499C80.5361 169.267 97.3664 172.588 113.757 169.841L119.325 203.056Z" fill="#3E239E" fillOpacity="0.24"/>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between gap-[10px]">
            <span className="text-white text-lg font-medium">Wallet Balance</span>
            <span className="text-white text-5xl font-bold">$ 500</span>
            <button className="w-[335px] h-[48px] rounded-[24px] bg-white text-[#5E30CC] font-bold text-base flex items-center justify-center">Top Up</button>
          </div>
          <div className="absolute right-4 bottom-0 w-1/2 h-full pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="90" r="70" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
              <circle cx="180" cy="90" r="40" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
            </svg>
          </div>
        </div>
        {/* Reward Points Card */}
        <div className="w-[554.5px] h-[276px] rounded-[20px] bg-gradient-to-r from-[#7B6ED6] to-[#30A1FF] p-6 flex flex-col justify-between relative overflow-hidden opacity-100 gap-[10px]">
          {/* Left SVG */}
          <div className="absolute left-0 top-0 h-full z-0 opacity-40 pointer-events-none">
            <svg width="110" height="150" viewBox="0 0 110 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M119.325 203.056C94.8545 207.158 69.7278 202.2 48.6498 189.11C27.5718 176.02 11.9878 155.695 4.81593 131.942C-2.35594 108.19 -0.623922 82.6371 9.68768 60.0693C19.9993 37.5015 38.1834 19.4662 60.835 9.34022C83.4867 -0.785724 109.053 -2.30786 132.746 5.05882C156.439 12.4255 176.635 28.1758 189.551 49.3606C202.468 70.5455 207.219 95.712 202.917 120.148C198.614 144.584 185.551 166.614 166.175 182.112L145.138 155.812C158.117 145.431 166.866 130.675 169.748 114.308C172.63 97.9399 169.447 81.083 160.796 66.893C152.144 52.7031 138.617 42.1533 122.747 37.219C106.877 32.2847 89.7521 33.3042 74.5796 40.0867C59.4071 46.8693 47.2272 58.9496 40.3203 74.0659C33.4134 89.1821 32.2533 106.298 37.0571 122.208C41.861 138.118 52.2993 151.731 66.4177 160.499C80.5361 169.267 97.3664 172.588 113.757 169.841L119.325 203.056Z" fill="#3E239E" fillOpacity="0.24"/>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between gap-[10px]">
            <span className="text-white text-lg font-medium">Reward Points</span>
            <span className="text-white text-5xl font-bold">500</span>
            <button className="w-[335px] h-[48px] rounded-[24px] bg-white text-[#30A1FF] font-bold text-base flex items-center justify-center">Redeem</button>
          </div>
          <div className="absolute right-4 bottom-0 w-1/2 h-full pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="90" r="70" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
              <circle cx="180" cy="90" r="40" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
      {/* Recent Transactions Table */}
      <div className="bg-white rounded-[16px] p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#1C1E40] mb-4">Recent Transactions</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-black text-base font-bold font-northuraExpanded h-[64px]">
              <th className="py-2">Invoice ID <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C4.1989 0 4.3897 0.0790201 4.53032 0.219668L7.53032 3.21967C7.8232 3.51256 7.8232 3.98744 7.53032 4.28033C7.23745 4.5732 6.76255 4.5732 6.46968 4.28033L4 1.81066L1.53033 4.28033C1.23744 4.5732 0.762565 4.5732 0.469668 4.28033C0.176778 3.98744 0.176778 3.51256 0.469668 3.21967L3.46968 0.219668C3.6103 0.0790201 3.8011 0 4 0ZM0.469668 7.71968C0.762565 7.4268 1.23744 7.4268 1.53033 7.71968L4 10.1894L6.46968 7.71968C6.76255 7.4268 7.23745 7.4268 7.53032 7.71968C7.8232 8.01255 7.8232 8.48745 7.53032 8.78033L4.53032 11.7803C4.23745 12.0732 3.76255 12.0732 3.46968 11.7803L0.469668 8.78033C0.176778 8.48745 0.176778 8.01255 0.469668 7.71968Z" fill="black"/>=</svg></span></th>
              <th className="py-2">Client</th>
              <th className="py-2">Date</th>
              <th className="py-2">Paid Date <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C4.1989 0 4.3897 0.0790201 4.53032 0.219668L7.53032 3.21967C7.8232 3.51256 7.8232 3.98744 7.53032 4.28033C7.23745 4.5732 6.76255 4.5732 6.46968 4.28033L4 1.81066L1.53033 4.28033C1.23744 4.5732 0.762565 4.5732 0.469668 4.28033C0.176778 3.98744 0.176778 3.51256 0.469668 3.21967L3.46968 0.219668C3.6103 0.0790201 3.8011 0 4 0ZM0.469668 7.71968C0.762565 7.4268 1.23744 7.4268 1.53033 7.71968L4 10.1894L6.46968 7.71968C6.76255 7.4268 7.23745 7.4268 7.53032 7.71968C7.8232 8.01255 7.8232 8.48745 7.53032 8.78033L4.53032 11.7803C4.23745 12.0732 3.76255 12.0732 3.46968 11.7803L0.469668 8.78033C0.176778 8.48745 0.176778 8.01255 0.469668 7.71968Z" fill="black"/>=</svg></span></th>
              <th className="py-2">Total</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-t border-[#F0F0F0] text-[#1C1E40] text-base">
                <td className="py-3 font-semibold">{tx.id}</td>
                <td className="py-3">{tx.client}</td>
                <td className="py-3">{tx.date}</td>
                <td className="py-3">{tx.paid}</td>
                <td className="py-3">{tx.total}</td>
                <td className="py-3 text-right">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F7FC]">
                    <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#9664E6"/>
                    <circle cx="16" cy="4" r="4" fill="#9664E6"/>
                    <circle cx="28" cy="4" r="4" fill="#9664E6"/>
                    </svg>
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

export default WalletBalance; 