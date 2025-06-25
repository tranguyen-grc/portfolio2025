import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import Archive from "./pages/Archive";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BespokeApp from "./pages/BespokeApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/bespoke" element={<BespokeApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
