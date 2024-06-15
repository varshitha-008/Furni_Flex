// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chairs from './components/categories/Chairs';
import Curtains from './components/categories/Curtains';
import Sofas from './components/categories/Sofas';
import Tables from './components/categories/Tables';
import Wardrobes from './components/categories/Wardrobes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/curtains" element={<Curtains />} />
        <Route path="/sofas" element={<Sofas />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="*" element={<Chairs />} /> {/* Redirect to Chairs component or a NotFound component */}
      </Routes>
    </Router>
  );
}

export default App;

















// import Chairs from './components/categories/Chairs.jsx';
// import Curtains from './components/categories/Curtains.jsx';
// import Sofas from './components/categories/Sofas.jsx';
// import Tables from './components/categories/Tables.jsx';
// import Wardrobes from './components/categories/Wardrobes.jsx';

// const App = () => {
//   return (
//     <div>
//       {/* <Chairs /> */}
//       {/* <Curtains/> */}
//       {/* <Sofas/> */}
//       {/* <Tables/> */}
//       <Wardrobes/>


//     </div>
//   );
// };

// export default App;
