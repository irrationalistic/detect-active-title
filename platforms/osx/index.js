module.exports = {
  getTitle: function(cb){
    // run detection script to retrieve active window title
    require('child_process')
      .exec('osascript ' + __dirname + '/detect.scpt',
        function (err, stdout, stderr) {
          if(stderr !== '' && !err){
            err = stderr;
          }
          cb(err, stdout.trim());
        });
  },
  matchTitle: function(rexp, cb){
    // see if the active window matches the regex.
    this.getTitle(function(err, title){
      var rex = new RegExp(rexp);
      cb(err, rex.test(title));
    });
  }
};
