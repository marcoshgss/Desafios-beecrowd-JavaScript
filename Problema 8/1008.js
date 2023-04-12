export function problem(lines) {
    const [numFuncionario, numHoras, valorHora] = lines

    const calSalario = (numHoras * valorHora)

    console.log(`NUMBER = ${numFuncionario}`)
    console.log(`SALARY = U$ ${calSalario.toFixed(2)}`)
}

let numFuncionario = 1
let numHoras = 200
let valorHora = 20.50

let calSalario = (numHoras * valorHora)
console.log(`NUMBER = ${numFuncionario}`)
console.log(`SALARY = U$ ${calSalario.toFixed(2)}`)

function calcularSalario(numero, horas, valorHora) {
    const salario = horas * valorHora
    console.log(`NUMBER = ` + numero)
    return `SALARY = U$ ${salario.toFixed(2)}`
}

console.log(calcularSalario(25, 100, 5.50))



