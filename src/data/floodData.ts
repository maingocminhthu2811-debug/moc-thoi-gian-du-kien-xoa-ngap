export interface FloodPoint {
  id: string;
  name: string;
  shortName: string;
  groupName?: string;
  year: 2026 | 2027 | 2028 | 2029 | 2030;
  phaseId: 'phase-2026' | 'phase-2027' | 'phase-2028-2030';
  region: 'Thủ Đức' | 'Bình Thạnh' | 'Gò Vấp' | 'Quận 7 - Nhà Bè' | 'Hóc Môn - Q12' | 'Bình Tân - Q6 - Q8' | 'Bình Dương' | 'Bà Rịa - Vũng Tàu';
  district: string;
  cause: 'Triều cường dâng' | 'Mưa lớn & trũng thấp' | 'Hạ tầng cống cũ & quá tải' | 'Triều cường kết hợp mưa lớn';
  severity: 'Rất nặng' | 'Nặng' | 'Đặc biệt nghiêm trọng';
  solutionProject: string;
  description: string;
  // Map schematic coordinates in percentage (0 - 100) on our SVG canvas
  coords: { x: number; y: number };
}

export interface Milestone {
  id: string;
  title: string;
  tag: string;
  yearLabel: string;
  targetCount: number;
  percentage: number;
  isBreakthrough?: boolean;
  highlightNote: string;
  details: string;
  keyProjects?: string[];
  clusters: {
    name: string;
    count: number;
    description: string;
    points: string[];
  }[];
}

