// today's forecast in kelvin
const kelvin = 0;
// converting kelvin to celsius
const celsius = kelvin - 273;
// celcius to fahrenheit
let fahrenheit = (celsius * (9/5) + 32);
// rounding down the number
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)