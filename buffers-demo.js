//objects -> helps to handle binary data efficient for strings
//file system operations, cryptography, image processing 


const buffOne = Buffer.alloc(10); // allocates 10 bytes of memory -. zeros
console.log(buffOne)


// 
const bufferFromString = Buffer.from('Hello')
console.log(bufferFromString)


const bufferFromArrayOfIntegers = Buffer.from([1, 2, 3, 4, 5])
console.log(bufferFromArrayOfIntegers)

buffOne.write('Node JS')
console.log('After writing Node.Js to buffOne', buffOne.toString());

console.log(bufferFromString[0])

console.log(bufferFromString.slice(0,3));


const concatBuffer = Buffer.concat([bufferFromString, buffOne])
console.log(concatBuffer.toString());

console.log(concatBuffer.toJSON())