// 1. display 1-20

for (var i = 1; i <= 20; i++){
    console.log(i)
}

// 2. display odd numbers 1-20

for (var o = 1; o <= 20; o++){
    if((o%2) != 0 )
    console.log(o)
}

// 3. sum of the numbers in an array

var numbers=[1,5,6,13,9]
sum = (numbers.reduce((x,y) => x + y))
console.log(sum)

// 4. maximum of the elements in a console

// var max = Math.max(...numbers)
// sau
let max = numbers [0]
for (let a = 1; a <numbers.length; a++) {
    if (numbers[a]>max) {
        max = numbers [a]
    }
}
console.log(max)

// 5. hom many times a certain element appears in an array

var array1 = [5,6,12,12,50,34,60]


