import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    getInTouch: string;
    resume: string;
  };
  hero: {
    tag: string;
    headlinePart1: string;
    headlinePart2: string;
    summary: string;
    exploreWork: string;
    readStory: string;
    badgeRole: string;
    badgeStatus: string;
    badgeLocation: string;
  };
  about: {
    tag: string;
    heading: string;
    headingHighlight: string;
    bioParagraph1: string;
    bioParagraph2: string;
    exploreExp: string;
    quoteText: string;
    statsYears: string;
    statsYearsLabel: string;
    statsQuality: string;
    statsQualityLabel: string;
    statsDedication: string;
    statsDedicationLabel: string;
  };
  experience: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    present: string;
    viewWork: string;
    responsibilities: string;
    techStack: string;
  };
  projects: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewCaseStudy: string;
    liveDemo: string;
    sourceCode: string;
    keyDeliverables: string;
    role: string;
    technologies: string;
    close: string;
  };
  skills: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ticket01Title: string;
    ticket01Spec: string;
    ticket02Title: string;
    ticket02Spec: string;
    ticket03Title: string;
    ticket03Spec: string;
    ticket04Title: string;
    ticket04Spec: string;
    auditedStamp: string;
  };
  education: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    degreeTitle: string;
    university: string;
    universityEn: string;
    majorLabel: string;
    majorValue: string;
    gpaLabel: string;
    gpaGrade: string;
    focusAreasLabel: string;
    toeicTitle: string;
    toeicScore: string;
    toeicDesc: string;
    ctfTitle: string;
    ctfAward: string;
    ctfDesc: string;
    verified: string;
  };
  contact: {
    tag: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    directEmail: string;
    phoneLabel: string;
    locationLabel: string;
    connectVerify: string;
    formTag: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    sendButton: string;
    successMessage: string;
    securityNote: string;
    copyright: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      skills: "Kỹ năng",
      contact: "Liên hệ",
      getInTouch: "Kết nối ngay",
      resume: "Hồ sơ [PDF]",
    },
    hero: {
      tag: "KỸ SƯ PHẦN MỀM • QA & FRONTEND",
      headlinePart1: "Kiến tạo.",
      headlinePart2: "Khám phá. Tinh chỉnh.",
      summary:
        "Tôi là một Kỹ sư Phần mềm đam mê kiểm thử chất lượng và phát triển giao diện web chỉn chu. Kết hợp tư duy phân tích nhạy bén cùng thẩm mỹ số để mang lại những trải nghiệm phần mềm đáng tin cậy.",
      exploreWork: "Xem dự án nổi bật",
      readStory: "Khám phá câu chuyện",
      badgeRole: "Kỹ thuật Phần mềm",
      badgeStatus: "Sẵn sàng nhận việc",
      badgeLocation: "TP. Hồ Chí Minh",
    },
    about: {
      tag: "02 // VỀ TÔI & TRIẾT LÝ NGHỀ NGHIỆP",
      heading: "Tư duy tò mò,",
      headingHighlight: "hướng tới tương lai.",
      bioParagraph1:
        "Tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) với niềm đam mê sâu sắc dành cho kiểm thử phần mềm (Manual & Functional Testing) và phát triển giao diện web người dùng (React, NextJS).",
      bioParagraph2:
        "Với tôi, chất lượng phần mềm không chỉ là tìm kiếm lỗi, mà là xây dựng sự tin tưởng và mang lại trải nghiệm mượt mà, trọn vẹn nhất cho người dùng cuối.",
      exploreExp: "Khám phá kinh nghiệm làm việc",
      quoteText:
        "Chất lượng phần mềm là sự giao thoa hài hòa giữa kỹ thuật chuẩn xác và sự thấu cảm người dùng.",
      statsYears: "2021-25",
      statsYearsLabel: "HCMUTE Đào tạo chính quy",
      statsQuality: "100%",
      statsQualityLabel: "Tập trung kiểm thử & chi tiết",
      statsDedication: "3.23",
      statsDedicationLabel: "GPA Khá/Giỏi ĐH SPKT",
    },
    experience: {
      tag: "03 // HÀNH TRÌNH CHUYÊN MÔN",
      title: "Kinh nghiệm &",
      titleHighlight: "Thực tiễn.",
      subtitle:
        "Các cột mốc làm việc thực tế từ các doanh nghiệp công nghệ và y tế, khẳng định năng lực kiểm thử và phát triển ứng dụng.",
      present: "Hiện tại",
      viewWork: "Xem chi tiết công việc",
      responsibilities: "Trách nhiệm & Thành tựu chính:",
      techStack: "Công nghệ & Công cụ ứng dụng:",
    },
    projects: {
      tag: "04 // DỰ ÁN TIÊU BIỂU",
      title: "Công trình &",
      titleHighlight: "Case Studies.",
      subtitle:
        "Tuyển chọn các hệ thống thực tế được phát triển và kiểm thử nghiêm ngặt theo tiêu chuẩn phần mềm hiện đại.",
      viewCaseStudy: "Xem chi tiết dự án",
      liveDemo: "Trải nghiệm trực tiếp",
      sourceCode: "Mã nguồn GitHub",
      keyDeliverables: "Tính năng & Kết quả kiểm thử:",
      role: "Vai trò đảm nhiệm:",
      technologies: "Ngăn xếp công nghệ:",
      close: "Đóng",
    },
    skills: {
      tag: "05 // NĂNG LỰC KỸ THUẬT",
      title: "Kỹ năng &",
      titleHighlight: "Năng lực chuyên môn.",
      subtitle:
        "Hệ thống 4 phiếu kiểm định năng lực kỹ thuật chuẩn xác theo CV thực tế của bạn.",
      ticket01Title: "Kiểm thử (Testing)",
      ticket01Spec: "TIÊU CHUẨN: QA & PHÂN TÍCH DEFECT",
      ticket02Title: "Frontend",
      ticket02Spec: "TIÊU CHUẨN: REACT & NEXTJS SPA",
      ticket03Title: "Backend & Databases",
      ticket03Spec: "TIÊU CHUẨN: SERVICES, APIS & DATA",
      ticket04Title: "Tools & AI",
      ticket04Spec: "TIÊU CHUẨN: WORKFLOW & BỘ CÔNG CỤ AI",
      auditedStamp: "ĐÃ KIỂM ĐỊNH",
    },
    education: {
      tag: "06 // HỌC VẤN & BẰNG CẤP",
      title: "Học vấn &",
      titleHighlight: "Chứng chỉ.",
      subtitle:
        "Nền tảng đào tạo chính quy ngành Kỹ thuật Phần mềm tại HCMUTE cùng các chứng chỉ ngoại ngữ và giải thưởng chuyên môn.",
      degreeTitle: "BẰNG CỬ NHÂN KỸ THUẬT PHẦN MỀM",
      university: "Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)",
      universityEn: "Ho Chi Minh City University of Technology and Education",
      majorLabel: "Chuyên ngành",
      majorValue: "Kỹ thuật Phần mềm (Software Engineering)",
      gpaLabel: "Điểm trung bình tích lũy",
      gpaGrade: "(Xếp loại: Khá/Giỏi)",
      focusAreasLabel: "Lĩnh vực trọng tâm & Nghiên cứu:",
      toeicTitle: "Chứng chỉ tiếng Anh quốc tế",
      toeicScore: "TOEIC 640 (Nghe & Đọc)",
      toeicDesc: "Đạt chuẩn năng lực giao tiếp và làm việc với tài liệu kỹ thuật quốc tế.",
      ctfTitle: "Giải thưởng Bảo mật Thông tin",
      ctfAward: "Giải Khuyến Khích — Cyber Security CTF 2023",
      ctfDesc: "Cuộc thi An toàn thông tin do Khoa CNTT HCMUTE tổ chức.",
      verified: "XÁC NHẬN CHÍNH THỨC",
    },
    contact: {
      tag: "07 // LIÊN HỆ & HỢP TÁC",
      heading: "Cùng kiến tạo",
      headingHighlight: "những giá trị ý nghĩa.",
      subtitle:
        "Sẵn sàng cho các cơ hội nghề nghiệp Kỹ thuật Phần mềm (Software Testing / Frontend / Full-stack), đối thoại chuyên môn và hợp tác dự án.",
      directEmail: "EMAIL TRỰC TIẾP",
      phoneLabel: "ĐIỆN THOẠI / ZALO",
      locationLabel: "ĐỊA ĐIỂM",
      connectVerify: "KẾT NỐI & XÁC THỰC",
      formTag: "BIỂU MẪU LIÊN HỆ TRỰC TIẾP",
      formSubtitle: "Phản hồi trong 24h",
      nameLabel: "Họ và tên",
      namePlaceholder: "ví dụ: Alex Morgan",
      emailLabel: "Địa chỉ Email",
      emailPlaceholder: "alex@company.com",
      messageLabel: "Nội dung tin nhắn",
      messagePlaceholder: "Chia sẻ về dự án, cơ hội hợp tác hoặc gửi lời chào...",
      sending: "Đang gửi đi...",
      sendButton: "Gửi tin nhắn",
      successMessage: "Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi bạn sớm nhất.",
      securityNote: "Bảo mật thông tin // Phản hồi trong 24h",
      copyright: "© 2025 Phan Thị Ngọc Mai. Hồ sơ năng lực Kỹ thuật Phần mềm.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      getInTouch: "Get in touch",
      resume: "Resume [PDF]",
    },
    hero: {
      tag: "SOFTWARE ENGINEER • QA & FRONTEND",
      headlinePart1: "Build. Explore.",
      headlinePart2: "Iterate.",
      summary:
        "I'm a Software Engineer who loves turning ideas into meaningful digital experiences. Blending sharp analytical testing precision with refined digital aesthetics to build reliable, high-performing software.",
      exploreWork: "Explore my work",
      readStory: "Read the story",
      badgeRole: "Software Engineering",
      badgeStatus: "Open for Opportunities",
      badgeLocation: "Ho Chi Minh City",
    },
    about: {
      tag: "02 // ABOUT & PHILOSOPHY",
      heading: "A curious mind,",
      headingHighlight: "building for what's next.",
      bioParagraph1:
        "Graduated in Software Engineering from Ho Chi Minh City University of Technology and Education (HCMUTE) with a strong focus on software quality assurance (manual, UI & functional testing) and modern web applications.",
      bioParagraph2:
        "For me, software craftsmanship is not merely finding bugs, but instilling confidence and delivering frictionless, delightful user journeys.",
      exploreExp: "Discover my experience",
      quoteText:
        "Software quality is where engineering rigor meets deep human empathy.",
      statsYears: "2021-25",
      statsYearsLabel: "HCMUTE Formal Education",
      statsQuality: "100%",
      statsQualityLabel: "QA Precision & Diligence",
      statsDedication: "3.23",
      statsDedicationLabel: "GPA (Bachelor Degree)",
    },
    experience: {
      tag: "03 // CAREER TRAJECTORY",
      title: "Experience &",
      titleHighlight: "Milestones.",
      subtitle:
        "Practical engineering and testing engagements across tech and healthcare systems, delivering validated and resilient solutions.",
      present: "Present",
      viewWork: "View Role Details",
      responsibilities: "Key Responsibilities & Impact:",
      techStack: "Technologies & Toolsets:",
    },
    projects: {
      tag: "04 // SELECTED PROJECTS",
      title: "Works &",
      titleHighlight: "Case Studies.",
      subtitle:
        "A curation of real-world platforms built and rigorously verified to modern software standards.",
      viewCaseStudy: "View Case Study",
      liveDemo: "Live Preview",
      sourceCode: "GitHub Repository",
      keyDeliverables: "Features & Verification Scope:",
      role: "Assigned Role:",
      technologies: "Technology Stack:",
      close: "Close",
    },
    skills: {
      tag: "05 // TECHNICAL CAPABILITIES",
      title: "Skills &",
      titleHighlight: "Competencies.",
      subtitle:
        "Editorial inspection tickets showcasing verified technical capabilities aligned with actual industry qualifications.",
      ticket01Title: "Testing",
      ticket01Spec: "SPEC: QA & DEFECT ANALYSIS",
      ticket02Title: "Frontend",
      ticket02Spec: "SPEC: REACT & NEXTJS SPA",
      ticket03Title: "Backend & Databases",
      ticket03Spec: "SPEC: SERVICES, APIS & DATA",
      ticket04Title: "Tools & AI",
      ticket04Spec: "SPEC: WORKFLOW & AI SUITE",
      auditedStamp: "QA AUDITED",
    },
    education: {
      tag: "06 // ACADEMIC & CREDENTIALS",
      title: "Education &",
      titleHighlight: "Certifications.",
      subtitle:
        "Formal software engineering education from HCMUTE alongside international language proficiency and cybersecurity honors.",
      degreeTitle: "DEGREE // BACHELOR OF ENGINEERING",
      university: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      universityEn: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
      majorLabel: "Major",
      majorValue: "Software Engineering",
      gpaLabel: "Cumulative GPA",
      gpaGrade: "(Grading: Good / Honors)",
      focusAreasLabel: "Core Focus & Research Areas:",
      toeicTitle: "English Proficiency Certificate",
      toeicScore: "TOEIC 640 (Listening & Reading)",
      toeicDesc: "Certified capability to collaborate and communicate in international technical environments.",
      ctfTitle: "Cybersecurity Recognition",
      ctfAward: "Consolation Prize — Cyber Security CTF 2023",
      ctfDesc: "University-wide cybersecurity challenge organized by HCMUTE IT Faculty.",
      verified: "OFFICIALLY VERIFIED",
    },
    contact: {
      tag: "07 // CONTACT & COLLABORATION",
      heading: "Let's create",
      headingHighlight: "something meaningful.",
      subtitle:
        "Open to Software Engineering opportunities (QA Testing / Frontend / Full-stack), technical dialogues, and thoughtful product collaborations.",
      directEmail: "DIRECT EMAIL",
      phoneLabel: "PHONE / ZALO",
      locationLabel: "LOCATION",
      connectVerify: "CONNECT & VERIFY",
      formTag: "TRANSMISSION FORM // INQUIRY",
      formSubtitle: "Quick Dispatch within 24h",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Your Email",
      emailPlaceholder: "alex@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project, idea, or opportunity...",
      sending: "Transmitting...",
      sendButton: "Send Message",
      successMessage: "Message sent successfully! I will reply as soon as possible.",
      securityNote: "Encrypted transmission // Response within 24h",
      copyright: "© 2025 Phan Thi Ngoc Mai. Software Engineering Portfolio.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("portfolio_language");
      if (saved === "vi" || saved === "en") return saved;
      return "vi"; // Mặc định hiển thị tiếng Việt theo yêu cầu của bạn
    } catch {
      return "vi";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolio_language", language);
      document.documentElement.lang = language;
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        t: TRANSLATIONS[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

