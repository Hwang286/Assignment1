/*
Flie name: app.css
Student’s Name: Hui Wang
StudentID: 301307614
Date: Feb 3, 2023
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data={
    title: 'Home',
    image_logo: 'https://i.etsystatic.com/9277560/r/il/5d67fa/2460019234/il_1588xN.2460019234_tvmd.jpg'
  }
  res.render('index', data);
});

router.get('/home', function(req, res, next) {
  const data={
    title: 'Home',
    image_logo: 'https://i.etsystatic.com/9277560/r/il/5d67fa/2460019234/il_1588xN.2460019234_tvmd.jpg'
  }
  res.render('index', data);
});

router.get('/about', function(req, res, next) {
  const data = {
    title: 'About Me' 
  }
  res.render('index', data);
});
router.get('/projects', function(req, res, next) {
  const data = {
     title: 'Projects' 
  }
  res.render('index', data);
});
router.get('/contact', function(req, res, next) {
  const data = {
    title: 'Contact Me',
    phone: '647-778-9168',
    email: 'hwang286@my.centennialcollege.ca' 
  }
  res.render('index', data);
});
router.get('/services', function(req, res, next) {
  const data = {
    title: 'Services',
        service1: 'general programming',
        service2: 'web development',
        service3: 'mobile apps programming and development'
    }
  res.render('index', data);
});

module.exports = router;
