/**
 * EvEvDigital Dual Theme Engine (Dark & Light Mode) — Anti-FOUC & Accessible
 */
(function () {
  var STORAGE_KEY = "evev_theme";
  var root = document.documentElement;

  function getPreferredTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (e) {
      // Ignore storage errors (private mode / sandbox)
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function applyTheme(theme, persist) {
    var safeTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", safeTheme);
    root.style.colorScheme = safeTheme;

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, safeTheme);
      } catch (e) {
        // Ignore storage errors
      }
    }

    var buttons = document.querySelectorAll("#theme-toggle, [data-theme-toggle]");
    buttons.forEach(function (btn) {
      var isDark = safeTheme === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("aria-label", isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap");
      btn.setAttribute("title", isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap");

      var icon = btn.querySelector("i");
      if (icon) {
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
      }
    });
  }

  // Terapkan segera sebelum DOM selesai (lapisan pengaman tambahan Anti-FOUC)
  applyTheme(root.getAttribute("data-theme") || getPreferredTheme(), false);

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(root.getAttribute("data-theme") || getPreferredTheme(), false);

    // Lepas kunci transisi setelah frame pertama agar switch halus tanpa flash
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theme-preload");
      });
    });

    var buttons = document.querySelectorAll("#theme-toggle, [data-theme-toggle]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        applyTheme(next, true);
      });
    });

    // Sinkronisasi antar tab browser
    window.addEventListener("storage", function (e) {
      if (e.key === STORAGE_KEY && (e.newValue === "dark" || e.newValue === "light")) {
        applyTheme(e.newValue, false);
      }
    });
  });

  window.EVEV_THEME = {
    get: function () {
      return root.getAttribute("data-theme") || "light";
    },
    set: function (mode) {
      applyTheme(mode, true);
    },
    toggle: function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next, true);
      return next;
    }
  };
})();
