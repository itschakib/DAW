window.onload = function () {
  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      document.body.style.backgroundColor = this.value;
    };
  }
};
