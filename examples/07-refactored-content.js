const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)

  const responseData = {}

  contentModel
    .findById(id)
    .then(contentItem => responseData.contentItem = contentItem)

    .then(contentModel.findAll)
    .then(allContents => responseData.allContents = allContents)

    .then(() => authorModel.findByName(responseData.contentItem.author))
    .then(authorItem => responseData.authorItem = authorItem)

    .then(() => contentModel.updateViews(id))
    .then(() => {

      const contentsAsString = responseData.allContents.map(content => content.toString())

      const currentContentIndex = contentsAsString.indexOf(responseData.contentItem.toString())

      responseData.next = allContents[currentContentIndex + 1]
      responseData.previous = allContents[currentContentIndex - 1]

      res.render('index', responseData)
    })
    .catch(error => res.render('error', {error: error.message}))
}

module.exports = content