export const MILESTONES: Milestone[] = [
  {
    id: 'phase-2026',
    title: 'Cuối năm 2026: Khởi động giải quyết 3 điểm đen cấp bách',
    tag: 'Giai đoạn 1',
    yearLabel: 'Cuối 2026',
    targetCount: 3,
    percentage: 6,
    highlightNote: 'Xóa 3 điểm ngập nặng cấp bách tại cửa ngõ Tây Bắc, Đông Bắc và trục liên vùng',
    details: 'Tập trung giải quyết các điểm ngập nhức nhối giao thông cửa ngõ: đường Phan Văn Hớn (xã Bà Điểm, Hóc Môn), khu vực bán đảo Bình Quới ven sông Sài Gòn và nút giao Quốc lộ 51 - đường Huỳnh Thúc Kháng.',
    keyProjects: [
      'Nâng cấp hệ thống thoát nước lưu vực đường Phan Văn Hớn',
      'Đắp bờ bao kết hợp cống van ngăn triều khu vực Bình Quới',
      'Cải tạo cống thoát nước ngã ba QL51 - Huỳnh Thúc Kháng'
    ],
    clusters: [
      {
        name: 'Điểm ngập cửa ngõ Tây Bắc & Bán đảo',
        count: 3,
        description: '3 điểm ngập gây tắc nghẽn giao thông huyết mạch và ảnh hưởng đời sống cư dân ven sông.',
        points: ['fp-pvh', 'fp-bq', 'fp-ql51']
      }
    ]
  },
  {
    id: 'phase-2027',
    title: 'Cuối năm 2027: Mốc Đột Phá Lịch Sử (Xóa 30 Điểm Ngập Nặng)',
    tag: 'Mốc Đột Phá',
    yearLabel: 'Cuối 2027',
    targetCount: 30,
    percentage: 60,
    isBreakthrough: true,
    highlightNote: 'Hoàn thành 2 siêu dự án ngăn triều 570km² & kênh Tham Lương - Bến Cát - rạch Nước Lên',
    details: 'Đây là mốc mang tính bước ngoặt chiến lược, giải quyết 60% tổng số điểm ngập toàn thành phố. Kích hoạt toàn bộ cụm cống ngăn triều lớn (Bến Nghé, Tân Thuận, Phú Xuân, Mương Chuối, Cây Khô, Phú Định) cùng tuyến trục kênh Tham Lương - Bến Cát - rạch Nước Lên dài gần 32km.',
    keyProjects: [
      'Dự án Giải quyết ngập do triều khu vực TP.HCM có xét đến yếu tố biến đổi khí hậu (quy mô bảo vệ 570km²)',
      'Dự án Xây dựng hạ tầng và cải tạo môi trường Kênh Tham Lương - Bến Cát - Rạch Nước Lên (32km)',
      'Hệ thống trạm bơm công suất lớn và hồ điều tiết thông minh cụm chợ Thủ Đức và Thảo Điền'
    ],
    clusters: [
      {
        name: 'Cụm Thảo Điền (TP. Thủ Đức)',
        count: 4,
        description: 'Giải quyết triệt để rốn ngập vùng trũng ven sông Sài Gòn (Quốc Hương, Nguyễn Văn Hưởng, Xuân Thủy).',
        points: ['fp-td-1', 'fp-td-2', 'fp-td-3', 'fp-td-4']
      },
      {
        name: 'Cụm Chợ Thủ Đức (TP. Thủ Đức)',
        count: 4,
        description: 'Khu vực trũng lòng chảo chợ Thủ Đức đón nước từ đồi dốc (Võ Văn Ngân, Đặng Thị Rành, Dương Văn Cam, Hồ Văn Tư).',
        points: ['fp-ctd-1', 'fp-ctd-2', 'fp-ctd-3', 'fp-ctd-4']
      },
      {
        name: 'Cụm Gò Vấp cũ',
        count: 5,
        description: 'Lưu vực thoát ra kênh Tham Lương - Bến Cát (Lê Đức Thọ, Nguyễn Văn Khối, Phạm Văn Chiêu, Nguyễn Oanh, Quang Trung).',
        points: ['fp-gv-1', 'fp-gv-2', 'fp-gv-3', 'fp-gv-4', 'fp-gv-5']
      },
      {
        name: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương (Q7 & Nhà Bè)',
        count: 8,
        description: 'Vùng trũng chịu ảnh hưởng trực tiếp của triều cường sông Nhà Bè và sông Sài Gòn, được giải quyết nhờ các cống Tân Thuận, Phú Xuân, Mương Chuối.',
        points: ['fp-q7-1', 'fp-q7-2', 'fp-q7-3', 'fp-q7-4', 'fp-q7-5', 'fp-q7-6', 'fp-q7-7', 'fp-q7-8']
      },
      {
        name: 'Trục Quốc lộ 13 giáp Bình Dương (trước đây)',
        count: 9,
        description: '8-9 điểm ngập dai dẳng kéo dài dọc tuyến Quốc lộ 13 từ ngã tư Bình Phước qua ranh giới Bình Dương.',
        points: ['fp-ql13-1', 'fp-ql13-2', 'fp-ql13-3', 'fp-ql13-4', 'fp-ql13-5', 'fp-ql13-6', 'fp-ql13-7', 'fp-ql13-8', 'fp-ql13-9']
      }
    ]
  },
  {
    id: 'phase-2028-2030',
    title: 'Giai đoạn 2028 – 2030: Xóa 17 Điểm Ngập Nặng Còn Lại',
    tag: 'Giai đoạn Về đích',
    yearLabel: '2028 – 2030',
    targetCount: 17,
    percentage: 34,
    highlightNote: 'Xử lý tuần tự theo lộ trình từng năm: Năm 2028 (3 điểm), Năm 2029 (2 điểm), Năm 2030 (12 điểm)',
    details: 'Giải quyết triệt để 17 điểm ngập kỹ thuật chuyên sâu cuối cùng tại Bình Thạnh, Bình Tân, Nhà Bè, TP. Thủ Đức và các trục liên tỉnh tại Bà Rịa - Vũng Tàu (trước đây) để hoàn thành mục tiêu đô thị không còn ngập nặng.',
    keyProjects: [
      'Dự án cải tạo hệ thống thoát nước lưu vực rạch Văn Thánh và rạch Bùi Hữu Nghĩa',
      'Nâng cấp tuyến thoát nước Hồ Học Lãm và Song hành QL22',
      'Hệ thống thu gom thoát nước trục Đông Bắc Thủ Đức (Tỉnh lộ 43, Lê Thị Hoa)',
      'Dự án chỉnh trang thoát nước đô thị cụm Lê Lợi - CMT8 - 30/4 (Bà Rịa - Vũng Tàu)'
    ],
    clusters: [
      {
        name: 'Lộ trình Năm 2028 (3 điểm)',
        count: 3,
        description: 'Xử lý các điểm ngập đường Ung Văn Khiêm, Phạm Hữu Lầu, Nguyễn Bình.',
        points: ['fp-28-uvk', 'fp-28-phl', 'fp-28-nb']
      },
      {
        name: 'Lộ trình Năm 2029 (2 điểm)',
        count: 2,
        description: 'Xử lý các điểm ngập đường Hồ Học Lãm, Song hành Quốc lộ 22.',
        points: ['fp-29-hhl', 'fp-29-sh22']
      },
      {
        name: 'Lộ trình Năm 2030 (12 điểm về đích)',
        count: 12,
        description: 'Xử lý các điểm Đinh Bộ Lĩnh, Bạch Đằng, An Dương Vương, Phan Anh, Tỉnh lộ 43, Lê Thị Hoa và cụm đường Lê Lợi, CMT8, 30/4 tại Bà Rịa - Vũng Tàu (trước đây).',
        points: ['fp-30-dbl', 'fp-30-bd', 'fp-30-adv', 'fp-30-pa', 'fp-30-tl43', 'fp-30-lth', 'fp-30-vt-1', 'fp-30-vt-2', 'fp-30-vt-3', 'fp-30-vt-4', 'fp-30-vt-5', 'fp-30-vt-6']
      }
    ]
  }
];

