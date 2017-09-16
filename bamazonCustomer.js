//Declaring the mysql and inquirer variables
var mysql = require("mysql");
var inquirer = require("inquirer");
var customerPurchase = false;

//Connecting to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "Shorty482!",
    database: "bamazon"
});

//Run displayProducts on startup
connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
});

//Function that displays the products and then prompts the user for input
function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        console.log("Item ID | Product Name | Department Name | Price($) | Quantity");
        console.log("--------------------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        if (customerPurchase === false) {
        customerPrompt();
        } else {
            connection.end();
        }
    })
}

//Function that asks the user what they want to buy and how much, then runs the makePurchase function
function customerPrompt() {
    inquirer.prompt([
        {
            name: "productID",
            message: "What is the item ID of the product you wish to buy?"
        },
        {
            name: "quantity",
            message: "How many would you like to buy?"
        }
    ]).then(function (answers) {
        var wantedID = answers.productID;
        var wantedQuantity = answers.quantity;
        makePurchase(wantedID, wantedQuantity);
    })
}

//Function that checks if the store has enough of the desired item, then either tells the user there is not enough or process the purchase. It then runs the updateProducts function
function makePurchase(item_id, minimumQuantity) {
    connection.query("SELECT * FROM products WHERE item_id =" + item_id, function (err, response) {
        if (minimumQuantity <= response[0].stock_quantity) {
            var newQuantity = response[0].stock_quantity - minimumQuantity;
            var cost = response[0].price * minimumQuantity;
            updateProducts(item_id, newQuantity);
            console.log("----------------------------");
            console.log("Your total cost is: " + cost);
            console.log("----------------------------");
        } else {
            console.log("There is an insufficient quantity of product to fill that order. Please enter a lower quantity that you wish to buy.");
            customerPrompt();
        }
    })
}

//Function that updates the products in the store and then displays the new quantities
function updateProducts(item_id, newQuantity) {
    connection.query("UPDATE products SET stock_quantity = " + newQuantity + " WHERE item_id = " + item_id,
        function (err, response) {
            if (err) throw err;
        });
    displayProducts();
    customerPurchase = true;
}