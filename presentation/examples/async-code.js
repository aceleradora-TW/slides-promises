const db = require('db')

const carro = {marca: 'Fiat', modelo: '147'}

db.save(carro, (error) => error
  ? console.log('Error! ', error.message)
  : console.log('Fiat 147 está salvo no banco de dados.')

// Problemas!!!

console.log('Vamos procurar outro carro no banco')

db.find({marca: 'Tesla'})
