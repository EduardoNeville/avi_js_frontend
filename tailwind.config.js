/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg_col : '#000000',
      txt_col : '#cecbdc',
      primary_col : '#ffffff',
      secondary_col : '#3dff87',
    },
    fontSize: {
      /** Market typescale: Augmented Fourth **/
      mkt_p : '1rem',
      mkt_h5 : '2rem',
      mkt_h3 : '4rem',
      mkt_h1 : '8rem',
      /** Product typescale: Major Third **/
      prod_p : '1rem',
      prod_h5: '1.56rem',
      prod_h3: '2.44rem',
      prod_h1: '3.81rem',
    },
    extend: {},
  },
  plugins: [],
}
