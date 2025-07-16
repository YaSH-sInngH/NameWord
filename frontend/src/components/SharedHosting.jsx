import React, { useState } from 'react';
import NewNavbar from './NewNavbar';

const sidebarItems = [
  { label: 'VPS', icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.1933 5.37709C4.0399 6.57558 3.33073 8.20465 3.33073 9.99935C3.33073 13.6813 6.3155 16.666 9.9974 16.666C10.8981 16.666 11.7571 16.4874 12.5408 16.1637C12.6366 15.5383 12.4264 14.9382 12.3404 14.7282C12.1491 14.2619 11.5175 13.4645 10.4631 12.3583C10.1817 12.0625 10.1998 11.8356 10.3004 11.1613L10.312 11.0851C10.3803 10.6232 10.495 10.3501 12.0492 10.1033C12.8388 9.97818 13.0465 10.2938 13.3343 10.7308C13.3661 10.7792 13.398 10.8267 13.4306 10.8743C13.704 11.2741 13.9066 11.3655 14.2126 11.5047C14.3496 11.5668 14.5207 11.6453 14.75 11.7755C15.2933 12.086 15.2933 12.4366 15.2933 13.2053V13.2925C15.2933 13.6188 15.2614 13.9054 15.2112 14.1543C16.1206 13.0148 16.6641 11.5705 16.6641 9.99935C16.6641 7.25009 14.9999 4.88952 12.624 3.87003C12.163 4.18112 11.5306 4.62207 11.3099 4.92435C11.1971 5.07883 11.0376 5.8674 10.5188 5.93248C10.3829 5.94954 10.2006 5.93759 10.0074 5.92516C9.48948 5.8915 8.7809 5.84607 8.55406 6.46181C8.41006 6.85202 8.38473 7.91139 8.85065 8.46127C8.92523 8.5491 8.93965 8.7116 8.88898 8.89393C8.8224 9.13335 8.6879 9.27902 8.64598 9.3091C8.56565 9.26293 8.4054 9.07693 8.29688 8.95035C8.03535 8.64643 7.7091 8.26796 7.28737 8.15082C7.13402 8.10837 6.96545 8.07324 6.80196 8.03882C6.3444 7.94291 5.82609 7.8338 5.70566 7.57687C5.61775 7.38868 5.61813 7.12952 5.61847 6.85572C5.61847 6.50868 5.61847 6.11626 5.44847 5.73482C5.38278 5.58719 5.2948 5.46973 5.1933 5.37709ZM9.9974 18.3327C5.39502 18.3327 1.66406 14.6017 1.66406 9.99935C1.66406 5.39697 5.39502 1.66602 9.9974 1.66602C14.5997 1.66602 18.3307 5.39697 18.3307 9.99935C18.3307 14.6017 14.5997 18.3327 9.9974 18.3327Z" fill="black"/>
    </svg>
  ) },
  { label: 'Windows RDP', icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8366_304893)">
    <path d="M17.9434 13.0145C17.5074 13.0151 17.0828 13.154 16.7308 13.4112C16.3788 13.6684 16.1174 14.0307 15.9844 14.4459H14.6326V11.7841H15.7546C16.6911 11.783 17.5889 11.4106 18.2511 10.7484C18.9133 10.0862 19.2858 9.18836 19.2869 8.25187C19.2869 7.3198 18.9271 6.45992 18.2739 5.83066C17.6431 5.22293 16.7656 4.86164 15.7607 4.78715C15.5863 3.46191 14.9361 2.24526 13.9312 1.36384C12.9264 0.482409 11.6354 -0.00368849 10.2987 -0.00390625C8.81733 -0.00390625 7.44495 0.566055 6.43436 1.60094C5.99044 2.05753 5.62956 2.58806 5.36795 3.16867C5.25459 3.15977 5.14099 3.1553 5.02713 3.15527C3.88287 3.15527 2.78547 3.60983 1.97635 4.41895C1.16724 5.22806 0.712681 6.32546 0.712681 7.46973C0.712681 8.61399 1.16724 9.71139 1.97635 10.5205C2.78547 11.3296 3.88287 11.7842 5.02713 11.7842H5.36698V14.4461H4.01545C3.86635 13.9787 3.55508 13.5801 3.13783 13.3221C2.72058 13.0641 2.22484 12.9637 1.7401 13.0392C1.25537 13.1146 0.813576 13.3609 0.494478 13.7335C0.175379 14.1061 0 14.5805 0 15.0711C0 15.5617 0.175379 16.0361 0.494478 16.4087C0.813576 16.7813 1.25537 17.0275 1.7401 17.103C2.22484 17.1784 2.72058 17.0781 3.13783 16.8201C3.55508 16.5621 3.86635 16.1635 4.01545 15.6961H5.99202C6.15778 15.6961 6.31675 15.6302 6.43396 15.513C6.55117 15.3958 6.61702 15.2369 6.61702 15.0711V11.7841H9.37483V15.99C8.90744 16.1391 8.50876 16.4504 8.25075 16.8677C7.99274 17.285 7.8924 17.7807 7.96785 18.2655C8.0433 18.7502 8.28956 19.192 8.66218 19.5112C9.03481 19.8303 9.50924 20.0057 9.99983 20.0057C10.4904 20.0057 10.9649 19.8303 11.3375 19.5112C11.7101 19.192 11.9564 18.7502 12.0318 18.2655C12.1073 17.7807 12.0069 17.285 11.7489 16.8677C11.4909 16.4504 11.0922 16.1391 10.6248 15.99V11.7841H13.3826V15.0711C13.3826 15.2369 13.4485 15.3958 13.5657 15.513C13.6829 15.6302 13.8419 15.6961 14.0076 15.6961H15.9842C16.0996 16.0578 16.3129 16.3806 16.6005 16.6285C16.8881 16.8764 17.2387 17.0399 17.6135 17.1008C17.9883 17.1617 18.3726 17.1176 18.7239 16.9735C19.0752 16.8293 19.3797 16.5908 19.6037 16.2842C19.8277 15.9776 19.9624 15.6149 19.993 15.2365C20.0235 14.858 19.9487 14.4784 19.7767 14.1399C19.6048 13.8013 19.3425 13.517 19.0189 13.3184C18.6952 13.1198 18.3229 13.0147 17.9432 13.0147L17.9434 13.0145ZM2.05627 15.8773C1.89676 15.8774 1.74083 15.8301 1.60821 15.7414C1.47558 15.6528 1.37221 15.5269 1.31117 15.3795C1.25013 15.2321 1.23417 15.07 1.2653 14.9135C1.29642 14.7571 1.37325 14.6134 1.48605 14.5006C1.59885 14.3878 1.74256 14.311 1.89901 14.2799C2.05546 14.2488 2.21762 14.2648 2.36497 14.3259C2.51233 14.387 2.63827 14.4904 2.72686 14.623C2.81545 14.7556 2.86272 14.9116 2.86268 15.0711C2.86239 15.2849 2.77733 15.4898 2.62616 15.6409C2.47499 15.7921 2.27004 15.8771 2.05627 15.8773ZM9.99983 18.7555C9.84033 18.7555 9.68441 18.7082 9.55179 18.6196C9.41917 18.5309 9.3158 18.405 9.25477 18.2576C9.19373 18.1103 9.17776 17.9481 9.20888 17.7917C9.24 17.6352 9.31681 17.4915 9.4296 17.3788C9.54239 17.266 9.68609 17.1892 9.84252 17.1581C9.99896 17.127 10.1611 17.1429 10.3085 17.204C10.4558 17.265 10.5818 17.3684 10.6704 17.501C10.759 17.6336 10.8063 17.7896 10.8063 17.9491C10.806 18.1629 10.721 18.3678 10.5698 18.519C10.4186 18.6702 10.2136 18.7552 9.99983 18.7555ZM5.02717 10.5341C4.21984 10.5345 3.44498 10.2162 2.87095 9.64855C2.29692 9.08086 1.9701 8.30957 1.96151 7.50229C1.95293 6.695 2.26326 5.91694 2.82508 5.33716C3.3869 4.75739 4.15482 4.42274 4.96198 4.40594C4.85021 4.93327 4.80095 5.47193 4.81522 6.01078C4.81916 6.1765 4.88877 6.33386 5.00874 6.44825C5.06814 6.50489 5.13811 6.54927 5.21467 6.57887C5.29122 6.60847 5.37285 6.62269 5.45491 6.62074C5.53696 6.61879 5.61783 6.6007 5.69289 6.56749C5.76795 6.53429 5.83573 6.48663 5.89237 6.42723C5.94901 6.36782 5.9934 6.29785 6.02299 6.2213C6.05259 6.14474 6.06682 6.06311 6.06487 5.98105C6.03174 4.5882 6.48057 3.34281 7.3287 2.47426C8.10213 1.68227 9.15682 1.24609 10.2987 1.24609C12.5984 1.24609 14.5082 3.1159 14.556 5.41406C14.5577 5.49699 14.5759 5.57875 14.6096 5.65457C14.6432 5.73038 14.6916 5.79875 14.7519 5.85567C14.8123 5.9126 14.8833 5.95695 14.961 5.98613C15.0386 6.01532 15.1213 6.02876 15.2042 6.02566C16.1307 5.99105 16.8919 6.23488 17.4067 6.73078C17.819 7.12793 18.0369 7.65387 18.0369 8.25176C18.0362 8.85684 17.7955 9.43693 17.3677 9.86478C16.9398 10.2926 16.3597 10.5333 15.7546 10.534L5.02717 10.5341ZM17.9434 15.8773C17.7839 15.8773 17.628 15.83 17.4953 15.7414C17.3627 15.6528 17.2593 15.5268 17.1983 15.3795C17.1373 15.2321 17.1213 15.0699 17.1524 14.9135C17.1836 14.7571 17.2604 14.6134 17.3732 14.5006C17.486 14.3878 17.6297 14.311 17.7862 14.2799C17.9426 14.2488 18.1048 14.2648 18.2521 14.3259C18.3995 14.387 18.5254 14.4904 18.614 14.623C18.7026 14.7556 18.7499 14.9116 18.7498 15.0711C18.7495 15.2849 18.6645 15.4898 18.5133 15.6409C18.3621 15.7921 18.1572 15.8771 17.9434 15.8773Z" fill="#515151"/>
    </g>
    <defs>
    <clipPath id="clip0_8366_304893">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  ) },
  { label: 'Web Hosting', icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8366_304897)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.17188C5.12436 1.17188 1.17188 5.12436 1.17188 10C1.17188 14.8756 5.12436 18.8281 10 18.8281C14.8756 18.8281 18.8281 14.8756 18.8281 10C18.8281 5.12436 14.8756 1.17188 10 1.17188ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM7.38417 4.9475L8.66947 3.70204L7.85397 2.86046L4.49083 6.11938H14.0625V4.9475H7.38417ZM5.43602 9.01696C5.29245 8.8259 5.08869 8.70645 4.77648 8.71088L4.77232 8.71094H4.28301V11.288C4.47678 11.2866 4.67127 11.2849 4.78913 11.2829C5.25751 11.2747 5.70312 10.8547 5.70312 9.99391C5.70312 9.56351 5.59442 9.22777 5.43602 9.01696ZM6.37288 8.31298C6.72436 8.78075 6.875 9.38657 6.875 9.99391C6.875 11.2086 6.16874 12.4308 4.80961 12.4546C4.50019 12.46 3.71004 12.4629 3.69707 12.4629H3.11113V7.53906H4.76431C5.45226 7.53061 6.00734 7.82652 6.37288 8.31298ZM8.04688 7.53893L9.12402 7.53918L10.7812 10.1348V7.53906H11.9531V12.4609H10.876L9.21875 9.86521V12.4609H8.04688V7.53893ZM16.3465 8.06169C16.3467 8.06184 16.3469 8.06198 15.9698 8.51051C15.5928 8.95903 15.593 8.95918 15.5932 8.95932L15.5935 8.95959L15.5941 8.9601L15.5951 8.96097L15.5966 8.96214C15.5972 8.96268 15.5973 8.96273 15.5968 8.96233C15.5958 8.96154 15.5926 8.959 15.5873 8.955C15.5766 8.94695 15.5578 8.93333 15.5319 8.91646C15.4795 8.88223 15.4024 8.83747 15.3087 8.79836C15.1172 8.71851 14.896 8.67759 14.6724 8.74494C14.5287 8.78825 14.467 8.88192 14.4568 8.94706C14.4492 8.9957 14.4576 9.00816 14.4625 9.01541C14.4629 9.01591 14.4632 9.0164 14.4635 9.01686C14.4784 9.03983 14.5216 9.08699 14.6283 9.14815C14.7952 9.24376 14.974 9.30311 15.1817 9.37208C15.2788 9.40433 15.3823 9.43869 15.4938 9.47985C15.4938 9.47984 15.4938 9.47985 15.4938 9.47985C15.9268 9.63957 16.2709 9.88876 16.4782 10.2259C16.6898 10.57 16.7271 10.9563 16.6258 11.3062C16.4291 11.986 15.7478 12.4609 14.9654 12.4609C14.238 12.4609 13.6147 12.1433 13.2244 11.7126L14.0928 10.9257C14.2681 11.1191 14.5793 11.2891 14.9654 11.2891C15.2948 11.2891 15.4667 11.096 15.5001 10.9804C15.514 10.9326 15.5105 10.8894 15.48 10.8397C15.4452 10.7831 15.3457 10.6743 15.0883 10.5793C15.0463 10.5638 14.989 10.5448 14.9216 10.5225C14.6855 10.4441 14.3235 10.324 14.0459 10.165C13.8517 10.0538 13.6351 9.89296 13.4806 9.65493C13.3158 9.40108 13.2469 9.09773 13.2991 8.76544C13.3928 8.16776 13.8513 7.76839 14.3344 7.62287C14.9044 7.4512 15.4164 7.57358 15.7598 7.71678C15.9334 7.78921 16.0741 7.87091 16.1727 7.93527C16.2223 7.96769 16.2623 7.99639 16.2915 8.01834C16.3061 8.02934 16.3181 8.03872 16.3274 8.04609C16.332 8.04979 16.336 8.05298 16.3392 8.05565C16.3408 8.05698 16.3423 8.05817 16.3436 8.05923L16.3454 8.06071L16.3465 8.06169ZM12.6158 15.0525H5.9375V13.8806H15.5092L12.146 17.1395L11.3305 16.298L12.6158 15.0525Z" fill="#5E30CC"/>
    </g>
    <defs>
    <clipPath id="clip0_8366_304897">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  ), active: true },
];

