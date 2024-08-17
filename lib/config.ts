import { formatDate } from "./formatDate";

export const EVENT_LOCATION =
  process.env.NEXT_PUBLIC_EVENT_LOCATION || "A Place You'll Never Find";
export const GOOGLE_MAPS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
  "https://maps.app.goo.gl/GoodLuckWithThat";
export const GOOGLE_MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://www.google.com/maps/embed/v1/view?zoom=1000&center=MiddleOfNowhere";
const ORGANIZER_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_ORGANIZER_PHONE_NUMBER || "+910000000000";

export const EVENT_YEAR = Number(process.env.NEXT_PUBLIC_EVENT_YEAR) || 1999;
export const EVENT_MONTH = Number(process.env.NEXT_PUBLIC_EVENT_MONTH) || 13;
export const EVENT_DAY = Number(process.env.NEXT_PUBLIC_EVENT_DAY) || 32;
export const EVENT_HOUR = Number(process.env.NEXT_PUBLIC_EVENT_HOUR) || 25;
export const EVENT_MINUTE = Number(process.env.NEXT_PUBLIC_EVENT_MINUTE) || 61;

export const PRIMARY_NAME = process.env.NEXT_PUBLIC_PRIMARY_NAME || "The Groom";
export const SECONDARY_NAME =
  process.env.NEXT_PUBLIC_SECONDARY_NAME || "The Bride";

const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL || "https://www.prashaant.in/";

export const calendarEvent = {
  start: [EVENT_YEAR, EVENT_MONTH, EVENT_DAY, EVENT_HOUR, EVENT_MINUTE],
  duration: { hours: 4, minutes: 0 },
  title: `${PRIMARY_NAME} & ${SECONDARY_NAME}'s Wedding`,
  description: `Join us for the wedding ceremony of ${PRIMARY_NAME} & ${SECONDARY_NAME}.\n\nLocation: ${GOOGLE_MAPS_URL}\nPhone: ${ORGANIZER_PHONE_NUMBER}`,
  location: EVENT_LOCATION,
  url: WEB_URL,
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

// Month index = Month-1
const istDate = new Date(
  EVENT_YEAR,
  EVENT_MONTH - 1,
  EVENT_DAY,
  EVENT_HOUR,
  EVENT_MINUTE
);

const startTime = new Date(
  Date.UTC(
    EVENT_YEAR,
    EVENT_MONTH - 1,
    EVENT_DAY,
    istDate.getUTCHours(),
    istDate.getUTCMinutes()
  )
);
const endTime = new Date(
  startTime.getTime() +
    calendarEvent.duration.hours * 60 * 60 * 1000 +
    calendarEvent.duration.minutes * 60 * 1000
);

export const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  calendarEvent.title
)}&details=${encodeURIComponent(
  calendarEvent.description
)}&location=${encodeURIComponent(EVENT_LOCATION)}&dates=${formatDate(
  startTime
)}/${formatDate(endTime)}&ctz=Asia/Kolkata&ctz=Asia/Kolkata`;
