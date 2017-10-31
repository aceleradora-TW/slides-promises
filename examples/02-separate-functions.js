const authenticate = function (data, onSuccess, onFailure) {

  const welcomeMessage = `Welcome back, ${data.user}`

  if (data.password === 'ping') {
    onSuccess(welcomeMessage)
  } else {
    onFailure(new Error('Invalid password'))
  }
}


const ifSuccess = function(message) {
  console.log(message)
}

const ifFailure = function(error) {
  console.log('Error! ', error.message)
}

const validData = {user: 'Bla', password: 'ping'}
authenticate(validData, ifSuccess, ifFailure)

const invalidData = {user: 'Bla', password: 'asdfas'}
authenticate(invalidData, ifSuccess, ifFailure)
