import React from "react";
import { NewNavbar } from "./NewNavbar";

const UserAgreement = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[1114px] bg-[#F7F7FC] flex flex-col items-center mx-auto" style={{opacity: 1}}>
      <NewNavbar />
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[1365px] bg-white rounded-[16px] mt-[40px] sm:mt-[60px] lg:mt-[80px] flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] px-[16px] sm:px-[20px] lg:px-[24px] pt-[40px] sm:pt-[50px] lg:pt-[60px] pb-[40px] sm:pb-[50px] lg:pb-[60px]" style={{opacity: 1}}>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1C1E40] mb-2 sm:mb-4">User Agreement</h1>
          <ul className="list-decimal ml-4 sm:ml-6 text-[#1C1E40] text-sm sm:text-base font-medium flex flex-col gap-3 sm:gap-4">
            <li>
              <span className="font-bold">Responsibility for Approvals, Licenses, and Permits</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">Arranging approvals, licenses, or permits for the importation of products is the sole responsibility of the client.</p>
            </li>
            <li>
              <span className="font-bold">Service Charges</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">Rates charged by ChinaDirect Sourcing depend on the size, scope, and complexity of your requirements.</p>
            </li>
            <li>
              <span className="font-bold">Payment Terms for Stages</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">If no additional investment has been made to commence a stage, the balance payment must be settled before the results are released. For stages extending beyond one month, invoices will be issued monthly.</p>
            </li>
            <li>
              <span className="font-bold">Adjustments for Additional Work</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">If a stage requires more work than initially anticipated, ChinaDirect will provide an interim report and an estimate of the additional investment needed to complete the stage.</p>
            </li>
            <li>
              <span className="font-bold">Pre-Payment for Special Requirements</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">Pre-payment may be applied if a specific requirement prolongs the usual duration for completing a stage.</p>
            </li>
            <li>
              <span className="font-bold">Overdue Accounts</span>
              <p className="font-normal text-[#505050] ml-2 mt-1">Payment is due within seven days from the date of the invoice. If payment is not received by this date, ChinaDirect will cease all work on the project until full payment is made, and may invoice any credit facility provided. In the final Production & Delivery Management stage, payment must be settled prior to local delivery to avoid detention charges and secure immediate release of goods.</p>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 rounded-full border border-[#C7C7C7] text-[#505050] bg-white font-medium text-sm sm:text-base">Cancel</button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 rounded-full bg-[#6637D0] text-white font-medium text-sm sm:text-base">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement; 