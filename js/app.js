const API_URL = "/api";

// --- i18n ---

const i18n = {
  tr: {
    servicesLabel: "Desteklenen Servisler",
    servicesFail: "Servisler yüklenemedi",
    placeholder: "Linki buraya yapıştır",
    pasteTitle: "Yapıştır",
    downloadTitle: "İndir",
    settingsTitle: "Ayarlar",
    langTitle: "Dil",
    preview: "Önizleme",
    previewDownload: "İndir",
    previewAlt: "Önizleme",
    previewNoPreview: "Önizleme yüklenemedi, ama indirme çalışır",
    statusEmpty: "Bir link yapıştır",
    statusInvalid: "Geçerli bir link gir",
    statusProcessing: "İşleniyor...",
    statusReady: "Hazır",
    statusUnexpected: "Beklenmeyen bir yanıt alındı",
    statusOffline: "Sunucuya ulaşılamadı",
    statusClipboard: "Panoya erişim izni gerekli",
    pickerFound: "öge bulundu",
    pickerAudio: "Sesi indir",
    metaPlatform: "Platform",
    metaFile: "Dosya",
    metaFormat: "Format",
    metaMode: "Mod",
    metaQuality: "Kalite",
    modeAuto: "Video + Ses",
    modeAudio: "Sadece Ses",
    modeMute: "Sessiz Video",
    settingDownloadMode: "İndirme Modu",
    settingQuality: "Kalite",
    settingCodec: "Codec",
    settingFormat: "Format",
    settingBitrate: "Bitrate",
    settingMetadataToggle: "Dosya metaverisini kaldır",
    settingFilenameStyle: "Dosya Adı Stili",
    errors: {
      "error.api.link.invalid": "Geçersiz link",
      "error.api.rate_exceeded": "Çok fazla istek, biraz bekle",
      "error.api.service.unsupported": "Bu servis desteklenmiyor",
      "error.api.service.disabled": "Bu servis şu an devre dışı",
      "error.api.fetch.fail": "İçerik alınamadı",
      "error.api.fetch.rate": "Servis istek limitine ulaşıldı",
      "error.api.content.video.unavailable": "Video mevcut değil",
      "error.api.content.video.live": "Canlı yayınlar desteklenmiyor",
      "error.api.content.video.private": "Bu video gizli",
      "error.api.content.video.age": "Yaş sınırlı içerik",
      "error.api.content.post.unavailable": "Gönderi mevcut değil",
      "error.api.youtube.decipher": "YouTube videosu çözülemedi",
      "error.api.youtube.login": "YouTube bot koruması engelledi",
    },
    errorFallback: "Bilinmeyen bir hata oluştu",
    mascotError: "Hrrr! Bir şeyler ters gitti!",
    mascotEmpty: "Hey, önce bir link ver!",
    mascotInvalid: "Bu link doğru değil gibi...",
    mascotProcessing: "Bakıyorum...",
    mascotSuccess: "İşte bu!",
    mascotPicker: "Bak neler buldum!",
    mascotOffline: "Sunucu uyuyor mu ne?",
    mascotClipboard: "Panoya erişemiyorum!",
    mascotYoutube: "YouTube şu anda desteklenmiyor. YouTube'un bot koruması yüzünden indirme yapamıyorum ama üzerinde çalışıyoruz, yakında hallederiz!",
    mascotGreetings: [
      "Hoş geldin!",
      "Selam! Ne indiriyoruz bugün?",
      "Miyav! Hazırım, link ver.",
      "Uyanıktım, merak etme.",
      "Yine mi sen? Şaka şaka, hoş geldin.",
      "Patiler hazır, başlayalım!",
      "Bugün ne yakalıyoruz?",
      "Gel gel, seni bekliyordum."
    ],
    aboutDesc: "Pawload, sosyal medya platformlarından video, ses ve görsel indirmenizi sağlayan açık kaynaklı bir araçtır. Reklamsız, takipsiz, hızlı.",
    aboutMadeBy: "Kemal Aslıyüksek tarafından yapıldı.",
    footer: "<a href=\"https://github.com/kemalasliyuksek\" target=\"_blank\" rel=\"noopener\">Kemal Aslıyüksek</a> tarafından <svg class=\"paw-icon\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><ellipse cx=\"8\" cy=\"4.5\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"16\" cy=\"4.5\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"3.5\" cy=\"11\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"20.5\" cy=\"11\" rx=\"2.5\" ry=\"3\"/><path d=\"M12 22c-4 0-7-2-8-5-.5-1.5 0-3 1.5-4S9 11 12 11s4.5 1 6.5 2 2 2.5 1.5 4c-1 3-4 5-8 5z\"/></svg> ile yapıldı",
  },
  en: {
    servicesLabel: "Supported Services",
    servicesFail: "Failed to load services",
    placeholder: "Paste your link here",
    pasteTitle: "Paste",
    downloadTitle: "Download",
    settingsTitle: "Settings",
    langTitle: "Language",
    preview: "Preview",
    previewDownload: "Download",
    previewAlt: "Preview",
    previewNoPreview: "Preview unavailable, but download will work",
    statusEmpty: "Paste a link first",
    statusInvalid: "Enter a valid link",
    statusProcessing: "Processing...",
    statusReady: "Ready",
    statusUnexpected: "Unexpected response",
    statusOffline: "Could not reach server",
    statusClipboard: "Clipboard permission required",
    pickerFound: "items found",
    pickerAudio: "Download audio",
    metaPlatform: "Platform",
    metaFile: "File",
    metaFormat: "Format",
    metaMode: "Mode",
    metaQuality: "Quality",
    modeAuto: "Video + Audio",
    modeAudio: "Audio Only",
    modeMute: "Muted Video",
    settingDownloadMode: "Download Mode",
    settingQuality: "Quality",
    settingCodec: "Codec",
    settingFormat: "Format",
    settingBitrate: "Bitrate",
    settingMetadataToggle: "Remove file metadata",
    settingFilenameStyle: "Filename Style",
    errors: {
      "error.api.link.invalid": "Invalid link",
      "error.api.rate_exceeded": "Too many requests, try again later",
      "error.api.service.unsupported": "This service is not supported",
      "error.api.service.disabled": "This service is currently disabled",
      "error.api.fetch.fail": "Could not fetch content",
      "error.api.fetch.rate": "Service rate limit reached",
      "error.api.content.video.unavailable": "Video unavailable",
      "error.api.content.video.live": "Live streams are not supported",
      "error.api.content.video.private": "This video is private",
      "error.api.content.video.age": "Age-restricted content",
      "error.api.content.post.unavailable": "Post unavailable",
      "error.api.youtube.decipher": "Could not decipher YouTube video",
      "error.api.youtube.login": "Blocked by YouTube bot protection",
    },
    errorFallback: "An unknown error occurred",
    mascotError: "Hiss! Something went wrong!",
    mascotEmpty: "Hey, give me a link first!",
    mascotInvalid: "That link doesn't look right...",
    mascotProcessing: "Let me check...",
    mascotSuccess: "Got it!",
    mascotPicker: "Look what I found!",
    mascotOffline: "Is the server sleeping?",
    mascotClipboard: "Can't access clipboard!",
    mascotYoutube: "YouTube is not supported right now. Their bot protection is blocking downloads, but we're working on it. Stay tuned!",
    mascotGreetings: [
      "Welcome!",
      "Hey! What are we downloading today?",
      "Meow! Ready, give me a link.",
      "I was awake, don't worry.",
      "You again? Just kidding, welcome.",
      "Paws ready, let's go!",
      "What are we catching today?",
      "Come on in, I was waiting for you."
    ],
    aboutDesc: "Pawload is an open-source tool that lets you download videos, audio and images from social media platforms. No ads, no tracking, fast.",
    aboutMadeBy: "Made by Kemal Aslıyüksek.",
    footer: "made with <svg class=\"paw-icon\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><ellipse cx=\"8\" cy=\"4.5\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"16\" cy=\"4.5\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"3.5\" cy=\"11\" rx=\"2.5\" ry=\"3\"/><ellipse cx=\"20.5\" cy=\"11\" rx=\"2.5\" ry=\"3\"/><path d=\"M12 22c-4 0-7-2-8-5-.5-1.5 0-3 1.5-4S9 11 12 11s4.5 1 6.5 2 2 2.5 1.5 4c-1 3-4 5-8 5z\"/></svg> by <a href=\"https://github.com/kemalasliyuksek\" target=\"_blank\" rel=\"noopener\">Kemal Aslıyüksek</a>",
  },
};

