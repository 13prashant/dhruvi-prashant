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
      <DrawerContent className="max-w-lg mx-auto rounded-t-3xl focus:outline-none backdrop-blur-sm bg-background/70 p-4 pt-0">
        <DrawerHeader>
          <hr className="w-1/2 h-1 mx-auto -mt-3 mb-10 bg-white border-0 rounded" />
          <DrawerTitle className="mb-8 text-center">{location}</DrawerTitle>
          <DrawerDescription>
            <GoogleMap />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
