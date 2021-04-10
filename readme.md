CanvasRenderingContext2DExtensions
==================================

This packages extends the default CanvasRenderingContext2D object prototype to include a number of new properties to improve the ergonomics of drawing directly to a canvas. It aims to match the style of the existing API while simplifying certain operations.

Methods
-------

```js
fillPoint(x, y, size=2)
fillCircle(x, y, radius)
strokeCircle(x, y, radius)
strokeLine(x1, y1, x2, y2)
fillLabelledPoint(x, y, label, size=2)
strokeLabelledRect(x, y, width, height, label)
strokeLabelledCircle(x, y, radius, label)
strokeLabelledLine(x1, y1, x2, y2, label)
```
