import {context} from './main';

function Paddle(x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function() {
    console.log('paddle render')
    context.fillStyle = "#0000FF";
    context.fillRect(this.x, this.y, this.width, this.height);
}

export function Player() {
    this.paddle = new Paddle(175, 580, 50, 10);
}

Player.prototype.render = function() {
    this.paddle.render();
}

export function Computer() {
    this.paddle = new Paddle(175, 10, 50, 10);
}

Computer.prototype.render = function() {
    this.paddle.render();
}