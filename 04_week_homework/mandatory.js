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
for (let a = 0; a <numbers.length; a++) {
    if (numbers[a]>max) {
        max = numbers [a]
    }
}
console.log(max)

// 5. how many times a certain element appears in an array

var array1 = [60,5,6,12,60,12,50,34,12,60,45,60,2]

        // de cate ori apare un anumit element (12)

var noTimes = array1.filter(function1)
function function1(value, index, array){
    return value == 12;
}
console.log(noTimes.length)

        // exista vreun element care apare de mai multe ori?

var nonUnique = array1.filter((x,y,z) => z.indexOf(x) !== y)
nonUnique.sort((c,d) => c - d);
console.log(nonUnique)
