export interface RouteTabs {
  key: string;
  title: string;
}
export const factoryRouteTabs = (): RouteTabs[] => {
  return [
    {
      key: "base_stats",
      title: "Base Stats",
    },
    {
      key: "abilities",
      title: "Habilidades",
    },
    {
      key: "varieties",
      title: "Variações",
    },
  ];
};
