import { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, Calendar, TrendingUp } from 'lucide-react';

interface TimelineControllerProps {
  selectedYear: number | 'all';
  onSelectYear: (year: number | 'all') => void;
  selectedPhase: string;
  onSelectPhase: (phaseId: string) => void;
}

export function TimelineController({
  selectedYear,
  onSelectYear,
  selectedPhase,
  onSelectPhase
}: TimelineControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const years: Array<{ year: number; label: string; count: number; cumulative: number; percent: number; note: string; isHighlight?: boolean }> = [
    { year: 2026, label: 'Cuối 2026', count: 3, cumulative: 3, percent: 6, note: 'Khởi động 3 điểm cấp bách' },
    { year: 2027, label: 'Cuối 2027', count: 30, cumulative: 33, percent: 66, note: 'ĐỘT PHÁ: Dự án 570km² & Tham Lương', isHighlight: true },
    { year: 2028, label: 'Năm 2028', count: 3, cumulative: 36, percent: 72, note: 'Ung Văn Khiêm, Phạm Hữu Lầu, Nguyễn Bình' },
    { year: 2029, label: 'Năm 2029', count: 2, cumulative: 38, percent: 76, note: 'Hồ Học Lãm & Song hành QL22' },
    { year: 2030, label: 'Năm 2030', count: 12, cumulative: 50, percent: 100, note: 'Hoàn tất 12 điểm về đích toàn diện' },
  ];

  // Auto-play progression
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        let nextYear: number = 2026;
        if (typeof selectedYear === 'number') {
          const currentIndex = years.findIndex((y) => y.year === selectedYear);
          if (currentIndex !== -1 && currentIndex < years.length - 1) {
            nextYear = years[currentIndex + 1].year;
          } else {
            nextYear = 2026;
          }
        } else {
          nextYear = 2026;
        }
        handleYearClick(nextYear);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, selectedYear]);

  // Sync phase with year if year changes
  const handleYearClick = (year: number | 'all') => {
    setIsPlaying(false);
    onSelectYear(year);
    if (year === 'all') {
      onSelectPhase('all');
    } else if (year === 2026) {
      onSelectPhase('phase-2026');
    } else if (year === 2027) {
      onSelectPhase('phase-2027');
    } else {
      onSelectPhase('phase-2028-2030');
    }
  };

  const activeData = typeof selectedYear === 'number'
    ? years.find((y) => y.year === selectedYear)
    : null;

  return (
    <div id="timeline" className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title & auto-play trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-slate-500 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-700" />
              <span>TRÌNH ĐIỀU KHIỂN THỜI GIAN THEO TỪNG NĂM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Tiến Độ Xóa Ngập Lũy Kế (2026 – 2030)
            </h2>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                isPlaying
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-cyan-50 text-cyan-900 border border-cyan-200 hover:bg-cyan-100'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Tạm dừng chiếu' : 'Chạy diễn tiến tự động'}</span>
            </button>

            <button
              onClick={() => handleYearClick('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                selectedYear === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Tất cả 5 năm
            </button>

            {selectedYear !== 'all' && (
              <button
                onClick={() => handleYearClick('all')}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                title="Khôi phục xem tất cả"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Stepper Timeline Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {years.map((item) => {
            const isSelected = selectedYear === item.year;
            return (
              <button
                key={item.year}
                onClick={() => handleYearClick(item.year)}
                className={`relative p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? item.isHighlight
                      ? 'bg-cyan-50 border-cyan-600 shadow-md ring-2 ring-cyan-200'
                      : 'bg-slate-50 border-slate-900 shadow-md ring-2 ring-slate-200'
                    : item.isHighlight
                    ? 'bg-white border-cyan-300 hover:border-cyan-500 hover:bg-cyan-50/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                {item.isHighlight && (
                  <span className="absolute -top-2.5 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-cyan-700 text-white rounded-full">
                    Đột phá
                  </span>
                )}
                <div className="text-xs font-semibold text-slate-500 mb-1">{item.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
                    +{item.count}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">điểm ngập</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-600 line-clamp-2 leading-snug">
                  {item.note}
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Lũy kế: <strong className="text-slate-900 font-semibold">{item.cumulative}/50</strong></span>
                  <span className="font-bold text-slate-700">{item.percent}%</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Cumulative Progress Bar */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="flex items-center gap-1.5 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-700" />
              <span>
                {selectedYear === 'all'
                  ? 'Tổng thể mục tiêu: 50 điểm ngập nặng cần xử lý dứt điểm'
                  : `Mục tiêu đến hết ${activeData?.label}: Xóa bỏ ${activeData?.cumulative}/50 điểm ngập (${activeData?.percent}%)`}
              </span>
            </span>
            <span className="font-bold text-slate-900 tabular-nums">
              {selectedYear === 'all' ? '100% (50/50 điểm)' : `${activeData?.percent}% hoàn thành`}
            </span>
          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
            {/* 2026 segment: 6% */}
            <div
              style={{ width: '6%' }}
              className={`h-full transition-opacity ${
                selectedYear === 'all' || (typeof selectedYear === 'number' && selectedYear >= 2026)
                  ? 'bg-amber-500'
                  : 'bg-amber-200 opacity-40'
              }`}
              title="2026: 3 điểm (6%)"
            />
            {/* 2027 segment: 60% */}
            <div
              style={{ width: '60%' }}
              className={`h-full transition-opacity ${
                selectedYear === 'all' || (typeof selectedYear === 'number' && selectedYear >= 2027)
                  ? 'bg-cyan-600'
                  : 'bg-cyan-200 opacity-40'
              }`}
              title="2027: 30 điểm (60%)"
            />
            {/* 2028 segment: 6% */}
            <div
              style={{ width: '6%' }}
              className={`h-full transition-opacity ${
                selectedYear === 'all' || (typeof selectedYear === 'number' && selectedYear >= 2028)
                  ? 'bg-emerald-500'
                  : 'bg-emerald-200 opacity-40'
              }`}
              title="2028: 3 điểm (6%)"
            />
            {/* 2029 segment: 4% */}
            <div
              style={{ width: '4%' }}
              className={`h-full transition-opacity ${
                selectedYear === 'all' || (typeof selectedYear === 'number' && selectedYear >= 2029)
                  ? 'bg-teal-500'
                  : 'bg-teal-200 opacity-40'
              }`}
              title="2029: 2 điểm (4%)"
            />
            {/* 2030 segment: 24% */}
            <div
              style={{ width: '24%' }}
              className={`h-full transition-opacity ${
                selectedYear === 'all' || (typeof selectedYear === 'number' && selectedYear >= 2030)
                  ? 'bg-emerald-700'
                  : 'bg-emerald-200 opacity-40'
              }`}
              title="2030: 12 điểm (24%)"
            />
          </div>

          <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono tabular-nums">
            <span>2026 (3đ)</span>
            <span className="font-semibold text-cyan-800">2027 (30đ - Đột phá)</span>
            <span>2028 (3đ)</span>
            <span>2029 (2đ)</span>
            <span className="font-semibold text-emerald-800">2030 (12đ)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
