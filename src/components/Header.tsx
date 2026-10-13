import { MapPin, Printer } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ onPrint, activeSection, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'timeline', label: 'Tiến độ' },
    { id: 'map', label: 'Bản đồ điểm ngập' },
    { id: 'milestones', label: '3 Mốc chiến lược' },
    { id: 'projects', label: 'Đại dự án 2027' },
    { id: 'directory', label: 'Danh mục 50 điểm' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('overview');
            }}
            className="flex items-center gap-2.5 text-slate-900 font-bold tracking-tight text-lg whitespace-nowrap shrink-0 hover:text-cyan-700 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-sm font-black shadow-sm">
              <MapPin className="w-4 h-4" />
            </span>
            <span className="text-base sm:text-lg tracking-tight">XÓA NGẬP 2026–2030</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors cursor-pointer py-1 text-sm ${
                  activeSection === item.id
                    ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Xuất bản / In tóm tắt Infographic"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>In Infographic</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
