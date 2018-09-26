export const news = [
  { _id: "1", name: "US teen held in shooting of five people", time: "1:55PM" },
  { _id: "2", name: "Israeli parties lure undecided voters", time: "1:52PM" },
  { _id: "3", name: "Suicide bombing, gunfire rock Kabul", time: "1:50PM" },
  { _id: "4", name: "Govt ordered to release Hobbit documents", time: "1:40PM" },
  { _id: "5", name: "Malaysian killed in Algeria crisis", time: "1:35PM" },
  { _id: "6", name: "Prison escapee caught after 16 years", time: "1:28PM" },
  { _id: "7", name: "Human Rights Watch warns on Mali", time: "1:26PM" },
  { _id: "8", name: "Clim turns on pain for riders", time: "1:20PM" },
  { _id: "9", name: "Son refursed bail over mother's death", time: "1:19PM" },
  { _id: "10", name: "MPs meet on Gold Coast V8 future", time: "1:18PM" }
];

export function getBreakingNews() {
  return news.filter(n => n);
}
