import { BarChart3, PieChart, ShieldCheck, MapPinned, Info } from 'lucide-react';

export function AnalyticsCharts() {
  const regionBreakdown = [
    { name: 'TP. Thủ Đức', count: 10, percent: 20, color: 'bg-cyan-600' },
    { name: 'Bình Dương (Trục QL13)', count: 9, percent: 18, color: 'bg-sky-600' },
    { name: 'Quận 7 - Nhà Bè', count: 10, percent: 20, color: 'bg-blue-600' },
    { name: 'Bà Rịa - Vũng Tàu', count: 7, percent: 14, color: 'bg-emerald-600' },
    { name: 'Bình Thạnh', count: 5, percent: 10, color: 'bg-teal-600' },
    { name: 'Gò Vấp', count: 5, percent: 10, color: 'bg-amber-600' },
    { name: 'Bình Tân - Q6 - Q8', count: 4, percent: 8, color: 'bg-indigo-600' },
    { name: 'Hóc Môn - Q12', count: 3, percent: 6, color: 'bg-rose-600' },
  ];

  const causesBreakdown = [
    { label: 'Mưa lớn & địa hình trũng', count: 20, percent: 40, desc: 'Nước dồn về vùng trũng lòng chảo không có lối thoát' },
    { label: 'Triều cường dâng ven sông/biển', count: 16, percent: 32, desc: 'Nước sông Sài Gòn, Nhà Bè, Vũng Tàu vượt đỉnh bờ kè' },
    { label: 'Triều cường kết hợp mưa lớn cực đoan', count: 9, percent: 18, desc: 'Tác động kép nguy hiểm nhất làm tê liệt giao thông' },
    { label: 'Hạ tầng cống cũ, hẹp, quá tải', count: 5, percent: 10, desc: 'Đô thị hóa nhanh, cống bê tông cũ bị bồi lắng, nghẽn rác' },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase font-semibold tracking-wider text-cyan-800 flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>PHÂN TÍCH THỐNG KÊ TOÀN DIỆN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Cơ Cấu Điểm Ngập Theo Khu Vực & Nguyên Nhân Kỹ Thuật
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Đánh giá cơ cấu 50 điểm ngập cho thấy sự tập trung cao ở các trục cửa ngõ và vùng ven sông tiếp giáp triều cường.
          </p>
        </div>

        {/* 2 Visual Breakdown Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: By Region Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPinned className="w-4 h-4 text-cyan-700" />
                <span>Phân Bổ Theo 8 Khu Vực Trọng Điểm</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">Tổng: 50 điểm</span>
            </div>

            <div className="space-y-3.5 mt-5">
              {regionBreakdown.map((r) => (
                <div key={r.name}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-slate-700">{r.name}</span>
                    <span className="font-bold text-slate-900 tabular-nums">
                      {r.count} điểm ({r.percent}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${(r.count / 10) * 100}%` }}
                      className={`h-full ${r.color} rounded-full transition-all duration-500`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>TP. Thủ Đức, Nam Sài Gòn và tuyến QL13 chiếm hơn 58% tổng số điểm ngập cần giải quyết.</span>
            </div>
          </div>

          {/* Column 2: By Cause Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-cyan-700" />
                  <span>Cơ Cấu Nguyên Nhân Gây Ngập</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono">Tỷ trọng %</span>
              </div>

              <div className="space-y-4 mt-5">
                {causesBreakdown.map((c) => (
                  <div
                    key={c.label}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="font-bold text-slate-800 text-xs">{c.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {c.desc}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-extrabold text-slate-900 tabular-nums">
                        {c.count} <span className="text-xs font-normal text-slate-500">điểm</span>
                      </div>
                      <div className="text-[11px] font-bold text-cyan-800 tabular-nums">
                        {c.percent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
              <span>50% các điểm ngập chịu tác động trực tiếp của triều cường sẽ được giải tỏa nhờ Dự án ngăn triều 570km².</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