export const ALL_FLOOD_POINTS: FloodPoint[] = [
  // --- 2026: 3 POINTS ---
  {
    id: 'fp-pvh',
    name: 'Đường Phan Văn Hớn (xã Bà Điểm)',
    shortName: 'Phan Văn Hớn',
    groupName: 'Cửa ngõ Tây Bắc',
    year: 2026,
    phaseId: 'phase-2026',
    region: 'Hóc Môn - Q12',
    district: 'Huyện Hóc Môn',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Xây dựng tuyến cống hộp chính đấu nối ra kênh Tham Lương',
    description: 'Đoạn qua chợ Bà Điểm thường xuyên ngập sâu 40-50cm mỗi khi mưa lớn do mặt đường trũng và cống thoát nước cũ tiết diện nhỏ.',
    coords: { x: 31, y: 35 }
  },
  {
    id: 'fp-bq',
    name: 'Khu vực Bán đảo Bình Quới',
    shortName: 'Bình Quới',
    groupName: 'Ven sông Sài Gòn',
    year: 2026,
    phaseId: 'phase-2026',
    region: 'Bình Thạnh',
    district: 'Quận Bình Thạnh',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Tôn cao đê bao kết hợp van ngăn triều cục bộ và trạm bơm hỗ trợ',
    description: 'Địa hình bao bọc bởi 3 mặt sông Sài Gòn, bờ bao thường xuyên tràn bờ khi triều cường trên mức báo động 3 gây cô lập các tổ dân phố.',
    coords: { x: 57, y: 38 }
  },
  {
    id: 'fp-ql51',
    name: 'Quốc lộ 51 giao đường Huỳnh Thúc Kháng',
    shortName: 'QL51 - Huỳnh Thúc Kháng',
    groupName: 'Trục kết nối liên vùng',
    year: 2026,
    phaseId: 'phase-2026',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực phụ cận / Cửa ngõ cảng',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Nâng cấp cửa xả thoát nước dọc tuyến Quốc lộ 51 kết nối mương hở',
    description: 'Nút giao ngập nước nặng do lưu lượng nước dồn từ các khu công nghiệp và đồi cát lân cận đổ về không kịp thoát ra hạ lưu.',
    coords: { x: 88, y: 82 }
  },

  // --- 2027: 30 POINTS ---
  // Cluster Thảo Điền (4 points)
  {
    id: 'fp-td-1',
    name: 'Đường Quốc Hương (Cụm Thảo Điền)',
    shortName: 'Quốc Hương',
    groupName: 'Cụm Thảo Điền',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Cống ngăn triều Bến Nghé + Trạm bơm Thảo Điền mở rộng',
    description: 'Rốn ngập khét tiếng của Thảo Điền. Nước sông tràn ngược qua cống kết hợp mưa lớn biến đường thành sông, ngập hơn 60cm.',
    coords: { x: 61, y: 44 }
  },
  {
    id: 'fp-td-2',
    name: 'Đường Nguyễn Văn Hưởng (Cụm Thảo Điền)',
    shortName: 'Nguyễn Văn Hưởng',
    groupName: 'Cụm Thảo Điền',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Kè đê bao sông Sài Gòn & trạm bơm tăng áp',
    description: 'Chạy dọc ven sông Sài Gòn, bờ sông trũng thấp khiến nước tràn qua bờ kè mỗi chu kỳ triều rằm và mùng một.',
    coords: { x: 63, y: 42 }
  },
  {
    id: 'fp-td-3',
    name: 'Đường Xuân Thủy (Cụm Thảo Điền)',
    shortName: 'Xuân Thủy',
    groupName: 'Cụm Thảo Điền',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Thay thế cống tròn bằng cống hộp D2000 đấu nối trục Xa lộ Hà Nội',
    description: 'Trục thương mại sầm uất ngập do nước mưa thoát chậm từ các hẻm dồn ra.',
    coords: { x: 62, y: 46 }
  },
  {
    id: 'fp-td-4',
    name: 'Đường Tống Hữu Định - Lê Văn Miến (Cụm Thảo Điền)',
    shortName: 'Tống Hữu Định',
    groupName: 'Cụm Thảo Điền',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Nặng',
    solutionProject: 'Xây dựng tuyến gom nước thải & thoát nước riêng biệt',
    description: 'Khu dân cư thấp tầng chịu tác động kép của triều dâng và nước mưa tích đọng nhiều giờ.',
    coords: { x: 64, y: 45 }
  },

  // Cluster Chợ Thủ Đức (4 points)
  {
    id: 'fp-ctd-1',
    name: 'Đường Võ Văn Ngân (Dốc Chợ Thủ Đức)',
    shortName: 'Võ Văn Ngân',
    groupName: 'Cụm Chợ Thủ Đức',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Hoàn thiện cống thoát nước dốc Võ Văn Ngân & hồ điều tiết ngầm',
    description: 'Dốc thoai thoải tạo dòng chảy xiết cuốn trôi xe máy khi mưa lớn, dồn toàn bộ lưu lượng nước về rốn ngập Chợ Thủ Đức.',
    coords: { x: 68, y: 34 }
  },
  {
    id: 'fp-ctd-2',
    name: 'Đường Đặng Thị Rành (Khu vực Chợ Thủ Đức)',
    shortName: 'Đặng Thị Rành',
    groupName: 'Cụm Chợ Thủ Đức',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Cải tạo rạch Cầu Ngang và xây dựng trạm bơm cưỡng bức',
    description: 'Nằm ngay trung tâm rốn trũng của chợ, ngập sâu đến hông người lớn, tê liệt toàn bộ tiểu thương.',
    coords: { x: 69, y: 35 }
  },
  {
    id: 'fp-ctd-3',
    name: 'Đường Dương Văn Cam (Khu vực Chợ Thủ Đức)',
    shortName: 'Dương Văn Cam',
    groupName: 'Cụm Chợ Thủ Đức',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Nạo vét mở rộng rạch Cầu Ngang kết nối rạch Thủ Đức',
    description: 'Mỗi khi mưa trùng triều dâng, nước từ kênh trào ngược vào các nhà dân ven đường.',
    coords: { x: 67, y: 36 }
  },
  {
    id: 'fp-ctd-4',
    name: 'Đường Hồ Văn Tư (Chợ Thủ Đức)',
    shortName: 'Hồ Văn Tư',
    groupName: 'Cụm Chợ Thủ Đức',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Lắp đặt cống hộp đôi kết nối trạm bơm khu vực chợ',
    description: 'Tuyến nối giao thông quanh chợ thường xuyên ngâm nước nhiều giờ sau cơn mưa.',
    coords: { x: 68, y: 37 }
  },

  // Cluster Gò Vấp cũ (5 points)
  {
    id: 'fp-gv-1',
    name: 'Đường Lê Đức Thọ (Cụm Gò Vấp)',
    shortName: 'Lê Đức Thọ',
    groupName: 'Cụm Gò Vấp cũ',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Gò Vấp',
    district: 'Quận Gò Vấp',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Hoàn thành dự án Kênh Tham Lương - Bến Cát (tiếp nhận toàn bộ xả lũ)',
    description: 'Khu vực trũng gần sông Vàm Thuật, trước đây nước không có lối thoát khi mưa lớn.',
    coords: { x: 44, y: 30 }
  },
  {
    id: 'fp-gv-2',
    name: 'Đường Nguyễn Văn Khối / Cây Trâm (Cụm Gò Vấp)',
    shortName: 'Nguyễn Văn Khối',
    groupName: 'Cụm Gò Vấp cũ',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Gò Vấp',
    district: 'Quận Gò Vấp',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Xây dựng tuyến cống thoát chính dẫn dòng ra rạch Chín Xiển',
    description: 'Đoạn công viên Làng Hoa trũng sâu như lòng chảo, mưa lớn 30 phút là ngập sâu đến yên xe.',
    coords: { x: 42, y: 32 }
  },
  {
    id: 'fp-gv-3',
    name: 'Đường Phạm Văn Chiêu (Cụm Gò Vấp)',
    shortName: 'Phạm Văn Chiêu',
    groupName: 'Cụm Gò Vấp cũ',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Gò Vấp',
    district: 'Quận Gò Vấp',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Rất nặng',
    solutionProject: 'Nâng cấp mở rộng mạng lưới cống ngầm đường Phạm Văn Chiêu',
    description: 'Điểm nghẽn giao thông lớn nhất Gò Vấp mỗi mùa mưa do hệ thống cống thoát cũ tắc nghẽn.',
    coords: { x: 40, y: 29 }
  },
  {
    id: 'fp-gv-4',
    name: 'Đường Nguyễn Oanh - Lê Thị Hồng (Cụm Gò Vấp)',
    shortName: 'Nguyễn Oanh',
    groupName: 'Cụm Gò Vấp cũ',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Gò Vấp',
    district: 'Quận Gò Vấp',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Khai thông cửa xả ra rạch Bến Cát',
    description: 'Nước ứ đọng do cốt nền khu dân cư thấp hơn mặt đường và kênh xả bị bồi lắng.',
    coords: { x: 46, y: 33 }
  },
  {
    id: 'fp-gv-5',
    name: 'Đường Quang Trung đoạn qua Chợ Hạnh Thông Tây',
    shortName: 'Quang Trung',
    groupName: 'Cụm Gò Vấp cũ',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Gò Vấp',
    district: 'Quận Gò Vấp',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Đấu nối tuyến gom nước vào trục kênh Tham Lương',
    description: 'Lưu lượng thương mại lớn kết hợp rác chắn hố ga khiến mặt đường ngập cục bộ.',
    coords: { x: 43, y: 35 }
  },

  // Cluster Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương (8 points)
  {
    id: 'fp-q7-1',
    name: 'Đường Trần Xuân Soạn ven Kênh Tẻ',
    shortName: 'Trần Xuân Soạn',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường dâng',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Vận hành Cống ngăn triều Tân Thuận & Bến Nghé (Dự án 570km²)',
    description: 'Điểm ngập triều cường đặc trưng bậc nhất Sài Gòn, bờ kênh không có kè khép kín, nước tràn ngập đường liên tục.',
    coords: { x: 53, y: 58 }
  },
  {
    id: 'fp-q7-2',
    name: 'Đường Huỳnh Tấn Phát đoạn qua Phú Xuân',
    shortName: 'Huỳnh Tấn Phát',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7 / Huyện Nhà Bè',
    cause: 'Triều cường dâng',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Cống ngăn triều Phú Xuân & Mương Chuối thuộc dự án 570km²',
    description: 'Trục xương sống Nhà Bè - Quận 7 ngập kéo dài nhiều km khi triều dâng gây chết máy hàng loạt xe máy.',
    coords: { x: 56, y: 64 }
  },
  {
    id: 'fp-q7-3',
    name: 'Đường Lê Văn Lương đoạn Cầu Rạch Tôm',
    shortName: 'Lê Văn Lương',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Huyện Nhà Bè',
    cause: 'Triều cường dâng',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Cống ngăn triều Cây Khô + Nâng cấp cầu và đường dẫn Lê Văn Lương',
    description: 'Nước triều ngập sâu 70-80cm dâng lút bánh xe tải nhẹ, người dân phải dùng đò hoặc đi vòng xa.',
    coords: { x: 51, y: 67 }
  },
  {
    id: 'fp-q7-4',
    name: 'Khu vực Cầu Rạch Đỉa - Lê Văn Lương',
    shortName: 'Rạch Đỉa',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Đê bao khép kín dọc rạch Đỉa kết hợp cống ngăn triều',
    description: 'Vùng trũng giáp ranh Quận 7 và Nhà Bè ngập úng nặng khi triều cường đỉnh điểm.',
    coords: { x: 52, y: 62 }
  },
  {
    id: 'fp-q7-5',
    name: 'Đường Đào Trí ven sông Soài Rạp',
    shortName: 'Đào Trí',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Xây dựng tuyến kè bảo vệ bờ sông và trạm bơm cống Phú Thuận',
    description: 'Nằm sát mép sông Nhà Bè, nước triều tràn vào khu dân cư gây ngập sâu hơn 50cm.',
    coords: { x: 58, y: 61 }
  },
  {
    id: 'fp-q7-6',
    name: 'Đường Nguyễn Thị Thập (đoạn chân cầu Đa Khoa)',
    shortName: 'Nguyễn Thị Thập',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Nặng',
    solutionProject: 'Cải tạo rạch Cả Cấm & van ngăn triều một chiều',
    description: 'Trục đường trung tâm tài chính quận 7 ngập làm tê liệt kinh doanh buôn bán.',
    coords: { x: 54, y: 60 }
  },
  {
    id: 'fp-q7-7',
    name: 'Đường Gò Ô Môi (Phú Thuận)',
    shortName: 'Gò Ô Môi',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Tuyến đê bao ngăn triều bờ hữu sông Sài Gòn',
    description: 'Nước sông Nhà Bè tràn vào gây ngập kéo dài cả tuần trong mỗi đợt triều cường hàng tháng.',
    coords: { x: 57, y: 63 }
  },
  {
    id: 'fp-q7-8',
    name: 'Đường Nguyễn Văn Linh đoạn nút giao Huỳnh Tấn Phát',
    shortName: 'Nguyễn Văn Linh - HTP',
    groupName: 'Cụm Trần Xuân Soạn - Huỳnh Tấn Phát - Lê Văn Lương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Nặng',
    solutionProject: 'Cống kiểm soát triều Tân Thuận & nâng cao độ dải phân cách',
    description: 'Nút giao thông huyết mạch kết nối Khu chế xuất Tân Thuận bị ảnh hưởng trực tiếp.',
    coords: { x: 55, y: 59 }
  },

  // Cluster Quốc lộ 13 giáp ranh Bình Dương (9 points)
  {
    id: 'fp-ql13-1',
    name: 'Quốc lộ 13 đoạn Ngã tư Bình Phước',
    shortName: 'Ngã tư Bình Phước',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Khu vực giáp ranh Bình Dương',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Dự án mở rộng Quốc lộ 13 & xây dựng cống hộp tiêu thoát đôi',
    description: 'Nút giao cửa ngõ Đông Bắc lượng xe cộ khổng lồ, mỗi lần ngập gây kẹt xe kéo dài hàng chục km.',
    coords: { x: 53, y: 22 }
  },
  {
    id: 'fp-ql13-2',
    name: 'Quốc lộ 13 đoạn Cầu Ông Dầu',
    shortName: 'Cầu Ông Dầu',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'TP. Thủ Đức - Giáp Bình Dương',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Mở rộng khẩu độ cầu Ông Dầu & nạo vét rạch thoát nước',
    description: 'Nút thắt cổ chai thoát nước của cả lưu vực phía Tây đường sắt Bắc Nam.',
    coords: { x: 54, y: 26 }
  },
  {
    id: 'fp-ql13-3',
    name: 'Quốc lộ 13 đoạn trước Cân Nhơn Hòa',
    shortName: 'Cân Nhơn Hòa',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Khu vực Hiệp Bình Phước',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Tuyến cống ngầm đường gom song hành',
    description: 'Điểm trũng ngập sâu mỗi khi mưa lớn trên 50mm, nước ngập hơn nửa bánh xe.',
    coords: { x: 54, y: 24 }
  },
  {
    id: 'fp-ql13-4',
    name: 'Quốc lộ 13 đoạn Vĩnh Phú (Giáp ranh Thuận An)',
    shortName: 'QL13 Vĩnh Phú',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Giáp ranh Bình Dương',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Kè kênh Ba Bò giai đoạn 2 kết nối hệ thống cống liên tỉnh',
    description: 'Khu vực trũng giáp ranh tiếp nhận lượng nước mặt cực lớn từ lưu vực đồi dốc Bình Dương dồn về.',
    coords: { x: 55, y: 19 }
  },
  {
    id: 'fp-ql13-5',
    name: 'Quốc lộ 13 đoạn cổng chào Bình Dương cũ',
    shortName: 'Cổng chào Bình Dương',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Giáp ranh Bình Dương',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Nâng cấp hệ thống mương gom nước dọc trục giao thông',
    description: 'Cốt nền đường chưa đồng bộ khiến nước mưa chảy tràn qua mặt lộ tạo bẫy nước nguy hiểm.',
    coords: { x: 55, y: 17 }
  },
  {
    id: 'fp-ql13-6',
    name: 'Quốc lộ 13 đoạn Lái Thiêu - rạch Lái Thiêu',
    shortName: 'Rạch Lái Thiêu',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Giáp ranh Bình Dương',
    cause: 'Triều cường dâng',
    severity: 'Nặng',
    solutionProject: 'Xây dựng cống kiểm soát triều cửa sông Lái Thiêu',
    description: 'Chịu ảnh hưởng ngược từ sông Sài Gòn đẩy nước vào qua rạch Lái Thiêu.',
    coords: { x: 52, y: 18 }
  },
  {
    id: 'fp-ql13-7',
    name: 'Quốc lộ 13 đoạn Khu công nghiệp VSIP 1',
    shortName: 'QL13 - VSIP 1',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Thuận An - Bình Dương',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Đồng bộ hạ tầng thoát nước công nghiệp với trục đô thị',
    description: 'Lưu lượng mặt đường bê tông hóa nhanh làm nước mưa tập trung cực nhanh.',
    coords: { x: 56, y: 14 }
  },
  {
    id: 'fp-ql13-8',
    name: 'Quốc lộ 13 đoạn ngã tư Địa Chất - Gò Đậu',
    shortName: 'Ngã tư Địa Chất',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Thủ Dầu Một - Bình Dương',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Hệ thống gom nước mưa dẫn về rạch Suối Tre',
    description: 'Điểm trũng cục bộ gây ngập sâu mặt đường khi mưa rào mùa hạ.',
    coords: { x: 57, y: 11 }
  },
  {
    id: 'fp-ql13-9',
    name: 'Quốc lộ 13 đoạn ngã ba Suối Cát',
    shortName: 'Suối Cát QL13',
    groupName: 'Tuyến Quốc lộ 13 giáp Bình Dương',
    year: 2027,
    phaseId: 'phase-2027',
    region: 'Bình Dương',
    district: 'Thủ Dầu Một - Bình Dương',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Xây dựng mương hộp bản rộng thay thế mương hở cũ',
    description: 'Mương thoát nước cũ bị cát và rác bồi lắng khiến nước tràn thẳng lên mặt quốc lộ.',
    coords: { x: 58, y: 9 }
  },

  // --- 2028: 3 POINTS ---
  {
    id: 'fp-28-uvk',
    name: 'Đường Ung Văn Khiêm (Lưu vực ngã năm Đài Liệt Sĩ)',
    shortName: 'Ung Văn Khiêm',
    groupName: 'Lộ trình năm 2028',
    year: 2028,
    phaseId: 'phase-2028-2030',
    region: 'Bình Thạnh',
    district: 'Quận Bình Thạnh',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Dự án cải tạo hệ thống thoát nước rạch Văn Thánh & trạm bơm',
    description: 'Tuyến đường huyết mạch nối bến xe Miền Đông và Tân Cảng bị ngập cả khi mưa lẫn khi triều lên.',
    coords: { x: 55, y: 41 }
  },
  {
    id: 'fp-28-phl',
    name: 'Đường Phạm Hữu Lầu (Lưu vực rạch Ông Đội)',
    shortName: 'Phạm Hữu Lầu',
    groupName: 'Lộ trình năm 2028',
    year: 2028,
    phaseId: 'phase-2028-2030',
    region: 'Quận 7 - Nhà Bè',
    district: 'Quận 7 / Huyện Nhà Bè',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Kè bê tông chống tràn rạch Ông Đội và cống kiểm soát triều nhánh',
    description: 'Nước sông Nhà Bè đẩy thẳng vào rạch Ông Đội làm mặt đường Phạm Hữu Lầu ngập lênh láng.',
    coords: { x: 55, y: 69 }
  },
  {
    id: 'fp-28-nb',
    name: 'Đường Nguyễn Bình (Khu vực trung tâm hành chính Nhà Bè)',
    shortName: 'Nguyễn Bình',
    groupName: 'Lộ trình năm 2028',
    year: 2028,
    phaseId: 'phase-2028-2030',
    region: 'Quận 7 - Nhà Bè',
    district: 'Huyện Nhà Bè',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Hoàn thiện đê bao Phú Xuân - Nhà Bè và trạm bơm hỗ trợ',
    description: 'Trục đường trung tâm Nhà Bè thường xuyên ngập sâu 40-60cm khi triều cường mùng 1 và rằm.',
    coords: { x: 53, y: 73 }
  },

  // --- 2029: 2 POINTS ---
  {
    id: 'fp-29-hhl',
    name: 'Đường Hồ Học Lãm (Khu vực An Lạc)',
    shortName: 'Hồ Học Lãm',
    groupName: 'Lộ trình năm 2029',
    year: 2029,
    phaseId: 'phase-2028-2030',
    region: 'Bình Tân - Q6 - Q8',
    district: 'Quận Bình Tân',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Đặc biệt nghiêm trọng',
    solutionProject: 'Nâng cấp toàn diện trục cống Hồ Học Lãm đấu nối ra cống Phú Định',
    description: 'Điểm ngập nan giải vùng Tây Nam Sài Gòn, giao thông liên tục tê liệt mỗi mùa triều cường và mưa to.',
    coords: { x: 34, y: 62 }
  },
  {
    id: 'fp-29-sh22',
    name: 'Đường Song hành Quốc lộ 22',
    shortName: 'Song hành QL22',
    groupName: 'Lộ trình năm 2029',
    year: 2029,
    phaseId: 'phase-2028-2030',
    region: 'Hóc Môn - Q12',
    district: 'Hóc Môn / Quận 12',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Xây dựng tuyến kênh hở kết nối kênh Tham Lương - An Hạ',
    description: 'Tuyến song hành tiếp nhận nước từ khu dân cư hai bên nhưng thiếu kênh xả tự nhiên thoát lũ.',
    coords: { x: 28, y: 28 }
  },

  // --- 2030: 12 POINTS ---
  {
    id: 'fp-30-dbl',
    name: 'Đường Đinh Bộ Lĩnh (đoạn từ Cầu Đinh Bộ Lĩnh đến Bạch Đằng)',
    shortName: 'Đinh Bộ Lĩnh',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bình Thạnh',
    district: 'Quận Bình Thạnh',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Nâng cấp đồng bộ cống hộp thoát nước trục Đinh Bộ Lĩnh ra rạch Cầu Sơn',
    description: 'Trục đường độc đạo từ cửa ngõ Đông vào trung tâm, thường ngập sâu khiến hàng nghìn phương tiện chôn chân.',
    coords: { x: 52, y: 43 }
  },
  {
    id: 'fp-30-bd',
    name: 'Đường Bạch Đằng (Bình Thạnh)',
    shortName: 'Bạch Đằng',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bình Thạnh',
    district: 'Quận Bình Thạnh',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Tách dòng nước thải và nước mưa lưu vực Chợ Bà Chiểu',
    description: 'Lòng đường trũng đoạn gần giao lộ Xô Viết Nghệ Tĩnh gây ngập cục bộ.',
    coords: { x: 51, y: 45 }
  },
  {
    id: 'fp-30-adv',
    name: 'Đường An Dương Vương (đoạn bến Phú Định - Cầu Mỹ Thuận)',
    shortName: 'An Dương Vương',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bình Tân - Q6 - Q8',
    district: 'Quận 6 / Quận 8',
    cause: 'Triều cường dâng',
    severity: 'Rất nặng',
    solutionProject: 'Hoàn thiện hệ thống kè kênh Đôi và cống kiểm soát triều nội thị',
    description: 'Ven kênh Lò Gốm và kênh Đôi, cốt nền thấp nên nước tràn ngập đường liên tục.',
    coords: { x: 38, y: 64 }
  },
  {
    id: 'fp-30-pa',
    name: 'Đường Phan Anh (Khu vực ngã tư Tân Hòa Đông)',
    shortName: 'Phan Anh',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bình Tân - Q6 - Q8',
    district: 'Quận Tân Phú / Bình Tân',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Cải tạo rạch Bàu Trâu và cống hộp liên phường',
    description: 'Rốn ngập giáp ranh hai quận, nước rút rất chậm do hạ lưu rạch Bàu Trâu chưa được thông dòng hoàn toàn.',
    coords: { x: 36, y: 53 }
  },
  {
    id: 'fp-30-tl43',
    name: 'Tỉnh lộ 43 (Bình Chiểu - Đồng An)',
    shortName: 'Tỉnh lộ 43',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Xây dựng tuyến cống trục gom nước mưa khu công nghiệp Đồng An',
    description: 'Tuyến đường huyết mạch nối TP. Thủ Đức và Bình Dương ngập sâu làm gián đoạn vận chuyển hàng hóa.',
    coords: { x: 62, y: 22 }
  },
  {
    id: 'fp-30-lth',
    name: 'Đường Lê Thị Hoa (Bình Chiểu)',
    shortName: 'Lê Thị Hoa',
    groupName: 'Lộ trình năm 2030 (Về đích)',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Thủ Đức',
    district: 'TP. Thủ Đức',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Nâng cấp toàn bộ hệ thống thoát nước khu dân cư Bình Chiểu',
    description: 'Khu vực mật độ dân cư và công nhân đông đúc, cống thoát nước nhỏ gây ngập dài ngày.',
    coords: { x: 64, y: 24 }
  },
  {
    id: 'fp-30-vt-1',
    name: 'Đường Lê Lợi (Cụm Bà Rịa - Vũng Tàu)',
    shortName: 'Lê Lợi (BR-VT)',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Rất nặng',
    solutionProject: 'Hồ điều hòa Bàu Sen mở rộng & kênh thoát lũ chính',
    description: 'Trục đường trung tâm du lịch thường ngập nặng khi mưa dông lớn do nước núi đổ dồn xuống hồ Bàu Sen.',
    coords: { x: 86, y: 86 }
  },
  {
    id: 'fp-30-vt-2',
    name: 'Đường Cách Mạng Tháng 8 (Cụm Bà Rịa - Vũng Tàu)',
    shortName: 'CMT8 (BR-VT)',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Hệ thống cống hộp trục dẫn ra sông Dinh',
    description: 'Nút thắt thoát nước trung tâm đô thị cũ, dòng chảy bị nghẽn ở các cống ngầm giao lộ.',
    coords: { x: 83, y: 84 }
  },
  {
    id: 'fp-30-vt-3',
    name: 'Đường 30 Tháng 4 (Cụm Bà Rịa - Vũng Tàu)',
    shortName: '30/4 (BR-VT)',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Triều cường kết hợp mưa lớn',
    severity: 'Rất nặng',
    solutionProject: 'Cửa xả ngăn triều kênh Bến Đình và kè chống xói lở',
    description: 'Trục cửa ngõ vào thành phố ven rạch Bến Đình, ngập khi triều biển dâng cao kết hợp mưa lớn.',
    coords: { x: 87, y: 89 }
  },
  {
    id: 'fp-30-vt-4',
    name: 'Giao lộ Lê Lợi - Trưng Trắc (Cụm BR-VT)',
    shortName: 'Lê Lợi - Trưng Trắc',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Mưa lớn & trũng thấp',
    severity: 'Nặng',
    solutionProject: 'Trạm bơm tiêu úng khu vực Bãi Trước',
    description: 'Khu vực lòng chảo ven bờ biển trũng thấp nước mưa tích tụ không kịp tự chảy ra biển.',
    coords: { x: 85, y: 88 }
  },
  {
    id: 'fp-30-vt-5',
    name: 'Khu vực Chợ Mới Vũng Tàu (Đoạn CMT8)',
    shortName: 'Chợ Mới CMT8',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Hạ tầng cống cũ & quá tải',
    severity: 'Nặng',
    solutionProject: 'Thay mới toàn bộ cống nhánh phân lưu quanh chợ',
    description: 'Mật độ rác và cống bị bồi lắng gây ngập úng mỗi đợt mưa lớn.',
    coords: { x: 84, y: 86 }
  },
  {
    id: 'fp-30-vt-6',
    name: 'Đoạn ngã ba Tiền Cảng - Đường 30/4',
    shortName: 'Tiền Cảng - 30/4',
    groupName: 'Cụm đường Lê Lợi - CMT8 - 30/4',
    year: 2030,
    phaseId: 'phase-2028-2030',
    region: 'Bà Rịa - Vũng Tàu',
    district: 'Khu vực Bà Rịa - Vũng Tàu',
    cause: 'Triều cường dâng',
    severity: 'Nặng',
    solutionProject: 'Cống van tự động ngăn nước biển dâng ngược',
    description: 'Chịu ảnh hưởng của thủy triều vịnh Gành Rái đẩy ngược vào mạng lưới thoát nước đô thị.',
    coords: { x: 89, y: 87 }
  }
];

