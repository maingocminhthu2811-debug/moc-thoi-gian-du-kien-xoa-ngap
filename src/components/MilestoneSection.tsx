import { useState } from 'react';
import { MILESTONES, ALL_FLOOD_POINTS, FloodPoint } from '../data/floodData';
import { Sparkles, Calendar, CheckCircle2, ChevronRight, MapPin, Building2, Wrench } from 'lucide-react';

interface MilestoneSectionProps {
  onSelectPoint: (point: FloodPoint) => void;
  selectedPhase: string;
  onSelectPhase: (phaseId: string) => void;
  onSelectYear: (year: number | 'all') => void;
}

export function MilestoneSection({
  onSelectPoint,
  selectedPhase,
  onSelectPhase,
  onSelectYear,
}: MilestoneSectionProps) {
  const [expandedCluster, setExpandedCluster] = useState<string | null>('Cụm Thảo Điền (TP. Thủ Đức)');

  return (
    <section id="milestones" className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase font-semibold tracking-wider text-cyan-800 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>CHI TIẾT 3 MỐC THỜI GIAN CHIẾN LƯỢC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Ba Giai Đoạn Đột Phá & Lộ Trình Triển Khai
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Mỗi giai đoạn giải quyết nhóm điểm ngập tương ứng với tiến độ hoàn thành các công trình thoát nước
            và đê bao ngăn triều. Mốc 2027 mang tính bước ngoặt giải phóng 60% tình trạng ngập lụt toàn đô thị.
          </p>
        </div>

        {/* 3 Milestone Accordion / Editorial Cards */}
        <div className="space-y-8">
          {MILESTONES.map((milestone, idx) => {
            const isSelected = selectedPhase === milestone.id;
            return (
              <div
                key={milestone.id}
                className={`bg-white rounded-2xl border transition-all ${
                  milestone.isBreakthrough
                    ? 'border-cyan-300 shadow-md ring-1 ring-cyan-100'
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                {/* Header Strip of Milestone */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shrink-0 ${
                          milestone.isBreakthrough
                            ? 'bg-cyan-600 text-white'
                            : idx === 0
                            ? 'bg-amber-500 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <span
                            className={
                              milestone.isBreakthrough
                                ? 'text-cyan-700 font-bold'
                                : 'text-slate-500'
                            }
                          >
                            {milestone.tag}
                          </span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="text-slate-500 font-mono">{milestone.yearLabel}</span>
                          {milestone.isBreakthrough && (
                            <>
                              <span aria-hidden="true" className="text-slate-300">·</span>
                              <span className="text-cyan-700 font-bold flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-cyan-600" />
                                Mốc đột phá lịch sử
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    {/* Milestone Target Metric */}
                    <div className="flex items-center gap-4 self-start md:self-auto pl-13 md:pl-0">
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                          {milestone.targetCount}{' '}
                          <span className="text-sm font-normal text-slate-500">điểm ngập</span>
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          Chiếm {milestone.percentage}% tổng khối lượng
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onSelectPhase(milestone.id);
                          if (milestone.id === 'phase-2026') onSelectYear(2026);
                          else if (milestone.id === 'phase-2027') onSelectYear(2027);
                          else onSelectYear('all');
                          const mapEl = document.getElementById('map');
                          mapEl?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-3.5 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Xem trên bản đồ
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-4xl">
                    {milestone.details}
                  </p>

                  {/* Strategic Engineering Projects tied to this milestone */}
                  {milestone.keyProjects && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-700" />
                        <span>Công trình & Dự án hạ tầng đảm bảo:</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {milestone.keyProjects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                            <span className="leading-snug">{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-Clusters & Interactive Points Breakdown */}
                <div className="p-6 bg-slate-50/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    CÁC CỤM KHU VỰC VÀ ĐIỂM NGẬP CỤ THỂ ĐƯỢC XÓA BỎ:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {milestone.clusters.map((cluster) => {
                      const pointsInCluster = ALL_FLOOD_POINTS.filter((p) =>
                        cluster.points.includes(p.id)
                      );
                      const isExpanded = expandedCluster === cluster.name;

                      return (
                        <div
                          key={cluster.name}
                          className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-cyan-300 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <h4 className="font-bold text-slate-900 text-sm leading-snug">
                                {cluster.name}
                              </h4>
                              <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded tabular-nums">
                                {cluster.count} điểm
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                              {cluster.description}
                            </p>
                          </div>

                          {/* List of Points in Cluster with Click to Map */}
                          <div className="pt-3 border-t border-slate-100 space-y-1.5">
                            {pointsInCluster.map((pt) => (
                              <button
                                key={pt.id}
                                onClick={() => {
                                  onSelectPoint(pt);
                                  const mapEl = document.getElementById('map');
                                  mapEl?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full text-left p-1.5 rounded-md hover:bg-cyan-50 text-xs text-slate-800 flex items-center justify-between group cursor-pointer transition-colors"
                              >
                                <span className="flex items-center gap-1.5 truncate">
                                  <MapPin className="w-3 h-3 text-cyan-600 shrink-0" />
                                  <span className="truncate group-hover:text-cyan-900 font-medium">
                                    {pt.name}
                                  </span>
                                </span>
                                <span className="text-[11px] text-slate-400 group-hover:text-cyan-700 font-mono shrink-0 ml-1">
                                  {pt.year}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
