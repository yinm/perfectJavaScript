let obj = { x:3, y:4 };
console.log(typeof obj);
console.log(obj.x);

let obj2 = { pos: { x:3, y:4 } };
console.log(obj2.pos.x);

obj.x = 33;
console.log(obj.x);

obj.z = 5;
console.log(obj.z);
