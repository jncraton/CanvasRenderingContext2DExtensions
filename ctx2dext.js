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

CanvasRenderingContext2D.prototype.strokeLine = function (x1, y1, x2, y2) {
  this.beginPath()
  this.moveTo(x1, y1)
  this.lineTo(x2, y2)
  this.stroke()
}

CanvasRenderingContext2D.prototype.strokeLabelledLine = function (x1, y1, x2, y2, label) {
  const xmin = Math.min(x1, x2)
  const ymin = Math.min(y1, y2)
  const xmax = Math.max(x1, x2)
  const ymax = Math.max(y1, y2)

  ctx.save()

  this.strokeLine(x1, y1, x2, y2)
  this.textAlign = 'center'
  this.measureText(label)
  this.translate(xmin + (xmax - xmin)/2, ymin + (ymax - ymin)/2)
  this.rotate(Math.atan((ymax - ymin) / (xmax - xmin)))
  this.strokeText(label, 0, -3*ctx.lineWidth)

  ctx.restore()
}

