const decoder = (code) => {
    let str = code.split('')
    let arrOfStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str[i])) {
            i += +str[i]
        } else {
            arrOfStr += str[i]
        }
    }
    return console.log(arrOfStr)
}

decoder('0r3acfa4zzsed')


// const decoder = (code) => {
//     let str = code.split('')
//     let deCoded = ''
//     for (let i = 0; i <= 9; i++) {
//         num = i 
//         console.log(num)
//     for (let x = 0; x <= str.length; x++) {
//         if (!num(+str[x])) {
//             x += +str[x]
//             console.log(code[x])
        
//         } else {
//             deCoded += str[x] 
//         }
//     }
//     return deCoded
//  }
//  decoder('0h2xce5ngbrdy')
            
            



            
            
// const decoder = code => {
//     let splitStr = code.split('')
//     let result = ''
  
//     for (let i = 0; i < splitStr.length; i++) {
//       if (!isNaN(+splitStr[i])) {
//           console.log(!isNaN(+splitStr[6]))
//         i += +splitStr[i]
//         console.log('5' + splitStr[6] + ' is a number')
//     } else {
//         result += splitStr[i] 
//         console.log('result ' + splitStr[6] + ' is a letter')
//     }
// }

//     return console.log(result)
//   }

//   decoder('0h2xce5ngbrdy')


  