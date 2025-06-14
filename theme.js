class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme();
    this.init();
  }

  getStoredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  init() {
    this.applyTheme(this.theme);
    this.setupToggleListeners();
    this.setupSystemThemeListener();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    this.theme = theme;
  }

  toggleTheme() {
    const newTheme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  setupToggleListeners() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".theme-toggle")) {
        this.toggleTheme();
      }
    });
  }

  setupSystemThemeListener() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  setTheme(theme) {
    this.applyTheme(theme);
    localStorage.setItem("theme", theme);
  }

  getTheme() {
    return this.theme;
  }
}

// テーマ設定
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// 初期化
const savedTheme = localStorage.getItem("theme") || "system";
setTheme(savedTheme);

const themeManager = new ThemeManager();

if (typeof module !== "undefined" && module.exports) {
  module.exports = ThemeManager;
}
