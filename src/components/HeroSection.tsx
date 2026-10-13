import { ArrowRight, Layers, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HeroSectionProps {
  onSelectMilestone: (phaseId: string) => void;
  selectedPhase: string;
}

export function HeroSection({ onSelectMilestone, selectedPhase }: HeroSectionProps) {
  return (
    <section id="overview" className="bg-white border-b border-slate-200 pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-header */}
        <div className="text-xs uppercase tracking-widest font-semibold text-cyan-800 mb-3 flex items-center gap-2">
          <span>ĐỒ HỌA DỮ LIỆU ĐÔ THỊ</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>QUY HOẠCH CHỐNG NGẬP TP.HCM & KHU VỰC LIÊN KẾT</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl text-balance">
          Lộ Trình Xóa 50 Điểm Ngập Nặng Giai Đoạn 2026 – 2030
        </h1>

        {/* Narrative Deck */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Kế hoạch tổng thể giải quyết dứt điểm các rốn ngập úng nhức nhối tại TP.HCM và vùng phụ cận.
          Trọng tâm là <strong className="text-slate-900 font-semibold">mốc đột phá cuối năm 2027</strong> với
          sự hoàn thành của đại dự án ngăn triều 570km² và trục kênh Tham Lương - Bến Cát - rạch Nước Lên,
          xóa ngay 30 điểm ngập nặng (chiếm 60% toàn thành phố).
        </p>

        {/* 4 Quantitative Metric Cards in a Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Milestone 1 */}
          <div
            onClick={() => onSelectMilestone('phase-2026')}
            className={`p-5 rounded-xl border transition-all cursor-pointer text-left bg-white ${
              selectedPhase === 'phase-2026'
                ? 'border-amber-500 shadow-md ring-2 ring-amber-100'
                : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-amber-700">Giai đoạn 1</span>
              <span>Cuối 2026</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
              3 <span className="text-base font-normal text-slate-500">điểm</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Chiếm 6% tổng số điểm ngập</div>
            <div className="mt-3 text-xs text-slate-700 leading-snug">
              Xóa 3 điểm cấp bách: Phan Văn Hớn, Bình Quới & nút QL51 - Huỳnh Thúc Kháng.
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-amber-800">
              <span>Xem chi tiết 3 điểm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Milestone 2 - Breakthrough */}
          <div
            onClick={() => onSelectMilestone('phase-2027')}
            className={`p-5 rounded-xl border transition-all cursor-pointer text-left relative overflow-hidden bg-white ${
              selectedPhase === 'phase-2027'
                ? 'border-cyan-600 shadow-lg ring-2 ring-cyan-100'
                : 'border-cyan-300 hover:border-cyan-500 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-bold text-cyan-700 flex items-center gap-1">
                Mốc Đột Phá
              </span>
              <span className="font-semibold text-cyan-900">Cuối 2027</span>
            </div>
            <div className="text-3xl font-extrabold text-cyan-900 tabular-nums">
              30 <span className="text-base font-normal text-slate-500">điểm</span>
            </div>
            <div className="text-xs font-semibold text-cyan-700 mt-1">Chiếm 60% tổng số điểm</div>
            <div className="mt-3 text-xs text-slate-700 leading-snug">
              Hoàn thành Dự án ngăn triều 570km² & kênh Tham Lương. Xóa rốn ngập Thảo Điền, Chợ Thủ Đức, QL13, Gò Vấp, Nam Sài Gòn.
            </div>
            <div className="mt-3 pt-3 border-t border-cyan-100 flex items-center justify-between text-xs font-bold text-cyan-800">
              <span>Khám phá 30 điểm then chốt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Milestone 3 */}
          <div
            onClick={() => onSelectMilestone('phase-2028-2030')}
            className={`p-5 rounded-xl border transition-all cursor-pointer text-left bg-white ${
              selectedPhase === 'phase-2028-2030'
                ? 'border-emerald-600 shadow-md ring-2 ring-emerald-100'
                : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-emerald-700">Giai đoạn Về đích</span>
              <span>2028 – 2030</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
              17 <span className="text-base font-normal text-slate-500">điểm</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Chiếm 34% còn lại</div>
            <div className="mt-3 text-xs text-slate-700 leading-snug">
              Xử lý theo lộ trình từng năm: 2028 (3 điểm), 2029 (2 điểm) và 2030 (12 điểm cuối cùng).
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-emerald-800">
              <span>Xem chi tiết 17 điểm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Total Summary */}
          <div
            onClick={() => onSelectMilestone('all')}
            className={`p-5 rounded-xl border transition-all cursor-pointer text-left bg-slate-50 ${
              selectedPhase === 'all'
                ? 'border-slate-900 shadow-md ring-2 ring-slate-200'
                : 'border-slate-200 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Toàn bộ kế hoạch</span>
              <span>5 Năm</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
              50 <span className="text-base font-normal text-slate-500">điểm</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">100% mục tiêu xóa ngập nặng</div>
            <div className="mt-3 text-xs text-slate-700 leading-snug">
              Xử lý toàn diện tại 8 khu vực quận huyện trọng điểm & vùng cửa ngõ liên kết Đông Nam Bộ.
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Xem toàn cảnh 50 điểm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Quick legend bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold text-slate-800">Chú giải mã màu tiến độ:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span>2026: Khởi động (3 điểm)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-600 inline-block"></span>
              <span>2027: Mốc đột phá (30 điểm)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block"></span>
              <span>2028–2030: Về đích (17 điểm)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-700" />
              <span>Dự án ngăn triều 570km²</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Kênh Tham Lương 32km</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
