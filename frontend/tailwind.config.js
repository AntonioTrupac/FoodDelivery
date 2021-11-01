module.exports = {
   mode: 'jit',
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         screens: {
            '3xl': { max: '1920px' },
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
