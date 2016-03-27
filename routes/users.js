var express = require('express');
var router = express.Router();
//var imagic = require('imagemagick');

/* GET users listing. */
var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });

router.get('/getfoto', function (req, res, next) {
  imageMagick('./1.jpg')
  .autoOrient()
  .flip()
  .stream('png', function (err, stdout) {
  	console.log(err)
    if (err) return next(err);
    console.log('________________________________');
   res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Expires", 0);
    res.setHeader('Content-Type', 'image/png');
    
    stdout.pipe(res);
    
  });
});


module.exports = router;
