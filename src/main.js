import names from "../lib/names.js";
import rng from "../lib/randomizer.js";
import isWanted from "../lib/isWanted.js";
import {
  createNameElement,
  getCurrentNameElement,
  removeNameElement,
  addNameElement
} from "../lib/element.js";

const getName = names => {
  const max = names.length - 1;
  const index = rng.range(max).random();
  return names[index];
};

const getNonRecurringName = currentName => {
  let nextName;

  do {
    nextName = getName(names);
  } while (currentName === nextName);

  return nextName;
};

const selectWhoIsNext = () => {
  const currentName = getCurrentNameElement();
  const name = getNonRecurringName(currentName);
  removeNameElement();

  const nameElement = createNameElement(name);
  addNameElement(nameElement);
};

const handleEvent = event => {
  if (!isWanted(event)) return;
  selectWhoIsNext();
};

document.ontouchstart = e => e.preventDefault();

document.addEventListener("click", handleEvent);
document.addEventListener("keypress", handleEvent);
document.addEventListener("touchstart", handleEvent);
