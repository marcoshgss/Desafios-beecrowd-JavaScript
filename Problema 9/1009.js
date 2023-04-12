// nomeVendedor
// salarioFixo
// totalVendas

// total
// var A = parseFloat(lines.shift());

// Código 1, enviei esse código para o Beecrowd.
/*
const nome = (lines.shift())
const salario = parseFloat(lines.shift())
const totalVendass = parseFloat(lines.shift())

const totall = (salario) + (totalVendass) * 0.15
console.log(`TOTAL = R$ ${totall.toFixed(2)}`)
*/


// Outro código
const nome1 = 'JOÃO'
const salario1 = 500.00
const totalVendass1 = 1230.30

const totall1 = (salario1) + ((totalVendass1) * 0.15)
console.log(`TOTAL = R$ ${totall1.toFixed(2)}`)

// Outro código
function salarioBonus(nomeV, salarioo, total_vendas) {
    const totalTudo = Number(salarioo) + (Number(total_vendas) * 0.15)
    return (`TOTAL = R$ ${totalTudo.toFixed(2)}`)
}

console.log(salarioBonus('PEDRO', 700.00, 0.00))

// Outro código
function problem(values) {
    const [nomeVendedor, salarioFixo, totalVendas] = values

    const total = Number(salarioFixo) + (Number(totalVendas) * 0.15)
    return (`TOTAL = R$ ${total.toFixed(2)}`)
}

values = ['MANGOJATA', 1700.00, 1230.50]
console.log(problem(values))

/* function problem (values) {
    const [nomeVendedor, salarioFixo, totalVendas] = values
     

    const total = Number(salarioFixo) + (Number(totalVendas) * 0.15)
    console.log(`TOTAL = R$ ${total.toFixed(2)}`)
    return values
}
console.log(problem['JOÃO', 500.00, 1230.30])
*/



/*
// Outro código
function problem (values) {
    const [nomeVendedor, salarioFixo, totalVendas] = values
     

    const total = Number(salarioFixo) + (Number(totalVendas) * 0.15)
    console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}
*/
