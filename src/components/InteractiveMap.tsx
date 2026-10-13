import { useState, useMemo } from 'react';
import {
  ALL_FLOOD_POINTS,
  FloodPoint,
} from '../data/floodData';
import {
  Search,
  Filter,
  ZoomIn,
  ZoomOut,
  Maximize2,
  MapPin,
  Waves,
  ShieldCheck,
  X,
  AlertTriangle,
  Info
} from 'lucide-react';

interface InteractiveMapProps {
  selectedPointId: string | null;
  onSelectPoint: (point: FloodPoint | null) => void;
  selectedYear: number | 'all';
  selectedPhase: string;
}

export function InteractiveMap({
  selectedPointId,
  onSelectPoint,
  selectedYear,
  selectedPhase
}: InteractiveMapProps) {
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [causeFilter, setCauseFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredPoint, setHoveredPoint] = useState<FloodPoint | null>(null);
  const [showWaterwaysLegend, setShowWaterwaysLegend] = useState<boolean>(true);

  // Filtered points
  const visiblePoints = useMemo(() => {
    return ALL_FLOOD_POINTS.filter((p) => {
      // Year filter
      if (selectedYear !== 'all' && p.year !== selectedYear) return false;
      // Phase filter (if year is 'all' but a specific phase is clicked)
      if (selectedYear === 'all' && selectedPhase !== 'all' && p.phaseId !== selectedPhase) return false;
      // Region filter
      if (regionFilter !== 'all' && p.region !== regionFilter) return false;
      // Cause filter
      if (causeFilter !== 'all' && !p.cause.includes(causeFilter)) return false;
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.groupName?.toLowerCase().includes(q) ||
          p.solutionProject.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedYear, selectedPhase, regionFilter, causeFilter, searchQuery]);

  const selectedPoint = useMemo(() => {
    return ALL_FLOOD_POINTS.find((p) => p.id === selectedPointId) || null;
  }, [selectedPointId]);

  // Color generator based on milestone/year
  const getPointColor = (point: FloodPoint) => {
    if (point.year === 2026) return '#f59e0b'; // amber
    if (point.year === 2027) return '#0284c7'; // vibrant sky blue (breakthrough)
    if (point.year === 2028) return '#10b981'; // emerald
    if (point.year === 2029) return '#0d9488'; // teal
    return '#059669'; // dark emerald for 2030
  };

  const regionsList = [
    'all',
    'Thủ Đức',
    'Bình Thạnh',
    'Gò Vấp',
    'Quận 7 - Nhà Bè',
    'Hóc Môn - Q12',
    'Bình Tân - Q6 - Q8',
    'Bình Dương',
    'Bà Rịa - Vũng Tàu'
  ];

  return (
    <section id="map" className="bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header of Map Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-cyan-800 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>SƠ ĐỒ TRỰC QUAN KHÔNG GIAN ĐÔ THỊ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Bản Đồ Điểm Ngập & Tuyến Công Trình Giải Tỏa
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Nhấp vào bất kỳ điểm ngập để phóng to thông tin, nguyên nhân và dự án xử lý.
              Hiển thị <span className="font-bold text-slate-900 tabular-nums">{visiblePoints.length}</span>/50 điểm theo bộ lọc.
            </p>
          </div>

          {/* Quick Stats on Map */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-medium">Lọc theo giai đoạn hiện tại:</span>
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
              {selectedYear === 'all'
                ? selectedPhase === 'phase-2026'
                  ? 'Giai đoạn 2026 (3 điểm)'
                  : selectedPhase === 'phase-2027'
                  ? 'Đột phá 2027 (30 điểm)'
                  : selectedPhase === 'phase-2028-2030'
                  ? 'Về đích 2028–2030 (17 điểm)'
                  : 'Tất cả 50 điểm'
                : `Năm ${selectedYear} (${visiblePoints.length} điểm)`}
            </span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 mb-4 flex flex-wrap items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên đường, quận, cụm điểm (Vd: Thảo Điền, QL13, Ung Văn Khiêm)..."
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Region Dropdown Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Khu vực:
            </span>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="text-xs py-1.5 px-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {regionsList.map((r) => (
                <option key={r} value={r}>
                  {r === 'all' ? 'Tất cả khu vực (8 vùng)' : r}
                </option>
              ))}
            </select>

            {/* Cause filter */}
            <select
              value={causeFilter}
              onChange={(e) => setCauseFilter(e.target.value)}
              className="text-xs py-1.5 px-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="all">Tất cả nguyên nhân ngập</option>
              <option value="Triều cường">Do triều cường dâng</option>
              <option value="Mưa lớn">Do mưa lớn & địa hình trũng</option>
              <option value="Hạ tầng">Do hạ tầng cống quá tải</option>
            </select>

            {/* Toggle Waterways Legend */}
            <button
              onClick={() => setShowWaterwaysLegend(!showWaterwaysLegend)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                showWaterwaysLegend
                  ? 'bg-cyan-50 text-cyan-900 border-cyan-200'
                  : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              {showWaterwaysLegend ? 'Ẩn chú giải công trình' : 'Hiện chú giải công trình'}
            </button>
          </div>
        </div>

        {/* Map Canvas and Side Inspection Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main SVG Schematic Map Container */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-2 sm:p-4 relative overflow-hidden shadow-sm">
            {/* Map Top Floating Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg p-1 shadow-xs">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors text-xs font-mono"
                title="Mặc định"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Map Legend Overlay inside SVG container */}
            {showWaterwaysLegend && (
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-3 text-[11px] shadow-sm max-w-xs pointer-events-auto">
                <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
                  <span>Đại dự án & Tuyến thủy văn</span>
                </div>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-2 rounded bg-cyan-100 border border-cyan-400 inline-block"></span>
                    <span>Vùng kiểm soát triều 570km² (6 cống lớn)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-1 bg-emerald-500 inline-block rounded"></span>
                    <span>Trục Kênh Tham Lương - Bến Cát (32km)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-1 bg-sky-400 inline-block rounded"></span>
                    <span>Sông Sài Gòn & Sông Nhà Bè</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 ring-2 ring-cyan-200 inline-block"></span>
                    <span className="font-semibold text-slate-800">30 Điểm đột phá 2027</span>
                  </div>
                </div>
              </div>
            )}

            {/* SVG Interactive Canvas */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-50/70 rounded-xl border border-slate-100">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: '50% 50%',
                  transition: 'transform 0.25s ease-out',
                }}
                className="w-full h-full relative"
              >
                <svg
                  viewBox="0 0 1000 750"
                  className="w-full h-full select-none"
                  style={{ touchAction: 'pan-x pan-y' }}
                >
                  <defs>
                    {/* Pattern for 570km2 protection zone */}
                    <pattern id="diagonalHatch" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="12" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.15" />
                    </pattern>

                    {/* Gradient for water flow */}
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                    </linearGradient>

                    {/* Filter for glow */}
                    <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#0284c7" floodOpacity="0.3" />
                    </filter>
                  </defs>

                  {/* 1. Base District schematic outlines / regions */}
                  {/* Western suburbs / Cu Chi / Hoc Mon */}
                  <path
                    d="M 120 180 Q 240 160 350 200 L 330 380 Q 200 420 120 360 Z"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                  />
                  {/* North / Binh Duong border corridor */}
                  <path
                    d="M 450 40 L 630 60 L 610 240 L 470 230 Z"
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                  <text x="540" y="70" fontSize="11" fill="#64748b" textAnchor="middle" fontWeight="600" letterSpacing="1">
                    BÌNH DƯƠNG (QL13)
                  </text>

                  {/* Thu Duc City region */}
                  <path
                    d="M 580 200 Q 720 170 780 280 L 730 420 Q 640 460 590 380 Z"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                  />
                  <text x="690" y="270" fontSize="13" fill="#94a3b8" textAnchor="middle" fontWeight="700" letterSpacing="1.5">
                    TP. THỦ ĐỨC
                  </text>

                  {/* South Region (Q7, Nha Be) */}
                  <path
                    d="M 450 450 Q 620 440 640 560 L 580 680 Q 460 670 430 550 Z"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                  />
                  <text x="530" y="620" fontSize="13" fill="#94a3b8" textAnchor="middle" fontWeight="700" letterSpacing="1.5">
                    QUẬN 7 - NHÀ BÈ
                  </text>

                  {/* Southeast Ba Ria - Vung Tau corridor schematic */}
                  <path
                    d="M 800 580 L 960 560 L 950 710 L 810 700 Z"
                    fill="#f8fafc"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                  <text x="880" y="630" fontSize="11" fill="#64748b" textAnchor="middle" fontWeight="600">
                    BÀ RỊA - VŨNG TÀU
                  </text>

                  {/* 2. Water Bodies & Rivers */}
                  {/* Saigon River (Meandering river) */}
                  <path
                    d="M 470 50 Q 520 120 490 190 Q 450 250 510 280 Q 560 300 570 380 Q 580 430 540 460 Q 480 480 500 540 Q 520 600 560 630 Q 600 660 620 740"
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  {/* Dong Nai River fork */}
                  <path
                    d="M 750 150 Q 770 280 730 380 Q 690 440 640 540 Q 620 630 650 730"
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Nhieu Loc - Thi Nghe Canal */}
                  <path
                    d="M 420 330 Q 460 360 510 380"
                    fill="none"
                    stroke="#7dd3fc"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  {/* Kenh Te / Kenh Doi Canal */}
                  <path
                    d="M 370 510 Q 450 490 530 490"
                    fill="none"
                    stroke="#7dd3fc"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* 3. SUPER PROJECT 1: Kenh Tham Luong - Ben Cat - Rach Nuoc Len (32km corridor) */}
                  <path
                    d="M 270 230 Q 320 270 380 290 Q 440 310 470 280 Q 440 370 370 440 Q 330 480 340 570"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray="8,4"
                  />
                  <text x="310" y="300" fontSize="10" fill="#047857" fontWeight="bold">
                    Kênh Tham Lương - Bến Cát (32km)
                  </text>

                  {/* 4. SUPER PROJECT 2: 570 km² Tidal Protection Zone (Boundary & Shading) */}
                  <path
                    d="M 430 430 L 560 410 L 610 500 L 610 630 L 530 690 L 440 640 L 400 520 Z"
                    fill="url(#diagonalHatch)"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                  />
                  <rect x="445" y="530" width="135" height="24" rx="4" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
                  <text x="512" y="546" fontSize="10" fill="#0369a1" fontWeight="bold" textAnchor="middle">
                    VÙNG NGĂN TRIỀU 570 KM²
                  </text>

                  {/* The 6 Sluice Gates of 570km2 */}
                  {/* Cong Ben Nghe */}
                  <g transform="translate(520, 430)" className="cursor-pointer">
                    <rect x="-8" y="-6" width="16" height="12" fill="#0284c7" rx="2" />
                    <text x="0" y="16" fontSize="9" fill="#0369a1" fontWeight="600" textAnchor="middle">Cống Bến Nghé</text>
                  </g>
                  {/* Cong Tan Thuan */}
                  <g transform="translate(555, 485)" className="cursor-pointer">
                    <rect x="-8" y="-6" width="16" height="12" fill="#0284c7" rx="2" />
                    <text x="12" y="-9" fontSize="9" fill="#0369a1" fontWeight="600" textAnchor="start">Cống Tân Thuận</text>
                  </g>
                  {/* Cong Phu Xuan */}
                  <g transform="translate(570, 580)" className="cursor-pointer">
                    <rect x="-8" y="-6" width="16" height="12" fill="#0284c7" rx="2" />
                    <text x="14" y="4" fontSize="9" fill="#0369a1" fontWeight="600">Cống Phú Xuân</text>
                  </g>
                  {/* Cong Muong Chuoi (Largest 160m) */}
                  <g transform="translate(540, 650)" className="cursor-pointer">
                    <rect x="-10" y="-7" width="20" height="14" fill="#0369a1" rx="2" stroke="#fff" strokeWidth="1.5" />
                    <text x="0" y="18" fontSize="9" fill="#0c4a6e" fontWeight="700" textAnchor="middle">Cống Mương Chuối (160m)</text>
                  </g>
                  {/* Cong Cay Kho */}
                  <g transform="translate(460, 640)" className="cursor-pointer">
                    <rect x="-8" y="-6" width="16" height="12" fill="#0284c7" rx="2" />
                    <text x="-12" y="15" fontSize="9" fill="#0369a1" fontWeight="600" textAnchor="end">Cống Cây Khô</text>
                  </g>
                  {/* Cong Phu Dinh */}
                  <g transform="translate(370, 530)" className="cursor-pointer">
                    <rect x="-8" y="-6" width="16" height="12" fill="#0284c7" rx="2" />
                    <text x="-10" y="15" fontSize="9" fill="#0369a1" fontWeight="600" textAnchor="end">Cống Phú Định</text>
                  </g>

                  {/* 5. Render All 50 Hotspot Pins */}
                  {visiblePoints.map((point) => {
                    const cx = (point.coords.x / 100) * 1000;
                    const cy = (point.coords.y / 100) * 750;
                    const isSelected = selectedPointId === point.id;
                    const isHovered = hoveredPoint?.id === point.id;
                    const pinColor = getPointColor(point);

                    return (
                      <g
                        key={point.id}
                        transform={`translate(${cx}, ${cy})`}
                        onClick={() => onSelectPoint(point)}
                        onMouseEnter={() => setHoveredPoint(point)}
                        onMouseLeave={() => setHoveredPoint(null)}
                        className="cursor-pointer transition-transform group"
                      >
                        {/* Selected / Hovered pulse ripple */}
                        {(isSelected || isHovered) && (
                          <circle
                            r="18"
                            fill={pinColor}
                            opacity="0.25"
                            className="animate-ping"
                          />
                        )}

                        {/* Outer halo */}
                        <circle
                          r={isSelected ? 11 : isHovered ? 9 : 6.5}
                          fill="#ffffff"
                          stroke={pinColor}
                          strokeWidth={isSelected ? 3.5 : 2}
                          className="transition-all"
                        />

                        {/* Inner core dot */}
                        <circle
                          r={isSelected ? 5.5 : 3.5}
                          fill={pinColor}
                          className="transition-all"
                        />

                        {/* Point Label when hovered or selected */}
                        {(isSelected || isHovered) && (
                          <g transform="translate(0, -18)">
                            <rect
                              x={-Math.max(point.shortName.length * 4.5, 36)}
                              y="-20"
                              width={Math.max(point.shortName.length * 9, 72)}
                              height="22"
                              rx="4"
                              fill="#0f172a"
                              opacity="0.95"
                            />
                            <text
                              x="0"
                              y="-5"
                              fill="#ffffff"
                              fontSize="11"
                              fontWeight="600"
                              textAnchor="middle"
                            >
                              {point.shortName} ({point.year})
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Map Sub-bar status */}
            <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-700" />
                <span>Nhấp vào biểu tượng điểm tròn để xem chi tiết giải pháp kỹ thuật</span>
              </span>
              <span className="font-mono text-slate-400">
                Hiển thị {visiblePoints.length} điểm ngập trên sơ đồ
              </span>
            </div>
          </div>

          {/* Right Column: Hotspot Inspector Drawer / Detail Card */}
          <div className="lg:col-span-4">
            {selectedPoint ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm sticky top-20">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800">
                      CHI TIẾT ĐIỂM NGẬP
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5 leading-snug">
                      {selectedPoint.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => onSelectPoint(null)}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Key attributes definition list */}
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Mốc hoàn thành:</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      {selectedPoint.year === 2027 ? 'Cuối năm 2027 (Đột phá)' : `Năm ${selectedPoint.year}`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Khu vực quận/huyện:</span>
                    <span className="font-semibold text-slate-800">{selectedPoint.district}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Cụm / Nhóm điểm:</span>
                    <span className="font-medium text-cyan-800">{selectedPoint.groupName || 'Tuyến độc lập'}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Nguyên nhân ngập:</span>
                    <span className="font-medium text-slate-900">{selectedPoint.cause}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Mức độ nghiêm trọng:</span>
                    <span className="font-bold text-amber-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-600" />
                      {selectedPoint.severity}
                    </span>
                  </div>
                </div>

                {/* Description & Impact */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900 block mb-1">Hiện trạng:</span>
                  {selectedPoint.description}
                </div>

                {/* Technical Solution */}
                <div className="mt-3 p-3 bg-cyan-50/60 rounded-xl border border-cyan-100 text-xs text-cyan-950 leading-relaxed">
                  <span className="font-semibold text-cyan-900 block mb-1">Dự án & Giải pháp công trình:</span>
                  {selectedPoint.solutionProject}
                </div>

                {/* Action button */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const el = document.getElementById('directory');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-cyan-700 hover:text-cyan-900 font-semibold cursor-pointer"
                  >
                    Xem trong bảng tổng hợp →
                  </button>
                  <button
                    onClick={() => onSelectPoint(null)}
                    className="text-xs text-slate-500 hover:text-slate-700"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-slate-500 sticky top-20">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Chưa chọn điểm ngập nào</h4>
                <p className="text-xs mt-1 text-slate-500 leading-relaxed">
                  Nhấp vào bất kỳ điểm tròn nào trên sơ đồ hoặc chọn từ danh sách bên dưới để xem phân tích chi tiết.
                </p>

                {/* Quick Shortcuts */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 text-left">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Các rốn ngập trọng điểm cần chú ý:
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { id: 'fp-td-1', label: 'Quốc Hương (Thảo Điền) - 2027' },
                      { id: 'fp-ctd-1', label: 'Võ Văn Ngân (Chợ Thủ Đức) - 2027' },
                      { id: 'fp-q7-1', label: 'Trần Xuân Soạn (Kênh Tẻ, Q7) - 2027' },
                      { id: 'fp-ql13-1', label: 'Ngã tư Bình Phước (QL13) - 2027' },
                      { id: 'fp-29-hhl', label: 'Hồ Học Lãm (Bình Tân) - 2029' },
                    ].map((item) => {
                      const pt = ALL_FLOOD_POINTS.find((p) => p.id === item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => pt && onSelectPoint(pt)}
                          className="w-full text-left text-xs px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-400 hover:text-cyan-900 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="font-medium truncate">{item.label}</span>
                          <span className="text-cyan-600 font-bold shrink-0">→</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
