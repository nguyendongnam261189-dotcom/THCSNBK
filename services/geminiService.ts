// src/services/geminiService.ts

import { GoogleGenAI } from "@google/genai";
import { FESTIVAL_CONTEXT, PROJECTS, SCHEDULE } from "../constants";

// Lấy API key từ biến môi trường process.env.API_KEY theo hướng dẫn
// Giả định biến này đã được cấu hình trong môi trường chạy
const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
} else {
  console.warn("API_KEY is missing. AI features will not work.");
}

// Tạo system prompt từ dữ liệu FESTIVAL_CONTEXT, PROJECTS, SCHEDULE
const buildSystemInstruction = (): string => {
  const projectData = PROJECTS.map(
    (p) =>
      `- Sản phẩm: "${p.title}" (Lĩnh vực: ${p.category}). Tác giả: ${p.authors}. Mô tả: ${p.description}`
  ).join("\n");

  const scheduleData = SCHEDULE.map(
    (s) =>
      `- Thời gian: ${s.time}. Sự kiện: "${s.title}" tại ${s.location}. Chi tiết: ${s.description}`
  ).join("\n");

  return `${FESTIVAL_CONTEXT}

DƯỚI ĐÂY LÀ DỮ LIỆU CHI TIẾT VỀ GIAN HÀNG TRƯỜNG NGUYỄN BỈNH KHIÊM:

DANH SÁCH SẢN PHẨM TRƯNG BÀY:
${projectData}

LỊCH TRÌNH HOẠT ĐỘNG:
${scheduleData}

LƯU Ý KHI TRẢ LỜI:
1. Bạn là đại diện của trường, hãy trả lời thân thiện, tự hào và ngắn gọn.
2. Chỉ trả lời các thông tin liên quan đến trường Nguyễn Bỉnh Khiêm, gian hàng số 40 và Ngày hội chuyển đổi số.
3. Nếu được hỏi về một sản phẩm cụ thể, hãy trích dẫn tên tác giả và mô tả.
4. Nếu được hỏi về lịch trình, hãy cung cấp giờ và địa điểm chính xác.
`;
};

// Hàm dùng trong App.tsx để gọi AI
export const generateResponse = async (userMessage: string): Promise<string> => {
  // Nếu chưa có instance AI (chưa cấu hình API Key) thì trả lời nhẹ nhàng
  if (!ai) {
    return "Xin lỗi, tôi chưa được kết nối với hệ thống AI (thiếu API Key). Vui lòng báo với thầy/cô phụ trách gian hàng kiểm tra cấu hình.";
  }

  try {
    const systemInstruction = buildSystemInstruction();
    
    // Sử dụng model gemini-2.5-flash cho các tác vụ văn bản cơ bản
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${systemInstruction}\n\nCÂU HỎI CỦA KHÁCH THAM QUAN:\n${userMessage}`,
    });

    // Truy cập trực tiếp thuộc tính .text (không phải hàm text())
    return response.text?.trim() || "Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với máy chủ AI. Vui lòng thử lại sau hoặc hỏi trực tiếp thầy cô tại gian hàng.";
  }
};
