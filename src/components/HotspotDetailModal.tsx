import { FloodPoint } from '../data/floodData';
import { X, MapPin, Calendar, Wrench, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HotspotDetailModalProps {
  point: FloodPoint | null;
  onClose: () => void;
  onLocateOnMap: () => void;
}

export function HotspotDetailModal({ point, onClose, onLocateOnMap }: HotspotDetailModalProps) {
  if (!point) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-3 bg-slate-50/50">
          <div className="flex items-start gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-cyan-800">
                {point.groupName || point.district}
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug mt-0.5">
                {point.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 text-xs">
          {/* Key Indicators */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <span className="text-slate-400 block text-[11px]">Mốc thời gian dự kiến:</span>
              <span className="font-bold text-slate-900 text-sm">
                {point.year === 2027 ? 'Cuối 2027 (Đột phá)' : `Năm ${point.year}`}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Mức độ ngập:</span>
              <span className="font-bold text-amber-800 flex items-center gap-1 text-sm">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                {point.severity}
              </span>
            </div>
            <div className="col-span-2 pt-2 border-t border-slate-200/50 flex justify-between">
              <span className="text-slate-500">Nguyên nhân chính:</span>
              <span className="font-semibold text-slate-800">{point.cause}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-slate-800 font-bold mb-1">Hiện trạng & Tác động dân sinh:</h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              {point.description}
            </p>
          </div>

          {/* Technical Solution */}
          <div className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-100">
            <h4 className="text-cyan-900 font-bold mb-1 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-cyan-700" />
              <span>Giải pháp kỹ thuật & Dự án phụ trách:</span>
            </h4>
            <p className="text-cyan-950 font-medium leading-relaxed text-xs">
              {point.solutionProject}
            </p>
          </div>

          {/* Commitment status */}
          <div className="flex items-center gap-2 text-slate-600 text-[11px] pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Thuộc chương trình đột phá giải quyết ngập nước của Thành phố giai đoạn 2026 – 2030.</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onLocateOnMap();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-xs font-semibold cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Định vị trên sơ đồ thủy văn</span>
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-slate-600 hover:text-slate-900 text-xs font-medium cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
