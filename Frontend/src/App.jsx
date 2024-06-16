// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Chairs from './components/Chairs';
// import Cart from './components/Cart';
// import Payment from './components/Payment'; 
// import Homepage from './components/Homepage'; 

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/chairs" element={<Chairs />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Chairs from './components/Chairs';
// import Cart from './components/Cart';
// import Payment from './components/Payment'; 
// import Homepage from './components/Homepage'; 

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/chairs" element={<Chairs />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chairs from './components/Chairs';
import Cart from './components/Cart';
import Payment from './components/Payment'; 
import Homepage from './components/Homepage'; 
import Sofas from './components/Sofas'; // Import the Sofas component
import Tables from './components/Tables';
import Wardrobes from './components/Wardrobes';
import Curtains from './components/Curtains';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sofas" element={<Sofas />} /> {/* Add the Sofas route */}
        <Route path="/tables" element={<Tables />} /> 
        <Route path="/curtains" element={<Curtains/>} /> 
         <Route path="/wardrobes" element={<Wardrobes />} /> 
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

