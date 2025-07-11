import { useState, useEffect } from "react";
import useTrackActivity from "../store/useTrackActivity";
import "./ActivityTracker.css";

const ActivityTracker = () => {
  const { isTracking, startTracking, completeTracking, trackingStartTime } =
    useTrackActivity();

  const [currentDuration, setCurrentDuration] = useState(0);

  // Function to format duration as hh:mm:ss
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;

    if (isTracking && trackingStartTime) {
      // เริ่ม interval ทันทีแล้วอัปเดตทุกวินาที
      const updateDuration = () => {
        const now = Date.now();
        const elapsed = now - trackingStartTime;
        setCurrentDuration(elapsed);
      };

      // อัปเดตทันที
      updateDuration();

      // ตั้ง interval สำหรับอัปเดตทุกวินาที
      interval = setInterval(updateDuration, 1000);
    } else {
      setCurrentDuration(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTracking, trackingStartTime]);

  const handleStart = () => {
    startTracking();
    setCurrentDuration(0);
  };

  const handleComplete = () => {
    const summary = completeTracking();
    console.log("Activity Summary:", summary);
    setCurrentDuration(0);
  };

  return (
    <div className="activity-tracker">
      <div className="tracker-content">
        <div className="timer-display">{formatTime(currentDuration)}</div>

        <div className="tracker-controls">
          {!isTracking ? (
            <button className="btn btn-start" onClick={handleStart}>
              Start
            </button>
          ) : (
            <button className="btn btn-complete" onClick={handleComplete}>
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
