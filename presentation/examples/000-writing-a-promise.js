const {join} = require('path')
const {readFile} = require('fs')

const leArquivo = (arquivo, callback) =>
  readFile(join(__dirname, arquivo), 'utf-8', callback)

module.exports = leArquivo
