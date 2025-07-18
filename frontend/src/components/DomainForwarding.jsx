import React from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const forwardingRows = [
  { domain: 'example.com', email: 'example@gmail.com', expires: '2025-01-19' },
  { domain: 'example.com', email: 'example@gmail.com', expires: '2025-01-19' },
  { domain: 'example.com', email: 'example@gmail.com', expires: '2025-01-19' },
  { domain: 'example.com', email: 'example@gmail.com', expires: '2025-01-19' },
];

export default function DomainForwarding() {
  const navigate = useNavigate();
  const tabs = [
    { label: 'Domain Overview', route: '/mystore' },
    { label: 'Activity record', route: '/activity-record' },
    { label: 'Domain forwarding', route: '/domainforwarding' },
  ];
  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Domains" />
      <div className="max-w-[1376px] mx-auto pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={() => navigate('/mystore')} className="mr-2 p-1 rounded hover:bg-[#F3EDFF]">
            <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1E40]">mystore.com</h1>
        </div>
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-8 border-b border-[#EAEAEA] mt-2 mb-4 sm:mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => tab.route !== '/domainforwarding' && navigate(tab.route)}
              className={`py-2 sm:py-3 px-1 text-xs sm:text-sm md:text-base font-medium border-b-2 transition whitespace-nowrap ${
                tab.route === '/domainforwarding' ? 'border-[#5E30CC] text-[#5E30CC]' : 'border-transparent text-[#6B7280]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-3 sm:p-4 md:p-6 w-full flex flex-col gap-4 sm:gap-6">
          {/* Mobile/Tablet Table View */}
          <div className="block lg:hidden">
            <div className="space-y-3">
              {forwardingRows.map((row, idx) => (
                <div key={idx} className="border border-[#EAEAEA] rounded-[8px] p-3 sm:p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-[#1C1E40] text-sm sm:text-base">{row.domain}</div>
                        <div className="text-xs text-[#6B7280] mt-1">{row.email}</div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                          <svg width="16" height="15" className="sm:w-[19px] sm:h-[18px]" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.76361 3.71107L2.44623 2.38137C2.35859 1.98458 1.99759 1.70878 1.59173 1.72863C1.06382 1.75382 0.691903 2.25688 0.823506 2.76872L1.65358 6.2062C1.76134 6.65241 2.20959 6.92747 2.65619 6.82146L6.09532 5.99782C7.17822 5.73514 6.78434 4.11093 5.70144 4.37352L4.04779 4.77221C5.19261 3.32651 6.87967 2.31633 8.86224 2.10464C12.7828 1.686 16.2821 4.51382 16.7008 8.43432C16.7908 9.57697 18.5166 9.39088 18.3609 8.25545C17.8788 3.7403 14.0352 0.37797 9.13975 0.424301C6.26581 0.708396 4.17667 1.94137 2.76361 3.71107ZM13.1314 11.9776C12.004 12.2085 12.4109 13.9059 13.5204 13.6004L15.1725 13.2016C14.0276 14.6468 12.3408 15.6527 10.358 15.8644C6.43749 16.283 2.93975 13.4617 2.5211 9.54113C2.48095 9.10472 2.10964 8.77393 1.67149 8.78429C1.17917 8.79689 0.805121 9.23147 0.865823 9.7202C1.38011 14.5364 5.71926 18.0405 10.5354 17.5262C12.9585 17.2676 15.0453 16.0304 16.4583 14.2628L16.7805 15.5942C16.9835 16.7597 18.7453 16.3379 18.3984 15.2068L17.5732 11.7677C17.4793 11.371 17.1124 11.1004 16.6349 11.1402L13.1314 11.9776Z" fill="#5E30CC"/>
                          </svg>
                        </button>
                        <button className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                          <svg width="18" height="17" className="sm:w-[21px] sm:h-[20px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7812 4.99935H18.9479V6.66602H17.2812V17.4993C17.2812 17.9596 16.9082 18.3327 16.4479 18.3327H4.78125C4.32102 18.3327 3.94792 17.9596 3.94792 17.4993V6.66602H2.28125V4.99935H6.44792V2.49935C6.44792 2.03912 6.82102 1.66602 7.28125 1.66602H13.9479C14.4082 1.66602 14.7812 2.03912 14.7812 2.49935V4.99935ZM15.6146 6.66602H5.61458V16.666H15.6146V6.66602ZM8.11458 9.16602H9.78125V14.166H8.11458V9.16602ZM11.4479 9.16602H13.1146V14.166H11.4479V9.16602ZM8.11458 3.33268V4.99935H13.1146V3.33268H8.11458Z" fill="#FC5585"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs sm:text-sm text-[#6B7280]">Expires: <span className="text-black font-medium">{row.expires}</span></span>
                      <button className="bg-white border border-[#EAEAEA] text-[#5E30CC] rounded-full px-3 py-1 text-xs font-medium">
                        Domain details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <table className="min-w-full text-sm mb-6">
              <thead>
                <tr className="text-[#6B7280] text-left border-b border-[#EAEAEA]">
                  <th className="py-2 px-3 font-medium">Domain name</th>
                  <th className="py-2 px-3 font-medium">Expires</th>
                  <th className="py-2 px-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {forwardingRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#F3F3F3]">
                    <td className="py-2 px-3 font-semibold text-[#1C1E40]">{row.domain}<br/><span className='text-xs text-[#6B7280]'>{row.email}</span></td>
                    <td className="py-2 px-3 text-black">{row.expires}</td>
                    <td className="py-2 px-3 flex flex-row gap-4">
                      <button className="w-5 h-5 flex items-center justify-center">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.76361 3.71107L2.44623 2.38137C2.35859 1.98458 1.99759 1.70878 1.59173 1.72863C1.06382 1.75382 0.691903 2.25688 0.823506 2.76872L1.65358 6.2062C1.76134 6.65241 2.20959 6.92747 2.65619 6.82146L6.09532 5.99782C7.17822 5.73514 6.78434 4.11093 5.70144 4.37352L4.04779 4.77221C5.19261 3.32651 6.87967 2.31633 8.86224 2.10464C12.7828 1.686 16.2821 4.51382 16.7008 8.43432C16.7908 9.57697 18.5166 9.39088 18.3609 8.25545C17.8788 3.7403 14.0352 0.37797 9.13975 0.424301C6.26581 0.708396 4.17667 1.94137 2.76361 3.71107ZM13.1314 11.9776C12.004 12.2085 12.4109 13.9059 13.5204 13.6004L15.1725 13.2016C14.0276 14.6468 12.3408 15.6527 10.358 15.8644C6.43749 16.283 2.93975 13.4617 2.5211 9.54113C2.48095 9.10472 2.10964 8.77393 1.67149 8.78429C1.17917 8.79689 0.805121 9.23147 0.865823 9.7202C1.38011 14.5364 5.71926 18.0405 10.5354 17.5262C12.9585 17.2676 15.0453 16.0304 16.4583 14.2628L16.7805 15.5942C16.9835 16.7597 18.7453 16.3379 18.3984 15.2068L17.5732 11.7677C17.4793 11.371 17.1124 11.1004 16.6349 11.1402L13.1314 11.9776Z" fill="#5E30CC"/>
                        </svg>
                      </button>
                      <button className="w-5 h-5 flex items-center justify-center">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.7812 4.99935H18.9479V6.66602H17.2812V17.4993C17.2812 17.9596 16.9082 18.3327 16.4479 18.3327H4.78125C4.32102 18.3327 3.94792 17.9596 3.94792 17.4993V6.66602H2.28125V4.99935H6.44792V2.49935C6.44792 2.03912 6.82102 1.66602 7.28125 1.66602H13.9479C14.4082 1.66602 14.7812 2.03912 14.7812 2.49935V4.99935ZM15.6146 6.66602H5.61458V16.666H15.6146V6.66602ZM8.11458 9.16602H9.78125V14.166H8.11458V9.16602ZM11.4479 9.16602H13.1146V14.166H11.4479V9.16602ZM8.11458 3.33268V4.99935H13.1146V3.33268H8.11458Z" fill="#FC5585"/>
                        </svg>
                      </button>
                      <button className="bg-white border border-[#EAEAEA] text-[#5E30CC] rounded-full px-4 py-1 text-xs font-medium mr-2">
                        Domain details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#EAEAEA] rounded-[8px] sm:rounded-[12px] p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 w-full">
            <span className="text-xs sm:text-sm font-semibold text-[#1C1E40] mb-1">Forwarding a domain or subdomain allows you to automatically redirect visitors to other websites.</span>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <input className="flex-1 rounded-[8px] border border-[#EAEAEA] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#1C1E40] bg-[#FAFAFA] focus:outline-none" placeholder="Domain" />
                <button className="bg-[#5E30CC] text-white rounded-full px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base whitespace-nowrap">Add forwarding</button>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <input className="flex-1 rounded-[8px] border border-[#EAEAEA] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#1C1E40] bg-[#FAFAFA] focus:outline-none" placeholder="Subdomain" />
                <button className="bg-[#5E30CC] text-white rounded-full px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base whitespace-nowrap">Add forwarding</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 