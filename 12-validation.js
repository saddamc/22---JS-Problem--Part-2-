function multiply(num1, num2){
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
    return 'please provide a number'
}
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 'seven');
// console.log(result);

function fullName (first, second){
    if(typeof first !== 'string'){
        return 'First Name should be a string'
    }
    else if(typeof second !== 'string'){
        return 'Second Name should be a string'
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Akmol');
// console.log(full);

function getPrice(product){
    console.log(typeof product !== 'object')
    return 'please provide an Array'
    const price = product.price;
    return price;
}

const price = getPrice({name: 'chulkani dandi', price: 35, color: 'blue'});
// const price = getPrice(5)
console.log(price);

function getSecond(numbers){
    if(Array.isArray(numbers) === false)
    console.log(typeof numbers)
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 61, 2]);
console.log(second);