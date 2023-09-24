// Desc: Custom log middleware for logging requests to the console. it logs the request method, path, and time of the request.
const customLog = (req, res, next) => {

  const fgOrange = '\x1b[33m';
  req.requestTime = new Date().toLocaleString();

  switch (req.method) { 
    case 'GET': {
      console.info(`📗 ${fgOrange}${req.method} request to ${req.path} at ${req.requestTime}`);
      break;
    }
    case 'POST': {
      console.info(`📘 ${fgOrange}${req.method} request to ${req.path} at ${req.requestTime}`);
      break;
    }
    case 'DELETE': {
      console.info(`📕 ${fgOrange}${req.method} request to ${req.path} at ${req.requestTime}`);
      break;
    }
    default:
      console.log(`📙${fgOrange}${req.method} request to ${req.path} at ${req.requestTime}`);
  };

  next();

};

exports.customLog = customLog;