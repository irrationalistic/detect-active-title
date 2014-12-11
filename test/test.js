var detectActive = require('../index');
detectActive.matchTitle('nchat(\\s+)(-[s|u|f|p])', function(err, match){
  console.log(err, match);
});

detectActive.getTitle(function(err, match){
  console.log(err, match);
});
