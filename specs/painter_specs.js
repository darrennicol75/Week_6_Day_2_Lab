const assert = require('assert');
const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')

describe('Room', function(){
  beforeEach(function(){
    room = new Room(5, false);
    paint = new Paint(10, false);
    paint2 = new Paint(20, false);
    decorator = new Decorator();

});

  it('have an area in square meters', function(){
    const actual = room.area;
    assert.strictEqual(actual, 5);
  });
  it('should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  })
  it('should be able to be painted', function(){
    room.painted = true;
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })
  describe('paint', function(){
    it('should have a number of litres of paint', function(){
      const actual = paint.litres;
      assert.strictEqual(actual, 10);
    })
    it('should be able to check if it is empty', function(){
      const actual = paint.empty;
      assert.strictEqual(actual, false);
    })
    it('should be able to empty itself of paint', function(){
      paint.empty = true;
      paint.emptyPaint();
      const actual = paint.litres;
      assert.strictEqual(actual, 0);
    })
    describe('decorator', function(){
      it('should start with an empty paint stock', function(){
        const actual = decorator.paint;
        assert.deepStrictEqual(actual, []);
      })
      it('should be able to add can of paint to stock', function(){
        decorator.addPaint(paint);
        const actual = decorator.paint.length;
        assert.deepStrictEqual(actual, 1);
      })
      it('should be able to calculate of total litres of paint in stock', function(){
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = decorator.totalLitres();
        assert.deepStrictEqual(actual, 30)
      })
      it('should be able to calculate whether there is enough paint to paint a room', function(){
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = decorator.enoughPaint();
        assert.strictEqual(actual, true); 
      })
    })
  })
})
