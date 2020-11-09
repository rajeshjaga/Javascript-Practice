const names = ["george", "stuart", "martha"];

const nameWitha = [];
const list = names.map((name) =>
  name.includes("a") ? nameWitha.push(name) : console.log(name)
);

console.log(nameWitha);
