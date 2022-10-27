// GLOBAL OBJECT

// const name='yoshi';

// const greet = () => {
//     console.log(`hello, ${name}`);
// }

// greet();

// console.log(global);

global.setTimeout(() => {
    console.log('timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('interval')
}, 1000);

// console.log(__dirname);
// console.log(__filename);