const plans = [
  {
    name: 'Basic plan',
    storage: '10GB SSD',
    websites: '1 Website',
    emails: '5 Email Accounts',
    panel: 'Control Panel: cPanel/Plesk',
    unlimited: true,
    price: '',
    btn: 'Choose Plan',
    selected: false,
  },
  {
    name: 'Standard',
    storage: '50GB SSD',
    websites: '5 Website',
    emails: '25 Email Accounts',
    panel: 'Control Panel: cPanel/Plesk',
    unlimited: true,
    price: '',
    btn: 'Choose Plan',
    selected: false,
  },
  {
    name: 'Advanced',
    storage: '100GB SSD',
    websites: '10 Website',
    emails: '50 Email Accounts',
    panel: 'Control Panel: cPanel/Plesk',
    unlimited: true,
    price: '',
    btn: 'Choose Plan',
    selected: false,
  },
  {
    name: 'Enterprise',
    storage: '200GB SSD',
    websites: '20 Website',
    emails: '100 Email Accounts',
    panel: 'Control Panel: cPanel/Plesk',
    unlimited: true,
    price: '',
    btn: 'Choose Plan',
    selected: true,
  },
];

const faqs = [
  {
    q: 'Why do I need a hosting plan?',
    a: 'You need a hosting plan to get your website up and running. Web hosting is a service that makes your website available on the internet and will allow people to access your site using a web browser.',
    open: true,
  },
  {
    q: 'I already have a website. Can I migrate it to Nameword?',
    a: '',
    open: false,
  },
  {
    q: 'Can I upgrade my plan later?',
    a: '',
    open: false,
  },
];

