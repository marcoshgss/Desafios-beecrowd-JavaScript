/*
export function problem (lines) {
    const [A,B,C] = lines

    const media = (A * 2 + B * 3 + C * 5) / 10
    console.log(`MEDIA = ${media.toFixed(1)}`)
}

export function problem (lines) {
    const [A,B,C] = lines
    const pesoA = 2
    const pesoB = 3
    const pesoC = 5

    const media = (A * pesoA + B * pesoB + C * pesoC) / (pesoA + pesoB + pesoC)
    console.log(`MEDIA = ${media.toFixed(1)}`)
}
*/

function problem (values) {
    const [A,B,C] = values

    const media = (A * 2 + B * 3 + C * 5) / 10
    return(`MEDIA = ${media.toFixed(1)}`)
}

console.log(problem([10.0,10.0,5.0]))