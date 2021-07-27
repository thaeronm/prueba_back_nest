const Error = (error, req, res, next) => {
  
  if (error instanceof Application) {
    console.error(`${error.name}: ${error.message}`)
  }

  if (error instanceof EvalError) {
    console.error(`${error.name}: ${error.message}`)
  }

  if (error instanceof EvalError) {
    console.error(`${error.name}: ${error.message}`)
  }

  return res.send('error');
};

module.exports = Error;