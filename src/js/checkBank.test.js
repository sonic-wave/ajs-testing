import checkBank from "./checkBank";

test.each([
  ["4111111111111111", "visa"],
  ["5555555555554444", "master"],
  ["3530111333300000", "jcb"],
  ["2201936399273077", "mir"],
  ["123", false],
  ["929835330176", false],
  ["72512342613897", false],
])("check banks", (obj, expected) => {
  const result = checkBank(obj);
  expect(result).toBe(expected);
});
