/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  MOE KYAW AUNG — PORTFOLIO V144                                  ║
 * ║  ⭐ ANDROID SENIOR DEVELOPER ⭐                                   ║
 * ║  Cyberpunk / Neon — Silver Charcoal Palette                      ║
 * ║  React JSX • Single-File • Production-Ready                      ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────
   DATA CONSTANTS
───────────────────────────────────────────────────────────────── */

const PROFILE = {
  name: "Moe Kyaw Aung",
  nameMyanmar: "မိုးကျော်အောင်",
  title: "Senior Android Developer",
  tagline: "⭐ MOE KYAW AUNG ⭐ ANDROID SENIOR DEVELOPER",
  location: "Tachileik, Myanmar 🇲🇲  ↔  Bangkok, Thailand 🇹🇭",
  phone1: "+95 9 889 000 889",
  phone2: "+959 666 000 050",
  avatar: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  avatar2: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png",
  avatar3: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
  avatar4: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp",
  gravatar: "https://gravatar.com/moekyawaung13721",
  gravatarProfile: "https://gravatar.com/moekyawaung2026",
  about: `Android Developer with nearly 12 years of hands-on experience building secure, scalable,
and user-friendly mobile applications. Strong in Kotlin and modern Jetpack development
(Compose, ViewModel, Room), Firebase integration, and REST API consumption. I focus on
clean architecture, maintainable code, and practical security. Comfortable delivering
features end-to-end — from UI to networking, local caching, testing, and release-ready builds.`,
  philosophy: "Code with culture. Build with purpose.",
  currentlyBuilding: "MoekyawTranslator — AI Translation App",
  resumeUrl: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp",
};

const STATS = [
  { value: 12, suffix: "+", label: "Years Exp", labelMM: "နှစ် အတွေ့အကြုံ" },
  { value: 3000, suffix: "+", label: "Apps Built", labelMM: "အက်ပ်များ" },
  { value: 122, suffix: "+", label: "Repos", labelMM: "ကုဒ်သိုလှောင်ခန်း" },
  { value: 100, suffix: "%", label: "Satisfaction", labelMM: "ကျေနပ်မှု" },
];

const ROLES = [
  "Senior Android Developer",
  "Kotlin Specialist",
  "Jetpack Compose Expert",
  "Mobile Architect",
  "Clean Architecture Practitioner",
  "Firebase Integration Specialist",
];

const SKILLS = [
  { name: "Kotlin", pct: 98, icon: "🤖" },
  { name: "Jetpack Compose", pct: 95, icon: "🎨" },
  { name: "Android SDK", pct: 97, icon: "📱" },
  { name: "MVVM / Clean Arch", pct: 95, icon: "🏗️" },
  { name: "Firebase", pct: 90, icon: "🔥" },
  { name: "REST APIs / Retrofit", pct: 92, icon: "🌐" },
  { name: "Flutter / Dart", pct: 82, icon: "🐦" },
  { name: "CI/CD / GitHub Actions", pct: 85, icon: "⚙️" },
  { name: "Python", pct: 72, icon: "🐍" },
  { name: "Cybersecurity", pct: 75, icon: "🔐" },
];

const TECH_CHIPS = [
  "🤖 Kotlin","☕ Java","🎯 Dart","🐦 Flutter","⚛️ React","▲ Next.js",
  "🟨 JavaScript","🔷 TypeScript","🐍 Python","📦 Node.js","💚 Vue.js",
  "🐘 PostgreSQL","🍃 MongoDB","⚡ Redis","🐳 Docker","☁️ AWS",
  "🔗 Blockchain","🤖 Machine Learning","🔐 Cyber Security","🏗️ Clean Arch",
  "📐 MVVM","🔄 Coroutines","🌊 Kotlin Flow","🔥 Firebase","🧪 JUnit",
];

const SERVICES = [
  { icon: "📱", title: "Android App Dev", titleMM: "Android အက်ပ်", desc: "Native Android apps with Kotlin, Jetpack Compose, MVVM, and Clean Architecture for production-level quality." },
  { icon: "🏗️", title: "Architecture Design", titleMM: "ဗိသုကာဒီဇိုင်း", desc: "Scalable multi-module architecture using Clean Architecture, SOLID principles, and dependency injection." },
  { icon: "🔥", title: "Firebase Integration", titleMM: "Firebase ပေါင်းစည်း", desc: "Auth, Firestore, Cloud Messaging, Crashlytics, Analytics — full Firebase backend integration." },
  { icon: "⚙️", title: "CI/CD Pipeline", titleMM: "CI/CD သုံး", desc: "GitHub Actions and Azure DevOps pipelines for automated testing, building, and releasing." },
  { icon: "🔐", title: "Mobile Security", titleMM: "လုံခြုံရေး", desc: "Secure data storage, encrypted networking, certificate pinning, and ethical security auditing." },
  { icon: "🤖", title: "AI / ML Integration", titleMM: "AI ပေါင်းစည်း", desc: "TFLite on-device ML, Claude API integration, and intelligent mobile feature development." },
];

