var express = require('express');
var router = express.Router();


router.get('/home', function(req, res, next) {
    /*const data={
        image_logo: 'https://i.etsystatic.com/9277560/r/il/5d67fa/2460019234/il_1588xN.2460019234_tvmd.jpg'
    }*/
  res.render('index',{
    image_logo: 'https://i.etsystatic.com/9277560/r/il/5d67fa/2460019234/il_1588xN.2460019234_tvmd.jpg'
});
});

module.exports = router;