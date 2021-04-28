/* Make fine grained interfaces that are client specific
Clients should not be forced to depend upon interfaces that they do not use.
This principle deals with the disadvantages of implementing big interfaces. 

It is all about writing fine grained or small interfaces than writing one big interface. 
As a result the clasess that implement the interface will not have the burden of implementing all unrelated methods/functions

*/

//Bad Implementation
// Other Classes/functions had to implement unwanted methods returning null/void.
function Shape(name) {
    this.name = name
}

Shape.prototype.drawCircle = function (){
    console.log('Drawing Circle')
}

Shape.prototype.drawSquare = function (){
    console.log('Drawing Square')
}

Shape.prototype.drawRectangle = function (){
    console.log('Drawing Rectangle')
}

function Circle(name){
    Shape.call(this, name)
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.drawSquare = function (){return null}

Circle.prototype.drawRectangle = function (){return null}

function Square(name){
    Shape.call(this, name)
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.drawCircle = function (){return null}

Square.prototype.drawRectangle = function (){return null}

 
const circle = new Circle('I am Circle')
circle.drawCircle()
circle.drawRectangle()
circle.drawSquare()

const square = new Square('I am Circle')
square.drawCircle()
square.drawRectangle()
square.drawSquare()


// Appropriate Implementation
