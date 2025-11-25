import { Project, ScheduleItem } from './types';

export const SCHOOL_NAME = "Trường Trung Học Cơ Sở Nguyễn Bỉnh Khiêm";
export const BOOTH_NUMBER = "17";

export const FESTIVAL_CONTEXT = `
Bạn là trợ lý ảo AI tại gian hàng số 17 của Trường Trung Học Cơ Sở Nguyễn Bỉnh Khiêm tham gia "Ngày hội Chung tay Cải cách hành chính và Chuyển đổi số năm 2025" tại phường Hòa Khánh.
Thời gian: 28/11/2025 - 29/11/2025.
Địa điểm: Trung tâm hành chính phường Hòa Khánh, 168 Nguyễn Sinh Sắc.

Lịch trình chung của ngày hội:
- 28/11 (Chiều): Khai mạc gian hàng, Cài định danh mức 2, Triển lãm.
- 29/11 (Sáng 07h30): Khai mạc chính thức, ra mắt Chatbox, ký kết hợp tác.
- 29/11 (Sáng 09h00-11h00): Đấu trường Robotic dành cho học sinh TH, THCS.
- 29/11 (Sáng 09h30-11h00): Chấm chọn sản phẩm STEM lần 1.
- 29/11 (Chiều 14h00-16h00): Hội thi Dân vũ - Flashmob.
- 29/11 (Chiều 15h00-16h30): Chấm chọn sản phẩm STEM lần 2.
- 29/11 (Tối 20h30): Tổng kết trao thưởng.

Thông tin về trường THCS Nguyễn Bỉnh Khiêm:
- Gian hàng trưng bày: Mô hình khoa học, sản phẩm STEM, hoạt động chuyển đổi số.
- Tham gia Đấu trường Robotic.
- Tham gia thi Dân vũ.
`;

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Bản đồ Việt Nam thông minh - Smartmap 34',
        category: 'Environment',
        description: 'Mô hình bản đồ tương tác giúp tìm hiểu địa lý và môi trường Việt Nam.',
        imageUrl: 'https://picsum.photos/600/400?random=1',
        authors: 'Nguyễn Thị Diệu Hiền, Phan Thị Ngọc Lý',
        videoUrl: './intro.mp4'
    },
    {
        id: '2',
        title: 'Renewable Energy Usage Model',
        category: 'Environment',
        description: 'Mô hình năng lượng tái tạo tích hợp AI, tối ưu hóa việc sử dụng năng lượng sạch.',
        imageUrl: 'https://picsum.photos/600/400?random=2',
        authors: 'Phạm Kiều Oanh, Dương Thị Mỹ Lệ',
        videoUrl: './intro.mp4'
    },
    {
        id: '3',
        title: 'Hệ thống giám sát môi trường IoT & Chatbot',
        category: 'IT',
        description: 'Hệ thống giám sát và điều khiển chất lượng môi trường, phòng chống cháy nổ sử dụng IOT và CHATBOT.',
        imageUrl: 'https://picsum.photos/600/400?random=3',
        authors: 'Nguyễn Thị Thu Lợi',
        videoUrl: './intro.mp4',
        demoUrl: 'https://example.com/demo-iot'
    },
    {
        id: '4',
        title: 'Dự án: “Đà Nẵng, kế thừa và phát triển”',
        category: 'Technology',
        description: 'Mô hình thể hiện sự phát triển đô thị bền vững của Đà Nẵng.',
        imageUrl: 'https://picsum.photos/600/400?random=4',
        authors: 'Nguyễn Thị Hoài Thi, Trần Nguyễn Huyền Trang',
        videoUrl: './intro.mp4'
    },
    {
        id: '5',
        title: 'Nấm Bào Ngư tái sinh',
        category: 'Environment',
        description: 'Mô hình nuôi trồng nấm bào ngư tận dụng phế phẩm nông nghiệp, bảo vệ môi trường.',
        imageUrl: 'https://picsum.photos/600/400?random=5',
        authors: 'Nguyễn Thị Yến, Lê Thị Nết',
        videoUrl: './intro.mp4'
    },
    {
        id: '6',
        title: 'Vườn thông minh',
        category: 'Technology',
        description: 'Hệ thống chăm sóc cây tự động sử dụng công nghệ cảm biến.',
        imageUrl: 'https://picsum.photos/600/400?random=6',
        authors: 'Hoàng Thị Sương',
        videoUrl: './intro.mp4'
    },
    {
        id: '7',
        title: 'Hộp bút thông minh',
        category: 'Technology',
        description: 'Hộp bút tích hợp các tính năng công nghệ hỗ trợ học tập.',
        imageUrl: 'https://picsum.photos/600/400?random=7',
        authors: 'Hoàng Thị Sương',
        videoUrl: './intro.mp4'
    },
    {
        id: '8',
        title: 'Mô hình cảnh báo lũ và sạt lỡ đất',
        category: 'Technology',
        description: 'Hệ thống cảnh báo sớm thiên tai giúp giảm thiểu thiệt hại.',
        imageUrl: 'https://picsum.photos/600/400?random=8',
        authors: 'Nguyễn Thị A Kim, Lê Thị Thanh Thương',
        videoUrl: './intro.mp4'
    },
    {
        id: '9',
        title: 'Testing Smart Board',
        category: 'IT',
        description: 'Bảng trắc nghiệm Tiếng Anh thông minh tích hợp AI.',
        imageUrl: 'https://picsum.photos/600/400?random=9',
        authors: 'Phạm Kiều Oanh, Dương Thị Mỹ Lệ',
        videoUrl: './intro.mp4',
        demoUrl: 'https://example.com/smart-board'
    },
    {
        id: '10',
        title: 'Website thư viện học liệu số',
        category: 'IT',
        description: 'Website thư viện học liệu số và tương tác liên môn.',
        imageUrl: 'https://picsum.photos/600/400?random=10',
        authors: 'Huỳnh Quốc Khánh',
        videoUrl: './intro.mp4',
        demoUrl: 'https://example.com/library'
    },
    {
        id: '11',
        title: 'VISION CONTROL',
        category: 'IT',
        description: 'Ứng dụng xử lý hình ảnh và máy chiếu để chuyển bảng thường thành bảng tương tác thông minh.',
        imageUrl: 'https://picsum.photos/600/400?random=11',
        authors: 'Trịnh Hoàng Sơn',
        videoUrl: './intro.mp4',
        demoUrl: 'https://example.com/vision-control'
    },
    {
        id: '12',
        title: 'Công viên Toán học',
        category: 'Math',
        description: 'Mô hình công viên tích hợp các kiến thức toán học trực quan.',
        imageUrl: 'https://picsum.photos/600/400?random=12',
        authors: 'Nguyễn Thị Vân',
        videoUrl: './intro.mp4'
    },
    {
        id: '13',
        title: 'SpiralArt - Nghệ thuật từ chuyển động',
        category: 'Math',
        description: 'Vẽ hoa văn toán học Spirograph – Nghệ thuật từ chuyển động đều.',
        imageUrl: 'https://picsum.photos/600/400?random=13',
        authors: 'Trần Thiên Ân, Nguyễn Đức Khôi',
        videoUrl: './intro.mp4'
    }
];

