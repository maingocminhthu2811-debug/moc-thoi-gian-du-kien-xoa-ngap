import { ArrowUp, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight mb-1">
              <span className="w-5 h-5 rounded bg-cyan-600 text-white flex items-center justify-center text-xs">
                <MapPin className="w-3 h-3" />
              </span>
              <span>ĐỒ HỌA DỮ LIỆU ĐÔ THỊ · LỘ TRÌNH XÓA NGẬP 2026 – 2030</span>
            </div>
            <p className="text-slate-500 text-xs max-w-xl leading-relaxed">
              Dữ liệu tổng hợp theo kế hoạch chiến lược giải quyết dứt điểm các điểm ngập úng trọng điểm
              tại TP.HCM và vùng liên kết kinh tế Đông Nam Bộ giai đoạn 2026 – 2030.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Lên đầu trang</span>
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Nguồn dữ liệu: Quy hoạch tổng thể thoát nước & chống ngập đô thị TP.HCM.
          </div>
          <div>
            Thiết kế tương tác trực quan hóa dữ liệu · Nền trắng tiêu chuẩn báo chí
          </div>
        </div>
      </div>
    </footer>
  );
}
