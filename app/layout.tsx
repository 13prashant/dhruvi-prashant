import { Metadata } from "next";
import { Alice } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import {
  PRIMARY_NAME,
  SECONDARY_NAME,
  EVENT_DAY,
  EVENT_MONTH,
  EVENT_YEAR,
} from "../lib/config";
import { getMonthName } from "../lib/getMonthName";
import { getOrdinalSuffix } from "../lib/getOrdinalSuffix";

const alice = Alice({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: `${PRIMARY_NAME} & ${SECONDARY_NAME}'s Wedding Invitation | Join Us on ${EVENT_DAY}${getOrdinalSuffix(
    EVENT_DAY
  )} ${getMonthName(EVENT_MONTH)}'${EVENT_YEAR.toString().slice(-2)}`,
  description: `Join ${PRIMARY_NAME} & ${SECONDARY_NAME} in celebrating their wedding on ${EVENT_DAY}${getOrdinalSuffix(
    EVENT_DAY
  )} ${getMonthName(EVENT_MONTH)}'${EVENT_YEAR.toString().slice(
    -2
  )}. Find event details on our wedding invitation page.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alice.className}>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{}}
        />
      </body>
    </html>
  );
}
