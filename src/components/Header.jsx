import { useLocation } from "react-router-dom";
import ActivityTracker from "./ActivityTracker";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const location = useLocation();

  const getPageName = (pathname) => {
    const routes = {
      "/": "Home",
    };
    return routes[pathname] || "Home";
  };

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="hamburger-btn"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>{getPageName(location.pathname)}</h1>
      </div>

      <div className="header-right">
        <ActivityTracker />
        <span className="status-badge">Dev Mode</span>
      </div>
    </header>
  );
};

export default Header;
