window.onload = function () {
  let posicion = 0;
  let pics = ["1.png", "2.png", "3.png", "4.png"];
  let foto = document.getElementById("foto");
  let next = document.getElementById("siguiente");
  let back = document.getElementById("anterior");

  siguiente.onclick = function () {
    if (posicion < pics.length - 1) {
      posicion++;
      foto.src = pics[posicion];
      test();
    }
  };
  anterior.onclick = function () {
    if (posicion > 0) {
      posicion--;
      foto.src = pics[posicion];
      test();
    }
  };

  function test() {
    anterior.disabled = posicion == 0;
    siguiente.disabled = posicion == pics.length - 1;
  }
};
