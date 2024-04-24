import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryServe from "./pages/CountryServe";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-[-280px]" }`} >
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/countryServe" element={<CountryServe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
