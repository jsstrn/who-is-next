export const getCurrentNameElement = () => {
  return document.querySelector(".animated").textContent;
};

export const removeNameElement = () => {
  const div = document.querySelector(".animated");
  div.remove();
};

export const createNameElement = name => {
  const div = document.createElement("div");
  div.classList.add("animated", "bounceIn");
  div.textContent = name;
  return div;
};

export const addNameElement = div => {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  main.insertBefore(div, footer);
};