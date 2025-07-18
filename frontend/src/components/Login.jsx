import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Cart', active: false },
  { label: 'Sign In', active: true },
  { label: 'Checkout', active: false },
];

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // email: 'nick1@figmaowergram',
    // password: '******'  
  });
  const [errors, setErrors] = useState({
    email: 'Enter a valid email address, such as: john@example.com',
    password: 'Password incorrect. Please try again.'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt:', formData);
  };

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

        {/* Login button for mobile */}
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

      {/* Two-column layout */}
      <div className="flex flex-col items-center lg:flex-row w-full min-h-[calc(100vh-80px)] lg:h-[1024px] bg-white">
        {/* Left: Sign In Section */}
        <div className="flex flex-col w-full lg:w-[700px] xl:w-[700px] h-full px-4 sm:px-8 lg:px-16 py-4 sm:py-8 justify-between bg-white">
          {/* Top: Go back and Logo */}
          <div className="flex items-center justify-between w-full max-w-[636px] h-10 mb-4 lg:mb-0">
            {/* Go back button */}
            <button 
              className="hidden lg:block flex items-center text-black text-base lg:text-lg font-korolevLight hover:text-[#3E239E] transition-colors" 
              onClick={() => navigate('/')}
            >
              <span className="mr-2 text-lg lg:text-xl">&#8592;</span> Go back
            </button>
            
            {/* Logo 2 - Hidden on mobile */}
            <div className="hidden lg:block flex items-center">
              <svg width="182" height="40" viewBox="0 0 182 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M69.4321 29.651C69.4321 29.9531 69.284 30.102 68.9838 30.102H67.0427C66.7424 30.102 66.5944 29.9531 66.5944 29.651V17.2935C66.5944 14.5574 64.8944 13.834 62.4416 13.834H62.1709C59.7519 13.834 58.0181 14.5574 58.0181 17.2935V29.651C58.0181 29.9531 57.8701 30.102 57.5698 30.102H55.6287C55.3284 30.102 55.1804 29.9531 55.1804 29.651V17.2935C55.1804 12.5744 57.9293 11.2808 62.1709 11.2808H62.4416C66.6832 11.2808 69.4321 12.5744 69.4321 17.2935V29.651Z" fill="#3E239E"/>
              <path d="M72.215 15.2514C72.215 14.9492 72.363 14.8003 72.6633 14.8003H77.6238C80.7321 14.8003 82.6436 15.7024 82.6436 19.1279V29.6216C82.6436 29.9237 82.4956 30.0726 82.1953 30.0726H80.7025L80.1951 29.1109C79.806 29.745 79.1505 30.0726 77.9833 30.0726H74.9384C72.9635 30.0726 71.5637 28.9918 71.5637 26.8258V24.7492C71.5637 22.196 73.5344 21.0216 75.8646 21.0216H79.8102V19.3365C79.8102 17.6513 78.643 17.3237 77.1798 17.3237H72.6675C72.3672 17.3237 72.2192 17.1748 72.2192 16.8428V15.2471L72.215 15.2514ZM79.8018 23.0386H76.3044C74.93 23.0386 74.3929 23.7918 74.3929 24.7833V26.0471C74.3929 26.6769 74.634 27.0386 74.9596 27.2513C75.2894 27.4939 75.6785 27.5535 76.0972 27.5535H78.4273C79.2647 27.5535 79.8018 27.1024 79.8018 26.2599V23.0428V23.0386Z" fill="#3E239E"/>
              <path d="M88.2595 29.6216C88.2595 29.9237 88.1115 30.0726 87.8113 30.0726H85.8701C85.5699 30.0726 85.4219 29.9237 85.4219 29.6216V15.2514C85.4219 14.9492 85.5699 14.8003 85.8701 14.8003H87.363L87.8704 15.762C88.2595 15.1322 88.915 14.8003 90.0822 14.8003H91.9049C93.0383 14.8003 93.8164 15.162 94.3239 15.8513C94.8313 15.1577 95.5207 14.8003 96.6244 14.8003H98.3879C100.211 14.8003 101.344 15.762 101.344 17.4769V29.6258C101.344 29.9279 101.196 30.0769 100.896 30.0769H98.9546C98.6543 30.0769 98.5063 29.9279 98.5063 29.6258V18.8003C98.5063 17.7194 97.9396 17.3279 97.1911 17.3279H96.0239C95.157 17.3279 94.7975 17.8684 94.7975 18.8301V29.6258C94.7975 29.9279 94.6495 30.0769 94.3492 30.0769H92.4081C92.1079 30.0769 91.9599 29.9279 91.9599 29.6258V18.8003C91.9599 17.7194 91.4524 17.3279 90.6151 17.3279H89.4479C88.6993 17.3279 88.2511 17.8088 88.2511 18.7109V29.6258L88.2595 29.6216Z" fill="#3E239E"/>
              <path d="M115.008 27.5787C115.308 27.5787 115.456 27.6978 115.456 28.0297V29.6255C115.456 29.9276 115.308 30.0765 115.008 30.0765H109.51C105.717 30.0765 104.102 28.9319 104.102 24.9063V19.7659C104.102 16.0085 105.983 14.8042 109.451 14.8042H110.2C113.249 14.8042 115.461 15.6766 115.461 19.1319V19.6425C115.461 21.834 114.175 23.0383 111.904 23.0383H106.943V24.9021C106.943 26.9489 107.84 27.5787 109.811 27.5787H115.012H115.008ZM113.067 19.1574C113.067 17.7149 112.23 17.2936 110.737 17.2936H109.629C107.806 17.2936 106.939 17.9234 106.939 19.8212V21.0255H111.363C112.466 21.0255 113.067 20.6042 113.067 19.6425V19.1617V19.1574Z" fill="#3E239E"/>
              <path d="M127.082 28.7191C126.841 29.651 126.244 30.0723 125.318 30.0723H123.466C122.51 30.0723 121.943 29.651 121.702 28.7191L116.683 11.8212C116.594 11.5191 116.712 11.3701 117.012 11.3701H119.131C119.402 11.3701 119.55 11.4893 119.639 11.7318L124.121 27.1872C124.21 27.4255 124.269 27.5786 124.451 27.5786H124.57C124.688 27.5786 124.811 27.4297 124.87 27.1872L128.515 11.7318C128.574 11.4893 128.756 11.3701 128.993 11.3701H130.757C130.964 11.3701 131.116 11.4893 131.175 11.7318L134.85 27.1872C134.909 27.4255 134.969 27.5786 135.151 27.5786H135.269C135.447 27.5786 135.51 27.4297 135.599 27.1872L140.082 11.7318C140.17 11.4893 140.323 11.3701 140.559 11.3701H142.712C143.012 11.3701 143.131 11.5191 143.012 11.8212L138.022 28.7191C137.751 29.651 137.185 30.0723 136.259 30.0723H134.406C133.48 30.0723 132.854 29.651 132.643 28.7191L129.864 16.9914L127.086 28.7191H127.082Z" fill="#3E239E"/>
              <path d="M149.584 30.1319C144.983 30.1319 142.589 27.0043 142.589 22.5532V22.2809C142.589 17.8 144.949 14.7021 149.584 14.7021H149.791C154.092 14.7021 156.786 17.4383 156.786 22.2809V22.5532C156.786 27.3958 154.096 30.1319 149.791 30.1319H149.584ZM149.88 27.6085C152.866 27.6085 154.151 25.5319 154.151 22.7064V22.1362C154.151 19.2511 152.807 17.2639 149.817 17.2639H149.487C146.531 17.2639 145.216 19.3107 145.216 22.1362V22.7064C145.812 24.6936 145.812 25.8936 146.679 26.617C147.486 27.3702 148.561 27.6085 149.457 27.6085H149.876H149.88Z" fill="#3E239E"/>
              <path d="M158.879 15.2514C158.879 14.9492 159.027 14.8003 159.327 14.8003H160.82L161.327 15.762C161.717 15.1322 162.372 14.8003 163.539 14.8003H166.411C166.711 14.8003 166.829 14.9194 166.859 15.2514V16.8769C166.859 17.179 166.741 17.2981 166.411 17.3279H163.006C162.169 17.3279 161.721 17.8386 161.721 18.7109V29.6258C161.721 29.9279 161.602 30.0471 161.272 30.0769H159.331C159.031 30.0769 158.913 29.9577 158.883 29.6258V15.2556L158.879 15.2514Z" fill="#3E239E"/>
              <path d="M177.013 30.0724L176.506 29.1107C176.117 29.7447 175.461 30.0724 174.294 30.0724H171.126C169.126 30.0724 167.722 28.9916 167.722 26.8256V18.5277C167.722 15.9745 169.697 14.8001 172.023 14.8001H176.117V10.3192C176.117 10.0171 176.265 9.86816 176.565 9.86816H178.506C178.806 9.86816 178.954 10.0214 178.954 10.3192V29.6213C178.954 29.9235 178.806 30.0724 178.506 30.0724H177.013ZM176.117 17.3235H172.471C171.097 17.3235 170.56 18.0767 170.56 19.0341V25.7107C170.56 26.4639 170.83 26.9448 171.22 27.1831C171.579 27.4511 172.086 27.5448 172.535 27.5448H174.747C175.584 27.5448 176.121 27.0937 176.121 26.2511V17.3235H176.117Z" fill="#3E239E"/>
              <path d="M13.0895 37.8428L6.87295 35.213L10.2223 15.0003L8.01055 17.2896L3.0415 12.4215L12.9796 2.15771L18.8832 5.16197L16.1133 21.8684L28.5295 4.78324L34.7546 7.34495L32.5555 22.4811L34.5177 20.2428L39.7194 24.8556L30.0393 35.8981L24.013 33.0896L25.878 20.2471L13.0895 37.8428Z" fill="#0E034F"/>
              </svg>
            </div>

            {/* Spacer div - Hidden on mobile */}
            <div className='hidden lg:block w-[105px] h-[24px]'></div>
          </div>

          {/* Center: Sign In Form */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-[553px] mx-auto space-y-4 sm:space-y-6 flex-1 justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-northura text-black text-center">Sign In</h1>
            
            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-[50px] sm:h-[55px] px-4 py-2 border rounded-lg text-base text-black focus:outline-none focus:ring-2 focus:ring-[#3E239E] focus:border-[#3E239E] transition-all duration-200"
                placeholder='Email address'
              />
            </div>

            {/* Password Input */}
            <div className="w-full relative">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-[50px] sm:h-[55px] px-4 py-2 pr-12 border rounded-lg font-korolev text-base text-black focus:outline-none focus:ring-2 focus:ring-[#3E239E] focus:border-[#3E239E] transition-all duration-200"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  {showPassword ? (
                    <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4796 9.20217L16.8427 7.83905C16.9419 8.21011 17 8.59805 17 9.00005C17 11.4814 14.9814 13.5 12.5 13.5C12.098 13.5 11.7101 13.4419 11.339 13.3427L12.7021 11.9796C14.1926 11.878 15.3779 10.6926 15.4796 9.20217ZM24.4055 8.63573C24.3132 8.4698 23.0049 6.17723 20.4474 4.23436L19.3559 5.3258C21.2208 6.69698 22.4024 8.29617 22.8676 9.00117C21.9787 10.3547 18.4916 15 12.5 15C11.6015 15 10.766 14.8851 9.97981 14.7017L8.74738 15.9342C9.88044 16.2816 11.1258 16.5 12.5 16.5C20.3512 16.5 24.2437 9.65555 24.4055 9.36436C24.5315 9.13767 24.5315 8.86242 24.4055 8.63573ZM21.2803 1.2803L4.78025 17.7803C4.63381 17.9267 4.44181 18 4.25 18C4.05819 18 3.86619 17.9267 3.71975 17.7803C3.42669 17.4872 3.42669 17.0127 3.71975 16.7198L5.819 14.6205C2.42525 12.5717 0.700812 9.5558 0.5945 9.36436C0.4685 9.13767 0.4685 8.86223 0.5945 8.63555C0.756312 8.34455 4.64881 1.50005 12.5 1.50005C14.5301 1.50005 16.2884 1.96317 17.7916 2.64792L20.2197 0.219797C20.5128 -0.0732656 20.9874 -0.0732656 21.2803 0.219797C21.5731 0.512859 21.5733 0.987422 21.2803 1.2803ZM6.93744 13.5021L8.83625 11.6033C8.31181 10.8675 8 9.97036 8 9.00005C8 6.51867 10.0186 4.50005 12.5 4.50005C13.4703 4.50005 14.3675 4.81186 15.1033 5.33611L16.6387 3.80067C15.4256 3.31486 14.0471 3.00005 12.5 3.00005C6.50844 3.00005 3.02131 7.64536 2.13256 8.99892C2.69694 9.8543 4.31919 12.0195 6.93744 13.5021ZM9.92506 10.5143L14.0142 6.42511C13.5682 6.16167 13.0546 6.00005 12.5 6.00005C10.8459 6.00005 9.5 7.34592 9.5 9.00005C9.5 9.55467 9.66162 10.0682 9.92506 10.5143Z" fill="black"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M1 10C1 10 4 4 10 4C16 4 19 10 19 10C19 10 16 16 10 16C4 16 1 10 1 10Z" stroke="#666" strokeWidth="2"/>
                      <circle cx="10" cy="10" r="3" stroke="#666" strokeWidth="2"/>
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex justify-between items-center mt-2 left-[200px]">         
                <div className="w-full flex justify-end">
                  <a href="#" className="text-xs text-[#3E239E] font-medium hover:underline transition-all" onClick={() => navigate('/resetpassword')}>Reset password</a>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <button 
              type="submit"
              className="w-full h-[50px] sm:h-[55px] rounded-full bg-gradient-to-r from-[#3E239E] to-[#8B7BC5] text-white text-base sm:text-lg font-northuraHeavy hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3E239E] focus:ring-offset-2"
              onClick={() => navigate('/home')}
            >
              Sign In
            </button>

            {/* Or divider */}
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-[#EAEAEA]" />
              <span className="mx-4 text-[#666] text-sm font-medium">or</span>
              <div className="flex-1 h-px bg-[#EAEAEA]" />
            </div>

            {/* Social Buttons */}
            <button 
              type="button"
              className="w-full h-[48px] rounded-lg border border-[#EAEAEA] flex items-center justify-center gap-3 text-black text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.78h5.5c-.24 1.28-.97 2.36-2.07 3.08v2.56h3.34c1.95-1.8 3.08-4.45 3.08-7.42z" fill="#4285F4"/>
                <path d="M10 20c2.7 0 4.96-.9 6.61-2.44l-3.34-2.56c-.93.62-2.12.99-3.27.99-2.52 0-4.66-1.7-5.42-3.98H1.1v2.5C2.82 17.98 6.13 20 10 20z" fill="#34A853"/>
                <path d="M4.58 12.01A5.98 5.98 0 0 1 4.1 10c0-.7.12-1.39.33-2.01V5.49H1.1A9.98 9.98 0 0 0 0 10c0 1.64.39 3.19 1.1 4.51l3.48-2.5z" fill="#FBBC05"/>
                <path d="M10 4.02c1.47 0 2.78.51 3.81 1.5l2.86-2.86C14.96 1.1 12.7 0 10 0 6.13 0 2.82 2.02 1.1 5.49l3.48 2.5C5.34 6.72 7.48 4.02 10 4.02z" fill="#EA4335"/>
              </svg>
              <span className="hidden sm:inline font-semibold">Sign In with Google</span>
              <span className="sm:hidden font-semibold">Sign In with Google</span>
            </button>

            <button 
              type="button"
              className="w-full h-[48px] rounded-lg border border-[#EAEAEA] flex items-center justify-center gap-3 text-black text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 24.5C19.1274 24.5 24.5 19.1274 24.5 12.5C24.5 5.87258 19.1274 0.5 12.5 0.5C5.87258 0.5 0.5 5.87258 0.5 12.5C0.5 19.1274 5.87258 24.5 12.5 24.5Z" fill="url(#paint0_linear_8863_438)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93178 12.373C9.43002 10.8488 11.7628 9.84401 12.9299 9.35858C16.2624 7.97248 16.9549 7.73168 17.4062 7.72372C17.5055 7.72198 17.7275 7.74659 17.8712 7.86326C18.0845 8.03633 18.0857 8.41198 18.062 8.66061C17.8814 10.5581 17.1 15.1628 16.7025 17.288C16.5343 18.1872 16.203 18.4888 15.8824 18.5183C15.1856 18.5824 14.6564 18.0577 13.9814 17.6153C12.9253 16.923 12.3286 16.492 11.3034 15.8165C10.1187 15.0357 10.8867 14.6066 11.5619 13.9053C11.7386 13.7218 14.809 10.929 14.8684 10.6757C14.8759 10.644 14.8828 10.5259 14.8126 10.4635C14.7424 10.4012 14.6389 10.4225 14.5641 10.4394C14.4582 10.4635 12.771 11.5787 9.50249 13.785C9.02356 14.1139 8.58978 14.2741 8.20114 14.2657C7.77266 14.2565 6.9485 14.0234 6.3358 13.8243C5.5843 13.58 4.98702 13.4508 5.03905 13.036C5.06614 12.8198 5.3637 12.5989 5.93178 12.373Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_8863_438" x1="12.5" y1="0.5" x2="12.5" y2="24.3125" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2AABEE"/>
                <stop offset="1" stop-color="#229ED9"/>
                </linearGradient>
                </defs>
              </svg>
              <span className="hidden sm:inline font-semibold">Sign In with Telegram</span>
              <span className="sm:hidden font-semibold">Sign In with Telegram</span>
            </button>
          </form>

          {/* Bottom: Create account */}
          <div className="w-full flex justify-center mt-4 lg:mt-0">
            <span className="text-[#666] text-sm text-center">
              New to Nameword?{' '}
              <a href="#" className="text-[#3E239E] font-medium hover:underline transition-all" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>
                Create a free account
              </a>
            </span>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="block relative w-[90%] lg:w-[600px] h-[400px] lg:h-full bg-white mx-auto lg:left-[15px] lg:top-[15px]">
          {/* Background image with overlay */}
          <div className="absolute w-full h-full">
            <img 
              src="/profiles/pimage.png" 
              alt="Login Visual" 
              className="absolute w-full h-full object-cover rounded-[52px] bg-black/30" 
            />
            <div className="absolute inset-0 bg-black/30 rounded-[52px]"></div>
            
            {/* Overlayed content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-auto lg:h-[222px] w-full lg:w-[450px] xl:w-[612px] p-4 lg:p-6 xl:p-12 top-0 lg:top-[630px]">
              <div className="mt-32">
                <h2 className="text-white font-northuraHeavy text-2xl lg:text-3xl xl:text-4xl leading-tight mb-3 lg:mb-8 drop-shadow-lg">
                  Start turning your ideas into<br />
                  <span className="text-white bg-clip-text bg-gradient-to-r ">
                    reality
                  </span>
                </h2>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
                {/* Avatars */}
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <img 
                      key={i} 
                      src={`/profiles/profile${i}.jpg`} 
                      alt={`User ${i}`} 
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg hover:scale-110 transition-transform duration-200" 
                    />
                  ))}
                </div>
                
                {/* Stars and reviews */}
                <div className="flex flex-col ml-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M9.5 1l2.35 6.47h6.8l-5.5 4.01 2.1 6.47-5.5-4.01-5.5 4.01 2.1-6.47-5.5-4.01h6.8L9.5 1z" fill="#FFC045"/>
                      </svg>
                    ))}
                    <span className="text-white text-lg font-bold ml-2">5.0</span>
                  </div>
                  <span className="text-white text-xs opacity-80">From 200+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;


