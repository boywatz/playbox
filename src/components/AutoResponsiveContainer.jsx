import { useState, useEffect } from "react";
import ResponsiveContainer from "./ResponsiveContainer";

const AutoResponsiveContainer = ({ children, className = "" }) => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Set initial device type
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContainer deviceType={deviceType} className={className}>
      {children}
    </ResponsiveContainer>
  );
};

export default AutoResponsiveContainer;