function t(key) {
  return i18n[lang][key] || i18n.tr[key] || key;
}

// --- State ---

const defaults = {
  downloadMode: "auto",
  videoQuality: "1080",
  videoCodec: "h264",
  audioFormat: "mp3",
  audioBitrate: "128",
  disableMetadata: false,
  filenameStyle: "classic",
  tiktokFullAudio: true,
  twitterGif: true,
};

let settings = loadSettings();
let lang = loadLang();
let fabOpen = false;
let mascotClicks = 0;
let mascotTimer = null;
let speechTimer = null;
let recentLines = [];

// --- Init ---

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  fetchServices();
  loadMascotLines().then(greetUser);
  bindEvents();
  bindAccordion();
  bindMascot();
});

// --- Language ---

function loadLang() {
  return localStorage.getItem("pawload-lang") || "tr";
}

function saveLang() {
  localStorage.setItem("pawload-lang", lang);
}

function toggleLang() {
  lang = lang === "tr" ? "en" : "tr";
  saveLang();
  applyLang();
  fetchServices();
}

function applyLang() {
  document.documentElement.lang = lang;
  document.getElementById("services-label").textContent = t("servicesLabel");
  document.getElementById("url-input").placeholder = t("placeholder");
  document.getElementById("btn-paste").title = t("pasteTitle");
  document.getElementById("btn-download").title = t("downloadTitle");
  document.getElementById("fab-main").title = t("settingsTitle");
  document.getElementById("fab-lang").title = lang === "tr" ? "English" : "Türkçe";
  document.getElementById("preview-title").textContent = t("preview");
  document.getElementById("preview-download-label").textContent = t("previewDownload");
  document.getElementById("footer").innerHTML = t("footer");
  renderAbout();
}

