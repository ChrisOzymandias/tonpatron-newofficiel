module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Lora", "Poppins", "ui-serif", "serif"],
      },
      colors: {
        premium: {
          gold: "#FFD700",
          blue: {
            light: "#e3f0ff",
            DEFAULT: "#2563eb",
            dark: "#1e40af",
            deep: "#0a1931"
          },
          purple: {
            light: "#f3e8ff",
            DEFAULT: "#a21caf",
            dark: "#6d28d9"
          },
          gray: {
            light: "#f8fafc",
            DEFAULT: "#64748b",
            dark: "#1e293b"
          }
        }
      },
      boxShadow: {
        premium: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
        glass: "0 4px 24px 0 rgba(80, 80, 180, 0.12)",
        card: "0 4px 24px 0 rgba(0,0,0,0.08)"
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #2563eb 0%, #a21caf 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(230,240,255,0.4) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(.39,.575,.565,1.000)',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
