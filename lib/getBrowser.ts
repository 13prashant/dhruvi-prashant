import Bowser from "bowser";

export const getBrowser = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  return browser.getBrowserName();
};
