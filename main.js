//Promise
const {readFile} = require('fs/promises');
// const {promisify} = require('util');


// const getText = (pathFile) => {
//     return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

//getText('./text.txt')
//    .then(result => console.log(result))
//    .catch(err => console.log(err));

// const readFilePromise = promisify(readFile);

 const read = async() =>{
    try{
        const result = await readFile('./text.txt', 'utf8');
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

read();