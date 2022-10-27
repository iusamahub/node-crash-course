const fs = require('fs');

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last lines');


// writing files

// fs.writeFile('./docs/blog.txt', 'hello world', () => {
//     console.log('file wasa wqritten');
// })

// fs.writeFile('./docs/blog1.txt', 'hello, again', () => {
//     console.log('file wasa wqritten');
// })


// directories

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file created');
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}


// deleting files
