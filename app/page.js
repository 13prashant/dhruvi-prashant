import SaveToCalendarButton from "@/components/SaveToCalendarButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="relative container max-w-lg mx-auto pl-12 bg-background h-screen flex items-center">
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
          <strong className="font-serif text-xs underline tracking-wider">
            Wedding Invitation
          </strong>

          <div className="relative w-fit flex flex-col gap-3 text-secondary mt-5 mb-10">
            <h2 className="text-4xl font-semibold">Dhruvi</h2>
            <h1 className="text-9xl absolute -top-4 left-10 text-secondary/20">
              &
            </h1>
            <h2 className="text-4xl ml-10 font-semibold">Prashant</h2>
          </div>

          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-1">02 | 12 | 2024</h3>
            <p className="text-sm">Ramji Vadi, Budiya, Surat- 395007</p>
          </div>

          <SaveToCalendarButton />
        </div>
      </section>
    </main>
  );
}
