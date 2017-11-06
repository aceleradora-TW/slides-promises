const {join} = require('path')
const {readFile} = require('fs')

const leArquivo = (callback) => readFile(join(__dirname, 'a-file.txt'), 'utf-8', callback)

module.exports = leArquivo
