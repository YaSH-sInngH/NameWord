import React, { useState } from "react";
import mapBaseImg from "../assets/mapBase.png";
import { useNavigate } from 'react-router-dom';
const OTPVerify = () => {
  const [mode, setMode] = useState("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-[1440px] min-h-screen bg-gradient-to-br from-[rgba(94,48,204,0.05)] to-[rgba(9,135,255,0.05)] flex flex-col items-center relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center w-[1376px] h-6 mt-6 absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <span className="text-base font-bold text-[#1C1E40]">Nameword</span>
        <button className="flex items-center gap-2 text-[#1C1E40] text-base font-medium hover:underline" onClick={()=> navigate('/signup')}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 15l-5-5 5-5" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Go back
        </button>
      </div>

      {/* Map + OTP Card Section */}
      <div className="relative w-[1376px] h-[471px] mt-[240px]">
        {/* Map Image */}
        <img
          src={mapBaseImg}
          alt="Map Background"
          className="block w-full h-full object-contain rounded-[24px]"
        />
        {/* OTP Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] flex flex-col w-[553px] h-[585px] bg-white rounded-[32px] shadow-lg z-10 pt-[40px] pr-[24px] pl-[24px] pb-[40px] gap-[85px] items-center">
          {/* Verification Section */}
          <div className="flex flex-col items-center w-full">
            {/* Icon */}
            <div className="w-[68px] h-[68px] bg-[#6637D0] rounded-2xl flex items-center justify-center mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 68 68">
                <rect width="68" height="68" rx="16" fill="#6637D0"/>
                <path d="M25.7831 24.826L34 23L42.2169 24.826C42.6745 24.9277 43 25.3335 43 25.8022V35.7889C43 37.795 41.9974 39.6684 40.3282 40.7812L34 45L27.6718 40.7812C26.0026 39.6684 25 37.795 25 35.7889V25.8022C25 25.3335 25.3255 24.9277 25.7831 24.826ZM27 26.6043V35.7889C27 37.1263 27.6684 38.3752 28.7812 39.1171L34 42.5963L39.2188 39.1171C40.3316 38.3752 41 37.1263 41 35.7889V26.6043L34 25.0488L27 26.6043ZM34 33C32.6193 33 31.5 31.8807 31.5 30.5C31.5 29.1193 32.6193 28 34 28C35.3807 28 36.5 29.1193 36.5 30.5C36.5 31.8807 35.3807 33 34 33ZM29.5275 38C29.7762 35.75 31.6837 34 34 34C36.3163 34 38.2238 35.75 38.4725 38H29.5275Z" fill="white"/>
              </svg>
            </div>
            {/* Title & Subtitle */}
            <h2 className="text-2xl font-bold text-black mb-2">OTP Verification</h2>
            <p className="text-[#505050] text-base mb-6 text-center">
              Enter your {mode === "phone" ? "phone number" : "email"} to receive a verification code.
            </p>
            {/* Mode Switch */}
            <div className="flex gap-4 mb-6">
              <button
                className={`w-[89px] h-10 rounded-full font-medium text-base transition-all ${mode === "phone" ? "bg-[#1C1E40] text-white" : "bg-[#F7F7FC] text-[#1C1E40]"}`}
                onClick={() => setMode("phone")}
              >
                Phone
              </button>
              <button
                className={`w-[89px] h-10 rounded-full font-medium text-base transition-all ${mode === "email" ? "bg-[#1C1E40] text-white" : "bg-[#F7F7FC] text-[#1C1E40]"}`}
                onClick={() => setMode("email")}
              >
                Email
              </button>
            </div>
            {/* Input Fields */}
            {mode === "phone" ? (
              <div className="w-full flex flex-col gap-4">
                <label className="text-sm font-medium text-[#1C1E40] text-left">Phone number</label>
                <div className="flex w-full">
                  {/* Country code selector */}
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 border border-[#EAEAEA] rounded-l-lg bg-white h-[48px] min-w-[90px] focus:outline-none"
                  >
                    <img src="https://flagcdn.com/us.svg" alt="US" className="w-6 h-4 rounded" />
                    <span className="text-base text-[#1C1E40]">+1</span>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {/* Phone number input */}
                  <input
                    type="text"
                    placeholder="34 76732029"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="flex-1 px-4 border-t border-b border-r border-[#EAEAEA] rounded-r-lg h-[48px] text-base focus:outline-none focus:border-[#7B6ED6]"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-4">
                <label className="text-sm font-medium text-[#1C1E40] text-left">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-lg text-base focus:outline-none focus:border-[#7B6ED6]"
                />
              </div>
            )}
          </div>
          {/* Button Section */}
          <div className="w-full flex flex-col items-center">
            <button
              className="w-[505px] h-[56px] rounded-full bg-gradient-to-r from-[#9664E6] to-[#5E30CC] text-white font-medium text-base leading-4 hover:opacity-90 transition-opacity"
              onClick={()=> navigate('/otpenter')}
            >
              Get code →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerify; 