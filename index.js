switch(process.platform){
  case 'darwin':
    module.exports = require('./platforms/osx');
    break;
  default:
    module.exports = {
      getTitle: function(cb){
        cb('Platform not supported');
      },
      matchTitle: function(rexp, cb){
        cb('Platform not supported');
      }
    };
    break;
}

