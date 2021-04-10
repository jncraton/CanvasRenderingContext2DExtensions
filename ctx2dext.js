/* eslint no-extend-native: ["error", { "exceptions": ["CanvasRenderingContext2D"] }] */

CanvasRenderingContext2D.prototype.strokeCircle = function (x, y, radius) {
  this.beginPath()
  this.arc(x, y, radius, 0, 2 * Math.PI)
  this.stroke()
}

CanvasRenderingContext2D.prototype.fillCircle = function (x, y, radius) {
  this.beginPath()
  this.arc(x, y, radius, 0, 2 * Math.PI)
  this.fill()
}

CanvasRenderingContext2D.prototype.point = function (x, y, size=2) {
  this.fillRect(x - size/2, y-size/2, size, size)
}
