const authenticate = function(data) {

  const welcomeMessage = `Welcome back, ${data.user}`

  return new Promise(function(onSuccess, onFailure) {
    if (data.password === 'ping') {
      onSuccess(welcomeMessage)
    } else {
      onFailure(new Error('Invalid password'))
    }
  })
}

const ifSuccess = function(message) {
  console.log(message)
}

const ifFailure = function(error) {
  console.log('Error! ', error.message)
}

const validData = {user: 'Bla', password: 'ping'}
authenticate(validData)
  .then(ifSuccess)
  .catch(ifFailure)

const invalidData = {user: 'Bla', password: 'asdfas'}
authenticate(invalidData)
  .then(ifSuccess)
  .catch(ifFailure)
