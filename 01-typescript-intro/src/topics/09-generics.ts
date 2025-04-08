export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log (amIString.split(' ')); // Hola Mundo
console.log (amINumber.toFixed()); // 100
console.log (amIArray.join('-')); // [1, 2, 3, 4, 5]