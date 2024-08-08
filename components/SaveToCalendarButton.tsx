"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { checkDevice } from "../lib/checkDevice";
import { getBrowser } from "../lib/getBrowser";
import { generateICS } from "../lib/icsGenerator";
import { calendarEvent, location } from "../lib/config";

export enum Device {
  iOs = "iOs",
  android = "android",
  other = "other",
}

const startTime = new Date(Date.UTC(2024, 11, 2, 11, 30));
const endTime = new Date(
  startTime.getTime() +
    calendarEvent.duration.hours * 60 * 60 * 1000 +
    calendarEvent.duration.minutes * 60 * 1000
);

const formatDate = (date: Date) => {
  return date.toISOString().replace(/-|:|\.\d+/g, "");
};

const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  calendarEvent.title
)}&details=${encodeURIComponent(
  calendarEvent.description
)}&location=${encodeURIComponent(location)}&dates=${formatDate(
  startTime
)}/${formatDate(endTime)}&ctz=Asia/Kolkata&ctz=Asia/Kolkata`;

export default function SaveToCalendarButton() {
  const [device, setDevice] = useState(Device.other);
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    setDevice(checkDevice());
    setBrowser(getBrowser());
  }, []);

  const handleSaveToCalendar = async () => {
    try {
      const icsValue = (await generateICS(calendarEvent)) as BlobPart;

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

  const buttonClasses =
    "bg-primary/90 px-6 py-2 rounded-sm font-semibold cursor-pointer hover:bg-secondary text-primary-foreground duration-200";

  const isSafariWithIOs = device === Device.iOs && browser === "Safari";

  if (isSafariWithIOs) {
    return (
      <button className={buttonClasses} onClick={handleSaveToCalendar}>
        Save to Calendar
      </button>
    );
  }

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      Save to Calendar
    </a>
  );
}
