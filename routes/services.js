var express = require('express');
var router = express.Router();


router.get('/services', function(req, res, next) {
    const data = {
      title: 'Services',
        service1: 'general programming',
        service2: 'web development',
        service3: 'mobile apps'
    }
  res.render('index',data);
});

module.exports = router;