export interface ProjectDetail {
  id: string;
  name: string;
  scope: string;
  investment: string;
  status: string;
  impactArea: string;
  targetPointsSolved: number;
  description: string;
  keyComponents: string[];
}

export const STRATEGIC_PROJECTS: ProjectDetail[] = [
  {
    id: 'proj-570km',
    name: 'Dự án Ngăn Triều Quy Mô 570 km²',
    scope: 'Kiểm soát triều cường cho 6,5 triệu dân vùng bờ hữu sông Sài Gòn & trung tâm',
    investment: '~10.000 tỷ VNĐ',
    status: 'Hoàn thành cuối 2027 (Mốc đột phá)',
    impactArea: 'Quận 1, 4, 7, 8, Bình Tân, Huyện Bình Chánh, Nhà Bè',
    targetPointsSolved: 18,
    description: 'Công trình thủy lợi chống ngập đô thị quy mô lớn nhất Việt Nam, ngăn triều biển Đông và điều tiết thoát lũ tự nhiên từ thượng nguồn sông Sài Gòn và sông Đồng Nai.',
    keyComponents: [
      'Cống ngăn triều Bến Nghé (Quận 1 / Quận 4) - Khẩu độ 40m',
      'Cống Tân Thuận (Quận 4 / Quận 7) - Khẩu độ 40m, bơm 24 m³/s',
      'Cống Phú Xuân (Quận 7 / Nhà Bè) - Khẩu độ 80m',
      'Cống Mương Chuối (Nhà Bè) - Cống lớn nhất với khẩu độ 160m',
      'Cống Cây Khô (Nhà Bè / Bình Chánh) - Khẩu độ 80m',
      'Cống Phú Định (Quận 8) - Khẩu độ 80m bảo vệ cửa ngõ Tây Nam',
      '7,8 km đê bao xung yếu kết nối đồng bộ dọc sông Sài Gòn'
    ]
  },
  {
    id: 'proj-tham-luong',
    name: 'Kênh Tham Lương - Bến Cát - Rạch Nước Lên',
    scope: 'Trục thoát nước & chỉnh trang môi trường dài 31,46 km đi qua 7 quận huyện',
    investment: '~8.200 tỷ VNĐ',
    status: 'Hoàn thành cuối 2027',
    impactArea: 'Quận 12, Bình Tân, Tân Phú, Tân Bình, Gò Vấp, Bình Thạnh, Bình Chánh',
    targetPointsSolved: 12,
    description: 'Trục xương sống tiêu thoát nước mưa và chỉnh trang môi trường lớn nhất TP.HCM, kết nối lưu vực sông Sài Gòn với sông Chợ Đệm, giải tỏa áp lực ngập úng toàn bộ khu vực phía Tây và Tây Bắc thành phố.',
    keyComponents: [
      'Nạo vét và kè bờ bê tông toàn tuyến 63,11 km (hai bên bờ)',
      'Xây dựng đường giao thông ven kênh rộng 7-12m giảm tải giao thông',
      'Xây dựng 19 cống thoát nước lớn và 12 bến thuyền kết nối giao thông thủy',
      'Kết nối trực tiếp hệ thống thu gom nước thải nhà máy xử lý Nhiêu Lộc - Thị Nghè'
    ]
  }
];
