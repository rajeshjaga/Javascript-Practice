const objectOne = {
  name: "rajesh",
};
const objectTwo = {
  profession: "student",
};
const cloned = { ...objectOne, ...objectTwo, code: "vs code" };
console.log(cloned);
