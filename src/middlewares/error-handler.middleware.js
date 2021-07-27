const Error = (error, req, res, next) => {
  
  if (e instanceof Application) {
    console.error(e.name + ': ' + e.message)
  }

  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  }

  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  }
};

module.exports = Error;