import { Alice } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const alice = Alice({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Dhruvi & Prashant's Wedding Invitation | Join Us on 2nd December'24",
  description:
    "Join Dhruvi & Prashant in celebrating their wedding on 2nd December'24. Find event details on our wedding invitation page.",
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
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
