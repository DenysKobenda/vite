export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        montserrat: ['Montserrat Variable', 'sans-serif'],
      },
    extend: {
      colors: {
        mainColor:'#311B92',
        regButton:'#D1C4E9',
        regButtonText: '#651FFF',
        sidebarButtonBg: '#0F092D'
      },
      screens: {
        s: '800px',
        m: '1024px',
        l: '1440px'
      }
    },
  },
  plugins: [],
}