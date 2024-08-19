"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { EVENT_LOCATION, GOOGLE_MAPS_EMBED_URL } from "../lib/config";

export default function MapDrawer(props: React.PropsWithChildren) {
  const [loading, setLoading] = useState(true);

  return (
    <Drawer>
      <DrawerTrigger>{props.children}</DrawerTrigger>
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
