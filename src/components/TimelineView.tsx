import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface TimelineStage {
  id: string;
  year: string;
  yearColor: string;
  title: string;
  badge?: string;
  pointsCount: number;
  highlightColor: string;
  borderColor: string;
  bgDot: string;
  content: {
    projects?: string[];
    groups?: string[];
    yearlyPlan?: {
      year: string;
      items: string[];
    }[];
    pointsList?: string[];
  };
}

const TIMELINE_DATA: TimelineStage[] = [
  {
    id: '2026',
    year: 'Cuối năm 2026',
    yearColor: 'text-orange-600',
    title: 'Xóa 3 điểm ngập nặng',
    pointsCount: 3,
    highlightColor: 'text-amber-600',
    borderColor: 'border-amber-400',
    bgDot: 'bg-amber-500',
    content: {
      pointsList: [
        'Phan Văn Hớn - xã Bà Điểm',
        'Bình Quới',
        'Quốc lộ 51 giao đường Huỳnh Thúc Kháng',
      ],
    },
  },
  {
    id: '2027',
    year: 'Cuối năm 2027',
    yearColor: 'text-blue-600',
    title: 'Xóa 30 điểm ngập nặng',
    badge: 'Mốc đột phá',
    pointsCount: 30,
    highlightColor: 'text-cyan-700',
    borderColor: 'border-cyan-500',
    bgDot: 'bg-cyan-600',
    content: {
      projects: [
        'Dự án ngăn triều 570km²',
        'Kênh Tham Lương - Bến Cát - rạch Nước Lên',
      ],
      groups: [
        'Cụm Thảo Điền',
        'Cụm chợ Thủ Đức',
        'Cụm Gò Vấp cũ',
        'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
        '8 - 9 điểm trên Quốc lộ 13 Bình Dương (trước đây)',
      ],
    },
  },
  {
    id: '2028-2030',
    year: 'Giai đoạn 2028 – 2030',
    yearColor: 'text-emerald-600',
    title: 'Xóa 17 điểm ngập nặng còn lại',
    pointsCount: 17,
    highlightColor: 'text-emerald-700',
    borderColor: 'border-emerald-500',
    bgDot: 'bg-emerald-600',
    content: {
      yearlyPlan: [
        {
          year: 'Năm 2028',
          items: ['Đường Ung Văn Khiêm', 'Đường Phạm Hữu Lầu', 'Đường Nguyễn Bình'],
        },
        {
          year: 'Năm 2029',
          items: ['Đường Hồ Học Lãm', 'Song hành Quốc lộ 22'],
        },
        {
          year: 'Năm 2030',
          items: [
            'Đường Đinh Bộ Lĩnh',
            'Đường Bạch Đằng',
            'Đường An Dương Vương',
            'Đường Phan Anh',
            'Tỉnh lộ 43',
            'Đường Lê Thị Hoa',
            'Cụm đường Lê Lợi, CMT8, 30/4 tại Bà Rịa - Vũng Tàu (trước đây)',
          ],
        },
      ],
    },
  },
];

export function TimelineView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-['Be_Vietnam_Pro',sans-serif]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Clean Header - Title Only */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mốc Thời Gian Dự Kiến Xóa Ngập
          </h1>
        </motion.div>

        {/* The Animated Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-12 my-6">
          {/* Static Background Spine */}
          <div className="absolute left-[11px] sm:[15px] top-4 bottom-4 w-[2px] bg-slate-200" />

          {/* Dynamic Scroll-Synced Animated Spine */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[11px] sm:[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-400 via-cyan-500 to-emerald-600 z-0"
          />

          {TIMELINE_DATA.map((stage, sIdx) => {
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: sIdx * 0.05 }}
                className="relative group z-10"
              >
                {/* Timeline Dot on the Line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.1 }}
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-5 h-5 rounded-full bg-white border-4 ${stage.borderColor} shadow-xs z-20 flex items-center justify-center`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${stage.bgDot}`} />
                </motion.div>

                {/* Stage Header */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mb-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-lg sm:text-xl font-extrabold ${stage.yearColor}`}>
                      {stage.year}
                    </span>
                    {stage.badge && (
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-full"
                      >
                        <Sparkles className="w-3 h-3 text-cyan-600" />
                        {stage.badge}
                      </motion.span>
                    )}
                  </div>
                  <div className={`text-base font-bold ${stage.highlightColor} mt-0.5`}>
                    {stage.title}
                  </div>
                </motion.div>

                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all"
                >
                  {/* --- 2026: 3 Points --- */}
                  {stage.content.pointsList && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {stage.content.pointsList.map((pt, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: 0.1 + idx * 0.08 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-medium flex items-start gap-2 hover:border-amber-300 transition-colors"
                        >
                          <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* --- 2027: Breakthrough Projects & 5 Clusters --- */}
                  {stage.content.projects && stage.content.groups && (
                    <div className="space-y-4">
                      {/* Key Projects */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="p-3.5 bg-cyan-50/70 border border-cyan-200 rounded-xl"
                      >
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-900 mb-1.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cyan-700" />
                          <span>Hoàn thành 2 dự án trọng điểm:</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          {stage.content.projects.map((proj, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 text-xs font-bold text-cyan-950 bg-white px-3 py-1.5 rounded-lg border border-cyan-200 shadow-2xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                              <span>{proj}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* 5 Clusters */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {stage.content.groups.map((groupName, gIdx) => (
                          <motion.div
                            key={gIdx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: gIdx * 0.06 }}
                            whileHover={{ scale: 1.01 }}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-colors flex items-center gap-2"
                          >
                            <span className="w-2 h-2 rounded-full bg-cyan-600 shrink-0" />
                            <span className="font-bold text-slate-900 text-xs sm:text-sm">
                              {groupName}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* --- 2028 - 2030: Yearly Breakdown --- */}
                  {stage.content.yearlyPlan && (
                    <div className="space-y-3">
                      {stage.content.yearlyPlan.map((yearBlock, yIdx) => (
                        <motion.div
                          key={yIdx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: yIdx * 0.08 }}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors"
                        >
                          <div className="font-bold text-emerald-800 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{yearBlock.year}:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {yearBlock.items.map((item, iIdx) => (
                              <span
                                key={iIdx}
                                className="inline-block px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white text-slate-800"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
