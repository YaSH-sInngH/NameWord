import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup';
import OTPVerify from './components/OTPVerify';
import OTPEnter from './components/OTPEnter';
import { PrivacyPolicyComplete } from './components/PrivacyPolicy'
import UserAgreement from './components/UserAgreement';
import HomeComingSoon from './components/HomeComingSoon';
import ResetPassword from './components/ResetPassword';
import HomeDashboard from './components/HomeDashboard';
import WalletBalance from './components/WalletBalance';
import BillingSettings from './components/BillingSettings';
import OrderHistory from './components/OrderHistory';
import Invoices from './components/Invoices';
import AutomaticRenewals from './components/AutomaticRenewals';
import PaymentStatus from './components/PaymentStatus';
import Profile from './components/Profile';
import Cart from './components/Cart';
import SearchDomain from './components/SearchDomain';
import DomainDashboard from './components/DomainDashboard';
import DomainSecurity from './components/DomainSecurity';
import TransferDomain from './components/TransferDomain';
import TransferDomainList from './components/TransferDomainList';
import APIKeys from './components/APIKeys';
import SharedHosting from './components/SharedHosting';
import Mystore from './components/Mystore';
import Nameservers from './components/Nameservers';
import DomainOwnership from './components/DomainOwnership';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyComplete />} />
          <Route path="/otpverify" element={<OTPVerify />} />
          <Route path="/otpenter" element={<OTPEnter />} />
          <Route path="/useragreement" element={<UserAgreement />} />
          <Route path="/comingsoon" element={<HomeComingSoon />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<HomeDashboard/>} />
          <Route path="/wallet" element={<WalletBalance/>} />
          <Route path="/billing" element={<BillingSettings/>} />
          <Route path="/orderhistory" element={<OrderHistory/>} />
          <Route path="/invoices" element={<Invoices/>} />
          <Route path="/automatic" element={<AutomaticRenewals/>} />
          <Route path="/paymentstatus" element={<PaymentStatus/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/search" element={<SearchDomain/>} />
          <Route path="/domain" element={<DomainDashboard/>} />
          <Route path="/domainsecurity" element={<DomainSecurity/>} />
          <Route path="/domaintransfer" element={<TransferDomain/>} />
          <Route path="/transferlist" element={<TransferDomainList/>} />
          <Route path="/api" element={<APIKeys/>} />
          <Route path="/sharedhosting" element={<SharedHosting/>} />
          <Route path="/mystore" element={<Mystore/>} />
          <Route path="/nameservers" element={<Nameservers/>} />
          <Route path="/ownership" element={<DomainOwnership/>} />
        </Routes>
      </main>
    </div>
  )
}
export default App