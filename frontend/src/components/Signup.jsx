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
      <header className="w-full h-[80px] flex items-center justify-between px-4 sm:px-8 lg:px-[72px] bg-gradient-to-r from-[#1B1F4B] to-[#2B2F6D] relative z-10">
        
        {/* Logo */}
        <div className="relative w-fit font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer" onClick={()=>navigate('/')}>Nameword</div>
        {/* Navigation buttons - Hidden on mobile */}
        <div className="hidden md:flex gap-2 p-2 bg-[#1c204c] rounded-full">
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

        {/* Login and Cart button for mobile */}
        <div className="md:hidden flex flex-row gap-2">
          <button className="relative w-[52px] h-[52px] rounded-[500px] overflow-hidden p-0 bg-transparent hover:bg-[#1a1e4c] transition-colors flex items-center justify-center">
            {/* Cart Icon */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.38717 5.41662L0.144531 2.17398L1.55874 0.759766L4.80138 4.00241H20.0431C20.5954 4.00241 21.0431 4.45013 21.0431 5.00241C21.0431 5.09973 21.0289 5.19654 21.001 5.28976L18.601 13.2898C18.4741 13.7128 18.0847 14.0025 17.6431 14.0025H5.38717V16.0025H16.3872V18.0025H4.38717C3.83488 18.0025 3.38717 17.5547 3.38717 17.0025V5.41662ZM5.38717 6.00241V12.0025H16.8991L18.6991 6.00241H5.38717ZM4.88717 22.0025C4.05874 22.0025 3.38717 21.3309 3.38717 20.5025C3.38717 19.674 4.05874 19.0025 4.88717 19.0025C5.7156 19.0025 6.38717 19.674 6.38717 20.5025C6.38717 21.3309 5.7156 22.0025 4.88717 22.0025ZM16.8872 22.0025C16.0587 22.0025 15.3872 21.3309 15.3872 20.5025C15.3872 19.674 16.0587 19.0025 16.8872 19.0025C17.7156 19.0025 18.3872 19.674 18.3872 20.5025C18.3872 21.3309 17.7156 22.0025 16.8872 22.0025Z" fill="white"/>
            </svg>
          </button>
          <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full font-medium text-sm">
            Login
          </button>
        </div>
      </header>

      {/* Two-column layout for testimonials and registration */}
      <div className="flex flex-col-reverse md:flex-row w-full">
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
                        <div className="w-fit mt-[-1.00px] font-['Archivo'] font-semibold text-[#041028] text-sm lg:text-xl leading-[27px] whitespace-nowrap">
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
              <div className="flex flex-col items-center lg:items-start gap-2.5 w-full">
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
                      className="w-full px-5 py-6 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors text-black font-semibold"
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
                      className="w-full px-5 py-6 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors text-black font-semibold"
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
                      className="w-full px-5 py-6 pr-14 font-medium text-base rounded-xl border-[1.2px] border-[#eaeaea] focus:outline-none focus:border-[#5e30cc] transition-colors text-black"
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
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4796 9.20217L16.8427 7.83905C16.9419 8.21011 17 8.59805 17 9.00005C17 11.4814 14.9814 13.5 12.5 13.5C12.098 13.5 11.7101 13.4419 11.339 13.3427L12.7021 11.9796C14.1926 11.878 15.3779 10.6926 15.4796 9.20217ZM24.4055 8.63573C24.3132 8.4698 23.0049 6.17723 20.4474 4.23436L19.3559 5.3258C21.2208 6.69698 22.4024 8.29617 22.8676 9.00117C21.9787 10.3547 18.4916 15 12.5 15C11.6015 15 10.766 14.8851 9.97981 14.7017L8.74738 15.9342C9.88044 16.2816 11.1258 16.5 12.5 16.5C20.3512 16.5 24.2437 9.65555 24.4055 9.36436C24.5315 9.13767 24.5315 8.86242 24.4055 8.63573ZM21.2803 1.2803L4.78025 17.7803C4.63381 17.9267 4.44181 18 4.25 18C4.05819 18 3.86619 17.9267 3.71975 17.7803C3.42669 17.4872 3.42669 17.0127 3.71975 16.7198L5.819 14.6205C2.42525 12.5717 0.700812 9.5558 0.5945 9.36436C0.4685 9.13767 0.4685 8.86223 0.5945 8.63555C0.756312 8.34455 4.64881 1.50005 12.5 1.50005C14.5301 1.50005 16.2884 1.96317 17.7916 2.64792L20.2197 0.219797C20.5128 -0.0732656 20.9874 -0.0732656 21.2803 0.219797C21.5731 0.512859 21.5733 0.987422 21.2803 1.2803ZM6.93744 13.5021L8.83625 11.6033C8.31181 10.8675 8 9.97036 8 9.00005C8 6.51867 10.0186 4.50005 12.5 4.50005C13.4703 4.50005 14.3675 4.81186 15.1033 5.33611L16.6387 3.80067C15.4256 3.31486 14.0471 3.00005 12.5 3.00005C6.50844 3.00005 3.02131 7.64536 2.13256 8.99892C2.69694 9.8543 4.31919 12.0195 6.93744 13.5021ZM9.92506 10.5143L14.0142 6.42511C13.5682 6.16167 13.0546 6.00005 12.5 6.00005C10.8459 6.00005 9.5 7.34592 9.5 9.00005C9.5 9.55467 9.66162 10.0682 9.92506 10.5143Z" fill="black"/>
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
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="url(#paint0_linear_9098_6006)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93203 11.873C9.43026 10.3488 11.763 9.34401 12.9301 8.85858C16.2627 7.47248 16.9552 7.23168 17.4065 7.22372C17.5057 7.22198 17.7277 7.24659 17.8715 7.36326C18.0847 7.53633 18.086 7.91198 18.0623 8.16061C17.8817 10.0581 17.1003 14.6628 16.7027 16.788C16.5345 17.6872 16.2033 17.9888 15.8827 18.0183C15.1858 18.0824 14.6566 17.5577 13.9817 17.1153C12.9255 16.423 12.3289 15.992 11.3037 15.3165C10.1189 14.5357 10.8869 14.1066 11.5621 13.4053C11.7389 13.2218 14.8092 10.429 14.8687 10.1757C14.8761 10.144 14.883 10.0259 14.8128 9.96351C14.7427 9.90117 14.6391 9.92245 14.5644 9.93942C14.4584 9.96347 12.7712 11.0787 9.50273 13.285C9.02381 13.6139 8.59003 13.7741 8.20139 13.7657C7.7729 13.7565 6.94875 13.5234 6.33604 13.3243C5.58454 13.08 4.98726 12.9508 5.03929 12.536C5.06639 12.3198 5.36395 12.0989 5.93203 11.873Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_9098_6006" x1="12.5" y1="0" x2="12.5" y2="23.8125" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2AABEE"/>
                        <stop offset="1" stop-color="#229ED9"/>
                        </linearGradient>
                        </defs> 
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