export const SCHEDULE: ScheduleItem[] = [
    {
        id: '1',
        time: '14:00 - 28/11',
        title: 'Khai trương gian hàng',
        location: 'Gian hàng số 17',
        description: 'Đón tiếp đại biểu và khách tham quan.'
    },
    {
        id: '2',
        time: '09:00 - 29/11',
        title: 'Thi Đấu trường Robotic',
        location: 'Khu vực thi đấu (Gần gian hàng Công ty KSH)',
        description: 'Đội tuyển trường tham gia thi đấu.',
        isHighlight: true
    },
    {
        id: '3',
        time: '09:30 - 29/11',
        title: 'Chấm thi sản phẩm STEM (Vòng 1)',
        location: 'Tại gian hàng',
        description: 'Ban giám khảo chấm điểm các mô hình.'
    },
    {
        id: '4',
        time: '14:00 - 29/11',
        title: 'Hội thi Dân vũ - Flashmob',
        location: 'Sân khấu chính',
        description: 'Đội văn nghệ trường biểu diễn.',
        isHighlight: true
    },
    {
        id: '5',
        time: '15:00 - 29/11',
        title: 'Chấm thi sản phẩm STEM (Vòng 2)',
        location: 'Tại gian hàng',
        description: 'Vòng chấm điểm quyết định.'
    }
];
