/** Verba — Tailwind theme extension (drop into tailwind.config.js `theme.extend`) */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F2EEFF", 100: "#E6E0FF", 200: "#CFC2FF", 300: "#AE97FF", 400: "#8763FF",
          500: "#5F3EFF", 600: "#4F2BEA", 700: "#3D1FC4", 800: "#2C1690", 900: "#1F0F66",
          DEFAULT: "#5F3EFF",
          pressed: "#4F2BEA",
          pale: "#F2EEFF",
          border: "#DCD2FF",
        },
        acc: {
          purple: "#5F3EFF", "purple-bg": "#F2EEFF",
          teal: "#3FB3A6",   "teal-bg": "#DDF2EE",
          coral: "#E0795A",  "coral-bg": "#FBE7E1",
        },
        page: "#F4F4F6",
        canvas: "#FFFFFF",
        surface: { DEFAULT: "#FFFFFF", soft: "#F8F8FA" },
        ink: "#17171B",
        body: "#4B4B57",
        mute: "#6E6E7A",
        line: { DEFAULT: "#E5E5EA", subtle: "#EDEDF1" },
        ok: "#15803D", warn: "#B45309", danger: "#DC2626",
      },
      borderRadius: {
        input: "9px", btn: "10px", card: "16px", pill: "9999px",
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      boxShadow: {
        card: "0 18px 44px -30px rgba(30,27,75,0.08)",
      },
    },
  },
};
