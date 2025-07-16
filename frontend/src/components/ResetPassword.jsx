import React, { useState } from "react";
import mapBaseImg from "../assets/mapBase.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-[1440px] min-h-screen bg-gradient-to-br from-[rgba(94,48,204,0.05)] to-[rgba(9,135,255,0.05)] flex flex-col items-center relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center w-[1376px] h-6 mt-6 absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <span className="text-base font-bold text-[#1C1E40]">Nameword</span>
        <button className="flex items-center gap-2 text-[#1C1E40] text-base font-medium hover:underline">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 15l-5-5 5-5" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Go back
        </button>
      </div>

      {/* Map + Reset Password Card Section */}
      <div className="relative w-[1376px] h-[471px] mt-[240px]">
        {/* Map Image */}
        <img
          src={mapBaseImg}
          alt="Map Background"
          className="block w-full h-full object-contain rounded-[24px]"
        />
        {/* Reset Password Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] flex flex-col w-[553px] h-[581px] bg-white rounded-[32px] shadow-lg z-10 pt-[40px] pr-[24px] pl-[24px] pb-[40px] gap-[64px] items-center">
          {/* Reset Password Section */}
          <div className="flex flex-col items-center w-full">
            {/* Icon */}
            <div className="w-[68px] h-[68px] bg-[#6637D0] rounded-2xl flex items-center justify-center mb-4">
              <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="68" height="68" rx="16" fill="#6637D0"/>
                <path d="M40 30H42C42.5523 30 43 30.4477 43 31V43C43 43.5523 42.5523 44 42 44H26C25.4477 44 25 43.5523 25 43V31C25 30.4477 25.4477 30 26 30H28V29C28 25.6863 30.6863 23 34 23C37.3137 23 40 25.6863 40 29V30ZM27 32V42H41V32H27ZM33 36H35V38H33V36ZM29 36H31V38H29V36ZM37 36H39V38H37V36ZM38 30V29C38 26.7909 36.2091 25 34 25C31.7909 25 30 26.7909 30 29V30H38Z" fill="white"/>
              </svg>
            </div>
            {/* Title & Subtitle */}
            <h2 className="text-2xl font-bold text-black mb-2">Create New Password</h2>
            <p className="text-[#505050] text-base mb-6 text-center">
              Must be atleast 8 characters
            </p>
            {/* Password Fields */}
            <div className="w-full flex flex-col gap-6">
              {/* New Password Field */}
              <div className="bg-white border border-[#EAEAEA] rounded-[16px] px-6 py-4 flex flex-col gap-2 w-full">
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full h-[28px] text-base text-black bg-transparent outline-none border-none p-0"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 flex items-center justify-center"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={0}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {/* Eye Icon (with slash for hidden) */}
                    {showPassword ? (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="2"/></svg>
                    ) : (
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4796 9.20217L16.8427 7.83905C16.9419 8.21011 17 8.59805 17 9.00005C17 11.4814 14.9814 13.5 12.5 13.5C12.098 13.5 11.7101 13.4419 11.339 13.3427L12.7021 11.9796C14.1926 11.878 15.3779 10.6926 15.4796 9.20217ZM24.4055 8.63573C24.3132 8.4698 23.0049 6.17723 20.4474 4.23436L19.3559 5.3258C21.2208 6.69698 22.4024 8.29617 22.8676 9.00117C21.9787 10.3547 18.4916 15 12.5 15C11.6015 15 10.766 14.8851 9.97981 14.7017L8.74738 15.9342C9.88044 16.2816 11.1258 16.5 12.5 16.5C20.3512 16.5 24.2437 9.65555 24.4055 9.36436C24.5315 9.13767 24.5315 8.86242 24.4055 8.63573ZM21.2803 1.2803L4.78025 17.7803C4.63381 17.9267 4.44181 18 4.25 18C4.05819 18 3.86619 17.9267 3.71975 17.7803C3.42669 17.4872 3.42669 17.0127 3.71975 16.7198L5.819 14.6205C2.42525 12.5717 0.700812 9.5558 0.5945 9.36436C0.4685 9.13767 0.4685 8.86223 0.5945 8.63555C0.756312 8.34455 4.64881 1.50005 12.5 1.50005C14.5301 1.50005 16.2884 1.96317 17.7916 2.64792L20.2197 0.219797C20.5128 -0.0732656 20.9874 -0.0732656 21.2803 0.219797C21.5731 0.512859 21.5733 0.987422 21.2803 1.2803ZM6.93744 13.5021L8.83625 11.6033C8.31181 10.8675 8 9.97036 8 9.00005C8 6.51867 10.0186 4.50005 12.5 4.50005C13.4703 4.50005 14.3675 4.81186 15.1033 5.33611L16.6387 3.80067C15.4256 3.31486 14.0471 3.00005 12.5 3.00005C6.50844 3.00005 3.02131 7.64536 2.13256 8.99892C2.69694 9.8543 4.31919 12.0195 6.93744 13.5021ZM9.92506 10.5143L14.0142 6.42511C13.5682 6.16167 13.0546 6.00005 12.5 6.00005C10.8459 6.00005 9.5 7.34592 9.5 9.00005C9.5 9.55467 9.66162 10.0682 9.92506 10.5143Z" fill="black"/>
                        </svg>
                        
                    )}
                  </button>
                </div>
              </div>
              {/* Confirm Password Field */}
              <div className="bg-white border border-[#EAEAEA] rounded-[16px] px-6 py-4 flex flex-col gap-2 w-full">
                <div className="relative w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full h-[28px] text-base text-black bg-transparent outline-none border-none p-0"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 flex items-center justify-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={0}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {/* Eye Icon (with slash for hidden) */}
                    {showConfirmPassword ? (
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="2"/></svg>
                    ) : (
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4796 9.20217L16.8427 7.83905C16.9419 8.21011 17 8.59805 17 9.00005C17 11.4814 14.9814 13.5 12.5 13.5C12.098 13.5 11.7101 13.4419 11.339 13.3427L12.7021 11.9796C14.1926 11.878 15.3779 10.6926 15.4796 9.20217ZM24.4055 8.63573C24.3132 8.4698 23.0049 6.17723 20.4474 4.23436L19.3559 5.3258C21.2208 6.69698 22.4024 8.29617 22.8676 9.00117C21.9787 10.3547 18.4916 15 12.5 15C11.6015 15 10.766 14.8851 9.97981 14.7017L8.74738 15.9342C9.88044 16.2816 11.1258 16.5 12.5 16.5C20.3512 16.5 24.2437 9.65555 24.4055 9.36436C24.5315 9.13767 24.5315 8.86242 24.4055 8.63573ZM21.2803 1.2803L4.78025 17.7803C4.63381 17.9267 4.44181 18 4.25 18C4.05819 18 3.86619 17.9267 3.71975 17.7803C3.42669 17.4872 3.42669 17.0127 3.71975 16.7198L5.819 14.6205C2.42525 12.5717 0.700812 9.5558 0.5945 9.36436C0.4685 9.13767 0.4685 8.86223 0.5945 8.63555C0.756312 8.34455 4.64881 1.50005 12.5 1.50005C14.5301 1.50005 16.2884 1.96317 17.7916 2.64792L20.2197 0.219797C20.5128 -0.0732656 20.9874 -0.0732656 21.2803 0.219797C21.5731 0.512859 21.5733 0.987422 21.2803 1.2803ZM6.93744 13.5021L8.83625 11.6033C8.31181 10.8675 8 9.97036 8 9.00005C8 6.51867 10.0186 4.50005 12.5 4.50005C13.4703 4.50005 14.3675 4.81186 15.1033 5.33611L16.6387 3.80067C15.4256 3.31486 14.0471 3.00005 12.5 3.00005C6.50844 3.00005 3.02131 7.64536 2.13256 8.99892C2.69694 9.8543 4.31919 12.0195 6.93744 13.5021ZM9.92506 10.5143L14.0142 6.42511C13.5682 6.16167 13.0546 6.00005 12.5 6.00005C10.8459 6.00005 9.5 7.34592 9.5 9.00005C9.5 9.55467 9.66162 10.0682 9.92506 10.5143Z" fill="black"/>
                        </svg>
                        
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Button Section */}
          <div className="w-full flex flex-col items-center">
            <button
              className="w-[505px] h-[56px] rounded-full bg-gradient-to-r from-[#9664E6] to-[#5E30CC] text-white font-medium text-base leading-4 hover:opacity-90 transition-opacity mt-2"
            >
              Save new password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword; 