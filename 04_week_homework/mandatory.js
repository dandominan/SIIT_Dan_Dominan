// 1. display 1-20
var ex1=[]
for (var i = 1; i <= 20; i++){
    ex1.push(i)
}
console.log(ex1)

// 2. display odd numbers 1-20
var ex2=[]
for (var o = 1; o <= 20; o++){
    if((o%2) != 0 )
    ex2.push(o)
}
console.log(ex2)

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

var array1 = [60,5,6,12,60,12,50,34,1,60,45,60,12]

        // de cate ori apare un anumit element 
        // ex: de cate ori apare nr 12?

var noTimes = array1.filter(function1)
function function1(value, index, array){
    return value == 12;
}
console.log(noTimes.length)

        // exista vreun element care apare de mai multe ori?

var nonUnique = array1.filter((x,y,z) => z.indexOf(x) !== y)
nonUnique.sort((c,d) => c - d);

console.log(nonUnique)

// 6. 
var rows = 4;
var cols = 4;

for(f=1; f<=rows; f++)
{
    for (g=1; g<=cols; g++)
    {
     if (g%2 != 0 && f%2 != 0) {document.write("0 ")}
     if (g%2 == 0 && f%2 != 0) {document.write("1 ")}
     if (g%2 != 0 && f%2 == 0) {document.write("1 ")}
     if (g%2 == 0 && f%2 == 0) {document.write("0 ")}
    }
    document.write("<br/>")
    
}
