import { Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Archive from './pages/Fun';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Bespoke from './pages/BespokeApp';
import Gemlato from './pages/Gemlato';
import CNT from './pages/CNT';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/fun" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/gemlato" element={<Gemlato />} />
        <Route path="/cnt" element={<CNT />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
