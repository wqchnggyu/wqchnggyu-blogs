export const SITE = {
  website: "https://blogs.wqch.net/",
  author: "Wqchnggyu",
  profile: "https://github.com/Wqchnggyu",
  desc: "我的个人博客，记录生活与学习中的收集、整理及总结，希望能对你有所帮助。",
  title: "Wqchnggyu's Blogs",
  ogImage: "devosfera-og.webp", // 位于 public 目录
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "编辑本文",
    url: "https://github.com/Wqchnggyu/blogs/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: false, // 在 hero 区域显示/隐藏播放器
    src: "/audio/intro-web.mp3", // 文件路径（相对于 /public）
    label: "INTRO.MP3", // 播放器显示标签
    duration: 30, // 时长（秒，用于固定进度条）
  },
} as const;
