# 项目记忆 — astro-devosfera

## 项目基本信息
- 项目：space-ahead，Wqchnggyu 的主博客
- 框架：Astro 6 + Tailwind CSS v4
- 站点地址：https://blogs.wqch.net，base: "/"
- 文章路径：src/data/blog/，集合名：blog
- 配置文件：src/config.ts、src/constants.ts

## 作者信息
- 作者：Wqchnggyu
- 社交：GitHub(Wqchnggyu)、邮箱(wqchnggyu@outlook.com)
- 导航：中文（Posts/Tags/About/Search/Archives/Galleries）

## 已完成工作（2026-03-23 ~ 2026-03-24）

### 1. 文章迁移（from astrowind）
- 迁移 9 篇真实博客文章到 src/data/blog/
- 更新 config.ts（语言 zh-CN、时区 Asia/Shanghai、网站信息）
- 更新 constants.ts（社交链接替换为 GitHub + 邮箱）
- 删除原项目 11 篇西班牙语示例文章

### 2. UI 中文化（2026-03-24）
将全部西班牙语 UI 文本翻译为中文，覆盖 21 个文件：
- **页面**：404、index、search、archives、tags、posts、galleries/index、galleries/[gallery]
- **组件**：Header、MobileMenu、Footer、SearchModal、ShareLinks、GalleryCard、GalleryEmbed、IntroAudio
- **布局**：AboutLayout、PostDetails
- **配置**：constants.ts（SHARE_LINKS 全部 linkTitle 已翻译）

### 3. 修复记录
- helpers.ts：createSlugFromTitle 支持中文标签，withBase 修复双斜杠 bug
- content.config.ts：image.url 支持本地引用和外链字符串（z.union）

## frontmatter 字段映射
- publishDate → pubDatetime
- excerpt → description  
- image → ogImage
- category → tags
