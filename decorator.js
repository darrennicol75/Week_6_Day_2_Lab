const Decorator = function ()
{
  this.paint = [];
}

Decorator.prototype.addPaint = function(paint){
  this.paint.push(paint);
}

Decorator.prototype.totalLitres = function(){
  total = 0;
  for(let paint of this.paint)
    total += paint.litres
    return total;
}

Decorator.prototype.enoughPaint = function(){
  if (room.area < decorator.totalLitres){
    return true;
  } else {
    return false;
  }
}

module.exports = Decorator;
