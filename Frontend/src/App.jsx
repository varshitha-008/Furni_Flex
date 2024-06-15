import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chairs from './components/Chairs';
import Cart from './components/Cart';
import Payment from './components/Payment'; // Import the Payment component
import Homepage from './components/Homepage'; // Import the Homepage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;


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
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Category from './components/Category';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/category/:categoryId" element={<Category />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

