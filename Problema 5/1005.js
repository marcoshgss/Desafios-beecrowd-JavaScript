//export function problem (lines) {

//    const [notaA, notaB] = lines

//    const media = (notaA * 3.5 + notaB * 7.5) / 11
//    console.log(`MEDIA = ${media.toFixed(5)}`)
//}


//function Media1 (notaA, notaB) {//
//    const media = (notaA * 3.5 + notaB * 7.5) / 11
//   return media;

//}

//console.log(Media1(5.0,7.1).toFixed(5))

const notaA = 5.0
const notaB = 7.1

const pesoA = 3.5
const pesoB = 7.5

const media = (notaA * pesoA + notaB * pesoB) / (pesoA + pesoB)

console.log(`MEDIA = ${media.toFixed(5)}`)