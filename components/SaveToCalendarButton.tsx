"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { checkDevice } from "../lib/checkDevice";
import { getBrowser } from "../lib/getBrowser";
import { generateICS } from "../lib/icsGenerator";
import { calendarEvent, googleCalendarUrl } from "../lib/config";
import { Device } from "../types";

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
        <div className="bg-primary/80 rounded-sm font-semibold backdrop-filter p-4 backdrop-blur-sm text-primary-foreground">
          Something went wrong! Please refresh the page and try again.
        </div>
      );
    }
  };

  const isSafariWithIOs = device === Device.iOs && browser === "Safari";

  if (isSafariWithIOs) {
    return (
      <button className="btn" onClick={handleSaveToCalendar}>
        Save to Calendar
      </button>
    );
  }

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      Save to Calendar
    </a>
  );
}
