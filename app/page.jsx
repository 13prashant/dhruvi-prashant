"use client";

import Image from "next/image";
import Confetti from "react-confetti";
import CalendarButton, {
  GOOGLE_MAP_URL,
  LOCATION,
} from "../components/CalendarButton";
import ShootingStars from "../components/ShootingStars";
import StarsBackground from "../components/StarsBackground";
import useWindowSize from "../hooks/useWindowSize";

export default function TimelessLove() {
  const { windowSize } = useWindowSize();

  return (
    <main className="desktop-bg min-h-screen grid place-items-center">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />
      <section className="relative container max-w-lg mx-auto pl-12 bg-background h-screen max-h-[58rem] flex items-center overflow-hidden">
        <Image
          className="absolute -top-10 right-0"
          src="/flowers.svg"
          width={250}
          height={250}
          alt="Flowers"
        />
        <Image
          className="absolute bottom-0 right-0"
          src="/flowers-shadow.svg"
          width={250}
          height={250}
          alt="Flowers' shadow"
        />
        <Image
          className="absolute -bottom-20 -left-24 rotate-180"
          src="/flowers-shadow.svg"
          width={500}
          height={500}
          alt="Flowers' shadow"
        />

        <div className="relative z-50">
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

          <h3 className="text-2xl font-semibold mb-5">02 | 12 | 2024</h3>

          <div className="mt-10 max-w-64">
            <p className="font-semibold mb-3 text-sm text-black/50">
              {LOCATION}
            </p>

            <div className="flex flex-col gap-3">
              <CalendarButton />
              <a
                href={GOOGLE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Open Location
              </a>
            </div>
          </div>
        </div>

        <ShootingStars />
        <StarsBackground />
      </section>
    </main>
  );
}
