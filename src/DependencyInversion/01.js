/* Dependency should be on abstractions not concretions
A. High-level modules should not depend upon low-level modules. Both should depend upon abstractions.
B. Abstractions should not depend on details. Details should depend upon abstractions. */


//Bad Implementation 
/*function Store(user){
    this.stripe = new stripe(user)
    //If we plan to move paypal payment then code modifications are to be done here which is a bad pratice.
    // Make a transition in b/w Stripe or Payapal across this store class/function is extremely hard. In real world, the API's of both could be considerably different.
    // this.Paypal = new Paypal(user)
}

Store.prototype.purchaseBike = function(quantity){
    this.stripe.makePayment(700 * quantity)
}

Store.prototype.purchaseHelmet = function(quantity){
    this.stripe.makePayment(700 * quantity)
}

function Stripe(user){
    this.user = user
}

Stripe.prototype.makePayment = function(totalAmount){
    console.log(`${this.user} made payment of ${totalAmount} with stripe`)
}

function Paypal(user){
    this.user = user
}

Paypal.prototype.makePayment = function(totalAmount){
    console.log(`${this.user} made payment of ${totalAmount} with paypal`)
}

const store = new Store('Donald')
store.purchaseBike(2)
store.purchaseHelmet(2)

*/

// Appropriate Implementation
function Store(paymentProcessor){
    this.paymentProcessor = paymentProcessor  
}

Store.prototype.purchaseBike = function(quantity){
    this.paymentProcessor.pay(700 * quantity)
}

Store.prototype.purchaseHelmet = function(quantity){
    this.paymentProcessor.pay(700 * quantity)
}

function Stripe(user){
    this.user = user
}

Stripe.prototype.makePayment = function(totalAmount){
    console.log(`${this.user} made payment of ${totalAmount} with stripe`)
}

function Paypal(user){
    this.user = user
}

Paypal.prototype.makePayment = function(totalAmount){
    console.log(`${this.user} made payment of ${totalAmount} with paypal`)
}

function StripePaymentProcessor(user){
    this.stripe = new Stripe(user)
}

StripePaymentProcessor.prototype.pay = function(amount){
    this.stripe.makePayment(amount)
}

function PaypalPaymentProcessor(user){
    this.paypal = new Paypal(user)
}

PaypalPaymentProcessor.prototype.pay = function(amount){
    this.paypal.makePayment(amount)
}

const store = new Store(new StripePaymentProcessor('Ram'))
store.purchaseBike(2)
store.purchaseHelmet(2)


const store1 = new Store(new PaypalPaymentProcessor('Ram'))
store1.purchaseBike(2)
store1.purchaseHelmet(2)