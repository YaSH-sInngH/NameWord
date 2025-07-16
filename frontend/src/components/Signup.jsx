import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  // Navigation items data
  const navItems = [
    { label: "Cart", active: false },
    { label: "Sign up", active: true },
    { label: "Checkout", active: false },
  ];

  return (
    <main className="w-full bg-white">
      {/* Header/Navigation Bar */}
      <header className="w-full h-[80px] flex items-center justify-between px-[72px] bg-gradient-to-r from-[#1B1F4B] to-[#2B2F6D] relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <svg width="168" height="38" viewBox="0 0 168 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3079 35.9504L4.42789 33.4521L7.59589 14.25L5.50389 16.4249L0.803894 11.8002L10.2039 2.04956L15.7879 4.9036L13.1679 20.7747L24.9119 4.54381L30.7999 6.97743L28.7199 21.3568L30.5759 19.2304L35.4959 23.6125L26.3399 34.103L20.6399 31.4349L22.4039 19.2345L10.3079 35.9504Z" fill="white"/>
            <path d="M63.6003 28.1685C63.6003 28.4555 63.4603 28.597 63.1763 28.597H61.3403C61.0563 28.597 60.9163 28.4555 60.9163 28.1685V16.4289C60.9163 13.8296 59.3083 13.1423 56.9883 13.1423H56.7323C54.4443 13.1423 52.8043 13.8296 52.8043 16.4289V28.1685C52.8043 28.4555 52.6643 28.597 52.3803 28.597H50.5443C50.2603 28.597 50.1203 28.4555 50.1203 28.1685V16.4289C50.1203 11.9457 52.7203 10.7168 56.7323 10.7168H56.9883C61.0003 10.7168 63.6003 11.9457 63.6003 16.4289V28.1685Z" fill="white"/>
            <path d="M66.2316 14.4886C66.2316 14.2015 66.3716 14.0601 66.6556 14.0601H71.3476C74.2876 14.0601 76.0956 14.9171 76.0956 18.1713V28.1403C76.0956 28.4273 75.9556 28.5688 75.6716 28.5688H74.2596L73.7796 27.6551C73.4116 28.2575 72.7916 28.5688 71.6876 28.5688H68.8076C66.9396 28.5688 65.6156 27.542 65.6156 25.4843V23.5115C65.6156 21.086 67.4796 19.9703 69.6836 19.9703H73.4156V18.3694C73.4156 16.7686 72.3116 16.4573 70.9276 16.4573H66.6596C66.3756 16.4573 66.2356 16.3158 66.2356 16.0005V14.4845L66.2316 14.4886ZM73.4076 21.8864H70.0996C68.7996 21.8864 68.2916 22.602 68.2916 23.5439V24.7445C68.2916 25.3428 68.5196 25.6864 68.8276 25.8885C69.1396 26.119 69.5076 26.1756 69.9036 26.1756H72.1076C72.8996 26.1756 73.4076 25.7471 73.4076 24.9467V21.8905V21.8864Z" fill="white"/>
            <path d="M81.4082 28.1403C81.4082 28.4273 81.2682 28.5688 80.9842 28.5688H79.1482C78.8642 28.5688 78.7242 28.4273 78.7242 28.1403V14.4886C78.7242 14.2015 78.8642 14.0601 79.1482 14.0601H80.5602L81.0402 14.9737C81.4082 14.3754 82.0282 14.0601 83.1322 14.0601H84.8562C85.9282 14.0601 86.6642 14.4037 87.1442 15.0586C87.6242 14.3996 88.2762 14.0601 89.3202 14.0601H90.9882C92.7122 14.0601 93.7842 14.9737 93.7842 16.6028V28.1443C93.7842 28.4313 93.6442 28.5728 93.3602 28.5728H91.5242C91.2402 28.5728 91.1002 28.4313 91.1002 28.1443V17.86C91.1002 16.8332 90.5642 16.4613 89.8562 16.4613H88.7522C87.9322 16.4613 87.5922 16.9747 87.5922 17.8883V28.1443C87.5922 28.4313 87.4522 28.5728 87.1682 28.5728H85.3322C85.0482 28.5728 84.9082 28.4313 84.9082 28.1443V17.86C84.9082 16.8332 84.4282 16.4613 83.6362 16.4613H82.5322C81.8242 16.4613 81.4002 16.9181 81.4002 17.7751V28.1443L81.4082 28.1403Z" fill="white"/>
            <path d="M106.708 26.1997C106.992 26.1997 107.132 26.3129 107.132 26.6282V28.1442C107.132 28.4312 106.992 28.5727 106.708 28.5727H101.508C97.9202 28.5727 96.3922 27.4853 96.3922 23.661V18.7776C96.3922 15.208 98.1722 14.064 101.452 14.064H102.16C105.044 14.064 107.136 14.8927 107.136 18.1753V18.6603C107.136 20.7423 105.92 21.8863 103.772 21.8863H99.0802V23.657C99.0802 25.6014 99.9282 26.1997 101.792 26.1997H106.712H106.708ZM104.872 18.1995C104.872 16.8291 104.08 16.4289 102.668 16.4289H101.62C99.8962 16.4289 99.0762 17.0272 99.0762 18.8302V19.9742H103.26C104.304 19.9742 104.872 19.574 104.872 18.6603V18.2036V18.1995Z" fill="white"/>
            <path d="M118.128 27.283C117.9 28.1683 117.336 28.5685 116.46 28.5685H114.708C113.804 28.5685 113.268 28.1683 113.04 27.283L108.292 11.23C108.208 10.943 108.32 10.8015 108.604 10.8015H110.608C110.864 10.8015 111.004 10.9147 111.088 11.1451L115.328 25.8277C115.412 26.0541 115.468 26.1996 115.64 26.1996H115.752C115.864 26.1996 115.98 26.0581 116.036 25.8277L119.484 11.1451C119.54 10.9147 119.712 10.8015 119.936 10.8015H121.604C121.8 10.8015 121.944 10.9147 122 11.1451L125.476 25.8277C125.532 26.0541 125.588 26.1996 125.76 26.1996H125.872C126.04 26.1996 126.1 26.0581 126.184 25.8277L130.424 11.1451C130.508 10.9147 130.652 10.8015 130.876 10.8015H132.912C133.196 10.8015 133.308 10.943 133.196 11.23L128.476 27.283C128.22 28.1683 127.684 28.5685 126.808 28.5685H125.056C124.18 28.5685 123.588 28.1683 123.388 27.283L120.76 16.1417L118.132 27.283H118.128Z" fill="white"/>
            <path d="M139.412 28.6253C135.06 28.6253 132.796 25.6541 132.796 21.4256V21.1668C132.796 16.91 135.028 13.967 139.412 13.967H139.608C143.676 13.967 146.224 16.5664 146.224 21.1668V21.4256C146.224 26.026 143.68 28.6253 139.608 28.6253H139.412ZM139.692 26.2281C142.516 26.2281 143.732 24.2553 143.732 21.5711V21.0294C143.732 18.2885 142.46 16.4007 139.632 16.4007H139.32C136.524 16.4007 135.28 18.3451 135.28 21.0294V21.5711C135.28 23.459 135.844 24.599 136.664 25.2862C137.428 26.0017 138.444 26.2281 139.292 26.2281H139.688H139.692Z" fill="white"/>
            <path d="M148.204 14.4886C148.204 14.2015 148.344 14.0601 148.628 14.0601H150.04L150.52 14.9737C150.888 14.3754 151.508 14.0601 152.612 14.0601H155.328C155.612 14.0601 155.724 14.1732 155.752 14.4886V16.0328C155.752 16.3198 155.64 16.433 155.328 16.4613H152.108C151.316 16.4613 150.892 16.9464 150.892 17.7751V28.1443C150.892 28.4313 150.78 28.5445 150.468 28.5728H148.632C148.348 28.5728 148.236 28.4596 148.208 28.1443V14.4926L148.204 14.4886Z" fill="white"/>
            <path d="M165.356 28.5688L164.876 27.6552C164.508 28.2575 163.888 28.5688 162.784 28.5688H159.788C157.896 28.5688 156.568 27.542 156.568 25.4843V17.6013C156.568 15.1758 158.436 14.0601 160.636 14.0601H164.508V9.80327C164.508 9.51624 164.648 9.37476 164.932 9.37476H166.768C167.052 9.37476 167.192 9.52029 167.192 9.80327V28.1403C167.192 28.4273 167.052 28.5688 166.768 28.5688H165.356ZM164.508 16.4573H161.06C159.76 16.4573 159.252 17.1728 159.252 18.0824V24.4252C159.252 25.1407 159.508 25.5975 159.876 25.8239C160.216 26.0786 160.696 26.1675 161.12 26.1675H163.212C164.004 26.1675 164.512 25.739 164.512 24.9386V16.4573H164.508Z" fill="white"/>
          </svg>
        </div>
        {/* Navigation buttons */}
        <div className="flex gap-2 p-2 bg-[#1c204c] rounded-full">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium text-base transition-all focus:outline-none ${
                item.active
                  ? 'bg-white bg-opacity-20 text-white shadow-inner'
                  : 'bg-transparent text-[#d1d5db] hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Two-column layout for testimonials and registration */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Testimonial section on the left */}
        <section className="w-full md:w-[51%] flex items-center gap-2.5 py-[50px] px-4">
          <div className="flex flex-col items-center justify-between pt-[52px] pb-[100px] px-12 relative flex-1 self-stretch rounded-[52px] overflow-hidden"
            style={{ background: 'linear-gradient(133.05deg, rgba(94, 48, 204, 0.7) 2.54%, rgba(9, 135, 255, 0.7) 100.88%)' }}>
            {/* Brand header */}
            <div className="flex items-center gap-2.5 relative self-stretch w-full">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" rx="12" fill="#020738"/>
              <path d="M10 19C14.9705 19 19 14.9706 19 10C19 14.9706 23.0295 19 28 19C23.0295 19 19 23.0294 19 28C19 23.0294 14.9705 19 10 19Z" fill="white"/>
              </svg>
              <div className="w-fit font-medium text-white text-2xl font-['Inter']">
                Nameword
              </div>
            </div>

            <div className="flex flex-col items-start gap-[102px] px-10 py-0 relative self-stretch w-full">
              {/* Headline section */}
              <div className="flex flex-col items-start gap-6 self-stretch w-full">
                <h2 className="self-stretch mt-[-1.00px] font-['Inter'] font-semibold text-white text-5xl">
                  Blaze new trails with <br />
                  the perfect domain.
                </h2>

                <div className="inline-flex items-center gap-2.5">
                  <p className="w-fit mt-[-1.00px] font-['Inter'] font-normal text-white text-lg leading-[32.4px] whitespace-nowrap">
                    Start your search now
                  </p>
                  <div className="w-5 h-5">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial and pagination section */}
              <div className="flex flex-col items-center justify-center gap-[50px] self-stretch w-full">
                <div className="flex flex-col items-start gap-6 p-6 self-stretch w-full bg-white rounded-2xl shadow-lg">
                  <div className="flex flex-col items-start gap-4 p-0 self-stretch w-full">
                    <div className="flex items-center gap-4 self-stretch w-full">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img src="/profiles/profile7.jpg" alt="Tom Richardson" className="w-full h-full object-cover rounded-full" />
                      </div>

                      <div className="inline-flex flex-col items-start gap-1">
                        <div className="w-fit mt-[-1.00px] font-['Archivo'] font-semibold text-[#041028] text-xl leading-[27px] whitespace-nowrap">
                          Tom Richardson
                        </div>
                      </div>
                    </div>

                    <p className="self-stretch font-['Inter'] font-normal text-[#505050] text-sm leading-[25.2px]">
                      Since partnering, we've seen a significant increase in our client base. The team's professionalism and expertise in lead generation are evident in the quality of leads we receive. A fantastic service all around.
                    </p>
                  </div>

                  <div className="inline-flex items-start">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={`star-${index}`}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Pagination dots */}
                <div className="inline-flex items-center gap-2.5">
                  {[true, false, false].map((active, index) => (
                    <div
                      key={`dot-${index}`}
                      className={`w-2.5 h-2.5 rounded-[5px] ${active ? "bg-[#5e30cc]" : "bg-[#d9d9d9]"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration section on the right */}
        <section className="w-full md:w-[49%] flex flex-col items-center gap-[38px] py-[60px] px-8">
          <div className="flex flex-col w-full max-w-[553px] items-start gap-10">
            {/* Header */}
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h1 className="font-semibold text-black text-[32px] tracking-[0] leading-normal">
                Registration
              </h1>
              <p className="font-normal text-[#505050] text-sm tracking-[0] leading-[21px]">
                Create a free account and let the good times roll.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-9 w-full">
              {/* Input fields */}
              <div className="flex flex-col items-start gap-[30px] w-full">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-6 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors"
                    required
                  />
                </div>

                <div className="w-full relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-6 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors"
                    required
                  />
                </div>

                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-5 py-6 pr-14 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#505050] hover:text-[#5e30cc] transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms agreement */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-7 h-7 rounded-md border-2 border-[#eaeaea] focus:border-[#5e30cc] accent-[#5e30cc]"
                />
                <label
                  htmlFor="terms"
                  className="font-medium text-[#505050] text-base leading-4 cursor-pointer"
                >
                  I agree to Nameword's <span className="underline cursor-pointer hover:text-[#5e30cc]"
                  onClick={()=>navigate('/privacypolicy')}
                  >Terms</span>,{" "}
                  <span className="underline cursor-pointer hover:text-[#5e30cc]"
                    onClick={()=>navigate('/privacypolicy')}
                  >Privacy</span>, and{" "}
                  <span className="underline cursor-pointer hover:text-[#5e30cc]"
                  onClick={()=>navigate('/privacypolicy')}>Fees</span>.{" "}
                </label>
              </div>

              {/* Register button */}
              <button
                type="submit"
                className="w-full py-[22px] rounded-[500px] font-medium text-base text-white bg-gradient-to-r from-[#9664e6] to-[#5e30cc] hover:opacity-90 transition-opacity border-none cursor-pointer"
                onClick={()=> navigate('/otpverify')}
              >
                Register
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-[1.5px] bg-[#eaeaea]" />
              <span className="font-medium text-[#505050] text-xl leading-5">
                or
              </span>
              <div className="flex-1 h-[1.5px] bg-[#eaeaea]" />
            </div>

            {/* Social login options */}
            <div className="flex flex-col items-start gap-5 w-full">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="w-full border-[1.2px] border-[#eaeaea] rounded-xl hover:bg-gray-50 cursor-pointer bg-white transition-colors"
              >
                <div className="flex items-center justify-center py-3 px-0">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-[30px] h-[30px] flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-black text-base leading-4">
                      Register with Google
                    </span>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Telegram')}
                className="w-full border-[1.2px] border-[#eaeaea] rounded-xl hover:bg-gray-50 cursor-pointer bg-white transition-colors"
              >
                <div className="flex items-center justify-center py-3 px-0">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-[30px] h-[30px] flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0088cc">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 8.368-1.268 8.368-.16.708-.534.708-.534.708s-2.655-.16-4.947-.16c-2.292 0-4.947.16-4.947.16s-.374 0-.534-.708c0 0-.372-1.64-1.268-8.368 0 0-.727-4.87-.896-6.728-.16-1.858.16-2.292.16-2.292s.374-.534 1.268-.534c.894 0 10.738 0 10.738 0s.374 0 1.268.534c0 0 .32.434.16 2.292z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-black text-base leading-4">
                      Register with Telegram
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Login link */}
          <div className="text-center font-medium text-base">
            <span className="text-[#505050]">Already have an account? </span>
            <a href="#" className="text-[#5e30cc] underline hover:opacity-80 transition-opacity"
              onClick={()=>navigate('/login')}
            >
              Log in here
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterComponent;