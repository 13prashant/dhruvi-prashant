import { formatDate } from "./formatDate";

export const location = "Ramji Vadi, Budiya, Surat- 394230";
export const googleMapsUrl = "https://maps.app.goo.gl/nrmQMFvFXswUfwQb7";
const organizerPhoneNumber = "+919662017916";

export const calendarEvent = {
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

const startTime = new Date(Date.UTC(2024, 11, 2, 11, 30));
const endTime = new Date(
  startTime.getTime() +
    calendarEvent.duration.hours * 60 * 60 * 1000 +
    calendarEvent.duration.minutes * 60 * 1000
);

export const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  calendarEvent.title
)}&details=${encodeURIComponent(
  calendarEvent.description
)}&location=${encodeURIComponent(location)}&dates=${formatDate(
  startTime
)}/${formatDate(endTime)}&ctz=Asia/Kolkata&ctz=Asia/Kolkata`;