const SharedHosting = () => {
  const [faqOpen, setFaqOpen] = useState([true, false, false]);

  const handleFaqToggle = (idx) => {
    setFaqOpen((prev) => prev.map((open, i) => i === idx ? !open : open));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7F7FC]" style={{ minWidth: 1440}}>
      <NewNavbar activeSection="Hostings" />
      <div className="flex">
        {/* Custom Sidebar */}
        <div className="fixed top-[80px] left-0 w-[250px] h-[calc(100vh-80px)] z-20 bg-white border-r border-[#EAEAEA] flex flex-col pt-8">
          <div className="px-6 pb-4 text-xs text-[#6B7280] font-semibold tracking-wide">Main menu</div>
          <div className="flex flex-col gap-2 px-2">
            {sidebarItems.map((item, idx) => (
              <button key={item.label} className={`flex items-center gap-3 px-4 py-3 rounded-[8px] text-base font-medium transition ${item.active ? 'bg-[#F7F3FF] text-[#9664E6]' : 'text-[#1C1E40] hover:bg-[#F9FAFC]'}`}> {item.icon} {item.label} </button>
            ))}
          </div>
        </div>
        {/* Main Content - scrollable */}
        <div className="ml-[250px] h-[calc(100vh-80px)] overflow-y-auto">
          <main className="bg-[#F9FAFC] rounded-[24px] flex flex-col gap-10 shadow-sm p-8" style={{ minHeight: 1188, maxWidth: 1180 }}>
            {/* Heading and Stepper */}
            <div>
              <h1 className="text-3xl font-bold text-[#1C1E40] mb-2">Hi Kevin, let’s set up your hosting plan!</h1>
              {/* Stepper */}
              <div className="flex items-center gap-4 mb-8">
                {["Plans", "Billing Cycle", "Domain", "Control Panel", "Server Location", "Configuration"].map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className={`flex items-center gap-2 ${idx === 0 ? 'text-[#9664E6]' : 'text-[#A3A3A3]'}`}>
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${idx === 0 ? 'border-[#9664E6] bg-[#F7F3FF]' : 'border-[#EAEAEA] bg-white'} font-semibold`}>{idx + 1}</span>
                      <span className="font-medium text-base">{step}</span>
                    </div>
                    {idx < 5 && <span className="w-8 h-0.5 bg-[#EAEAEA] rounded-full" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* Hosting Plans */}
            <div className="bg-white rounded-[16px] p-8 flex flex-col gap-6 mb-4" style={{ width: 1116 }}>
              <div className="text-xl font-semibold text-[#1C1E40] mb-2">Choose Your Hosting Plan</div>
              <div className="text-sm text-[#6B7280] mb-6">Select a hosting plan that best suits your website’s needs. All plans include security, reliability, and high-speed performance.</div>
              <div className="flex flex-row gap-4 w-full">
                {plans.map((plan, idx) => (
                  <div key={plan.name} className={`flex flex-col flex-1 rounded-[12px] border ${plan.selected ? 'border-[#9664E6] bg-[#F7F3FF]' : 'border-[#EAEAEA] bg-white'} p-6 gap-2`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="32" height="32" rx="16" fill="#F4EBFF"/>
                        <rect x="2" y="2" width="32" height="32" rx="16" stroke="#F9F5FF" stroke-width="4"/>
                        <path d="M11.3359 19.6667L18.0026 23L24.6693 19.6667M18.0026 13L11.3359 16.3333L18.0026 19.6667L24.6693 16.3333L18.0026 13Z" stroke="#7F56D9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span className={`font-semibold text-base ${plan.selected ? 'text-[#9664E6]' : 'text-[#1C1E40]'}`}>{plan.name}</span>
                    </div>
                    <span className="text-xs text-[#027A48] font-semibold bg-[#ECFDF3]">Unlimited</span>
                    <span className="text-2xl font-bold text-[#1C1E40] mb-2">{plan.storage}</span>
                    <ul className="text-sm text-[#6B7280] mb-4 flex flex-col gap-1">
                        <li className='flex flex-row gap-[8px] items-center'>  
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54627 9.15L14.0213 0.675C14.2213 0.475 14.4546 0.375 14.7213 0.375C14.9879 0.375 15.2213 0.475 15.4213 0.675C15.6213 0.875 15.7213 1.11267 15.7213 1.388C15.7213 1.66333 15.6213 1.90067 15.4213 2.1L6.24627 11.3C6.04627 11.5 5.81294 11.6 5.54627 11.6C5.27961 11.6 5.04627 11.5 4.84627 11.3L0.546274 7C0.346274 6.8 0.250274 6.56267 0.258274 6.288C0.266274 6.01333 0.370607 5.77567 0.571274 5.575C0.77194 5.37433 1.00961 5.27433 1.28427 5.275C1.55894 5.27567 1.79627 5.37567 1.99627 5.575L5.54627 9.15Z" fill="#5E30CC"/>
                            </svg> 
                            {plan.websites}
                        </li>
                        <li className='flex flex-row gap-[8px] items-center'>  
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54627 9.15L14.0213 0.675C14.2213 0.475 14.4546 0.375 14.7213 0.375C14.9879 0.375 15.2213 0.475 15.4213 0.675C15.6213 0.875 15.7213 1.11267 15.7213 1.388C15.7213 1.66333 15.6213 1.90067 15.4213 2.1L6.24627 11.3C6.04627 11.5 5.81294 11.6 5.54627 11.6C5.27961 11.6 5.04627 11.5 4.84627 11.3L0.546274 7C0.346274 6.8 0.250274 6.56267 0.258274 6.288C0.266274 6.01333 0.370607 5.77567 0.571274 5.575C0.77194 5.37433 1.00961 5.27433 1.28427 5.275C1.55894 5.27567 1.79627 5.37567 1.99627 5.575L5.54627 9.15Z" fill="#5E30CC"/>
                            </svg> 
                            {plan.emails}
                        </li>
                        <li className='flex flex-row gap-[8px] items-center'>  
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54627 9.15L14.0213 0.675C14.2213 0.475 14.4546 0.375 14.7213 0.375C14.9879 0.375 15.2213 0.475 15.4213 0.675C15.6213 0.875 15.7213 1.11267 15.7213 1.388C15.7213 1.66333 15.6213 1.90067 15.4213 2.1L6.24627 11.3C6.04627 11.5 5.81294 11.6 5.54627 11.6C5.27961 11.6 5.04627 11.5 4.84627 11.3L0.546274 7C0.346274 6.8 0.250274 6.56267 0.258274 6.288C0.266274 6.01333 0.370607 5.77567 0.571274 5.575C0.77194 5.37433 1.00961 5.27433 1.28427 5.275C1.55894 5.27567 1.79627 5.37567 1.99627 5.575L5.54627 9.15Z" fill="#5E30CC"/>
                            </svg> 
                            {plan.panel}
                        </li>
                    </ul>
                    <button className={`rounded-full px-6 py-2 font-semibold text-base transition ${plan.selected ? 'bg-[#9664E6] text-white' : 'bg-white text-[#9664E6] border border-[#9664E6] hover:bg-[#F7F3FF]'}`}>{plan.btn}</button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button className="text-[#5E30CC] underline font-medium">Cancel</button>
                <div className="flex gap-4">
                  <button className="rounded-full px-6 py-2 font-semibold text-[#5E30CC] border border-[#9664E6] bg-white hover:bg-[#F7F3FF]">Save as a Draft</button>
                  <button className="rounded-full px-6 py-2 font-semibold text-white bg-[#9664E6]">Next</button>
                </div>
              </div>
            </div>
            {/* FAQ Section */}
            <div className="bg-white rounded-[16px] p-8 flex flex-col gap-4" style={{ width: 1116, height: 400 }}>
              <div className="text-lg font-semibold text-[#1C1E40] mb-2">Frequently asked questions</div>
              <div className="text-sm text-[#6B7280] mb-4">Everything you need to know about the product and billing.</div>
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[#EAEAEA] pb-4 mb-2">
                  <button className="flex items-center justify-between w-full text-left" onClick={() => handleFaqToggle(idx)}>
                    <span className="font-semibold text-base text-[#1C1E40]">{faq.q}</span>
                    <span className="text-[#9664E6] text-2xl font-bold">{faqOpen[idx] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[idx] && faq.a && (
                    <div className="text-sm text-[#6B7280] mt-2">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SharedHosting; 