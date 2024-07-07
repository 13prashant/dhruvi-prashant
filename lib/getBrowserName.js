import Bowser from "bowser";

export const getBrowserName = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  return browser.getBrowserName();
};
