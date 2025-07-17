import React, { useState } from "react";
import NewNavbar from "./NewNavbar";
// Sidebar import removed

const Profile = () => {

  // Example toggles for switches
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(true);
  const [theme, setTheme] = useState(true);
  const [geo, setGeo] = useState(true);
  const [consent, setConsent] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Profile" />
      {/* Sidebar removed, center content */}
      <main className="w-full max-w-[1376px] mx-auto py-4 md:py-8 px-4 md:px-8 flex flex-col gap-4 md:gap-8">
        {/* 1. My Profile Title */}
        <div className="w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C1E40] mb-2">My Profile</h1>
        </div>

        {/* 2. Profile Info - Figma-aligned, stacked fields below photo */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-8 flex flex-col gap-6 shadow-sm relative" style={{ minHeight: '27rem' }}>
          {/* Top section: Profile + Points + Buttons + Export */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 w-full">
            {/* Left: Profile image, label, points, buttons */}
            <div className="flex flex-col items-start gap-3 min-w-[180px] w-full md:w-auto">
              <span className="text-xs text-[#505050] mb-1 ml-1">Profile picture</span>
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <img src="/profiles/profile7.jpg" alt="Profile" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#F3EDFF]" />
                {/* Star badge overlay */}
                <span className="absolute -bottom-2 -right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#FFE066"/>
                    <path d="M12 6l1.902 3.854 4.26.619-3.081 3.003.728 4.245L12 15.347l-3.809 2.001.728-4.245-3.081-3.003 4.26-.619L12 6z" fill="#FFD600"/>
                  </svg>
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl md:text-3xl font-bold text-[#1C1E40]">500</span>
                <span className="text-xs md:text-sm text-[#505050]">Accrued points</span>
              </div>
              <div className="flex gap-2 mt-3 w-full">
                <button className="px-4 py-2 rounded-full bg-[#F3EDFF] text-[#5E30CC] font-medium text-sm w-full md:w-auto">Change picture</button>
                <button className="px-4 py-2 rounded-full bg-[#F43F5E] text-white font-medium text-sm w-full md:w-auto">Delete picture</button>
              </div>
              {/* Export row for mobile only */}
              <div className="flex md:hidden flex-row items-center justify-center gap-2 mt-4 w-full">
                <div className="p-3 bg-[#EAEAEA] rounded-lg flex items-center justify-center">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.69583 16.8527L4.10999 16.8405L13.3433 7.44708L11.9169 6.04508L2.68367 15.4385L2.69583 16.8527ZM18.7124 18.7151L0.713097 18.8698L0.67662 14.6273L13.9956 1.07727C14.3828 0.683409 15.0159 0.677966 15.4098 1.06511L18.2625 3.86912C18.6563 4.25627 18.6618 4.88942 18.2746 5.28328L6.93831 16.8162L18.6952 16.7151L18.7124 18.7151ZM13.3189 4.61876L14.7452 6.02076L16.1472 4.59444L14.7209 3.19244L13.3189 4.61876Z" fill="black"/>
                  </svg>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-sm shadow-md">
                  Export personal data
                </button>
              </div>
            </div>
            {/* Export button at top right of this section for desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center w-full gap-2">
              <div className="p-3 bg-[#EAEAEA] mr-4 rounded-lg flex items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.69583 16.8527L4.10999 16.8405L13.3433 7.44708L11.9169 6.04508L2.68367 15.4385L2.69583 16.8527ZM18.7124 18.7151L0.713097 18.8698L0.67662 14.6273L13.9956 1.07727C14.3828 0.683409 15.0159 0.677966 15.4098 1.06511L18.2625 3.86912C18.6563 4.25627 18.6618 4.88942 18.2746 5.28328L6.93831 16.8162L18.6952 16.7151L18.7124 18.7151ZM13.3189 4.61876L14.7452 6.02076L16.1472 4.59444L14.7209 3.19244L13.3189 4.61876Z" fill="black"/>
                </svg>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-sm shadow-md">
                Export personal data
              </button>
            </div>
          </div>
          {/* User info fields below the top section */}
          <div className="w-full mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <label className="block text-xs text-[#505050] mb-1">Full name</label>
                <div className="w-full p-3 rounded-xl bg-[#F7F7FC] text-[#1C1E40] font-medium text-base border border-[#EAEAEA]">Kevin Heart</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Email</label>
                <div className="w-full p-3 rounded-xl bg-[#F7F7FC] text-[#1C1E40] font-medium text-base border border-[#EAEAEA]">kevinheart@email.com</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Username</label>
                <div className="w-full p-3 rounded-xl bg-[#F7F7FC] text-[#1C1E40] font-medium text-base border border-[#EAEAEA]">Kevin Heart</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Phone</label>
                <div className="w-full p-3 rounded-xl bg-[#F7F7FC] text-[#1C1E40] font-medium text-base border border-[#EAEAEA]">+55 67 98787323</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Notifications Preferences */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-8 shadow-sm" style={{minHeight: '16.5rem'}}>
          <h2 className="text-base md:text-lg font-bold mb-2 text-black">Notifications preferences</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Email notification</div>
                <div className="text-xs md:text-sm text-[#505050]">Receive important updates and notifications about your account via email</div>
              </div>
              <label className="inline-flex items-center cursor-pointer self-end md:self-center">
                <input type="checkbox" checked={emailNotif} onChange={()=>setEmailNotif(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <hr/>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">SMS notifications</div>
                <div className="text-xs md:text-sm text-[#505050]">Get important notifications sent directly to your phone</div>
              </div>
              <label className="inline-flex items-center cursor-pointer self-end md:self-center">
                <input type="checkbox" checked={smsNotif} onChange={()=>setSmsNotif(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 4. Security */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-8 shadow-sm" style={{minHeight: '18rem'}}>
          <h2 className="text-base md:text-lg font-bold mb-2 text-black">Security</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Change password</div>
                <div className="text-xs md:text-sm text-[#505050]">Protect your account by regularly changing your password.</div>
              </div>
              <button className="text-[#9664E6] font-medium self-end md:self-center">&gt;</button>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Enable two-factor authentication (2FA)</div>
                <div className="text-xs md:text-sm text-[#505050]">Add an extra layer of security to your account by enabling 2FA via SMS or a temporary one-time passcode (TOTP)</div>
              </div>
              <div className="flex items-center gap-2 self-end md:self-center">
                <button className="px-3 py-1 md:px-4 md:py-2 rounded-full border border-[#9664E6] text-[#9664E6] font-medium text-xs md:text-sm">Edit 2FA</button>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={twoFA} onChange={()=>setTwoFA(v=>!v)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                  <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Account Management */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-8 shadow-sm" style={{minHeight: '30rem'}}>
          <h2 className="text-base md:text-lg font-bold mb-2 text-black">Account management</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Themes</div>
                <div className="text-xs md:text-sm text-[#505050]">Customize how your themes look on your device</div>
              </div>
              <label className="inline-flex items-center cursor-pointer self-end md:self-center">
                <input type="checkbox" checked={theme} onChange={()=>setTheme(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">GEO timezone</div>
                <div className="text-xs md:text-sm text-[#505050]">Allow access to your location</div>
              </div>
              <label className="inline-flex items-center cursor-pointer self-end md:self-center">
                <input type="checkbox" checked={geo} onChange={()=>setGeo(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Temporarily deactivate account</div>
                <div className="text-xs md:text-sm text-[#505050]">Take a break from your account and easily reactivate it later</div>
              </div>
              <button className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-xs md:text-sm self-end md:self-center">Deactivate account</button>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Permanently delete account</div>
                <div className="text-xs md:text-sm text-[#505050]">Close your account and delete all data</div>
              </div>
              <button className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-[#F43F5E] text-white font-medium text-xs md:text-sm self-end md:self-center">Delete account</button>
            </div>
          </div>
        </div>

        {/* 6. About Account */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-8 shadow-sm" style={{minHeight: '15rem'}}>
          <h2 className="text-base md:text-lg font-bold mb-2 text-black">About account</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Account recovery</div>
                <div className="text-xs md:text-sm text-[#505050]">Retrieve a deleted account</div>
              </div>
              <button className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-xs md:text-sm self-end md:self-center">Retrieve account</button>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
              <div className="flex-1">
                <div className="font-semibold text-sm md:text-base text-black">Log out of your account</div>
                <div className="text-xs md:text-sm text-[#505050]">Log out of your account</div>
              </div>
              <button className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-[#F43F5E] text-white font-medium text-xs md:text-sm self-end md:self-center">Log out</button>
            </div>
          </div>
        </div>

        {/* 7. Management */}
        <div className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-8 shadow-sm" style={{minHeight: '9rem'}}>
          <h2 className="text-base md:text-lg font-bold mb-2 text-black">Management</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
            <div className="flex-1">
              <div className="font-semibold text-sm md:text-base text-black">Consent management</div>
              <div className="text-xs md:text-sm text-[#505050]">Consent management</div>
            </div>
            <label className="inline-flex items-center cursor-pointer self-end md:self-center">
              <input type="checkbox" checked={consent} onChange={()=>setConsent(v=>!v)} className="sr-only peer" />
              <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
              <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </div>
      </main>
    </div>
  );

};

export default Profile; 