export const formatDate = (date: Date) => {
  return date.toISOString().replace(/-|:|\.\d+/g, "");
};
