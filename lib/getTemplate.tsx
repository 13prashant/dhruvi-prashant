import RadiantUnion from "../components/templates/radiant-union/RadiantUnion";
import TimelessLove from "../components/templates/timeless-love/TimelessLove";

export const templates = {
  "radiant-union": <RadiantUnion />,
  "timeless-love": <TimelessLove />,
};

export const getTemplate = () =>
  !process.env.TEMPLATE || !templates[process.env.TEMPLATE]
    ? "radiant-union"
    : process.env.TEMPLATE;
