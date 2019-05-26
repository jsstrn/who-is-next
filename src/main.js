import selectWhoIsNext from "../lib/selectWhoIsNext.js";
import isWantedEvent from "../lib/isWantedEvent.js";
import {
  createNameElement,
  removeNameElement,
  addNameElement
} from "../lib/element.js";

const displayWhoIsNext = () => {
  removeNameElement();
  const name = selectWhoIsNext();
  const nameElement = createNameElement(name);
  addNameElement(nameElement);
};

const handleEvent = event => {
  if (!isWantedEvent(event)) return;
  displayWhoIsNext();
};

displayWhoIsNext();

document.ontouchstart = e => e.preventDefault();

document.addEventListener("click", handleEvent);
document.addEventListener("keypress", handleEvent);
document.addEventListener("touchstart", handleEvent);
