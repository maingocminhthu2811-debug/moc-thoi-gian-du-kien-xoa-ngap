import { useState, useMemo } from 'react';
import { ALL_FLOOD_POINTS, FloodPoint } from '../data/floodData';
import {
  Search,
  Filter,
  MapPin,
  LayoutGrid,
  List,
  AlertTriangle,
  ArrowUpDown,
  ExternalLink,
  CheckCircle2,
  X
} from 'lucide-react';

interface HotspotExplorerProps {
  onSelectPoint: (point: FloodPoint) => void;
  selectedPointId: string | null;
}

export function HotspotExplorer({ onSelectPoint, selectedPointId }: HotspotExplorerProps) {
  const [search, setSearch] = useState('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [sortField, setSortField] = useState<'year' | 'name' | 'region'>('year');
  const [sortAsc, setSortAsc] = useState(true);

  const filteredPoints = useMemo(() => {
    let result = ALL_FLOOD_POINTS.filter((p) => {
      if (selectedYearFilter !== 'all' && p.year.toString() !== selectedYearFilter) {
        return false;
      }
      if (selectedRegionFilter !== 'all' && p.region !== selectedRegionFilter) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.cause.toLowerCase().includes(q) ||
          p.solutionProject.toLowerCase().includes(q) ||
          p.groupName?.toLowerCase().includes(q)
        );
      }
      return true;
    });

    result.sort((a, b) => {
      let cmp = 0;
      if (sortField === 'year') {
        cmp = a.year - b.year;
      } else if (sortField === 'name') {
        cmp = a.name.localeCompare(b.name, 'vi');
      } else if (sortField === 'region') {
        cmp = a.region.localeCompare(b.region, 'vi');
      }
      return sortAsc ? cmp : -cmp;
    });

    return result;
  }, [search, selectedYearFilter, selectedRegionFilter, sortField, sortAsc]);

  const toggleSort = (field: 'year' | 'name' | 'region') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const getYearBadgeStyle = (year: number) => {
    switch (year) {
      case 2026:
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 2027:
        return 'bg-cyan-50 text-cyan-900 border-cyan-300 font-bold';
      case 2028:
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 2029:
        return 'bg-teal-50 text-teal-800 border-teal-200';
      case 2030:
        return 'bg-slate-100 text-slate-800 border-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="directory" className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-cyan-800 flex items-center gap-2">
              <List className="w-3.5 h-3.5" />
              <span>TRA CỨU TOÀN DIỆN DỮ LIỆU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Danh Mục Đầy Đủ 50 Điểm Ngập Nặng (2026 – 2030)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Tra cứu theo tên đường, quận huyện, mốc thời gian hoàn thành và giải pháp công trình giải quyết.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-medium mr-1">Chế độ xem:</span>
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Dạng bảng</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Dạng lưới</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[220px] max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm nhanh theo tên đường, quận, rạch hoặc dự án..."
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Year filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="font-medium">Năm:</span>
              <select
                value={selectedYearFilter}
                onChange={(e) => setSelectedYearFilter(e.target.value)}
                className="py-1.5 px-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">Tất cả các năm (2026–2030)</option>
                <option value="2026">2026 (3 điểm)</option>
                <option value="2027">2027 - Đột phá (30 điểm)</option>
                <option value="2028">2028 (3 điểm)</option>
                <option value="2029">2029 (2 điểm)</option>
                <option value="2030">2030 (12 điểm)</option>
              </select>
            </div>

            {/* Region filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="font-medium">Khu vực:</span>
              <select
                value={selectedRegionFilter}
                onChange={(e) => setSelectedRegionFilter(e.target.value)}
                className="py-1.5 px-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">Tất cả khu vực</option>
                <option value="Thủ Đức">TP. Thủ Đức</option>
                <option value="Bình Thạnh">Bình Thạnh</option>
                <option value="Gò Vấp">Gò Vấp</option>
                <option value="Quận 7 - Nhà Bè">Quận 7 - Nhà Bè</option>
                <option value="Hóc Môn - Q12">Hóc Môn - Q12</option>
                <option value="Bình Tân - Q6 - Q8">Bình Tân - Q6 - Q8</option>
                <option value="Bình Dương">Bình Dương (QL13)</option>
                <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
              </select>
            </div>

            {/* Reset button if filtered */}
            {(search || selectedYearFilter !== 'all' || selectedRegionFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedYearFilter('all');
                  setSelectedRegionFilter('all');
                }}
                className="text-xs text-slate-500 hover:text-slate-800 underline font-medium cursor-pointer"
              >
                Xóa lọc
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-700">
            Hiển thị <span className="text-cyan-800 font-bold">{filteredPoints.length}</span>/50 điểm
          </div>
        </div>

        {/* View Mode: Table */}
        {viewMode === 'table' ? (
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 w-12 text-center">STT</th>
                  <th
                    onClick={() => toggleSort('name')}
                    className="py-3 px-4 cursor-pointer hover:text-slate-900 select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Điểm ngập & Tuyến đường</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => toggleSort('region')}
                    className="py-3 px-4 cursor-pointer hover:text-slate-900 select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Khu vực / Quận</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th
                    onClick={() => toggleSort('year')}
                    className="py-3 px-4 cursor-pointer hover:text-slate-900 select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Năm hoàn thành</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-3 px-4">Nguyên nhân ngập</th>
                  <th className="py-3 px-4">Giải pháp & Dự án công trình</th>
                  <th className="py-3 px-4 text-center">Bản đồ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPoints.length > 0 ? (
                  filteredPoints.map((point, index) => {
                    const isSelected = selectedPointId === point.id;
                    return (
                      <tr
                        key={point.id}
                        onClick={() => onSelectPoint(point)}
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                          isSelected ? 'bg-cyan-50/60 font-medium' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-center text-slate-400 font-mono">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-slate-900">{point.name}</div>
                          {point.groupName && (
                            <div className="text-[11px] text-slate-400">{point.groupName}</div>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                          {point.district}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded text-[11px] border ${getYearBadgeStyle(
                              point.year
                            )}`}
                          >
                            {point.year === 2027 ? 'Cuối 2027 (Đột phá)' : point.year}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                          {point.cause}
                        </td>
                        <td className="py-3 px-4 text-slate-700 max-w-xs truncate" title={point.solutionProject}>
                          {point.solutionProject}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectPoint(point);
                              const mapEl = document.getElementById('map');
                              mapEl?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="p-1 text-cyan-600 hover:text-cyan-900 hover:bg-cyan-50 rounded"
                            title="Định vị trên sơ đồ"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400">
                      Không tìm thấy điểm ngập nào phù hợp với từ khóa hoặc bộ lọc đã chọn.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* View Mode: Grid Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPoints.length > 0 ? (
              filteredPoints.map((point) => {
                const isSelected = selectedPointId === point.id;
                return (
                  <div
                    key={point.id}
                    onClick={() => onSelectPoint(point)}
                    className={`p-4 rounded-xl border bg-white transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-500 shadow-md ring-2 ring-cyan-100'
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-2xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-medium text-slate-500">{point.district}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] border ${getYearBadgeStyle(
                            point.year
                          )}`}
                        >
                          {point.year === 2027 ? 'Cuối 2027 (Đột phá)' : point.year}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm leading-snug">
                        {point.name}
                      </h4>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {point.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] text-cyan-800 font-medium line-clamp-1">
                        Dự án: {point.solutionProject}
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">Nguyên nhân: {point.cause}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectPoint(point);
                            const mapEl = document.getElementById('map');
                            mapEl?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="font-semibold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <MapPin className="w-3 h-3" />
                          <span>Xem vị trí</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 py-10 text-center text-slate-400">
                Không tìm thấy điểm ngập nào phù hợp.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
