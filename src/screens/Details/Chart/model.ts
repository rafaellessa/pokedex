export const factoryChartColor = (
  count: number
): { pixel: number; bg: string } => {
  if (count > 0 && count <= 45) {
    return {
      pixel: 70,
      bg: "#FB3700",
    };
  } else if (count >= 46 && count <= 60) {
    return {
      pixel: 140,
      bg: "#F8B501",
    };
  } else {
    return {
      pixel: 200,
      bg: "#08C21F",
    };
  }
};

export const sumPokemonStats = () => {};
