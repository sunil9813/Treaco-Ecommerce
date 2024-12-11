# Install following packages

0. Create project with vite
   // optional if not installed type it otherwise skip
   npm create vite@latest

   npm create vite@latest YOUR_FOLDER_NAME -- --template  
   cd YOUR_FOLDER_NAME

   npm install
   npm run dev

   Website Link => https://vite.dev/guide/

1. Redux toolkit
   npm install @reduxjs/toolkit
   npm install react-redux
   Website Link => https://redux-toolkit.js.org/introduction/getting-started

2. Icons
   npm install react-icons --save
   Website Link => https://react-icons.github.io/react-icons/

3. Slider
   npm install react-slick --save
   npm install slick-carousel --save

   // Also add this in slider import file to make custome slider or change
   import "slick-carousel/slick/slick.css";
   import "slick-carousel/slick/slick-theme.css";
   Website Link => https://react-slick.neostack.com/docs/get-started

4. Stripe for payments
   npm i react-stripe-checkout
   Website Link => https://www.npmjs.com/package/react-stripe-checkout

5. Router
   npm i react-router-dom
   Website Link => https://reactrouter.com/

If any error is encountered please check package version and try again
"@reduxjs/toolkit": "^2.4.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-icons": "^5.3.0",
"react-redux": "^9.1.2",
"react-router-dom": "^7.0.1",
"react-slick": "^0.30.2",
"react-stripe-checkout": "^2.6.3",
"sass": "^1.81.0",
"slick-carousel": "^1.8.1"
