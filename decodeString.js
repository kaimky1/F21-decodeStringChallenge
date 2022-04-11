// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// const decoder = (string) => {
//     let num = Number(string[0]); //'3a' 
//     let word = '';
//     letter = '';
//     for(let i = 1; i < string.length; i++){
//         for(let j = 0; j < alphabet.length; j++){
//             if(string[i] === alphabet[j]){
//                 letter = alphabet[num + j];
//                 word += letter; 
//             }
//         }
//     }
//     return word;
// }
// console.log(decoder("2ab"))

const decoder = word => {
    let ans = ''
    for (i=1; i<word.length; i++) {
     ans += String.fromCharCode(word.charCodeAt(i) + Number(word[0]))
    }
    return ans
  }
   console.log(decoder('2fcjjm'))
   console.log(decoder('3ce'))
   console.log(decoder('1z'))
