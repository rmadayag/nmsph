const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.svg')",
        'banner': "url('/inner-banner.png')",
        'service': "url('/illustration.svg')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#FF4545',
        'secondary': '#F9F9F9',
        'accent': '#2E2E2E',
        'bgcolor': '#FFFFFF',
      },
      fontFamily: {
        'Poppins': 'Poppins',
      },
      fontSize: {
        'display': '47px',
        'displaymobile': '25px',
        'h2': '32px',
        'h3': '20px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
      },
      borderRadius: {
        '15px': '15px',
        '30px': '30px',
        'full': '9999px',
      },
      // Button
      width: {
        'sm-button': '132px',
        'lg-button': '220px',
      },
      height: {
        'sm-button': '36px',
        'lg-button': '56px',
        '834': '834px',
        '226': '226px',


      },
      // Button

      boxShadow: {
        'shadow': '0px 9px 18px -4px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '40px',
      },
      padding: {
        '70': '70px',
        '40': '40px',
        '20': '20px',
        '15': '15px',
        '10': '10px',

      },
      margin: {
        '100px': '100px',
        '16px': '16px',
        '70': '70px',
        '40': '40px',
        '20': '20px',
        '15': '15px',
        '10': '10px',
      },

    },
  },
  plugins: [],
});