const PROJECTS = [
  {
    emoji: "📱", title: "Social Dashboard", tag: "Flutter", color: "#00f0ff",
    desc: "Full-featured social media dashboard with real-time feeds, analytics, dark mode, and multi-platform support.",
    link: "https://github.com/moekyawaung-tech/social-dashboard",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "📊", title: "POS Ultimate Pro Max", tag: "Kotlin", color: "#ff2d78",
    desc: "Enterprise-grade Point of Sale system with inventory management, reporting, and offline-first architecture.",
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "🎮", title: "Game Collection", tag: "Android", color: "#ffe600",
    desc: "Multi-game Android collection featuring Snake, Casino, and classic games with high-score persistence.",
    link: "https://github.com/moekyawaung-tech/game-collection",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "🌤️", title: "Weather App", tag: "Compose", color: "#00f0ff",
    desc: "Modern weather app using OpenWeatherMap API, Jetpack Compose UI, location services, and offline caching.",
    link: "https://github.com/moekyawaung-tech/Weather-app",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "💼", title: "Job Portal App", tag: "Firebase", color: "#ff2d78",
    desc: "Full-stack job portal with Firebase Auth, Firestore, real-time chat, and employer/candidate roles.",
    link: "https://github.com/moekyawaung-tech/Job-Portal-App",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "🎯", title: "Video Player", tag: "Kotlin", color: "#ffe600",
    desc: "Feature-rich video player with ExoPlayer, custom controls, subtitles, and media session integration.",
    link: "https://github.com/moekyawaung-tech/video-player",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "📱", title: "PWA App", tag: "PWA", color: "#00f0ff",
    desc: "Progressive Web App with service workers, offline support, push notifications, and installable manifest.",
    link: "https://github.com/moekyawaung-tech/pwa-app",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "🌍", title: "Thailand Travel", tag: "Flutter", color: "#ff2d78",
    desc: "Thailand tourism guide app with maps, hotel listings, local attractions, and multi-language support.",
    link: "https://github.com/moekyawaung-tech/thailand-travel",
    demo: "https://moekyawaung-tech.github.io/",
  },
  {
    emoji: "📝", title: "Daily Planner", tag: "Room", color: "#ffe600",
    desc: "Productivity planner app with Room DB, calendar integration, reminders, and task categorization.",
    link: "https://github.com/moekyawaung-tech/Daily-planner-app",
    demo: "https://moekyawaung-tech.github.io/",
  },
];

const APP_COLLECTION = [
  { emoji: "📱", title: "Social Dashboard", desc: "Real-time social feeds & analytics" },
  { emoji: "📱", title: "PWA App", desc: "Installable Progressive Web App" },
  { emoji: "📊", title: "Admin Dashboard", desc: "Management & reporting system" },
  { emoji: "📈", title: "Stock Market", desc: "Live market data tracker" },
  { emoji: "🎮", title: "Game Collection", desc: "Multi-game entertainment suite" },
  { emoji: "🎵", title: "Music Player", desc: "Full-featured audio player" },
  { emoji: "💬", title: "Chat App", desc: "Real-time messaging platform" },
  { emoji: "⚽", title: "World Cup", desc: "Live sports tracking app" },
  { emoji: "🛒", title: "E-commerce", desc: "Full shopping platform" },
  { emoji: "💼", title: "Portfolio", desc: "Developer showcase app" },
  { emoji: "💰", title: "Money Tracker", desc: "Personal finance manager" },
  { emoji: "🌤️", title: "Weather", desc: "Live weather forecaster" },
  { emoji: "💸", title: "Crypto", desc: "Crypto portfolio tracker" },
  { emoji: "📝", title: "Todo", desc: "Smart task manager" },
  { emoji: "🎯", title: "Video Player", desc: "ExoPlayer-powered viewer" },
  { emoji: "🏆", title: "LEGEND!", desc: "The ultimate collection" },
];

