import { HiPhone, HiMapPin, HiStar } from 'react-icons/hi2';

export default function LiveCalls() {
  const calls = [
    {
      id: 1,
      location: 'Corona',
      service: 'Product Support Request',
      status: 'unresolved',
      rating: '2/5',
      duration: '1m 28s',
      timeAgo: '12 hours ago'
    },
    {
      id: 2,
      location: 'Anaheim', 
      service: 'Installation Inquiry',
      status: 'resolved',
      rating: '4/5',
      duration: '2m 54s',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      location: 'Arlington Heights',
      service: 'Service Request',
      status: 'unresolved', 
      rating: '4/5',
      duration: '3m 26s',
      timeAgo: '1 hour ago'
    },
    {
      id: 4,
      location: 'Riverside',
      service: 'Technical Support',
      status: 'resolved',
      rating: '5/5', 
      duration: '4m 12s',
      timeAgo: '30 minutes ago'
    },
    {
      id: 5,
      location: 'San Bernardino',
      service: 'Urgent Service Call',
      status: 'resolved',
      rating: '4/5',
      duration: '2m 38s', 
      timeAgo: '2 hours ago'
    },
    {
      id: 6,
      location: 'Irvine',
      service: 'Technical Issue',
      status: 'unresolved',
      rating: '3/5',
      duration: '1m 45s',
      timeAgo: '45 minutes ago'
    },
    {
      id: 7,
      location: 'Long Beach', 
      service: 'Consultation Request',
      status: 'resolved',
      rating: '5/5',
      duration: '3m 15s',
      timeAgo: '3 hours ago'
    },
    {
      id: 8,
      location: 'Pasadena',
      service: 'Repair Request', 
      status: 'resolved',
      rating: '4/5',
      duration: '2m 22s',
      timeAgo: '1.5 hours ago'
    }
  ];

  // Duplicate calls to create seamless scrolling
  const duplicatedCalls = [...calls, ...calls, ...calls];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-normal mb-4">Real Calls Happening Now</h2>
          <p className="text-lg text-gray-600">Over 1 million minutes handled. Yes, these are real.</p>
        </div>
        
        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {duplicatedCalls.map((call, index) => (
              <div
                key={`${call.id}-${index}`}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-lg p-5 w-80 sm:w-96 md:w-[420px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Phone icon with status */}
                  <div className={`p-2.5 rounded-full ${
                    call.status === 'resolved' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <HiPhone className={`w-5 h-5 ${
                      call.status === 'resolved' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  
                  {/* Call details */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm text-gray-600">Someone from</span>
                        <div className="flex items-center gap-1">
                          <HiMapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-900">{call.location}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">just called about</div>
                    </div>
                    
                    <div className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                      {call.service}
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        {call.status === 'resolved' ? '✓' : '✕'}
                        <span className="capitalize">{call.status}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiStar className="w-3 h-3 text-yellow-400" />
                        <span>{call.rating}</span>
                      </div>
                      <span>{call.duration}</span>
                      <span>{call.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}