import fruits from './fruits';
import { choice, remove } from './help';

let fruit = choice(fruits);
console.log(`Id like one ${fruit}, please.`);
console.log(`Here ${fruit}`);
console.log('Great, can I have another?');

let remaining = remove(fruits, fruit);
console.log(`I'm sorry but we're out of that. We have no more ${fruit}.`);