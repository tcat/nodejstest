var express = require('express');
var router = express.Router();
//var imagic = require('imagemagick');

/* GET users listing. */
var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });

router.get('/getfoto', function (req, res, next) {
  imageMagick('./1.jpg')
  .autoOrient()
  .blur(30, 20).fontSize(68)
  .stroke("#efe", 2)
  .fill("#555")
  .drawText(20, 72, "graphics")
  .fill("#fa0")
  .drawText(274, 72, " magick")
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
