let canvas;
let ctx;

let incrementor = 0;



let decrementor = 500;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor++, 10, 100, 100);
   ctx.fillStyle = "orange";
  ctx.fillRect(decrementor--, 10, 100, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(decrementor--, decrementor--, 250, 250);
  ctx.fillStyle = "pink";
  ctx.fillRect(incrementor++, decrementor--, 250, 250);
  ctx.fillStyle = "red";
  ctx.fillRect(incrementor++, decrementor--, incrementor++, incrementor++);
}
