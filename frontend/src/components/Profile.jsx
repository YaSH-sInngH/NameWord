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
      <main className="w-[1376px] mx-auto py-8 flex flex-col gap-8">
        {/* 1. My Profile Title */}
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40] mb-2">My Profile</h1>
        </div>

        {/* 2. Profile Info */}
        <div className="w-full bg-white rounded-2xl p-8 flex flex-row gap-8 items-start shadow-sm relative" style={{ minHeight: '27rem' }}>
          {/* Export button */}
          <button className="absolute top-8 right-8 px-6 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-sm">
            Export personal data
          </button>
          {/* Profile Picture & Points */}
          <div className="flex flex-col items-center gap-4 min-w-[10rem]">
            <img src="/profiles/profile7.jpg" alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-[#F3EDFF]" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1C1E40]">500</span>
              <span className="text-sm text-[#505050]">Accrued points</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 rounded-full bg-[#F3EDFF] text-[#5E30CC] font-medium text-sm">Change picture</button>
              <button className="px-4 py-2 rounded-full bg-[#F43F5E] text-white font-medium text-sm">Delete picture</button>
            </div>
          </div>
          {/* User Info & Export */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <label className="block text-xs text-[#505050] mb-1">Full name</label>
                <div className="w-full p-2 rounded bg-[#F7F7FC] text-[#1C1E40]">Kevin Heart</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Email</label>
                <div className="w-full p-2 rounded bg-[#F7F7FC] text-[#1C1E40]">kevinheart@email.com</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Username</label>
                <div className="w-full p-2 rounded bg-[#F7F7FC] text-[#1C1E40]">Kevin Heart</div>
              </div>
              <div>
                <label className="block text-xs text-[#505050] mb-1">Phone</label>
                <div className="w-full p-2 rounded bg-[#F7F7FC] text-[#1C1E40]">+55 67 98787323</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Notifications Preferences */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm" style={{minHeight: '16.5rem'}}>
          <h2 className="text-lg font-bold mb-2 text-black">Notifications preferences</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email notification</div>
                <div className="text-sm text-[#505050]">Receive important updates and notifications about your account via email</div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={emailNotif} onChange={()=>setEmailNotif(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">SMS notifications</div>
                <div className="text-sm text-[#505050]">Get important notifications sent directly to your phone</div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={smsNotif} onChange={()=>setSmsNotif(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 4. Security */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm" style={{minHeight: '18rem'}}>
          <h2 className="text-lg font-bold mb-2 text-black">Security</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Change password</div>
                <div className="text-sm text-[#505050]">Protect your account by regularly changing your password.</div>
              </div>
              <button className="text-[#9664E6] font-medium">&gt;</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Enable two-factor authentication (2FA)</div>
                <div className="text-sm text-[#505050]">Add an extra layer of security to your account by enabling 2FA via SMS or a temporary one-time passcode (TOTP)</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-full border border-[#9664E6] text-[#9664E6] font-medium text-sm">Edit 2FA</button>
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
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm" style={{minHeight: '30rem'}}>
          <h2 className="text-lg font-bold mb-2 text-black">Account management</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Themes</div>
                <div className="text-sm text-[#505050]">Customize how your themes look on your device</div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={theme} onChange={()=>setTheme(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">GEO timezone</div>
                <div className="text-sm text-[#505050]">Allow access to your location</div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={geo} onChange={()=>setGeo(v=>!v)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E0E0E0] peer-checked:bg-[#9664E6] rounded-full transition-all"></div>
                <div className="absolute ml-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Temporarily deactivate account</div>
                <div className="text-sm text-[#505050]">Take a break from your account and easily reactivate it later</div>
              </div>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-sm">Deactivate account</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Permanently delete account</div>
                <div className="text-sm text-[#505050]">Close your account and delete all data</div>
              </div>
              <button className="px-4 py-2 rounded-full bg-[#F43F5E] text-white font-medium text-sm">Delete account</button>
            </div>
          </div>
        </div>

        {/* 6. About Account */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm" style={{minHeight: '15rem'}}>
          <h2 className="text-lg font-bold mb-2 text-black">About account</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Account recovery</div>
                <div className="text-sm text-[#505050]">Retrieve a deleted account</div>
              </div>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9664E6] to-[#8B7BC5] text-white font-medium text-sm">Retrieve account</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Log out of your account</div>
                <div className="text-sm text-[#505050]">Log out of your account</div>
              </div>
              <button className="px-4 py-2 rounded-full bg-[#F43F5E] text-white font-medium text-sm">Log out</button>
            </div>
          </div>
        </div>

        {/* 7. Management */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm" style={{minHeight: '9rem'}}>
          <h2 className="text-lg font-bold mb-2 text-black">Management</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Consent management</div>
              <div className="text-sm text-[#505050]">Consent management</div>
            </div>
            <label className="inline-flex items-center cursor-pointer">
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