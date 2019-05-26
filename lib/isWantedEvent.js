const isWantedEvent = event => {
  const keyboard = {
    enter: 13,
    space: 32
  };

  const isClickEvent = event.type === "click";
  const isTouchEvent = event.type === "touchstart";
  const isSpaceKey =
    event.type === "keypress" && event.which === keyboard.space;
  const isEnterKey =
    event.type === "keypress" && event.which === keyboard.enter;

  return isClickEvent || isEnterKey || isSpaceKey || isTouchEvent;
};

export default isWantedEvent;