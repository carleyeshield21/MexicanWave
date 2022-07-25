// This is the link to this JavaScript Coding Cha
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave(str){
    let arr = []
    for(i=0; i<=str.length-1; i++){
        // console.log(str[i])
        // console.log(str.slice(0,i), str[i].toUpperCase(), str.slice(i+1, str.length))
        arr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))
        // console.log(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))
        // console.log(str.slice(0,i+1))
    }
    console.log(arr)
}    
wave('hello')
console.log('========')
wave('codewars')
console.log('========')
wave('two words')
console.log('========')
wave('gap')