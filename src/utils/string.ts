export const abbreviateStat = (stat: string): string => {
  if (stat === "special-attack") {
    return "Sp. Atk";
  } else if (stat === "special-defense") {
    return "Sp. Def";
  }

  return stat;
};
