const products = [
    { name: 'chiruni', price: 300, quantity: 2},
    { name: 'Shirt', price: 100, quantity: 3},
    { name: 'shampo', price: 700, quantity: 5},
    { name: 'Pant', price: 1200, quantity: 1},
];

function cartTotal (products){
    let total = 0;
    for(const product of products){
        // const thisProductCost = product.price * product.quantity
        total = total + (product.price * product.quantity); /**() ei tuku upper line o dewya jai */
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);