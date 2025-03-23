module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      big: { max: '1450px' },

      xl: { max: '1280px' },

      lg: { max: '1024px' },

      md: { max: '768px' },

      sm: { max: '640px' }
    }
  },
  plugins: []
};
