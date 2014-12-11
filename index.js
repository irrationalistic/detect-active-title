switch(process.platform){
  case 'darwin':
    module.exports = require('./platforms/osx');
    break;
  default:
    module.exports = function(rexp, cb){
      cb('Platform not supported');
    };
    break;
}