const TIMELINE = [
  { year: "2013", title: "Started Android Dev", desc: "Began mobile journey with Java and early Android SDK." },
  { year: "2015", title: "Kotlin Adoption", desc: "Shifted to Kotlin, dramatically improved code quality and productivity." },
  { year: "2017", title: "Firebase Mastery", desc: "Deep Firebase integration: Auth, Firestore, FCM, Crashlytics." },
  { year: "2019", title: "Clean Architecture", desc: "Adopted MVVM + Clean Architecture for scalable, testable codebases." },
  { year: "2021", title: "Jetpack Compose", desc: "Early adopter of Compose — declarative UI changed everything." },
  { year: "2023", title: "AI Integration", desc: "Integrating Claude API, TFLite for on-device ML features." },
  { year: "2025", title: "Senior Level", desc: "12+ years, 3000+ apps, leading architecture decisions and mentoring." },
  { year: "2026", title: "Now", desc: "Building MoekyawTranslator AI App. Open to senior roles globally." },
];

const GITHUB_ACCOUNTS = [
  "https://moekyawaung-china.github.io/",
  "https://moekyawaung-developer.github.io/",
  "https://moekyawaungvivov30pro-design.github.io/",
  "https://moekyaw-aung-mm.github.io/",
  "https://moekyawaung-mk.github.io/",
  "https://moekyawaung-microsoft.github.io/",
  "https://moekyawaung-cyber.github.io/",
  "https://moekyawaung-bangkok.github.io/",
  "https://moekyawaung-micro.github.io/",
  "https://moekyawaungmka2032-boop.github.io/",
  "https://moekyawaung-dev-mm.github.io/",
  "https://moekyaw-developer.github.io/",
  "https://moekyawaung.github.io/",
  "https://Moekyawaung-mm.github.io/",
  "https://moekyawaung-tech.github.io/",
  "https://moekyawaung-hack.github.io/",
  "https://moekyawaung-graduate.github.io/",
  "https://Moekyawaung-Linux.github.io/",
  "https://Moekyawaung-coder.github.io/",
  "https://moekyawaung-designer.github.io/",
  "https://Moekyawaung2026.github.io/",
  "https://moekyawaungmka2034-coder.github.io/",
  "https://moekyawaung-web.github.io/",
  "https://Moekyawaung-dev.github.io/",
  "https://MoeKyawAung-code.github.io/",
  "https://moekyawaung-creator.github.io/",
  "https://moekyawaung-webdeveloper.github.io/",
  "https://Moekyawaung-co.github.io/",
  "https://moekyawaung-edu.github.io/",
  "https://moekyawaung-senior.github.io/",
  "https://Moekyawaung-Development.github.io/",
  "https://moekyawaung-google.github.io/",
  "https://Moe-KyawAung.github.io/",
  "https://Dev-moe-kyawaung.github.io/",
  "https://moekyawaung-tech.github.io/",
  "https://moekyawaung-china.github.io/",
  "https://moekyawaungmka2032-boop.github.io/",
  "https://moekyaw-aung-mm.github.io/",
  "https://moekyawaung-micro.github.io/",
  "https://moekyawaungvivov30pro-design.github.io/",
  "https://moekyawaung-hack.github.io/",
  "https://moekyawaung-bangkok.github.io/",
  "https://moekyawaung-mk.github.io/",
];

const LOVABLE_LINKS = [
  "https://happy-cv-creator.lovable.app",
  "https://moekyawaung.lovable.app",
  "https://moekyawaungmybio.lovable.app/",
  "https://the-cv-palette.lovable.app",
  "https://moekyaw-url.lovable.app",
  "https://moekyawaung-dev.lovable.app",
  "https://moe-kyaw-aung.lovable.app",
  "https://moekyawaungmka.lovable.app",
  "https://moekyaw.lovable.app",
  "https://m-moekyaw.lovable.app",
  "https://dev-moekyawaung.lovable.app",
  "https://dev-moekyaw.lovable.app",
  "https://cv-beacon.lovable.app/",
  "https://moekyawaungmkamka.lovable.app",
  "https://pixel-perfect-snap-39.lovable.app",
  "https://devmoekyaw.lovable.app",
  "https://profile-persuasion-hub.lovable.app",
  "https://friendly-haven-io.lovable.app",
  "https://moekyawaung-github.lovable.app",
  "https://moekyawgithub.lovable.app",
  "https://joy-codify-life.lovable.app/",
  "https://mmoekyaw.lovable.app",
  "https://color-code-chronicles.lovable.app",
  "https://moekyawaung-free.lovable.app",
  "https://app-skill-gallery.lovable.app",
  "https://spark-coach-create.lovable.app",
  "https://moekyaw-mk.lovable.app",
  "https://moekyawaung-myanmar.lovable.app",
  "https://mmoe.lovable.app",
  "https://moekyaw-dev.lovable.app",
  "https://lovable.dev/invite/ZVLZ2S5",
  "https://preview--moekyawaungmkamka.lovable.app/",
  "https://moekyawaung-github.lovable.app",
  "https://moekyawaungmybio.lovable.app/",
  "https://moekyaw-url.lovable.app",
  "https://moekyawaung-dev.lovable.app",
  "https://m-moekyaw.lovable.app",
  "https://the-cv-palette.lovable.app",
];

