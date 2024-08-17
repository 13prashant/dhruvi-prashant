"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { EVENT_LOCATION, GOOGLE_MAPS_EMBED_URL } from "../lib/config";

export default function MapDrawer() {
  const [loading, setLoading] = useState(true);

  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center justify-center text-primary focus:outline-none">
        <Image
          className="animate-bounce secondary opacity-30"
          src="/assets/chevrons-up.svg"
          width={25}
          height={25}
          alt="Up arrow"
        />
        <h6 className="text-xs font-semibold">View Location</h6>
      </DrawerTrigger>
      <DrawerContent className="max-w-lg mx-auto rounded-t-3xl focus:outline-none backdrop-blur-sm bg-background/70 p-4 pt-0">
        <DrawerHeader>
          <DrawerTitle className="mb-8 text-center">
            {EVENT_LOCATION}
          </DrawerTitle>
          <DrawerDescription className="relative">
            {loading && (
              <div className="absolute inset-0 h-[250px] w-[100%-32px] z-10 bg-gray-500 flex p-3 animate-pulse">
                <span className="w-64 h-[51.6px] bg-gray-900 animate-pulse" />
              </div>
            )}
            <iframe
              className="border border-secondary"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoading(false)}
            />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
