const numbers = [4, 5, 2, 8, 10];

const result = numbers.map(n => n*2);
console.log(result);

const name = ['sakib', 'rakib', 'raihan', 'roton'];
const upName = name.map(n => n.toUpperCase());
console.log(upName);

const doubled = [];
for(const num of numbers){
    const double = num* 2;
    doubled.push(double);
}

console.log(doubled);