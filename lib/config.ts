import { formatDate } from "./formatDate";

export const EVENT_LOCATION = "Ramji Vadi, Budiya, Surat- 394230";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/nrmQMFvFXswUfwQb7";
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.060465699335!2d72.8265558!3d21.1101554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05149f2f09e9f%3A0xde14ff245739eb4f!2sRamji%20Vadi!5e0!3m2!1sen!2sin!4v1723102702237!5m2!1sen!2sin";
const ORGANIZER_PHONE_NUMBER = "+919662017916";

export const EVENT_YEAR = 2024;
export const EVENT_MONTH = 12;
export const EVENT_DAY = 2;
export const EVENT_HOUR = 17;
export const EVENT_MINUTE = 0;

export const PRIMARY_NAME = "Dhruvi";
export const SECONDARY_NAME = "Prashant";

const WEB_URL = "https://dhruvi.prashaant.in";

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
