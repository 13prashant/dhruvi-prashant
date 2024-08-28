import { Metadata } from "next";
import Script from "next/script";
import { Alice } from "next/font/google";
import { Toaster } from "react-hot-toast";
import {
  PRIMARY_NAME,
  SECONDARY_NAME,
  EVENT_DAY,
  EVENT_MONTH,
  EVENT_YEAR,
} from "../lib/config";
import { getMonthName } from "../lib/getMonthName";
import { getOrdinalSuffix } from "../lib/getOrdinalSuffix";
import { getTemplate } from "../lib/getTemplate";
import "./globals.css";

const radiantUnion = Alice({
  subsets: ["latin"],
  variable: "--font-radiant-union",
  weight: ["400"],
});
const timelessLove = Alice({
  subsets: ["latin"],
  variable: "--font-timeless-love",
  weight: ["400"],
});

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
    <html lang="en" data-theme={getTemplate()}>
      <body className={`${radiantUnion.variable} ${timelessLove.variable}`}>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{}}
        />
        <Script id="clarity-script" strategy="afterInteractive">
          <script type="text/javascript">
            {`(function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
          </script>
        </Script>
      </body>
    </html>
  );
}
