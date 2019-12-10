var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/6)}

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var step = function() {
    update();
    render();
    animate(step);
}

window.onload = function() {
    this.document.body.appendChild(canvas);
    this.animate(step)
}