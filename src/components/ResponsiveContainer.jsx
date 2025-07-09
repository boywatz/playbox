import "./ResponsiveContainer.css";

const ResponsiveContainer = ({
  children,
  className = "",
  deviceType = "desktop", // mobile, tablet, tablet-landscape, desktop
}) => {
  return (
    <div
      className={`responsive-container ${deviceType} ${className}`}
      data-device={deviceType}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
