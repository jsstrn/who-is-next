import selectWhoIsNext from "../lib/selectWhoIsNext.js";
import isWantedEvent from "../lib/isWantedEvent.js";
import {
  createNameElement,
  removeNameElement,
  addNameElement
} from "../lib/element.js";

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
