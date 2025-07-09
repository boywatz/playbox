import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const features = [
    { id: "pos-app", name: "POS - App", icon: "🛒", path: "/pos-app" },
  ];

  // Handle ESC key to close sidebar
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, toggleSidebar]);

  const handleLinkClick = () => {
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay for click-outside functionality */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
          title="Click to close sidebar (or press ESC)"
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="sidebar-header">
          <h2>🎨 Playbox</h2>
          <button
            className="close-btn"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={handleLinkClick}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            {features.map((feature) => (
              <li key={feature.id}>
                <Link
                  to={feature.path}
                  className={`nav-item ${
                    location.pathname === feature.path ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="nav-icon">{feature.icon}</span>
                  <span className="nav-text">{feature.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <p>Virtual Dev Space</p>
          <p className="version">v1.0.0</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
