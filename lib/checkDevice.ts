import { Device } from "../types";

export const checkDevice = () => {
  if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    return Device.iOs;
  } else if (/Android/i.test(navigator.userAgent)) {
    return Device.android;
  } else {
    return Device.other;
  }
};
