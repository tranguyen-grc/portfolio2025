import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Archive from './pages/Fun';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BespokeApp from './pages/BespokeApp';
// import Sli from './pages/Sli';
import Cchtf from './pages/Cchtf';
import ScrollToTop from './components/ScrollToTop';
import Bespoke from './pages/BespokeApp';
import Sli from './pages/Sli2026';
// import Cchtf from './pages/Cchtf2026';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/fun" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/sli" element={<Sli />} />
        <Route path="/cchtf" element={<Cchtf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
