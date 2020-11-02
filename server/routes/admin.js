const express = require('express');
const router = express.Router();
const Portfolio = require('../model/Portfolio')
const User = require('../model/User')
router.get('/pro', function(req, res, next) {
  const portfolio = Portfolio.find({}, (err, data)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('adminProduct', {
        data:data,
        title: 'User'
      })
    }
  })
});
router.get('/delete/:id', function(req, res, next) {
  Portfolio.findByIdAndRemove(req.params.id, (err, music) => {
    if (err) {
        console.log(err);
    }
    else {
        res.redirect('/admin/pro')
        // alert("musiqa muaffaqiyatli o'chdi")
    }
})
});
router.post('/pro', function(req, res, next) {
  const portfolio = new Portfolio(req.body)
  portfolio.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.redirect('/admin/pro')
    }
  })
});
/* GET home page. */
router.get('/user', function(req, res, next) {
  const portfolio = User.find({}, (err, data)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('adminUser', {
        data:data,
        title: 'User'
      })
    }
  })
});
module.exports = router;
