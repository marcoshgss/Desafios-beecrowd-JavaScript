// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas 
// efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre 
// suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// nomeVendedor
// salarioFixo
// totalVendas

// total
// var A = parseFloat(lines.shift());
/* function problem (values) {
    const [nomeVendedor, salarioFixo, totalVendas] = values
     

    const total = Number(salarioFixo) + (Number(totalVendas) * 0.15)
    console.log(`TOTAL = R$ ${total.toFixed(2)}`)
    return values
}
console.log(problem['JOÃO', 500.00, 1230.30])
*/

// Código 1, enviei esse código para o Beecrowd.
/*
const nome = (lines.shift())
const salario = parseFloat(lines.shift())
const totalVendass = parseFloat(lines.shift())

const totall = (salario) + (totalVendass) * 0.15
console.log(`TOTAL = R$ ${totall.toFixed(2)}`)
*/

/*
// Outro código
function problem (values) {
    const [nomeVendedor, salarioFixo, totalVendas] = values
     

    const total = Number(salarioFixo) + (Number(totalVendas) * 0.15)
    console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}
*/

const nome1 = 'JOÃO'
const salario1 = 500.00
const totalVendass1 = 1230.30

const totall1 = (salario1) + ((totalVendass1) * 0.15)
console.log(`TOTAL = R$ ${totall1.toFixed(2)}`)