import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import HomePage from "./pages/HomePage";
import POSApp from "./pages/POSApp/POSApp";
import SalePlanOrder from "./pages/SalePlanOrder/SalePlanOrder";
import ResponsivePage from "./pages/ResponsivePage";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <Header toggleSidebar={toggleSidebar} />

        <Routes>
          <Route path="/" element={<MainContent sidebarOpen={sidebarOpen} />}>
            <Route index element={<HomePage />} />
            <Route path="sale-plan-order" element={<SalePlanOrder />} />
            <Route path="pos-app" element={<POSApp />} />
            <Route path="responsive" element={<ResponsivePage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
