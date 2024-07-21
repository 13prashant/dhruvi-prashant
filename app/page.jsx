"use client";

import Image from "next/image";
import Confetti from "react-confetti";
import SaveToCalendarButton, {
  googleMapsUrl,
  location,
} from "../components/SaveToCalendarButton";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";

export default function Home() {
  const { windowSize } = useWindowSize();

  return (
    <main className="desktop-bg h-screen grid place-items-center">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />
      <section className="relative container max-w-lg mx-auto pl-12 bg-background h-screen max-h-[58rem] flex items-center pattern">
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

        <div className="relative z-50">
          <strong className="text-sm underline decoration-wavy decoration-secondary tracking-wider">
            Wedding Invitation
          </strong>

          <div className="relative w-fit flex flex-col gap-3 text-secondary mt-10 mb-10">
            <h2 className="text-4xl font-semibold">Dhruvi</h2>
            <h1 className="text-9xl absolute -top-4 left-10 text-secondary/20">
              &
            </h1>
            <h2 className="text-4xl ml-10 font-semibold">Prashant</h2>
          </div>

          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-1">02 | 12 | 2024</h3>
            <Link href={googleMapsUrl} className="flex items-center gap-1">
              <p className="text-sm">{location}</p>
              <Image
                src="/assets/navigation.svg"
                width={10}
                height={10}
                alt="Decor"
              />
            </Link>
          </div>

          <SaveToCalendarButton />
        </div>
      </section>
    </main>
  );
}
