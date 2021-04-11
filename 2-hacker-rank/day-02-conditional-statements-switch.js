/*
Objective
In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

Task
Complete the getLetter(s) function in the editor.
It has one parameter: a string, S, consisting of lowercase English alphabetic letters (i.e., a through z).
It must return A, B, C, or D depending on the following criteria:

If the first character in string S is in the set {a,e,i,o,u}, then return A.
If the first character in string S is in the set {b,c,d,f,g}, then return B.
If the first character in string S is in the set {h,j,k,l,m}, then return C.
If the first character in string S is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.

Hint: You can get the letter at some index i in S using the syntax s[i] or s.charAt(i).

Returns
string: a single letter determined as described above

Contraints
1 <= |S| <<= 100, where |S| is the lenght of SQRT1_2

String S contains lowecase English alphabetic letters (i.e., a through Z) only.
 
*/

// Task
function getLetter(s) {
    switch (true) {
        case /^[aeiou]/.test(s[0]): return 'A'
        case /^[bcdfg]/.test(s[0]): return 'B'
        case /^[hjklm]/.test(s[0]): return 'C'
        case /^[npqrstvwxyz]/.test(s[0]): return 'D'
        default: 'invalid caracter'
    }
}

// input
  // adfgt

// testing
console.time()
  console.log(getLetter('adfgt'))
console.timeEnd()

//output
  // A