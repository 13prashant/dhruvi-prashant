export const checkDevice = () => {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    return "iOs";
  } else if (/android|Android/i.test(navigator.userAgent)) {
    return "android";
  } else {
    return "other";
  }
};
