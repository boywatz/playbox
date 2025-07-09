import { useState } from "react";
import "./DevicePreview.css";

const DevicePreview = ({ children, className = "" }) => {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const devices = {
    mobile: {
      name: "Mobile",
      width: "375px",
      height: "667px",
      icon: "📱",
    },
    tablet: {
      name: "Tablet",
      width: "768px",
      height: "1024px",
      icon: "📱",
    },
    "tablet-landscape": {
      name: "Tablet Landscape",
      width: "1024px",
      height: "768px",
      icon: "📱",
    },
    desktop: {
      name: "Desktop",
      width: "100%",
      height: "800px",
      icon: "🖥️",
    },
  };

  return (
    <div className={`device-preview-wrapper ${className}`}>
      {/* Device selector */}
      <div className="device-selector">
        {Object.entries(devices).map(([key, device]) => (
          <button
            key={key}
            onClick={() => setSelectedDevice(key)}
            className={`device-btn ${selectedDevice === key ? "active" : ""}`}
          >
            <span className="device-icon">{device.icon}</span>
            <span className="device-name">{device.name}</span>
          </button>
        ))}
      </div>

      {/* Device frame */}
      <div className="device-frame">
        <div
          className={`device-container ${selectedDevice}`}
          style={{
            width: devices[selectedDevice].width,
            height: devices[selectedDevice].height,
            maxWidth: "100%",
          }}
        >
          <div className="device-screen">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DevicePreview;
