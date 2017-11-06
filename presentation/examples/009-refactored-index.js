const Controller = require('../mappers/models_controller')

const index = Course => (req, res) => {
  const course = new Controller(Course)

  course
    .findAll()
    .then(allContents => res.render('index', {allContents}))
    .catch(error => res.render('error', {error: error.message}))
}

module.exports = index
