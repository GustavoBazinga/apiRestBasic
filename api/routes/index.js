const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const matriculas = require('./matriculasRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(pessoas)
  app.use(niveis)
  app.use(matriculas)
  app.use(turmas)
  app.get('/', (req, res) => res.send('API Funcionando!'))
}