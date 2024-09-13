import { EventAttributes } from "ics";
import toast from "react-hot-toast";
import useBrowserType from "../hooks/useBrowserType";
import useDeviceType from "../hooks/useDeviceType";
import { generateICS } from "../lib/generateICS";

export const GOOGLE_MAP_URL = "https://maps.app.goo.gl/nrmQMFvFXswUfwQb7";
export const LOCATION = "Ramji Vadi, Budiya, Surat- 394230";

const calendarEvent: EventAttributes = {
  start: [2024, 12, 2, 12, 30],
  startInputType: "local",
  startOutputType: "local",

  end: [2024, 12, 2, 22, 0],
  endInputType: "local",
  endOutputType: "local",

  title: "Dhruvi & Prashant's Wedding",
  description: `🎉 Join us for the wedding ceremony of Dhruvi & Prashant 💍\n\n📍 Location: ${GOOGLE_MAP_URL}\n📞 Phone: +919662017916`,

  location: LOCATION,

  url: "https://dhruvi.prashaant.in",
  status: "CONFIRMED",
  busyStatus: "BUSY",

  alarms: [
    {
      action: "display",
      description: `Dhruvi and Prashant's wedding is tomorrow!`,
      trigger: { days: 1, before: true },
    },
    {
      action: "display",
      description: `Dhruvi and Prashant's wedding is in 2 hours!`,
      trigger: { hours: 2, before: true },
    },
  ],
};

export default function CalendarButton() {
  const { deviceType } = useDeviceType();
  const { browserType } = useBrowserType();

  const handleSaveToCalendar = async () => {
    const isSafariWithIOs = deviceType === "iOs" && browserType === "Safari";

    try {
      const icsValue = (await generateICS(calendarEvent)) as BlobPart;

      const blob = new Blob([icsValue], {
        type: "text/calendar;charset=utf-8",
      });

      const url = URL.createObjectURL(blob);

      if (isSafariWithIOs) {
        const link = document.createElement("a");

        link.href = url;
        link.download = "wedding-invitation.ics";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      } else {
        const params = new URLSearchParams({
          action: "TEMPLATE",
          dates: "20241202T123000/20241202T220000",
          details: calendarEvent.description as string,
          location: calendarEvent.location as string,
          text: calendarEvent.title as string,
          ctz: "Asia/Kolkata",
        });

        window.open(
          `https://calendar.google.com/calendar/render?${params.toString()}`,
          "_blank"
        );
      }
    } catch (error) {
      console.error("Error generating ICS file: ", error);

      toast.custom(
        <div className="bg-primary/80 rounded-sm font-semibold backdrop-filter p-4 backdrop-blur-sm text-primary-foreground">
          Something went wrong! Please refresh the page and try again.
        </div>
      );
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleSaveToCalendar}>
      Save to Calendar
    </button>
  );
}
