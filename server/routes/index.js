const express = require('express');
const router = express.Router();
const Portfolio = require('../model/Portfolio')
const User = require('../model/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  const portfolio = Portfolio.find({}, (err, data)=>{
    if (err) {  
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
router.post('/', function(req, res, next) {
  const portfolio = new Portfolio(req.body)
  portfolio.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
router.get('/user', function(req, res, next) {
  const portfolio = User.find({}, (err, data)=>{
    if (err) {  
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
router.post('/user', function(req, res, next) {
  const portfolio = new User(req.body)
  portfolio.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
module.exports = router;
