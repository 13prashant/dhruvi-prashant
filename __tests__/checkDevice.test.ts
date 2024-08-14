import { checkDevice } from "../lib/checkDevice";
import { Device } from "../types";

describe("checkDevice", () => {
  it("should return iOs for iOs device", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      );

    expect(checkDevice()).toBe(Device.iOs);
  });

  it("should return android for Android device", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36"
      );

    expect(checkDevice()).toBe(Device.android);
  });

  it("should return other for Desktop device", () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
      );

    expect(checkDevice()).toBe(Device.other);
  });
});
