# Detect the Active Window Title

If you ever need to find out which window is active on the OS, you'll definitely want to check this library out! Using native scripts for each operating system, it will allow you to retrieve a string representation of the title of the active window. While not as powerful in the sense that it can't tell you if the process you are running is actually the active one, it will allow you to use regular expressions to detect if there is a match, which is pretty close for now.

# Usage

## Get active title

```js
var detectActive = require('detect-active-title');
detectActive.getTitle(function(err, title){
  // title is the string representation of the active window title
  console.log(err, title);
});
```

## Test active title

```js
var detectActive = require('detect-active-title');
detectActive.matchTitle('myapp(\\s+)(-flags)', function(err, match){
  // match is true if the active title matches the regular expression string
  console.log(err, match);
});
```

# Caveats

Right now this has only been run and tested for OSX Yosemite. Would love feedback or pull-requests to support additional platforms! I'm not a pro native scripter, so improvements to the scripts is also welcome.