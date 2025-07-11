import { create } from "zustand";

const useTrackActivity = create((set, get) => ({
  // State
  isTracking: false,
  trackingStartTime: null,
  trackingEndTime: null,
  currentActivity: null,
  activities: [],
  totalDuration: 0,

  // เริ่มต้นการ track
  startTracking: () => {
    const now = Date.now();
    set({
      isTracking: true,
      trackingStartTime: now,
      trackingEndTime: null,
      activities: [],
      totalDuration: 0,
      currentActivity: null,
    });
  },

  // สิ้นสุดการ track
  stopTracking: () => {
    const state = get();
    const now = Date.now();

    // หาก current activity ยังไม่ได้ complete ให้ complete ก่อน
    if (state.currentActivity) {
      get().completeCurrentActivity();
    }

    const totalDuration = state.trackingStartTime
      ? now - state.trackingStartTime
      : 0;

    set({
      isTracking: false,
      trackingEndTime: now,
      totalDuration,
      currentActivity: null,
    });
  },

  // เพิ่ม activity ใหม่เข้ามา track
  addActivity: (name, metadata = {}) => {
    const state = get();
    const now = Date.now();

    // หาก current activity มีอยู่แล้ว ให้ complete ก่อน
    if (state.currentActivity) {
      get().completeCurrentActivity();
    }

    const newActivity = {
      id: `activity_${now}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      startTime: now,
      endTime: null,
      duration: 0,
      metadata: { ...metadata },
      status: "active",
    };

    set({
      currentActivity: newActivity,
    });
  },

  // อัปเดต metadata ของ current activity
  updateActivityMetadata: (metadata) => {
    const state = get();
    if (!state.currentActivity) return;

    set({
      currentActivity: {
        ...state.currentActivity,
        metadata: {
          ...state.currentActivity.metadata,
          ...metadata,
        },
      },
    });
  },

  // complete current activity
  completeCurrentActivity: (finalMetadata = {}) => {
    const state = get();
    if (!state.currentActivity) return;

    const now = Date.now();
    const completedActivity = {
      ...state.currentActivity,
      endTime: now,
      duration: now - state.currentActivity.startTime,
      metadata: {
        ...state.currentActivity.metadata,
        ...finalMetadata,
      },
      status: "completed",
    };

    set({
      activities: [...state.activities, completedActivity],
      currentActivity: null,
    });
  },

  // Reset ทุกอย่าง
  resetTracking: () => {
    set({
      isTracking: false,
      trackingStartTime: null,
      trackingEndTime: null,
      currentActivity: null,
      activities: [],
      totalDuration: 0,
    });
  },

  // Reset เฉพาะเวลา (เก็บ activities ไว้)
  resetTime: () => {
    set({
      trackingStartTime: null,
      trackingEndTime: null,
      totalDuration: 0,
    });
  },

  // Reset เฉพาะ activities (เก็บ tracking time ไว้)
  resetActivities: () => {
    set({
      activities: [],
      currentActivity: null,
    });
  },

  // Complete tracking และสรุปผลรวม
  completeTracking: () => {
    const state = get();

    // Complete current activity หากมี
    if (state.currentActivity) {
      get().completeCurrentActivity();
    }

    // Stop tracking
    get().stopTracking();

    const finalState = get();

    // สรุปผลลัพธ์
    const summary = {
      totalTrackingDuration: finalState.totalDuration,
      trackingStartTime: finalState.trackingStartTime,
      trackingEndTime: finalState.trackingEndTime,
      totalActivities: finalState.activities.length,
      activities: finalState.activities.map((activity) => ({
        id: activity.id,
        name: activity.name,
        duration: activity.duration,
        startTime: activity.startTime,
        endTime: activity.endTime,
        metadata: activity.metadata,
        status: activity.status,
      })),
      activitiesDurationSum: finalState.activities.reduce(
        (sum, activity) => sum + activity.duration,
        0
      ),
    };

    return summary;
  },

  // Helper functions เพื่อดึงข้อมูลต่างๆ
  getCurrentActivityDuration: () => {
    const state = get();
    if (!state.currentActivity) return 0;
    return Date.now() - state.currentActivity.startTime;
  },

  getTotalActivitiesDuration: () => {
    const state = get();
    const completedDuration = state.activities.reduce(
      (sum, activity) => sum + activity.duration,
      0
    );
    const currentDuration = state.currentActivity
      ? get().getCurrentActivityDuration()
      : 0;
    return completedDuration + currentDuration;
  },

  getActivitiesByStatus: (status) => {
    const state = get();
    return state.activities.filter((activity) => activity.status === status);
  },

  getActivityById: (id) => {
    const state = get();
    return (
      state.activities.find((activity) => activity.id === id) ||
      (state.currentActivity?.id === id ? state.currentActivity : null)
    );
  },

  // Format duration เป็น readable format
  formatDuration: (duration) => {
    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  },
}));

export default useTrackActivity;
