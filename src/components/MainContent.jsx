import { Outlet } from "react-router-dom";
import "./MainContent.css";

const MainContent = ({ sidebarOpen }) => {
  return (
    <main className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