function renderAbout() {
  document.getElementById("about-body").innerHTML = `
    <img class="about-logo" src="/assets/logo.webp" alt="Pawload">
    <div class="about-name">Pawload</div>
    <p class="about-desc">${escapeHTML(t("aboutDesc"))}</p>
    <p class="about-desc">${escapeHTML(t("aboutMadeBy"))}</p>
    <div class="about-links">
      <a class="about-link" href="https://github.com/kemalasliyuksek" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <span class="about-version">v1.0.0</span>
  `;
}

// --- Mascot ---

let mascotLines = { tr: [], en: [] };

async function loadMascotLines() {
  try {
    const res = await fetch("/mascot.json");
    mascotLines = await res.json();
  } catch {
    mascotLines = {
      tr: ["Miyav!", "Ne var?"],
      en: ["Meow!", "What?"],
    };
  }
}

function bindMascot() {
  const wrapper = document.getElementById("mascot-wrapper");
  const mascot = document.getElementById("mascot");
  const bubble = document.getElementById("speech-bubble");

  wrapper.addEventListener("click", () => {
    mascotClicks++;
    clearTimeout(mascotTimer);

    mascot.className = "mascot";
    void mascot.offsetWidth;

    if (mascotClicks === 1) {
      mascot.classList.add("wiggle");
    } else if (mascotClicks === 2) {
      mascot.classList.add("nod");
      showSpeech(bubble);
    } else if (mascotClicks < 7) {
      mascot.classList.add("bounce");
      showSpeech(bubble);
    } else if (mascotClicks === 7) {
      mascot.classList.add("spin");
      showSpeech(bubble);
    } else {
      mascot.classList.add("wiggle");
      showSpeech(bubble);
      mascotClicks = 0;
    }

    mascotTimer = setTimeout(() => {
      mascotClicks = 0;
    }, 3000);
  });
}

