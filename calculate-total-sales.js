// Use the given array of product objects below, each with their name, price, 
// and quantity sold. Additionally, you are given a tax rate as a percentage. 
// Write a function called calculateTotalSalesWithTax that takes in an array of 
// product objects, along with the tax rate, and returns the total sales amount including tax.


// const products = [
//     { name: 'Apple', price: 0.5, quantity: 10 },
//     { name: 'Banana', price: 0.3, quantity: 20 },
//     { name: 'Orange', price: 0.6, quantity: 15 },
//   ];


function calculateTotalSalesWithTax(products, tax) {

    const sales = products.map((product) => {
        return product.price * product.quantity;
    })

    const totalSales = sales.reduce((total, num) => {
        return total + num
    })

    const totalSalesWithTax = totalSales + ((totalSales * tax) / 100)

    return totalSalesWithTax



}


console.log(
    calculateTotalSalesWithTax(
        [
            { name: 'Apple', price: 0.5, quantity: 10 },
            { name: 'Banana', price: 0.3, quantity: 20 },
            { name: 'Orange', price: 0.6, quantity: 15 },
      ], 
      8)
);
