import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { location } from "../lib/config";
import GoogleMap from "./GoogleMap";

export default function MapDrawer() {
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
      <DrawerContent className="max-w-lg mx-auto rounded-t-3xl focus:outline-none">
        <DrawerHeader>
          <DrawerTitle className="mb-8">{location}</DrawerTitle>
          <DrawerDescription>
            <GoogleMap />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