function pickRandomLine() {
  const lines = mascotLines[lang] || mascotLines.en;
  if (!lines.length) return "Miyav!";
  const cooldown = lines.length > 40 ? 10 : Math.floor(lines.length / 3);
  const available = lines.filter((l) => !recentLines.includes(l));
  const pool = available.length ? available : lines;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  recentLines.push(pick);
  if (recentLines.length > cooldown) recentLines.shift();
  return pick;
}

function showSpeech(bubble, text, type) {
  clearTimeout(speechTimer);
  bubble.classList.remove("visible", "bubble-error", "bubble-success", "bubble-warning");
  void bubble.offsetWidth;
  if (!text) {
    text = pickRandomLine();
  }
  if (type) bubble.classList.add(`bubble-${type}`);
  bubble.textContent = text;
  bubble.classList.add("visible");
  const duration = text.length > 60 ? 7000 : 4000;
  speechTimer = setTimeout(() => bubble.classList.remove("visible", "bubble-error", "bubble-success", "bubble-warning"), duration);
}

function mascotReact(text, type) {
  const mascot = document.getElementById("mascot");
  const bubble = document.getElementById("speech-bubble");
  mascot.className = "mascot";
  void mascot.offsetWidth;
  mascot.classList.add(type === "error" ? "wiggle" : type === "success" ? "bounce" : "nod");
  showSpeech(bubble, text, type);
}

function greetUser() {
  setTimeout(() => {
    const greetings = i18n[lang].mascotGreetings || [];
    if (!greetings.length) return;
    const text = greetings[Math.floor(Math.random() * greetings.length)];
    const bubble = document.getElementById("speech-bubble");
    const mascot = document.getElementById("mascot");
    mascot.className = "mascot";
    void mascot.offsetWidth;
    mascot.classList.add("bounce");
    showSpeech(bubble, text);
  }, 800);
}

// --- Services ---

async function fetchServices() {
  const container = document.getElementById("services");
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const services = data.cobalt?.services || [];
    container.innerHTML = services
      .map((s) => `<span class="service-badge">${escapeHTML(s)}</span>`)
      .join("");
  } catch {
    container.innerHTML =
      `<span class="service-badge">${escapeHTML(t("servicesFail"))}</span>`;
  }
}

// --- Accordion ---

function bindAccordion() {
  const toggle = document.getElementById("services-toggle");
  const accordion = document.getElementById("services-accordion");
  toggle.addEventListener("click", () => {
    accordion.classList.toggle("open");
  });
}

// --- Events ---

