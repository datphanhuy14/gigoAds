
const qs = require('qs');
const axios = require('axios')
const rename = function(req, res) {
    console.log(req.body.accessToken)
    console.log(req.body.accountId)
    console.log(req.body.uid)
    var data = qs.stringify({
      'name': req.body.name,
    });
    var config = {
      method: 'post',
      url: 'https://graph.facebook.com/v10.0/act_'+req.body.accountId+'?access_token='+req.body.accessToken+'&__cppo=1',
      data : data
    };
    
    axios(config)
    .then(function (res) {
      return (JSON.stringify(res.data));
    })
    .catch(function (err) {
      console.log(err);
    });
    }

module.exports = rename;