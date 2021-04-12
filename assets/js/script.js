var array = [20, 10, 15, 5, 14, 6]
var flag = 0;

var input = Number(prompt("Please enter value in number"));
document.write("array is: " + array);
document.write("<br>");

document.write("input is: " + input);
document.write("<br>");

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {

        var sum = array[i] + array[j];
        if (input == sum) {
            document.write(`Sum of (${array[i]} , ${array[j]}) = ${sum}`)
            document.write("<br>");
            flag++;
        }
    }
}

if (flag == 0) {
    document.write("No match Found")
}