function bindEvents() {
  const input = document.getElementById("url-input");
  const btnDownload = document.getElementById("btn-download");
  const btnPaste = document.getElementById("btn-paste");
  const fabMain = document.getElementById("fab-main");
  const fabContainer = document.getElementById("fab-container");
  const fabLang = document.getElementById("fab-lang");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const previewOverlay = document.getElementById("preview-overlay");
  const previewClose = document.getElementById("preview-close");
  const previewDownloadBtn = document.getElementById("preview-download-btn");

  btnDownload.addEventListener("click", handleDownload);
  btnPaste.addEventListener("click", handlePaste);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleDownload();
  });

  input.addEventListener("input", () => {
    document.querySelector(".input-wrapper").classList.remove("error");

    clearPicker();
  });

  fabMain.addEventListener("click", () => {
    fabOpen = !fabOpen;
    fabContainer.classList.toggle("open", fabOpen);
    fabMain.classList.toggle("active", fabOpen);
  });

  fabLang.addEventListener("click", () => {
    toggleLang();
    closeFab();
  });

  document.querySelectorAll(".fab-option[data-setting]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openSettingsModal(btn.dataset.setting);
      closeFab();
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalClose.addEventListener("click", closeModal);

  previewOverlay.addEventListener("click", (e) => {
    if (e.target === previewOverlay) closePreview();
  });

  previewClose.addEventListener("click", closePreview);

  previewDownloadBtn.addEventListener("click", () => {
    if (previewDownloadBtn.dataset.url) {
      triggerDownload(previewDownloadBtn.dataset.url, previewDownloadBtn.dataset.filename);
      closePreview();
    }
  });

  const aboutOverlay = document.getElementById("about-overlay");
  const aboutClose = document.getElementById("about-close");
  const fabInfo = document.getElementById("fab-info");

  fabInfo.addEventListener("click", () => {
    aboutOverlay.classList.add("visible");
  });

  aboutClose.addEventListener("click", () => {
    aboutOverlay.classList.remove("visible");
  });

  aboutOverlay.addEventListener("click", (e) => {
    if (e.target === aboutOverlay) aboutOverlay.classList.remove("visible");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (aboutOverlay.classList.contains("visible")) aboutOverlay.classList.remove("visible");
      else if (previewOverlay.classList.contains("visible")) closePreview();
      else if (modalOverlay.classList.contains("visible")) closeModal();
      else if (fabOpen) closeFab();
    }
  });

  document.addEventListener("click", (e) => {
    if (fabOpen && !fabContainer.contains(e.target)) {
      closeFab();
    }
  });
}

// --- Download ---

async function handleDownload() {
  const input = document.getElementById("url-input");
  const btn = document.getElementById("btn-download");
  const wrap = document.getElementById("btn-download-wrap");
  const url = input.value.trim();

  if (!url) {
    document.querySelector(".input-wrapper").classList.add("error");
    mascotReact(t("mascotEmpty"), "warning");
    return;
  }

  if (!isValidURL(url)) {
    document.querySelector(".input-wrapper").classList.add("error");
    mascotReact(t("mascotInvalid"), "warning");
    return;
  }

  if (isYouTubeURL(url)) {
    mascotReact(t("mascotYoutube"), "warning");
    return;
  }

  btn.classList.add("loading");
  wrap.classList.add("loading");

  mascotReact(t("mascotProcessing"), "warning");
  clearPicker();

  try {
    const body = { url };

    if (settings.downloadMode !== defaults.downloadMode)
      body.downloadMode = settings.downloadMode;
    if (settings.videoQuality !== defaults.videoQuality)
      body.videoQuality = settings.videoQuality;
    if (settings.videoCodec !== defaults.videoCodec)
      body.videoCodec = settings.videoCodec;
    if (settings.audioFormat !== defaults.audioFormat)
      body.audioFormat = settings.audioFormat;
    if (settings.audioBitrate !== defaults.audioBitrate)
      body.audioBitrate = settings.audioBitrate;
    if (settings.disableMetadata !== defaults.disableMetadata)
      body.disableMetadata = settings.disableMetadata;
    if (settings.filenameStyle !== defaults.filenameStyle)
      body.filenameStyle = settings.filenameStyle;
    if (settings.tiktokFullAudio !== defaults.tiktokFullAudio)
      body.tiktokFullAudio = settings.tiktokFullAudio;
    if (settings.twitterGif !== defaults.twitterGif)
      body.twitterGif = settings.twitterGif;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    switch (data.status) {
      case "redirect":
      case "tunnel":
      case "stream":

        mascotReact(t("mascotSuccess"), "success");
        showPreview(data.url, data.filename, url);
        break;

      case "picker":

        mascotReact(t("mascotPicker"), "success");
        showPicker(data.picker, data.audio);
        break;

      case "error":

        mascotReact(t("mascotError"), "error");
        break;

      default:

        mascotReact(t("mascotError"), "error");
    }
  } catch {

    mascotReact(t("mascotOffline"), "error");
  } finally {
    btn.classList.remove("loading");
    wrap.classList.remove("loading");
  }
}

