const Paint = function (litres, empty)
{
  this.litres = litres
  this.empty = empty
}

Paint.prototype.emptyPaint = function(){
  if (this.empty === true);
    this.litres = 0;
}


module.exports = Paint;
