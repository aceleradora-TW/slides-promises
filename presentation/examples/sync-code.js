const db = require('db')

const carro = {marca: 'Fiat', modelo: '147'}

try {
  db.save(carro)
  console.log('Fiat 147 está salvo no banco de dados.')

  console.log('Vamos procurar outro carro no banco')
  db.find({marca: 'Tesla'})
} catch (error) {
  console.log('Error! ', error.message)
}
