import { STRATEGIC_PROJECTS } from '../data/floodData';
import { ShieldCheck, Waves, Check, ArrowUpRight, Gauge, Layers } from 'lucide-react';

interface ProjectShowcaseProps {
  onFocusProjectPoints: (projectName: string) => void;
}

export function ProjectShowcase({ onFocusProjectPoints }: ProjectShowcaseProps) {
  return (
    <section id="projects" className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase font-semibold tracking-wider text-cyan-800 flex items-center gap-2">
            <Gauge className="w-3.5 h-3.5" />
            <span>CÔNG TRÌNH ĐẦU MỐI ĐỘT PHÁ (MỐC CUỐI 2027)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Hai Siêu Dự Án Tạo Bước Ngoặt Xóa 30 Điểm Ngập
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Năm 2027 trở thành mốc đột phá lịch sử khi hai dự án thủy lợi và tiêu thoát lũ đô thị quy mô lớn nhất TP.HCM
            đồng loạt hoàn thành, tạo thành lá chắn kép chống triều cường và khai thông trục thoát nước mưa cho hàng triệu dân.
          </p>
        </div>

        {/* 2 Projects Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STRATEGIC_PROJECTS.map((proj) => {
            const isTidal = proj.id === 'proj-570km';
            return (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isTidal ? 'bg-cyan-100 text-cyan-800' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {isTidal ? <ShieldCheck className="w-5 h-5" /> : <Waves className="w-5 h-5" />}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {isTidal ? 'Dự án Kiểm Soát Triều Cường' : 'Trục Tiêu Thoát Nước Mưa & Chỉnh Trang'}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md">
                        Xóa ~{proj.targetPointsSolved} điểm ngập
                      </span>
                    </div>
                  </div>

                  {/* Title & Scope */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {proj.name}
                  </h3>
                  <div className="text-xs font-medium text-cyan-700 mt-1">
                    {proj.scope}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-2 gap-3 my-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Tổng mức đầu tư:</span>
                      <strong className="text-slate-900 font-semibold">{proj.investment}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Thời gian vận hành:</span>
                      <strong className="text-cyan-800 font-semibold">{proj.status}</strong>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-200/50">
                      <span className="text-slate-400 block text-[11px]">Địa bàn thụ hưởng:</span>
                      <strong className="text-slate-800 font-medium">{proj.impactArea}</strong>
                    </div>
                  </div>

                  {/* Key Components List */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Hạng mục công trình đầu mối:</span>
                    </h4>
                    <div className="space-y-2">
                      {proj.keyComponents.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {isTidal ? 'Bảo vệ khu vực trung tâm và bờ hữu Sài Gòn' : 'Giải tỏa áp lực tiêu thoát vùng Tây & Tây Bắc'}
                  </span>
                  <button
                    onClick={() => {
                      onFocusProjectPoints(proj.name);
                      const mapEl = document.getElementById('map');
                      mapEl?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-800 hover:text-cyan-950 cursor-pointer"
                  >
                    <span>Xem vị trí ảnh hưởng trên bản đồ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
