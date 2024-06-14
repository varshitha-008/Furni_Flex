// // src/App.js
// import React from 'react';
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import Chairs from './components/Chairs';
// import store from './store';
// import { Provider } from 'react-redux';

// const theme = extendTheme({
//   // Your custom Chakra theme configurations
// });

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ChakraProvider theme={theme}>
//         <Chairs />
//       </ChakraProvider>
//     </Provider>
//   );
// };

// export default App;

//  import React from 'react';
// import Home from './components/Home';

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;