async function handlePaste() {
  try {
    const text = await navigator.clipboard.readText();
    const input = document.getElementById("url-input");
    input.value = text;
    input.focus();
    document.querySelector(".input-wrapper").classList.remove("error");

    clearPicker();
  } catch {

    mascotReact(t("mascotClipboard"), "error");
  }
}

function triggerDownload(url, filename) {
  if (!isSafeURL(url)) return;
  const a = document.createElement("a");
  a.href = url;
  if (filename) a.download = filename;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// --- Preview ---

function showPreview(downloadUrl, filename, sourceUrl) {
  const content = document.getElementById("preview-content");
  const meta = document.getElementById("preview-meta");
  const btn = document.getElementById("preview-download-btn");
  const overlay = document.getElementById("preview-overlay");

  const ext = getExtension(downloadUrl, filename);
  const type = getMediaType(ext);
  const platform = getPlatform(sourceUrl);

  content.innerHTML = "";
  if (isSafeURL(downloadUrl)) {
    const safeUrl = escapeAttr(downloadUrl);
    if (type === "video") {
      content.innerHTML = `<video src="${safeUrl}" controls playsinline preload="metadata"></video>`;
      const vid = content.querySelector("video");
      vid.addEventListener("error", () => {
        content.innerHTML = `<div class="preview-fallback">${escapeHTML(t("previewNoPreview"))}</div>`;
      });
    } else if (type === "audio") {
      content.innerHTML = `<audio src="${safeUrl}" controls preload="metadata"></audio>`;
      const aud = content.querySelector("audio");
      aud.addEventListener("error", () => {
        content.innerHTML = `<div class="preview-fallback">${escapeHTML(t("previewNoPreview"))}</div>`;
      });
    } else if (type === "image") {
      content.innerHTML = `<img src="${safeUrl}" alt="${t("previewAlt")}">`;
      const img = content.querySelector("img");
      img.addEventListener("error", () => {
        content.innerHTML = `<div class="preview-fallback">${escapeHTML(t("previewNoPreview"))}</div>`;
      });
    }
  }

  const rows = [];
  if (platform) rows.push(metaRow(t("metaPlatform"), escapeHTML(platform)));
  if (filename) rows.push(metaRow(t("metaFile"), escapeHTML(truncate(filename, 40))));
  if (ext) rows.push(metaRow(t("metaFormat"), escapeHTML(ext.toUpperCase())));
  rows.push(metaRow(t("metaMode"), getModeLabel()));
  if (settings.downloadMode !== "audio" && settings.videoQuality)
    rows.push(metaRow(t("metaQuality"), settings.videoQuality === "max" ? "Max" : settings.videoQuality + "p"));

  meta.innerHTML = rows.join("");

  btn.dataset.url = downloadUrl;
  btn.dataset.filename = filename || "";

  overlay.classList.add("visible");
}

function closePreview() {
  const overlay = document.getElementById("preview-overlay");
  overlay.classList.remove("visible");
  const video = overlay.querySelector("video");
  if (video) video.pause();
  const audio = overlay.querySelector("audio");
  if (audio) audio.pause();
}

function getExtension(url, filename) {
  const name = filename || url.split("?")[0];
  const match = name.match(/\.([a-z0-9]{2,5})$/i);
  return match ? match[1].toLowerCase() : "";
}

function getMediaType(ext) {
  if (["mp4", "webm", "mov", "avi", "mkv"].includes(ext)) return "video";
  if (["mp3", "ogg", "wav", "opus", "m4a", "flac"].includes(ext)) return "audio";
  if (["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(ext)) return "image";
  return "video";
}

function getPlatform(url) {
  try {
    const host = new URL(url).hostname.replace("www.", "");
    const map = {
      "twitter.com": "Twitter / X",
      "x.com": "Twitter / X",
      "instagram.com": "Instagram",
      "tiktok.com": "TikTok",
      "youtube.com": "YouTube",
      "youtu.be": "YouTube",
      "reddit.com": "Reddit",
      "soundcloud.com": "SoundCloud",
      "facebook.com": "Facebook",
      "vimeo.com": "Vimeo",
      "twitch.tv": "Twitch",
      "pinterest.com": "Pinterest",
      "tumblr.com": "Tumblr",
      "bilibili.com": "Bilibili",
      "dailymotion.com": "Dailymotion",
      "snapchat.com": "Snapchat",
      "bsky.app": "Bluesky",
      "loom.com": "Loom",
      "ok.ru": "OK",
      "rutube.ru": "Rutube",
      "vk.com": "VK",
      "streamable.com": "Streamable",
      "newgrounds.com": "Newgrounds",
      "xiaohongshu.com": "Xiaohongshu",
    };
    for (const [domain, name] of Object.entries(map)) {
      if (host.includes(domain)) return name;
    }
    return host;
  } catch {
    return "";
  }
}

function getModeLabel() {
  const labels = { auto: t("modeAuto"), audio: t("modeAudio"), mute: t("modeMute") };
  return labels[settings.downloadMode] || t("modeAuto");
}

function metaRow(label, value) {
  return `<div class="preview-meta-row"><span class="preview-meta-label">${label}</span><span class="preview-meta-value">${value}</span></div>`;
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + "..." : str;
}

// --- Picker ---

function showPicker(items, audioUrl) {
  const grid = document.getElementById("picker-grid");

  const itemsHtml = items
    .filter((item) => isSafeURL(item.url))
    .map(
      (item, i) => `
    <div class="picker-item" data-url="${escapeAttr(item.url)}" data-type="${escapeAttr(item.type)}" title="${escapeAttr(item.type)} #${i + 1}">
      ${item.thumb && isSafeURL(item.thumb) ? `<img src="${escapeAttr(item.thumb)}" alt="" loading="lazy">` : ""}
      <span class="picker-type">${escapeHTML(item.type)}</span>
    </div>
  `
    )
    .join("");

  const audioBtn = audioUrl && isSafeURL(audioUrl)
    ? `<button class="picker-download-all" data-audio-url="${escapeAttr(audioUrl)}">${escapeHTML(t("pickerAudio"))}</button>`
    : "";

  grid.innerHTML = itemsHtml + audioBtn;
  requestAnimationFrame(() => grid.classList.add("visible"));

  grid.querySelectorAll(".picker-item").forEach((el) => {
    el.addEventListener("click", () => {
      triggerDownload(el.dataset.url);
    });
  });

  const audioBtn2 = grid.querySelector(".picker-download-all");
  if (audioBtn2) {
    audioBtn2.addEventListener("click", () => {
      triggerDownload(audioBtn2.dataset.audioUrl);
    });
  }
}

function clearPicker() {
  const grid = document.getElementById("picker-grid");
  grid.classList.remove("visible");
  grid.innerHTML = "";
}

// --- Settings Modal ---

function openSettingsModal(type) {
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  const configs = {
    video: {
      title: "Video",
      groups: [
        {
          key: "downloadMode",
          label: t("settingDownloadMode"),
          type: "chips",
          options: [
            { value: "auto", label: t("modeAuto") },
            { value: "audio", label: t("modeAudio") },
            { value: "mute", label: t("modeMute") },
          ],
        },
        {
          key: "videoQuality",
          label: t("settingQuality"),
          type: "chips",
          options: [
            { value: "max", label: "max" },
            { value: "2160", label: "4k" },
            { value: "1440", label: "1440p" },
            { value: "1080", label: "1080p" },
            { value: "720", label: "720p" },
            { value: "480", label: "480p" },
            { value: "360", label: "360p" },
            { value: "240", label: "240p" },
            { value: "144", label: "144p" },
          ],
        },
        {
          key: "videoCodec",
          label: t("settingCodec"),
          type: "chips",
          options: [
            { value: "h264", label: "h264" },
            { value: "av1", label: "av1" },
            { value: "vp9", label: "vp9" },
          ],
        },
      ],
    },
    audio: {
      title: lang === "tr" ? "Ses" : "Audio",
      groups: [
        {
          key: "audioFormat",
          label: t("settingFormat"),
          type: "chips",
          options: [
            { value: "best", label: "best" },
            { value: "mp3", label: "mp3" },
            { value: "ogg", label: "ogg" },
            { value: "wav", label: "wav" },
            { value: "opus", label: "opus" },
          ],
        },
        {
          key: "audioBitrate",
          label: t("settingBitrate"),
          type: "chips",
          options: [
            { value: "320", label: "320kbps" },
            { value: "256", label: "256kbps" },
            { value: "128", label: "128kbps" },
            { value: "96", label: "96kbps" },
            { value: "64", label: "64kbps" },
          ],
        },
      ],
    },
    metadata: {
      title: "Metadata",
      groups: [
        {
          key: "disableMetadata",
          label: t("settingMetadataToggle"),
          type: "toggle",
        },
        {
          key: "filenameStyle",
          label: t("settingFilenameStyle"),
          type: "chips",
          options: [
            { value: "classic", label: "classic" },
            { value: "pretty", label: "pretty" },
            { value: "basic", label: "basic" },
            { value: "nerdy", label: "nerdy" },
          ],
        },
      ],
    },
  };

  const config = configs[type];
  title.textContent = config.title;
  body.innerHTML = config.groups.map((g) => renderSettingGroup(g)).join("");

  bindSettingEvents(body);

  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("visible");
}

function renderSettingGroup(group) {
  if (group.type === "toggle") {
    const active = settings[group.key] ? "active" : "";
    return `
      <div class="setting-toggle">
        <span class="setting-toggle-label">${group.label}</span>
        <div class="toggle ${active}" data-key="${group.key}"></div>
      </div>
    `;
  }

  const chips = group.options
    .map((opt) => {
      const active = settings[group.key] === opt.value ? "active" : "";
      return `<button class="setting-chip ${active}" data-key="${group.key}" data-value="${opt.value}">${opt.label}</button>`;
    })
    .join("");

  return `
    <div class="setting-group">
      <span class="setting-label">${group.label}</span>
      <div class="setting-options">${chips}</div>
    </div>
  `;
}

function bindSettingEvents(container) {
  container.querySelectorAll(".setting-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.key;
      const value = chip.dataset.value;
      settings[key] = value;
      saveSettings();

      container
        .querySelectorAll(`.setting-chip[data-key="${key}"]`)
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  container.querySelectorAll(".toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const key = toggle.dataset.key;
      settings[key] = !settings[key];
      saveSettings();
      toggle.classList.toggle("active", settings[key]);
    });
  });
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
}

// --- FAB ---

function closeFab() {
  fabOpen = false;
  document.getElementById("fab-container").classList.remove("open");
  document.getElementById("fab-main").classList.remove("active");
}

// --- Helpers ---

function isValidURL(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isYouTubeURL(str) {
  try {
    const host = new URL(str).hostname.replace("www.", "");
    return host === "youtube.com" || host === "youtu.be" || host === "m.youtube.com" || host === "music.youtube.com";
  } catch {
    return false;
  }
}

function isSafeURL(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatError(error) {
  const code = error?.code || "";
  return i18n[lang].errors[code] || code || t("errorFallback");
}

function loadSettings() {
  try {
    const saved = localStorage.getItem("pawload-settings");
    return saved ? { ...defaults, ...JSON.parse(saved) } : { ...defaults };
  } catch {
    return { ...defaults };
  }
}

function saveSettings() {
  localStorage.setItem("pawload-settings", JSON.stringify(settings));
}
