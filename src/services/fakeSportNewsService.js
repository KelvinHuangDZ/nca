export const news = [
  { _id: "1", name: "McCollum didn't respect Cricket decision" },
  { _id: "2", name: "Collingwood pair Josh Thomas" },
  { _id: "3", name: "WrestleMania 31 live: WWE highlights" },
  { _id: "4", name: "Brad Haddin: New Zealand deserved it" },
  { _id: "5", name: "Player ratings for Australia's victory" },
  { _id: "6", name: "Ferguson rule out for four months" },
  { _id: "7", name: "Magpies 'shellshocked' by positive test" },
  { _id: "8", name: "Why Georgievski chose Macedonia" },
  { _id: "9", name: "When will the carnage end at the Reds" },
  { _id: "10", name: "Nadal loses his mind over water bottle" }
];

export function getSportNews() {
  return news.filter(n => n);
}
