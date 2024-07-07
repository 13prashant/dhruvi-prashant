"use client";

import { checkDevice } from "@/lib/checkDevice";
import { getBrowserName } from "@/lib/getBrowserName";
import { generateICS } from "@/lib/icsGenerator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const location = "Ramji Vadi, Budiya, Surat- 395007";
const googleMapsUrl = "https://maps.app.goo.gl/nrmQMFvFXswUfwQb7";
const organizerPhoneNumber = "+91 9662017916";

const event = {
  start: [2024, 12, 2, 17, 0], // Year, Month, Day, Hour, Minute
  duration: { hours: 4, minutes: 0 },
  title: "Dhruvi & Prashant's Wedding",
  description: `Join us for the wedding ceremony of Dhruvi & Prashant.\n\nLocation: ${googleMapsUrl}\nPhone: ${organizerPhoneNumber}`,
  location,
  url: "https://dhruvi.prashaant.in",
  status: "CONFIRMED",
  busyStatus: "BUSY",
  alarms: [
    {
      action: "display",
      description: "Wedding starts in 1 hour",
      trigger: { hours: 1, before: true },
    },
  ],
};

const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  event.title
)}&details=${encodeURIComponent(
  event.description
)}&location=${encodeURIComponent(
  location
)}&dates=20240721T093000Z/20240721T150000Z&ctz=Asia/Kolkata`;

export default function SaveToCalendarButton() {
  const [device, setDevice] = useState("other");
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    setDevice(checkDevice());
    setBrowser(getBrowserName());
  }, []);

  const handleSaveToCalendar = async () => {
    try {
      const icsValue = await generateICS(event);

      const blob = new Blob([icsValue], {
        type: "text/calendar;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "wedding-invitation.ics";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating ICS file:", error);

      toast.custom(
        <div className="bg-primary/50 rounded-sm font-semibold backdrop-filter p-4 backdrop-blur-sm">
          Unable to save the event! Please refresh the page and try again.
        </div>
      );
    }
  };

  return (
    <>
      {device === "iOs" && browser === "Safari" ? (
        <button
          className="bg-primary/90 px-6 py-2 rounded-sm font-semibold cursor-pointer hover:bg-secondary text-primary-foreground duration-200"
          onClick={handleSaveToCalendar}
        >
          Save to Calendar
        </button>
      ) : (
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary/90 px-6 py-2 rounded-sm font-semibold cursor-pointer hover:bg-secondary text-primary-foreground duration-200"
        >
          Save to Calendar
        </a>
      )}
    </>
  );
}
