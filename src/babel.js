import * as _ from 'lodash';

async function start() {
    return await Promise.resolve('async working');
}

start().then(console.log);

const unused = 42

class Util {
    static id = Date.now();
}

console.log('Util.id ', Util.id);

// import('lodash').then(_ => {
//     console.log('Lodash', _.random(5))
// })

console.log('Lodash', _.random(5))
