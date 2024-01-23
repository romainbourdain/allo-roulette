export const getIndexFromRotation = (
  rotation: number | undefined,
  length: number
) => {
  if (rotation === undefined) return -1;
  return Math.floor((((rotation + 180 / length) % 360) * length) / 360);
};
