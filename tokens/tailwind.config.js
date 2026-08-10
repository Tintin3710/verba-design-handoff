/** Verba — Tailwind theme extension (drop into tailwind.config.js `theme.extend`) */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6B58EC",
          pressed: "#5847D8",
          pale: "#F1EFFD",
          border: "#E2DDFB",
        },
        acc: {
          purple: "#6B58EC", "purple-bg": "#F1EFFD",
          teal: "#3FB3A6",   "teal-bg": "#DDF2EE",
          coral: "#E0795A",  "coral-bg": "#FBE7E1",
        },
        page: "#F3F3F5",
        canvas: "#FFFFFF",
        surface: { DEFAULT: "#FFFFFF", soft: "#FAFAFB" },
        ink: "#28283C",
        body: "#62626F",
        mute: "#9A9AA6",
        line: { DEFAULT: "#E6E6EB", subtle: "#EDEDF1" },
        ok: "#12A150", warn: "#C77700", danger: "#DC2626",
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
