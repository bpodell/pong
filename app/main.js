import { Player, Computer } from "./paddle";
import { Ball } from "./ball";

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/6)}

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
export var context = canvas.getContext('2d');

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);


var update = function() {

}

var render = function() {
    console.log('main render')
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
    player.render();
    computer.render();
    ball.render();
}

var step = function() {
    update();
    render();
    animate(step);
}

window.onload = function() {
    document.body.appendChild(canvas);
    animate(step)
}