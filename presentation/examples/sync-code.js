const db = require('db')

const carro = {marca: 'Fiat', modelo: '147'}

try {
  db.save(carro)
  console.log('Fiat 147 está salvo no banco de dados.')

  console.log('Vamos atualizar o fiat 147 no banco...')
  db.update(carro, {valor: 1000})
} catch (error) {
  console.log('Error! ', error.message)
}
