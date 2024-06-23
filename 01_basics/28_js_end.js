//Array 
//Packed vs Holey

//Array has two types in js
// 1. Continueous  2. Holey array (have holes)
//SMI(small integer)
//Packed element
//Double(float, string, function)

const arrTwo = [1,2,3,4,5]
//Packed_SMI_elements

arrTwo.push(6.0)
//Packed_double_elements

arrTwo.push('7')
//packed elements
//Agar ek baar ye packed smi se double ban then usko delete karne se bhi ye smi nahi banega

arrTwo[10] = 11
//Holey elements  

//Holes are very expensive operation in javascript
//If there is any hole in array 
//it performs three operation
//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo, 10)
//hasOwnProperty(arrTwo, 10)


//SMI >Double > Packed
//H-SMI > H-Double > H_Packed
//Ek baar downgrade hone ke baad upgrade hona kind of impossible hai

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //holey elements
arrFour[1] = '2' //holey elements
arrFour[2] = '3' //holey elements


const arrFive  = []

arrFive.push('1')// packed_elements
arrFive.push('2')//packed elements


//if we push NaN and INFINITY it will become double