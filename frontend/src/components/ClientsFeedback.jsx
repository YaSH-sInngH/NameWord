import React from 'react';

const feedbacks = [
  {
    text: 'The brand name creation service was fantastic. We ended up with a name that perfectly represents our business and resonates with our target audience. Great experience!',
  },
  {
    text: 'Top notch web hosting and fantastic customer service. NameWord ensures our website runs smoothly and efficiently. Very satisfied with their services!',
  },
  {
    text: 'Our new website design exceeded our expectations. It’s beautiful, responsive, and user friendly. NameWord truly understands the needs of a modern business.',
  },
];

const ClientsFeedback = () => {
 return (
    <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-[148px] max-w-[1438px] mx-auto px-4 xl:px-0" style={{minHeight: '528px'}}>
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start w-full xl:max-w-[480px]">
        <h2 className="text-[28px] sm:text-[32px] xl:text-[40px] font-northuraHeavy text-black mb-6 xl:mb-8 leading-tight text-center xl:text-left">What NameWord Clients<br/>Say</h2>
        <p className="text-[#6B6B6B] font-korolevLight text-sm sm:text-base mb-6 xl:mb-8 text-center xl:text-left">"Nameword.com made the process of finding and securing our domain name incredibly simple. Their team was supportive every step of the way. Highly recommend!"</p>
        <div className="w-full xl:w-auto flex justify-center xl:justify-start">
          <button className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#6C4EE6] to-[#8B7BC5] text-white font-korolevHeavy text-sm sm:text-base shadow-md hover:scale-[1.03] transition-all">Get Started</button>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="relative w-full max-w-[600px] min-h-[320px] sm:min-h-[380px] xl:min-h-[440px] bg-gradient-to-br from-[#F7F6FF] to-[#EDEAFF] rounded-[20px] sm:rounded-[24px] xl:rounded-[32px] shadow-[0_8px_32px_0_rgba(62,35,158,0.07)] flex flex-row items-center px-4 sm:px-8 xl:px-12 py-6 sm:py-8 xl:py-12">
          {/* Progress Bar */}
          <div className="flex flex-col items-center mr-4 sm:mr-6 xl:mr-8 h-full">
            <div style={{height: '240px'}} className="w-1 h-[240px] sm:h-[280px] xl:h-[320px] bg-gradient-to-b from-[#6C4EE6] to-[#E6E6F0] rounded-full mt-2 mb-2"></div>
          </div>
          {/* Feedback Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 xl:gap-8 w-full">
            {feedbacks.map((f, idx) => (
              <div key={idx} className="flex flex-row items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-[10px] sm:rounded-[11px] xl:rounded-[12px] bg-gradient-to-r from-[#6C4EE6] to-[#8B7BC5] text-white font-northuraHeavy text-base sm:text-lg shadow-md mt-1 flex-shrink-0">{idx + 1}</div>
                <div className="flex-1 bg-white rounded-[12px] sm:rounded-[14px] xl:rounded-[16px] shadow-[0_4px_24px_0_rgba(62,35,158,0.07)] px-3 sm:px-4 xl:px-6 py-3 sm:py-3.5 xl:py-4 text-[#6B6B6B] font-korolevLight text-sm sm:text-base">"{f.text}"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback; 