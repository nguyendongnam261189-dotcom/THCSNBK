// services/geminiService.ts
import { FESTIVAL_CONTEXT, PROJECTS, SCHEDULE } from "../constants";

// Ghép system prompt từ dữ liệu gian hàng
const buildSystemInstruction = () => {
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
2. Chỉ trả lời các thông tin liên quan đến trường Nguyễn Bỉnh Khiêm, gian hàng số 17 và Ngày hội chuyển đổi số.
3. Nếu được hỏi về một sản phẩm cụ thể, hãy trích dẫn tên tác giả và mô tả.
4. Nếu được hỏi về lịch trình, hãy cung cấp giờ và địa điểm chính xác.
`;
};

// Hàm được App.tsx gọi: const reply = await generateResponse(userMsg);
export const generateResponse = async (userMessage: string): Promise<string> => {
  const prompt = `${buildSystemInstruction()}

CÂU HỎI CỦA KHÁCH THAM QUAN:
${userMessage}

HÃY TRẢ LỜI BẰNG TIẾNG VIỆT, NGẮN GỌN, DỄ HIỂU.`;

  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      console.error("Gemini API returned non-OK status:", res.status);
      return "Xin lỗi, hiện tôi đang gặp lỗi khi kết nối tới AI. Bạn vui lòng thử lại sau nhé.";
    }

    const data = await res.json();

    if (typeof data.text === "string" && data.text.trim().length > 0) {
      return data.text;
    } else if (data.error) {
      console.error("Gemini API error:", data.error);
      return "Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu. Bạn thử hỏi lại theo cách khác giúp tôi nhé.";
    }

    return "Xin lỗi, tôi không nhận được câu trả lời từ AI.";
  } catch (error) {
    console.error("Network or parsing error when calling /api/gemini:", error);
    return "Xin lỗi, có lỗi kết nối khi gọi tới AI. Bạn kiểm tra lại mạng hoặc thử lại sau nhé.";
  }
};
