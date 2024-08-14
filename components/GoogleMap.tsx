import { GOOGLE_MAPS_EMBED_URL } from "../lib/config";

export default function GoogleMap() {
  return (
    <iframe
      className="border-secondary border"
      src={GOOGLE_MAPS_EMBED_URL}
      width="100%"
      height="250"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
