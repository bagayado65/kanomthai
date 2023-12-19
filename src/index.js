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
import Profile from "./pages/Profile";
import BlogNews from "./pages/BlogNews";
import BlogNews2 from "./pages/BlogNews2";
import BlogNews3 from "./pages/BlogNews3";
import BlogNews4 from "./pages/BlogNews4";
import BlogNews5 from "./pages/BlogNews5";
import BlogNews6 from "./pages/BlogNews6";
import AdminPage from "./pages/AdminPage";
import UserProblem from "./pages/UserProblem";
import ABC from "./pages/tested";
import { AuthProvider } from './components/Auth-context';

export default function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="bulletin_board" element={<BulletinBoard />} />
          <Route path="post_board" element={<PostBoard />} />
          <Route path="about" element={<About />} />
          <Route path="registers" element={<Registers />} />
          <Route path="registers/registers_true" element={<RegistersTrue />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blognews" element={<BlogNews/>} />
          <Route path="blognews2" element={<BlogNews2/>} />
          <Route path="blognews3" element={<BlogNews3/>} />
          <Route path="blognews4" element={<BlogNews4/>} />
          <Route path="blognews5" element={<BlogNews5/>} />
          <Route path="blognews6" element={<BlogNews6/>} />
          <Route path="blognews6" element={<BlogNews6/>} />
          <Route path="abc" element={<ABC/>} />
          <Route path="userproblem" element={<UserProblem/>} />
          <Route path="adminpage" element={<AdminPage/>} />
          <Route path="*" element={<NoPage />} />
         
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
