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

//Task 3
class Inventory {
    constructor(products= [], orders =[]) {
        this.products = products
        this.orders = orders
    }

addProduct(product) {
    this.products.push(product)
}
listProducts() {
    this.products.forEach(product => {
        console.log(product.getDetails())
    })
}

//Task 4
placeOrder(orderId, product, quantity) {
    if (product.stock >= quantity) {
        const orderDetails = {orderId, product:product.name, quantity, totalPrice:product.price * quantity
        }
        this.orders.push(orderDetails)
        product.updateStock(quantity)
    } 
}
listOrders() {
    this.orders.forEach(order => {
        console.log(`Order ID: ${order.orderId}, Product: ${order.product}, Quantity: ${order.quantity}, Total Price: $${order.totalPrice}`)
    })
}

//Task 5
restockProduct(productId, quantity) {
    const product = this.products.find(p => p.id === productId)
    if (product) {
        product.stock += quantity
    }
}
}
//Test Case for Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts()
//Test Case for Task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders()
console.log(prod1.getDetails())
//Test Case for Task 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails())