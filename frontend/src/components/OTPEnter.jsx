import React, { useRef, useState } from "react";
import mapBaseImg from "../assets/mapBase.png";
import { useNavigate } from 'react-router-dom';

const OTPEnter = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(40);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  // Timer effect
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle OTP input
  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) return;
    const newOtp = [...otp];
    newOtp[idx] = val[val.length - 1];
    setOtp(newOtp);
    if (idx < 3 && val) {
      inputRefs[idx + 1].current.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs[idx - 1].current.focus();
    }
  };

  const handleResend = () => {
    setTimer(40);
    setOtp(["", "", "", ""]);
    inputRefs[0].current.focus();
  };

  return (
    <div className="w-[1440px] min-h-screen bg-gradient-to-br from-[rgba(94,48,204,0.05)] to-[rgba(9,135,255,0.05)] flex flex-col items-center relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center w-[1376px] h-6 mt-6 absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <span className="text-base font-bold text-[#1C1E40]">Nameword</span>
        <button className="flex items-center gap-2 text-[#1C1E40] text-base font-medium hover:underline" onClick={()=> navigate('/otpverify')}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 15l-5-5 5-5" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Go back
        </button>
      </div>
      {/* Map + OTP Card Section */}
      <div className="relative w-[1376px] h-[471px] mt-[200px]">
        {/* Map Image */}
        <img
          src={mapBaseImg}
          alt="Map Background"
          className="block w-full h-full object-contain rounded-[24px]"
        />
        {/* OTP Card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-40px] flex flex-col items-center w-[550px] bg-white rounded-[24px] shadow-lg z-10 py-[48px] px-[40px] gap-6">
          {/* Icon */}
          <div className="w-[56px] h-[56px] bg-[#6637D0] rounded-2xl flex items-center justify-center mb-2">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="68" height="68" rx="16" fill="#6637D0"/>
            <path d="M25.7831 24.826L34 23L42.2169 24.826C42.6745 24.9277 43 25.3335 43 25.8022V35.7889C43 37.795 41.9974 39.6684 40.3282 40.7812L34 45L27.6718 40.7812C26.0026 39.6684 25 37.795 25 35.7889V25.8022C25 25.3335 25.3255 24.9277 25.7831 24.826ZM27 26.6043V35.7889C27 37.1263 27.6684 38.3752 28.7812 39.1171L34 42.5963L39.2188 39.1171C40.3316 38.3752 41 37.1263 41 35.7889V26.6043L34 25.0488L27 26.6043ZM34 33C32.6193 33 31.5 31.8807 31.5 30.5C31.5 29.1193 32.6193 28 34 28C35.3807 28 36.5 29.1193 36.5 30.5C36.5 31.8807 35.3807 33 34 33ZM29.5275 38C29.7762 35.75 31.6837 34 34 34C36.3163 34 38.2238 35.75 38.4725 38H29.5275Z" fill="white"/>
            </svg>
          </div>
          {/* Title & Subtitle */}
          <h2 className="text-2xl font-bold text-black mb-1 text-center">Enter OTP code</h2>
          <p className="text-base text-[#505050] text-center mb-1">
            Enter the 4-digit code sent to <span className="text-[#6637D0] font-medium">example@email.com</span>
          </p>
          {/* Timer */}
          <div className="w-full flex justify-center mb-2">
            <span className="text-xs text-[#505050] bg-[#F7F7FC] rounded-full px-4 py-1 font-medium">Code expires in: 00:{timer.toString().padStart(2, "0")}</span>
          </div>
          {/* OTP Inputs */}
          <div className="flex justify-center gap-4 w-full mb-2">
            {otp.map((val, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={e => handleChange(e, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-[64px] h-[64px] text-3xl text-center border-2 border-[#6637D0] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#9664E6] font-bold text-[#1C1E40] bg-white transition-all"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          {/* Resend Link */}
          <div className="w-full flex justify-between items-center text-xs text-[#505050]">
            <span>Didn't get the email?</span>
            <button
              className="text-[#6637D0] font-medium hover:underline disabled:opacity-50"
              onClick={handleResend}
              disabled={timer > 0}
            >
              Resend code
            </button>
          </div>
          {/* Verify Button */}
          <button className="w-full h-[48px] rounded-full bg-[#6637D0] text-white font-semibold text-base mt-2 shadow-sm hover:opacity-90 transition-opacity" onClick={()=> navigate('/login')}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPEnter; 