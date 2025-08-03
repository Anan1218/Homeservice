import { HiArrowRight } from 'react-icons/hi';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black text-white py-2 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span>Trusted by 500+ Home Service Companies Nationwide</span>
        <a 
          href="/success-stories" 
          className="inline-flex items-center gap-1 text-white hover:opacity-80 transition-opacity"
        >
          View Success Stories <HiArrowRight className="text-xs" />
        </a>
      </div>
    </div>
  );
}