// Baseado em https://scotch.io/tutorials/javascript-promises-for-dummies


const pedeUmPisante = (taMerecendo) => new Promise((entaoFechou, naoVaiRolar) => {
  if (taMerecendo) {
    entaoFechou({
      marca: 'Nike',
      modelo: 'Shox'
    })
  } else {
    naoVaiRolar(new Error('Nao ta merecendo'))
  }

})


// Versao simplificada
const pedeUmPisante2 = (taMerecendo) => new Promise((entaoFechou, naoVaiRolar) => taMerecendo
  ? entaoFechou({marca: 'Nike', modelo: 'Shox' })
  : naoVaiRolar(new Error('Nao ta merecendo')))



// Let's roll



const toMerecendo = true

pedeUmPisante(toMerecendo)
  .then(pisante => console.log('Ganhei um pisante! ', pisante))
  .catch(error => console.log('Nao rolou o pisante!', error.message))

