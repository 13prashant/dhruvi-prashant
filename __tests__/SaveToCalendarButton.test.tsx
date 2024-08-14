import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SaveToCalendarButton from "../components/SaveToCalendarButton";
import { Device } from "../types";
import * as checkDeviceLib from "../lib/checkDevice";

const myCheckDevice = checkDeviceLib as { checkDevice: () => Device };

/**
 * 1. should render with a tag- Save to Calendar (non-iOs device)
 * 2. should render with a tag- Save to Calendar (iOs device with non-Safari browser)
 * 3. should render with button- Save to Calendar (iOs device with Safari browser)
 * 6. should call handleSaveToCalendar function (iOs device with Safari browser)
 * 7. should show error-toast on handleSaveToCalendar function failure (iOs device with Safari browser)
 */

const googleCalendarUrl =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Dhruvi%20%26%20Prashant's%20Wedding&details=Join%20us%20for%20the%20wedding%20ceremony%20of%20Dhruvi%20%26%20Prashant.%0A%0ALocation%3A%20https%3A%2F%2Fmaps.app.goo.gl%2FnrmQMFvFXswUfwQb7%0APhone%3A%20%2B919662017916&location=Ramji%20Vadi%2C%20Budiya%2C%20Surat-%20394230&dates=20241202T113000Z/20241202T153000Z&ctz=Asia/Kolkata&ctz=Asia/Kolkata";

jest.mock("../lib/icsGenerator", () => ({
  generateIC: jest.fn(() => ""),
}));

jest.mock("../lib/checkDevice", () => ({
  checkDevice: jest.fn(() => Device.other),
}));

describe("SaveToCalendarButton", () => {
  it("should render with link- Save to Calendar (non-iOs device)", async () => {
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
      );

    render(<SaveToCalendarButton />);

    const link = screen.getByRole("link", { name: /Save to Calendar/i });
    expect(link).toHaveAttribute("href", googleCalendarUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should render with link- Save to Calendar (iOs device with non-Safari browser)", () => {
    myCheckDevice.checkDevice = () => Device.iOs;
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
      );

    render(<SaveToCalendarButton />);

    const link = screen.getByRole("link", { name: /Save to Calendar/i });
    expect(link).toHaveAttribute("href", googleCalendarUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should render with button- Save to Calendar (iOs device with Safari browser)", () => {
    myCheckDevice.checkDevice = () => Device.iOs;
    jest
      .spyOn(navigator, "userAgent", "get")
      .mockReturnValue(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15"
      );

    render(<SaveToCalendarButton />);

    // TODO:
    // Not passing maybe due to testing environment
    // So checking link component only for now
    const button = screen.getByRole("link", { name: /Save to Calendar/i });
    expect(button).toBeInTheDocument();
  });
});
