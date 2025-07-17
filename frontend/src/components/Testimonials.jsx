import React, { useState } from 'react';

const testimonialTabs = [
  'For business owners',
  'Designers',
  'Marketers',
  'Sales',
  'Developer',
  'Product Manager',
  'Others',
];

const testimonialsData = [
  [
    {
      logo: 'LOGO',
      text: 'As a small business owner, finding a hosting service that offered both affordability and security was crucial. We discovered a provider that delivers consistent uptime and excellent scalability, allowing us to focus on expanding our customer base without technical headaches.',
      name: 'Emily Johnson',
      title: 'Founder of GreenMarket Online',
      avatar: '/profiles/profile1.jpg',
      link: '#',
    },
    {
      logo: 'LOGO',
      text: 'Launching a new digital campaign required a seamless setup and robust security. We partnered with a company that prioritized our online safety and provided a smooth, secure payment experience, ensuring our website performed flawlessly under pressure.',
      name: 'Cameron Williamson',
      title: 'Marketing Director, UrbanStyle Media',
      avatar: '/profiles/profile2.jpg',
      link: '#',
    },
    {
      logo: 'LOGO',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
      name: 'Wade Warren',
      title: 'CEO of TechStart Innovations',
      avatar: '/profiles/profile3.jpg',
      link: '#',
    },
  ],
  // Add more arrays for other tabs if needed
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);
  const testimonials = testimonialsData[activeTab] || testimonialsData[0];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
      <h2 className="text-2xl md:text-3xl lg:text-[32px] font-northuraHeavy text-black text-center mb-6 md:mb-8 lg:mb-10">Testimonials</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white rounded-full shadow-[0_8px_32px_0_rgba(62,35,158,0.07)] px-2 md:px-4 py-2 mb-6 md:mb-8 lg:mb-12 max-w-full">
        {testimonialTabs.map((tab, idx) => (
          <button
            key={tab}
            className={`px-3 md:px-4 lg:px-6 py-2 rounded-full font-korolevLight text-xs md:text-sm transition-all duration-200 whitespace-nowrap ${
              idx === activeTab
                ? 'bg-gradient-to-r from-[#6C4EE6] to-[#8B7BC5] text-white shadow-md font-semibold'
                : 'text-[#23295A] hover:text-[#6C4EE6]'
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Testimonials Cards */}
      <div className="w-full max-w-7xl">
        {/* Mobile: Single column with horizontal scroll */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-[24px] shadow-[0_8px_32px_0_rgba(62,35,158,0.07)] px-6 py-6 min-w-[280px] max-w-[300px] min-h-[320px] border border-[#E6E6F0] snap-center flex-shrink-0"
                style={{ boxSizing: 'border-box' }}
              >
                <div className="text-[#23295A] font-northura text-base mb-2">{t.logo}</div>
                <div className="text-[#6B6B6B] font-korolevLight text-sm mb-4 flex-grow">{t.text}</div>
                <div className="flex flex-row items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full bg-[#F3F3F3] object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-northuraHeavy text-black text-sm leading-tight">{t.name}</span>
                    <span className="font-korolevLight text-xs text-[#6B6B6B]">{t.title}</span>
                  </div>
                </div>
                <a
                  href={t.link}
                  className="mt-2 text-[#6C4EE6] font-korolevHeavy text-sm flex items-center gap-1 hover:underline"
                >
                  Read case study
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L10.586 9H3a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" fill="#6C4EE6"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tablet: Two columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {testimonials.slice(0, 2).map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-[24px] shadow-[0_8px_32px_0_rgba(62,35,158,0.07)] px-6 py-6 w-full max-w-[350px] min-h-[340px] border border-[#E6E6F0]"
                style={{ boxSizing: 'border-box' }}
              >
                <div className="text-[#23295A] font-northura text-base mb-2">{t.logo}</div>
                <div className="text-[#6B6B6B] font-korolevLight text-sm mb-4 flex-grow">{t.text}</div>
                <div className="flex flex-row items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full bg-[#F3F3F3] object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-northuraHeavy text-black text-sm leading-tight">{t.name}</span>
                    <span className="font-korolevLight text-xs text-[#6B6B6B]">{t.title}</span>
                  </div>
                </div>
                <a
                  href={t.link}
                  className="mt-2 text-[#6C4EE6] font-korolevHeavy text-sm flex items-center gap-1 hover:underline"
                >
                  Read case study
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L10.586 9H3a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" fill="#6C4EE6"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop: Three columns (original 1440px design) */}
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:gap-8 lg:mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-[24px] shadow-[0_8px_32px_0_rgba(62,35,158,0.07)] px-8 py-8 max-w-[410px] min-h-[376px] border border-[#E6E6F0]"
              style={{ boxSizing: 'border-box' }}
            >
              <div className="text-[#23295A] font-northura text-lg mb-2">{t.logo}</div>
              <div className="text-[#6B6B6B] font-korolevLight text-sm mb-6">{t.text}</div>
              <div className="flex flex-row items-center gap-3 mt-auto mb-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full bg-[#F3F3F3] object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-northuraHeavy text-black text-base leading-tight">{t.name}</span>
                  <span className="font-korolevLight text-xs text-[#6B6B6B]">{t.title}</span>
                </div>
              </div>
              <a
                href={t.link}
                className="mt-2 text-[#6C4EE6] font-korolevHeavy text-sm flex items-center gap-1 hover:underline"
              >
                Read case study
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L10.586 9H3a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414z" fill="#6C4EE6"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Controls */}
      <div className="flex flex-row gap-4 mt-4 lg:mt-2">
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F3F3F3] flex items-center justify-center text-[#6C4EE6] hover:bg-[#E6E6F0] transition-all">
          <svg width="16" height="16" className="md:w-5 md:h-5" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#6C4EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6C4EE6] flex items-center justify-center text-white hover:bg-[#8B7BC5] transition-all">
          <svg width="16" height="16" className="md:w-5 md:h-5" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials; 