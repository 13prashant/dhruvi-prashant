import RadiantUnion from "../components/templates/radiant-union/RadiantUnion";
import TimelessLove from "../components/templates/timeless-love/TimelessLove";

export const templates = {
  "radiant-union": <RadiantUnion />,
  "timeless-love": <TimelessLove />,
};

export const getTemplate = () =>
  !process.env.NEXT_PUBLIC_TEMPLATE || !templates[process.env.NEXT_PUBLIC_TEMPLATE]
    ? "radiant-union"
    : process.env.NEXT_PUBLIC_TEMPLATE;
