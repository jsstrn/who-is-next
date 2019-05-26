import names from "./names.js";

let shuffledNames = shuffle(names);

const selectWhoIsNext = () => {
  if (shuffledNames.length === 0) {
    shuffledNames = shuffle(names);
    console.log("👩‍🏫 Resetting...");
  }
  const name = shuffledNames.pop();
  console.log(`👉 ${name} is up next. There's ${shuffledNames.length} left`);
  return name;
};

export default selectWhoIsNext;
