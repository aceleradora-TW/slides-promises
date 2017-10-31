const authenticate = function (data, callback) {

  const welcomeMessage = `Welcome back, ${data.user}`

  if (data.password === 'ping') {
    callback(null, welcomeMessage)
  } else {
    callback(new Error('Invalid password'))
  }
}

const handleResult = function(error, message) {
  if (error) {
    console.log(error.message)
  } else {
    console.log(message)
  }
}


const validData = {user: 'Bla', password: 'ping'}
authenticate(validData, handleResult)

const invalidData = {user: 'bla', password: 'bla'}
authenticate(invalidData, handleResult)
