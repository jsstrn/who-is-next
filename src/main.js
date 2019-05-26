import names from "../lib/names.js";
import isWantedEvent from "../lib/isWantedEvent.js";
import {
  createNameElement,
  removeNameElement,
  addNameElement
} from "../lib/element.js";

let shuffledNames = shuffle(names);

const selectWhoIsNext = () => {
  if (shuffledNames.length === 0) {
    shuffledNames = shuffle(names);
  }
  return shuffledNames.pop();
};

const handleEvent = event => {
  if (!isWantedEvent(event)) return;
  removeNameElement();
  const name = selectWhoIsNext();
  const nameElement = createNameElement(name);
  addNameElement(nameElement);
};

document.ontouchstart = e => e.preventDefault();

document.addEventListener("click", handleEvent);
document.addEventListener("keypress", handleEvent);
document.addEventListener("touchstart", handleEvent);
