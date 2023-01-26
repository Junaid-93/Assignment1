
// Matrices
var matrix1rows = prompt("Enter matrix 1 rows")
var matrix1col = prompt("Enter matrix 1 columns")
var matrix2rows = prompt("Enter matrix 2 rows")
var matrix2col = prompt("Enter matrix 2 columns")

let m1r = parseInt(matrix1rows)
let m1c = parseInt(matrix1col)
let m2r = parseInt(matrix2rows)
let m2c = parseInt(matrix2col)

if (matrix1col === matrix2rows) {
    console.log("Matrix size is valid");
}
else {
    console.log("Enter valid matrix size");
}
alert("Enter matrix 1 values")

var m1 = []
for (i=1 ; i<=m1r ; i++) {
    var m1r1 = prompt(`Enter space separated values of row ${i} of matrix 1`);
    var arr_m1r1 = m1r1.split(" ");
    m1.push(arr_m1r1)
}
console.log(m1);


var m2 = []
for (i=1 ; i<=m2c ; i++) {
    var m2c2 = prompt(`Enter space separated values of column ${i} of matrix 2`);
    var arr_m2c2 = m2c2.split(" ");
    m2.push(arr_m2c2)
}

console.log(m2);

var Final_Array = []

for (s=0 ; s<= m1.length-1 ; s++) {
    var R_Array_Rows = []
     for (t=0; t <= m1.length-1; t++) {
            var Rrows = 0
            for (i=0; i <= m1[s].length-1; i++) {
            
                Rrows += (m1[s][i]*m2[t][i]);
            
            }
            R_Array_Rows.push(Rrows);    
        }
    Final_Array.push(R_Array_Rows);
    

}
console.log(Final_Array);
document.write(Final_Array)
