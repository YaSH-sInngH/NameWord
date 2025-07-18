import React from 'react';
import NewNavbar from './NewNavbar';
import { useNavigate } from 'react-router-dom';

const activityRows = [
  {
    date: '24 Jun 2024',
    time: '22:08',
    domain: 'example.com',
    activity: 'Change nameservers',
    status: { label: 'Successful', color: 'green', icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.796875" width="24" height="24" rx="12" fill="#039855"/><path d="M12.7917 18.6673C9.10977 18.6673 6.125 15.6825 6.125 12.0007C6.125 8.31875 9.10977 5.33398 12.7917 5.33398C16.4735 5.33398 19.4583 8.31875 19.4583 12.0007C19.4583 15.6825 16.4735 18.6673 12.7917 18.6673ZM12.7917 17.334C15.7372 17.334 18.125 14.9462 18.125 12.0007C18.125 9.05513 15.7372 6.66732 12.7917 6.66732C9.84615 6.66732 7.45833 9.05513 7.45833 12.0007C7.45833 14.9462 9.84615 17.334 12.7917 17.334ZM12.1267 14.6673L9.29833 11.8389L10.2411 10.8961L12.1267 12.7817L15.898 9.01046L16.8408 9.95327L12.1267 14.6673Z" fill="white"/></svg>
    ) },
    user: 'John Krasik',
  },
  {
    date: '24 Jun 2024',
    time: '22:08',
    domain: 'example.com',
    activity: 'Change nameservers',
    status: { label: 'Rejected', color: 'red', icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#FF4768"/> <g clipPath="url(#clip0_8366_178605)"> <g clipPath="url(#clip1_8366_178605)"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7969 17.5C15.8344 17.5 18.2969 15.0376 18.2969 12C18.2969 8.96243 15.8344 6.5 12.7969 6.5C9.75931 6.5 7.29688 8.96243 7.29688 12C7.29688 15.0376 9.75931 17.5 12.7969 17.5ZM12.7969 19C16.6629 19 19.7969 15.866 19.7969 12C19.7969 8.13401 16.6629 5 12.7969 5C8.93088 5 5.79688 8.13401 5.79688 12C5.79688 15.866 8.93088 19 12.7969 19Z" fill="white"/> <path fillRule="evenodd" clipRule="evenodd" d="M11.7969 9.375C11.7969 9.15 11.9969 9 12.2969 9H13.2969C13.5969 9 13.7969 9.15 13.7969 9.375V12.375C13.7969 12.6 13.5969 12.75 13.2969 12.75H12.2969C11.9969 12.75 11.7969 12.6 11.7969 12.375V9.375ZM11.7969 13.875C11.7969 13.65 11.9969 13.5 12.2969 13.5H13.2969C13.5969 13.5 13.7969 13.65 13.7969 13.875V14.625C13.7969 14.85 13.5969 15 13.2969 15H12.2969C11.9969 15 11.7969 14.85 11.7969 14.625V13.875Z" fill="white"/> </g> </g> <defs> <clipPath id="clip0_8366_178605"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> <clipPath id="clip1_8366_178605"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> </defs> </svg>
    ) },
    user: 'John Krasik',
  },
  {
    date: '24 Jun 2024',
    time: '22:08',
    domain: 'example.com',
    activity: 'Change nameservers',
    status: { label: 'In Progress', color: 'orange', icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#FF5722"/> <g clipPath="url(#clip0_8366_178625)"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7969 17.5C15.8344 17.5 18.2969 15.0376 18.2969 12C18.2969 8.96243 15.8344 6.5 12.7969 6.5C9.75931 6.5 7.29688 8.96243 7.29688 12C7.29688 15.0376 9.75931 17.5 12.7969 17.5ZM12.7969 19C16.6629 19 19.7969 15.866 19.7969 12C19.7969 8.13401 16.6629 5 12.7969 5C8.93088 5 5.79688 8.13401 5.79688 12C5.79688 15.866 8.93088 19 12.7969 19Z" fill="white"/> <g clipPath="url(#clip1_8366_178625)"> <path d="M12.7969 13C13.3492 13 13.7969 12.5523 13.7969 12C13.7969 11.4477 13.3492 11 12.7969 11C12.2446 11 11.7969 11.4477 11.7969 12C11.7969 12.5523 12.2446 13 12.7969 13Z" fill="white"/> <path d="M15.7969 13C16.3492 13 16.7969 12.5523 16.7969 12C16.7969 11.4477 16.3492 11 15.7969 11C15.2446 11 14.7969 11.4477 14.7969 12C14.7969 12.5523 15.2446 13 15.7969 13Z" fill="white"/> <path d="M9.79688 13C10.3492 13 10.7969 12.5523 10.7969 12C10.7969 11.4477 10.3492 11 9.79688 11C9.24459 11 8.79688 11.4477 8.79688 12C8.79688 12.5523 9.24459 13 9.79688 13Z" fill="white"/> </g> </g> <defs> <clipPath id="clip0_8366_178625"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> <clipPath id="clip1_8366_178625"> <rect width="8" height="8" fill="white" transform="translate(8.79688 8)"/> </clipPath> </defs> </svg>
    ) },
    user: 'John Krasik',
  },
  {
    date: '24 Jun 2024',
    time: '22:08',
    domain: 'example.com',
    activity: 'Change nameservers',
    status: { label: 'Scheduled', color: 'blue', icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.796875" width="24" height="24" rx="12" fill="#0987FF"/> <g clipPath="url(#clip0_8366_178651)"> <path d="M12.7969 4.5C14.786 4.5 16.6941 5.28977 18.1006 6.69629C19.5071 8.10281 20.2969 10.0109 20.2969 12C20.2969 13.9891 19.5071 15.8972 18.1006 17.3037C16.6941 18.7102 14.786 19.5 12.7969 19.5C10.8078 19.5 8.89969 18.7102 7.49316 17.3037C6.08664 15.8972 5.29688 13.9891 5.29688 12C5.29688 10.0109 6.08664 8.10281 7.49316 6.69629C8.89969 5.28977 10.8078 4.5 12.7969 4.5Z" stroke="white"/> <path d="M12.7907 16.1596C11.6859 16.1596 10.6263 15.7207 9.84511 14.9394C9.06389 14.1582 8.625 13.0987 8.625 11.9938C8.625 10.889 9.06389 9.82946 9.84511 9.04823C10.6263 8.26701 11.6859 7.82813 12.7907 7.82812C13.8955 7.82813 14.9551 8.26701 15.7363 9.04823C16.5175 9.82946 16.9564 10.889 16.9564 11.9938C16.9564 13.0987 16.5175 14.1582 15.7363 14.9394C14.9551 15.7207 13.8955 16.1596 12.7907 16.1596ZM12.7907 14.9687C13.5797 14.9687 14.3364 14.6553 14.8943 14.0974C15.4521 13.5395 15.7656 12.7828 15.7656 11.9938C15.7656 11.2049 15.4521 10.4482 14.8943 9.8903C14.3364 9.3324 13.5797 9.01898 12.7907 9.01898C12.0017 9.01898 11.2451 9.3324 10.6872 9.8903C10.1293 10.4482 9.81586 11.2049 9.81586 11.9938C9.81586 12.7828 10.1293 13.5395 10.6872 14.0974C11.2451 14.6553 12.0017 14.9687 12.7907 14.9687Z" fill="white"/> <path d="M12.8351 9.62305H12.7608C12.6129 9.62305 12.4711 9.68181 12.3665 9.7864C12.2619 9.89099 12.2031 10.0328 12.2031 10.1808V12.0402C12.2031 12.3488 12.4523 12.5979 12.7608 12.5979H12.8351C13.1437 12.5979 13.3928 12.3488 13.3928 12.0402V10.1808C13.3928 10.0328 13.3341 9.89099 13.2295 9.7864C13.1249 9.68181 12.983 9.62305 12.8351 9.62305Z" fill="white"/> <path d="M14.026 11.4053H12.7608C12.6129 11.4053 12.4711 11.464 12.3665 11.5686C12.2619 11.6732 12.2031 11.8151 12.2031 11.963V12.0373C12.2031 12.3458 12.4523 12.595 12.7608 12.595H14.026C14.3346 12.595 14.5837 12.3458 14.5837 12.0373V11.963C14.5837 11.8151 14.5249 11.6732 14.4203 11.5686C14.3158 11.464 14.1739 11.4053 14.026 11.4053Z" fill="white"/> </g> <defs> <clipPath id="clip0_8366_178651"> <rect width="16" height="16" fill="white" transform="translate(4.79688 4)"/> </clipPath> </defs> </svg>
    ) },
    user: 'John Krasik',
  },
];

