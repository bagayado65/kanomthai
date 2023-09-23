import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import BulletinBoard from "./pages/BulletinBoard";
import PostBoard from "./pages/PostBoard";
import About from "./pages/About";
import Registers from "./pages/Registers";
import RegistersTrue from "./pages/Registers_true";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import ABC from "./pages/tested";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="bulletin_board" element={<BulletinBoard />} />
          <Route path="post_board" element={<PostBoard />} />
          <Route path="about" element={<About />} />
          <Route path="registers" element={<Registers />} />
          <Route path="registers/registers_true" element={<RegistersTrue />} />
          <Route path="tests" element={<ABC />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
