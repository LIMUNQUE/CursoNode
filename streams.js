const {writeFile} = require('fs/promises');
const {createReadStream} = require('fs');

const stream = createReadStream('./carpeta/big.txt', 'utf-8')

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('end', () => {
    console.log('Finished');
});

stream.on('error', (err) => {
    console.log(err);
});

// const createBigFile = async () => {
//     await writeFile('./carpeta/big.txt', 'Hello World'.repeat(10000));
// }

// createBigFile();

