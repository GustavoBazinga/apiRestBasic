const {Router} = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router.get('/matriculas', MatriculaController.pegaTodasAsMatriculas)
router.get('/matriculas/:id', MatriculaController.pegaUmaMatricula)
router.post('/matriculas', MatriculaController.criaMatricula)
router.put('/matriculas/:id', MatriculaController.atualizaMatricula)
router.delete('/matriculas/:id', MatriculaController.apagaMatricula)


module.exports = router
