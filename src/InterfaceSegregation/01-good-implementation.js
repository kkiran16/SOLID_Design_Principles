/* Make fine grained interfaces that are client specific
Clients should not be forced to depend upon interfaces that they do not use.
This principle deals with the disadvantages of implementing big interfaces. 

It is all about writing fine grained or small interfaces than writing one big interface. 
As a result the clasess that implement the interface will not have the burden of implementing all unrelated methods/functions

*/

//Appropriate Implementation
function Shape(name) {
    this.name = name
}

const circle = {
    drawCircle(){
        console.log('Drawing Circle')
    }
}

const rectangle = {
    drawRectangle(){
        console.log('Drawing Rectangle')
    }
}

const square = {
    drawSquare(){
        console.log('Drawing square')
    }
}


function Circle(name){
    Shape.call(this, name)
}

Circle.prototype = Object.create(Shape.prototype)
Object.assign(Circle.prototype, circle)
Circle.constructor = Circle

function Square(name){
    Shape.call(this, name)
}

Square.prototype = Object.create(Shape.prototype)
Object.assign(Square.prototype, square)
Square.constructor = Square


 
const circleObj = new Circle('I am Circle')
circleObj.drawCircle()
// circleObj.drawRectangle() -- When used it will throw error saying drawRectangle is not a function
// circleObj.drawSquare() - Same error as above

const squareObj = new Square('I am Circle')
square.drawSquare()
// square.drawCircle() - Error
// square.drawRectangle() - error


