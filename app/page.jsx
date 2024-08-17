import { getTemplate, templates } from "../lib/getTemplate";

export default function Home() {
  return templates[getTemplate()];
}
