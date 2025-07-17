import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#3E239E] text-white" style={{ opacity: 1 }}>
      {/* Main Content Container */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-between pt-8 sm:pt-12 md:pt-[80px] lg:pt-[60px] px-[20px] lg:px-[72px] pb-8 sm:pb-12 md:pb-[120px] lg:pb-[120px] gap-8 sm:gap-10 md:gap-[20px] lg:gap-[120px] xl:gap-[39px] max-w-[95vw] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1296px] mx-auto"
        style={{ width: '100%', opacity: 1 }}
      >
        {/* Brand/Info */}
        <div className="flex flex-col items-center md:items-start min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[260px] max-w-[260px] w-full">
          <span className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">Nameword</span>
          <p className="text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 max-w-[220px] text-slate-400 text-korolev text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            {/* Phone Icon */}
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.36556 7.8823C7.302 9.529 8.6712 10.8982 10.3179 11.8346L11.2024 10.5963C11.4965 10.1847 12.0516 10.0575 12.4956 10.3C13.9024 11.0685 15.4571 11.5355 17.0789 11.6639C17.599 11.7051 18 12.1391 18 12.6608V17.1236C18 17.6363 17.6122 18.0659 17.1022 18.1183C16.5723 18.1728 16.0377 18.2002 15.5 18.2002C6.93959 18.2002 0 11.2606 0 2.7002C0 2.16247 0.0274201 1.62791 0.0818901 1.09796C0.1343 0.587945 0.56394 0.200195 1.07665 0.200195H5.53942C6.0611 0.200195 6.49513 0.601235 6.5363 1.12129C6.66467 2.74308 7.1317 4.29784 7.9002 5.70464C8.1427 6.1486 8.0155 6.70374 7.6039 6.99777L6.36556 7.8823ZM3.84425 7.2254L5.7442 5.86829C5.20547 4.70534 4.83628 3.47203 4.64727 2.2002H2.00907C2.00303 2.36652 2 2.5332 2 2.7002C2 10.156 8.0442 16.2002 15.5 16.2002C15.667 16.2002 15.8337 16.1972 16 16.1911V13.5529C14.7282 13.3639 13.4949 12.9947 12.3319 12.456L10.9748 14.356C10.4258 14.1427 9.8956 13.8917 9.3874 13.6063L9.3293 13.5732C7.3697 12.4589 5.74134 10.8305 4.627 8.8709L4.59394 8.8128C4.30849 8.3046 4.05754 7.77439 3.84425 7.2254Z" fill="#ABAEC9"/>
            </svg>
            <span className="text-xs sm:text-sm md:text-base">12 234123234</span>
          </div>
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            {/* Email Icon */}
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.200195H19C19.5523 0.200195 20 0.647915 20 1.2002V17.2002C20 17.7525 19.5523 18.2002 19 18.2002H1C0.44772 18.2002 0 17.7525 0 17.2002V1.2002C0 0.647915 0.44772 0.200195 1 0.200195ZM18 4.43812L10.0718 11.5382L2 4.41614V16.2002H18V4.43812ZM2.51146 2.2002L10.0619 8.8622L17.501 2.2002H2.51146Z" fill="#ABAEC9"/>
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-slate-400 text-korolev">example@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-korolev justify-center md:justify-start">
            {/* Location Icon */}
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21.9281L2.63604 15.5642C-0.87868 12.0494 -0.87868 6.35096 2.63604 2.83624C6.15076 -0.678485 11.8492 -0.678485 15.364 2.83624C18.8787 6.35096 18.8787 12.0494 15.364 15.5642L9 21.9281ZM13.9497 14.1499C16.6834 11.4163 16.6834 6.98412 13.9497 4.25045C11.2161 1.51678 6.78392 1.51678 4.05025 4.25045C1.31658 6.98412 1.31658 11.4163 4.05025 14.1499L9 19.0997L13.9497 14.1499ZM9 11.2002C7.8954 11.2002 7 10.3048 7 9.2002C7 8.09563 7.8954 7.2002 9 7.2002C10.1046 7.2002 11 8.09563 11 9.2002C11 10.3048 10.1046 11.2002 9 11.2002Z" fill="#ABAEC9"/>
            </svg>
            <span className="text-xs sm:text-sm md:text-base">example@email.com</span>
          </div>
        </div>
        {/* Links Columns */}
        <div className="flex flex-col md:flex-row flex-1 w-full md:justify-between gap-0 lg:gap-8 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[687px] md:h-[208px]">
          {/* NameWord Links */}
          <div className="flex flex-col items-center md:items-start min-w-[120px] sm:min-w-[140px] md:min-w-[150px] w-full">
            <span className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">NameWord</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className='text-slate-400 text-korolev'>Domain Search</li>
              <li className="font-bold text-slate-300 text-korolev">Web & Email Hosting</li>
              <li className='text-slate-400 text-korolev'>Web Design</li>
              <li className='text-slate-400 text-korolev'>My Account</li>
              <li className='text-slate-400 text-korolev'>Developer API</li>
            </ul>
          </div>
          {/* Support Links */}
          <div className="flex flex-col items-center md:items-start min-w-[120px] sm:min-w-[140px] md:min-w-[150px] w-full mt-4 md:mt-0">
            <span className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Support</span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 text-korolev">
              <li>Contact</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
          {/* Socials */}
          <div className="flex flex-col items-center md:items-start w-[5rem] md:min-w-[8rem] w-full lg:mt-4 md:mt-0">
            <span className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Follow Namewords</span>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs lg:text-sm text-slate-400 text-korolev">
              <li className="flex items-center gap-2 sm:gap-2 md:gap-3"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3362 15.5392H12.6707V11.3624C12.6707 10.3664 12.6505 9.08469 11.2817 9.08469C9.892 9.08469 9.6797 10.1685 9.6797 11.2889V15.5392H7.0142V6.9502H9.5747V8.1209H9.6092C9.967 7.4459 10.837 6.73345 12.1367 6.73345C14.8375 6.73345 15.337 8.511 15.337 10.8247L15.3362 15.5392ZM4.00373 5.77495C3.14573 5.77495 2.45648 5.08045 2.45648 4.2262C2.45648 3.3727 3.14648 2.67895 4.00373 2.67895C4.85873 2.67895 5.55173 3.3727 5.55173 4.2262C5.55173 5.08045 4.85798 5.77495 4.00373 5.77495ZM5.34023 15.5392H2.66723V6.9502H5.34023V15.5392ZM16.6697 0.200195H1.32923C0.594976 0.200195 0.000976562 0.780695 0.000976562 1.49695V16.9035C0.000976562 17.6204 0.594976 18.2002 1.32923 18.2002H16.6675C17.401 18.2002 18.001 17.6204 18.001 16.9035V1.49695C18.001 0.780695 17.401 0.200195 16.6675 0.200195H16.6697Z" fill="#ABAEC9"/>
                </svg>
                LinkedIn</li>
              <li className="flex items-center gap-2 sm:gap-2 md:gap-3">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4024 18.2002V11.2346H14.7347L15.0838 8.5267H12.4024V6.79784C12.4024 6.01383 12.62 5.47954 13.7443 5.47954L15.1783 5.47887V3.05696C14.9302 3.02402 14.0791 2.95026 13.0888 2.95026C11.0213 2.95026 9.606 4.21218 9.606 6.52972V8.5267H7.2677V11.2346H9.606V18.2002H1C0.44772 18.2002 0 17.7525 0 17.2002V1.2002C0 0.647915 0.44772 0.200195 1 0.200195H17C17.5523 0.200195 18 0.647915 18 1.2002V17.2002C18 17.7525 17.5523 18.2002 17 18.2002H12.4024Z" fill="#ABAEC9"/>
                </svg>
                Facebook</li>
              <li className="flex items-center gap-2 sm:gap-2 md:gap-3">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0281 0.201172C12.1535 0.203032 12.7238 0.208992 13.2166 0.223662L13.4107 0.230002C13.6349 0.237972 13.8561 0.247972 14.1228 0.260472C15.1869 0.309642 15.9128 0.477972 16.5503 0.725472C17.2094 0.979642 17.7661 1.32297 18.3219 1.87881C18.8769 2.43464 19.2203 2.99297 19.4753 3.65047C19.7219 4.28714 19.8903 5.01381 19.9403 6.07797C19.9522 6.34464 19.9618 6.56584 19.9697 6.79008L19.976 6.98417C19.9906 7.47691 19.9973 8.0473 19.9994 9.17274L20.0002 9.91834C20.0003 10.0094 20.0003 10.1034 20.0003 10.2004L20.0002 10.4825L19.9996 11.2282C19.9977 12.3536 19.9918 12.924 19.9771 13.4167L19.9707 13.6108C19.9628 13.8351 19.9528 14.0563 19.9403 14.3229C19.8911 15.3871 19.7219 16.1129 19.4753 16.7504C19.2211 17.4096 18.8769 17.9663 18.3219 18.5221C17.7661 19.0771 17.2069 19.4204 16.5503 19.6754C15.9128 19.9221 15.1869 20.0904 14.1228 20.1404C13.8561 20.1523 13.6349 20.162 13.4107 20.1698L13.2166 20.1761C12.7238 20.1908 12.1535 20.1974 11.0281 20.1996L10.2824 20.2004C10.1913 20.2004 10.0973 20.2004 10.0003 20.2004H9.7182L8.9725 20.1997C7.8471 20.1979 7.27672 20.1919 6.78397 20.1772L6.58989 20.1709C6.36564 20.1629 6.14444 20.1529 5.87778 20.1404C4.81361 20.0913 4.08861 19.9221 3.45028 19.6754C2.79194 19.4213 2.23444 19.0771 1.67861 18.5221C1.12278 17.9663 0.780277 17.4071 0.525277 16.7504C0.277777 16.1129 0.110277 15.3871 0.0602767 14.3229C0.0483967 14.0563 0.0387066 13.8351 0.0308566 13.6108L0.0245667 13.4167C0.00993665 12.924 0.00326674 12.3536 0.00110674 11.2282L0.000976562 9.17274C0.00283656 8.0473 0.00878657 7.47691 0.0234566 6.98417L0.0298066 6.79008C0.0377766 6.56584 0.0477767 6.34464 0.0602767 6.07797C0.109437 5.01297 0.277777 4.28797 0.525277 3.65047C0.779437 2.99214 1.12278 2.43464 1.67861 1.87881C2.23444 1.32297 2.79278 0.980472 3.45028 0.725472C4.08778 0.477972 4.81278 0.310472 5.87778 0.260472C6.14444 0.248602 6.36564 0.238912 6.58989 0.231062L6.78397 0.224772C7.27672 0.210132 7.8471 0.203462 8.9725 0.201302L11.0281 0.201172ZM10.0003 5.20047C7.23738 5.20047 5.00028 7.44 5.00028 10.2004C5.00028 12.9633 7.23981 15.2004 10.0003 15.2004C12.7632 15.2004 15.0003 12.9609 15.0003 10.2004C15.0003 7.43757 12.7607 5.20047 10.0003 5.20047ZM10.0003 7.20047C11.6572 7.20047 13.0003 8.54314 13.0003 10.2004C13.0003 11.8573 11.6576 13.2004 10.0003 13.2004C8.3434 13.2004 7.00028 11.8578 7.00028 10.2004C7.00028 8.54354 8.3429 7.20047 10.0003 7.20047ZM15.2503 3.70047C14.561 3.70047 14.0003 4.26038 14.0003 4.94962C14.0003 5.63887 14.5602 6.19964 15.2503 6.19964C15.9395 6.19964 16.5003 5.63974 16.5003 4.94962C16.5003 4.26038 15.9386 3.69961 15.2503 3.70047Z" fill="#ABAEC9"/>
                </svg>
                Instagram</li>
              <li className="flex items-center gap-2 sm:gap-2 md:gap-3">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2439 0.200195C10.778 0.203135 12.1143 0.216055 13.5341 0.272925L14.0375 0.294875C15.467 0.362555 16.8953 0.478175 17.6037 0.675695C18.5486 0.941145 19.2913 1.7157 19.5423 2.69752C19.942 4.25661 19.992 7.2996 19.9982 8.036L19.9991 8.1886V8.1993C19.9991 8.1993 19.9991 8.203 19.9991 8.2101L19.9982 8.3627C19.992 9.0991 19.942 12.1421 19.5423 13.7012C19.2878 14.6866 18.5451 15.4612 17.6037 15.723C16.8953 15.9205 15.467 16.0361 14.0375 16.1038L13.5341 16.1257C12.1143 16.1826 10.778 16.1955 10.2439 16.1985L10.0095 16.1993H9.9991C9.9991 16.1993 9.9956 16.1993 9.9887 16.1993L9.7545 16.1985C8.6241 16.1923 3.89772 16.1412 2.39451 15.723C1.4496 15.4575 0.70692 14.683 0.45587 13.7012C0.0561999 12.1421 0.00624 9.0991 0 8.3627V8.036C0.00624 7.2996 0.0561999 4.25661 0.45587 2.69752C0.7104 1.71206 1.45308 0.937515 2.39451 0.675695C3.89772 0.257425 8.6241 0.206415 9.7545 0.200195H10.2439ZM7.99911 4.69934V11.6993L13.9991 8.1993L7.99911 4.69934Z" fill="#ABAEC9"/>
                </svg>
                Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between pt-4 sm:pt-6 md:pt-[32px] pb-4 sm:pb-6 md:pb-[32px] gap-2 md:gap-0 border-t border-[#414C57] max-w-[95vw] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1296px] px-4 sm:px-8 md:px-0" style={{ width: '100%' }}>
        <span className="text-xs sm:text-sm md:text-base text-center">&copy; NameWord 2024. All rights reserved</span>
        <div className="flex flex-row gap-3 sm:gap-4 md:gap-8 mt-2 md:mt-0">
          <span className="cursor-pointer text-xs sm:text-sm md:text-base">Privacy Policy</span>
          <span className="cursor-pointer text-xs sm:text-sm md:text-base">Terms of service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
