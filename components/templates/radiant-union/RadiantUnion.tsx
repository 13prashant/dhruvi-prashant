"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SaveToCalendarButton from "../../../components/SaveToCalendarButton";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  PRIMARY_NAME,
  EVENT_DAY,
  EVENT_MONTH,
  EVENT_YEAR,
  GOOGLE_MAPS_URL,
  SECONDARY_NAME,
  EVENT_LOCATION,
} from "../../../lib/config";
import MapDrawer from "../../../components/MapDrawer";
import Link from "next/link";
import DecorTr from "./assets/decor-tr.svg";
import DecorBl from "./assets/decor-bl.svg";

const Confetti = dynamic(() => import("react-confetti"));
const ShootingStars = dynamic(
  () => import("../../../components/ShootingStars")
);
const StarsBackground = dynamic(
  () => import("../../../components/StarsBackground")
);

export default function RadiantUnion() {
  const { windowSize } = useWindowSize();

  return (
    <main className="font-radiantUnion radiant-union-desktop-bg h-screen grid place-items-center">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />
      <section className="relative container max-w-lg mx-auto pl-12 bg-background h-screen max-h-[58rem] flex items-center radiant-union-pattern">
        <Image
          className="absolute top-0 right-0"
          src={DecorTr}
          width={200}
          height={200}
          alt="Decor"
        />
        <Image
          className="absolute bottom-0 left-0"
          src={DecorBl}
          width={200}
          height={200}
          alt="Decor"
        />

        <div className="relative z-50">
          <strong className="text-sm underline decoration-wavy decoration-secondary tracking-wider">
            Wedding Invitation
          </strong>

          <div className="relative w-fit flex flex-col gap-3 text-secondary my-10">
            <h2 className="text-4xl font-semibold">{PRIMARY_NAME}</h2>
            <h1 className="text-9xl absolute -top-4 left-10 text-secondary/20">
              &
            </h1>
            <h2 className="text-4xl ml-10 font-semibold">{SECONDARY_NAME}</h2>
          </div>

          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-1">
              {EVENT_DAY <= 9 ? "0" : ""}
              {EVENT_DAY} | {EVENT_MONTH} | {EVENT_YEAR}
            </h3>
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              className="flex items-center gap-1 hover:opacity-80 duration-200"
            >
              <p className="text-sm">{EVENT_LOCATION}</p>
              <Image
                src="/assets/navigation.svg"
                width={10}
                height={10}
                alt="Navigation arrow"
              />
            </Link>
          </div>
          <SaveToCalendarButton />

          <div className="fixed flex justify-center bottom-0 left-1/2 -translate-x-1/2 max-w-lg">
            <MapDrawer />
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
    </main>
  );
}
