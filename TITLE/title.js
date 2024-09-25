import { Column } from "/TITLE/column.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 44;

const image = new Image();
image.src = "/TITLE/skin2.png"; 

const columns = [];
const columnsCount = canvas.width / FONT_SIZE;

for (let i = 0; i < columnsCount; i++) {

    const direction = i % 2 === 0 ? 1 : -1;
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context, image, direction));
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    columns.forEach(column => column.drawSymbol());

    setTimeout(() => requestAnimationFrame(animate), 100);
}

animate();
