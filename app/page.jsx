"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SaveToCalendarButton from "../components/SaveToCalendarButton";
import useWindowSize from "../hooks/useWindowSize";
import { location } from "../lib/config";
import GoogleMap from "../components/GoogleMap";

const Confetti = dynamic(() => import("react-confetti"));
const ShootingStars = dynamic(() => import("../components/ShootingStars"));
const StarsBackground = dynamic(() => import("../components/StarsBackground"));

export default function Home() {
  const { windowSize } = useWindowSize();

  return (
    <main className="desktop-bg min-h-screen grid place-items-center">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />
      <section className="relative container max-w-lg mx-auto bg-background flex items-center pattern">
        <Image
          className="absolute top-0 right-0"
          src="/assets/decor-tr.svg"
          width={200}
          height={200}
          alt="Decor"
        />
        <Image
          className="absolute bottom-0 left-0"
          src="/assets/decor-bl.svg"
          width={200}
          height={200}
          alt="Decor"
        />

        <div className="relative z-50 max-h-min pt-44 pb-10 w-full px-10">
          <strong className="text-sm underline decoration-wavy decoration-secondary tracking-wider">
            Wedding Invitation
          </strong>

          <div className="relative w-fit flex flex-col gap-3 text-secondary my-10">
            <h2 className="text-4xl font-semibold">Dhruvi</h2>
            <h1 className="text-9xl absolute -top-4 left-10 text-secondary/20">
              &
            </h1>
            <h2 className="text-4xl ml-10 font-semibold">Prashant</h2>
          </div>

          <h3 className="text-2xl font-semibold mb-2">02 | 12 | 2024</h3>
          <SaveToCalendarButton />

          <p className="mt-20 font-semibold mb-3">{location}</p>
          <GoogleMap />
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
    </main>
  );
}
