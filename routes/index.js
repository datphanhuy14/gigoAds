var express = require('express');
var router = express.Router();
const qs = require('qs');
const axios = require('axios');

const rename = require('../controllers/rename.controller');
const share = require('../controllers/share.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/share', function (req, res) {
  return res.render('share')
}
)
router.get('/rename', function (req, res) {
  return res.render('rename')
})
router.post('/rename', rename)
router.post('/share',async function (req, res) {
  let _uid = req.body.uid
  let _accountId = req.body.accountId
  let _accessToken = req.body.accessToken
  let _data ;
  let data = qs.stringify({
    'role': '281423141961500',
    'uid': _uid,
  });
  let config = {
    method: 'post',
    url: 'https://graph.facebook.com/v10.0/act_'+_accountId+'/users',
    params: {
      'access_token': _accessToken,
    },
    data : data
  };
  axios(config)
  .then(function (res ) {
    res.data
    console.log(res.data)
  })
  .catch(function (err) {
    console.log(err.message)
  });
  res.json(res.data)
})
let shareAds = (_uid,_accountId,_accessToken) => {
  let data = qs.stringify({
      'role': '281423141961500',
      'uid': _uid,
    });
    let config = {
      method: 'post',
      url: 'https://graph.facebook.com/v10.0/act_'+_accountId+'/users',
      params: {
        'access_token': _accessToken,
      },
      data : data
    };
    axios(config)
    .then(function (res) {
      return res.data
    })
    .catch(function (err) {
      console.log(err.message);
    });
}
module.exports = router;
