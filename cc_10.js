//Task 1
class Product {
    constructor(name, id, price, stock) {
        this.name = name
        this.id= id
        this.price = price
        this.stock = stock
    }
getDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
}
updateStock(quantity) {
    this.stock -= quantity
}
}
//Test Case
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails())

prod1.updateStock(3);
console.log(prod1.getDetails())

//Task 2
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId
        this.product = product
        this.quantity = quantity
        this.product.updateStock(quantity) //Reduce stock when order is created
    }

getOrderDetails() {
    const totalPrice = this.product.price * this.quantity
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice} `
}
}
//Test Case
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails())

console.log(prod1.getDetails())