const EMAILS = [
  "moekyawaung@programmer.net",
  "moekyawaung@collector.org",
  "moekyawaung@technologist.com",
  "moekyawaung@techie.com",
  "moekyawaung@graphic-designer.com",
  "moekyawaung@cybergal.com",
  "moekyawaung@webname.com",
  "moekyawaung@hackermail.com",
  "moekyawaung@graduate.org",
  "moekyawaung@engineer.com",
  "moekyawaung@asia.com",
  "moekyawaung@contractor.net",
  "moekyawaung@linuxmail.org",
  "moekyawaung@usa.com",
  "moekyawaung@europe.com",
  "moekyawaung@mail.com",
  "moekyawaung@iname.com",
  "moekyawaung@socialogist.com",
  "moekyawaung@secretary.net",
  "moekyawaung@publicist.com",
  "moekyawaung@gmail.com",
];

const SOCIAL_LINKS = [
  { label: "GitHub", icon: "⚡", url: "https://github.com/Dev-moe-kyawaung/", color: "#00f0ff" },
  { label: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1", color: "#0077b5" },
  { label: "YouTube", icon: "▶️", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG", color: "#ff2d78" },
  { label: "Gravatar", icon: "👤", url: "https://gravatar.com/moekyawaung13721", color: "#ffe600" },
  { label: "Bluesky", icon: "🦋", url: "https://bsky.app/profile/moekyawaung96.bsky.social", color: "#00f0ff" },
  { label: "Tumblr", icon: "📓", url: "https://www.tumblr.com/moekyawaung", color: "#ff2d78" },
  { label: "Flickr", icon: "📷", url: "https://www.flickr.com/people/204037451@N06", color: "#ffe600" },
  { label: "Vimeo", icon: "🎬", url: "https://vimeo.com/user252414232", color: "#00f0ff" },
  { label: "Slack", icon: "💬", url: "https://moekyawaung.slack.com/", color: "#ff2d78" },
  { label: "PayPal", icon: "💳", url: "https://www.paypal.com/paypalme/my/profile", color: "#ffe600" },
  { label: "Strikingly", icon: "🌐", url: "http://moekyawaung2026.strikingly.com", color: "#00f0ff" },
  { label: "TikTok", icon: "🎵", url: "https://www.tiktok.com/@moekyawaung", color: "#ff2d78" },
  { label: "Reddit", icon: "🔴", url: "https://www.reddit.com/user/moekyawaung", color: "#ffe600" },
  { label: "Pinterest", icon: "📌", url: "https://www.pinterest.com/moekyawaung", color: "#00f0ff" },
  { label: "Play Store", icon: "🏪", url: "https://play.google.com/store", color: "#ff2d78" },
  { label: "Instagram", icon: "📸", url: "https://www.instagram.com/moekyawaung", color: "#ffe600" },
];

const CERTIFICATES = {
  "Programming Languages": [
    { name: "C Programming", date: "Jul 4, 2024", id: "1720080366600" },
    { name: "C++ Programming", date: "Jul 5, 2024", id: "1720166766600" },
    { name: "Python Programming", date: "Jul 6, 2024", id: "1720253166600" },
    { name: "Java Programming", date: "Jul 7, 2024", id: "1720339566600" },
    { name: "JavaScript", date: "Jul 8, 2024", id: "1720425966600" },
    { name: "TypeScript", date: "Jul 9, 2024", id: "1720512366600" },
    { name: "Kotlin", date: "Jul 10, 2024", id: "1720598766600" },
    { name: "Swift", date: "Jul 11, 2024", id: "1720685166600" },
    { name: "Go Programming", date: "Jul 12, 2024", id: "1720771566600" },
    { name: "Rust", date: "Jul 13, 2024", id: "1720857966600" },
    { name: "Ruby", date: "Jul 14, 2024", id: "1720944366600" },
    { name: "PHP", date: "Jul 15, 2024", id: "1721030766600" },
    { name: "Dart", date: "Jul 16, 2024", id: "1721117166600" },
  ],
  "Web Development": [
    { name: "HTML5", date: "Aug 1, 2024", id: "1722470400000" },
    { name: "CSS3", date: "Aug 2, 2024", id: "1722556800000" },
    { name: "React.js", date: "Aug 3, 2024", id: "1722643200000" },
    { name: "Node.js", date: "Aug 4, 2024", id: "1722729600000" },
    { name: "Next.js", date: "Aug 5, 2024", id: "1722816000000" },
    { name: "Vue.js", date: "Aug 6, 2024", id: "1722902400000" },
    { name: "Angular", date: "Aug 7, 2024", id: "1722988800000" },
    { name: "Bootstrap", date: "Aug 8, 2024", id: "1723075200000" },
    { name: "Tailwind CSS", date: "Aug 9, 2024", id: "1723161600000" },
    { name: "Express.js", date: "Aug 10, 2024", id: "1723248000000" },
    { name: "REST API Design", date: "Aug 11, 2024", id: "1723334400000" },
    { name: "GraphQL", date: "Aug 12, 2024", id: "1723420800000" },
    { name: "Django", date: "Aug 13, 2024", id: "1723507200000" },
  ],
  "Mobile & App Dev": [
    { name: "Android Development", date: "Sep 1, 2024", id: "1725148800000" },
    { name: "Flutter", date: "Sep 2, 2024", id: "1725235200000" },
    { name: "React Native", date: "Sep 3, 2024", id: "1725321600000" },
    { name: "Kotlin Multiplatform", date: "Sep 4, 2024", id: "1725408000000" },
    { name: "Jetpack Compose", date: "Sep 5, 2024", id: "1725494400000" },
    { name: "iOS Development", date: "Sep 6, 2024", id: "1725580800000" },
    { name: "PWA Development", date: "Sep 7, 2024", id: "1725667200000" },
  ],
  "Databases": [
    { name: "MySQL", date: "Oct 1, 2024", id: "1727740800000" },
    { name: "PostgreSQL", date: "Oct 2, 2024", id: "1727827200000" },
    { name: "MongoDB", date: "Oct 3, 2024", id: "1727913600000" },
    { name: "Firebase Firestore", date: "Oct 4, 2024", id: "1728000000000" },
    { name: "Redis", date: "Oct 5, 2024", id: "1728086400000" },
    { name: "SQLite / Room DB", date: "Oct 6, 2024", id: "1728172800000" },
  ],
  "AI & Data Science": [
    { name: "Machine Learning", date: "Nov 1, 2024", id: "1730419200000" },
    { name: "Deep Learning", date: "Nov 2, 2024", id: "1730505600000" },
    { name: "TensorFlow", date: "Nov 3, 2024", id: "1730592000000" },
    { name: "Data Science", date: "Nov 4, 2024", id: "1730678400000" },
    { name: "Computer Vision", date: "Nov 5, 2024", id: "1730764800000" },
    { name: "NLP", date: "Nov 6, 2024", id: "1730851200000" },
    { name: "Data Analytics", date: "Nov 7, 2024", id: "1730937600000" },
    { name: "Pandas", date: "Nov 8, 2024", id: "1731024000000" },
    { name: "NumPy", date: "Nov 9, 2024", id: "1731110400000" },
    { name: "Scikit-learn", date: "Nov 10, 2024", id: "1731196800000" },
    { name: "Generative AI", date: "Nov 11, 2024", id: "1731283200000" },
  ],
  "Security & DevOps": [
    { name: "Ethical Hacking", date: "Dec 1, 2024", id: "1733011200000" },
    { name: "Cybersecurity", date: "Dec 2, 2024", id: "1733097600000" },
    { name: "Penetration Testing", date: "Dec 3, 2024", id: "1733184000000" },
    { name: "Linux Administration", date: "Dec 4, 2024", id: "1733270400000" },
    { name: "Docker", date: "Dec 5, 2024", id: "1733356800000" },
    { name: "Kubernetes", date: "Dec 6, 2024", id: "1733443200000" },
    { name: "GitHub Actions CI/CD", date: "Dec 7, 2024", id: "1733529600000" },
    { name: "AWS Cloud", date: "Dec 8, 2024", id: "1733616000000" },
    { name: "Network Security", date: "Dec 9, 2024", id: "1733702400000" },
    { name: "Cryptography", date: "Dec 10, 2024", id: "1733788800000" },
  ],
  "Blockchain": [
    { name: "Blockchain Fundamentals", date: "Jan 5, 2025", id: "1736035200
