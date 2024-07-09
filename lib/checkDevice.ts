import { Device } from "../components/SaveToCalendarButton";

export const checkDevice = () => {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    return Device.iOs;
  } else if (/android|Android/i.test(navigator.userAgent)) {
    return Device.android;
  } else {
    return Device.other;
  }
};