export default function ActivityRecord() {
  const navigate = useNavigate();
  const tabs = [
    { label: 'Domain Overview', route: '/mystore' },
    { label: 'Activity record', route: '/activity-record' },
    { label: 'Domain forwarding', route: '/domainforwarding' },
  ];
  return (
    <div className="min-h-screen bg-[#F7F7FC]">
      <NewNavbar activeSection="Domains" />
      <div className="max-w-[1376px] mx-auto pt-10">
        <div className="flex items-center gap-2 mb-2">
          <button onClick={() => navigate('/mystore')} className="mr-2 p-1 rounded hover:bg-[#F3EDFF]">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="#1C1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1E40]">mystore.com</h1>
        </div>
        <div className="flex flex-row gap-4 md:gap-8 border-b border-[#EAEAEA] mt-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => tab.route !== '/activity-record' && navigate(tab.route)}
              className={`py-3 px-1 text-sm md:text-base font-medium border-b-2 transition whitespace-nowrap ${
                tab.route === '/activity-record' ? 'border-[#5E30CC] text-[#5E30CC]' : 'border-transparent text-[#6B7280]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-[16px] p-4 md:p-6 w-full flex flex-col gap-4">
          <span className="text-base font-semibold text-[#1C1E40] mb-2">Activity record</span>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-[#6B7280] text-left border-b border-[#EAEAEA]">
                  <th className="py-2 px-3 font-medium">Date and time</th>
                  <th className="py-2 px-3 font-medium">Domains</th>
                  <th className="py-2 px-3 font-medium">Activity</th>
                  <th className="py-2 px-3 font-medium">Status</th>
                  <th className="py-2 px-3 font-medium">User</th>
                </tr>
              </thead>
              <tbody>
                {activityRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#F3F3F3]">
                    <td className="py-2 px-3 whitespace-nowrap">{row.date}<br/><span className='text-xs text-[#6B7280]'>{row.time}</span></td>
                    <td className="py-2 px-3 font-semibold text-[#1C1E40]">{row.domain}</td>
                    <td className="py-2 px-3 text-black">{row.activity}</td>
                    <td className="py-2 px-3">
                      <span className={`inline-flex items-center gap-1 font-medium ${row.status.color === 'green' ? 'text-green-600' : row.status.color === 'red' ? 'text-red-500' : row.status.color === 'orange' ? 'text-orange-500' : 'text-blue-500'}`}>
                        {row.status.icon}{row.status.label}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-black">{row.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 