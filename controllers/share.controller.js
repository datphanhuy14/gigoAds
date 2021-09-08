const qs = require('qs');
const axios = require('axios');
const share = function shareAds(req, res) {
    var data = qs.stringify({
        'role': '281423141961500',
        'uid': req.body.uid,
      });
      var config = {
        method: 'post',
        url: 'https://graph.facebook.com/v10.0/act_'+req.body.accountId+'/users',
        params: {
          'access_token': req.body.accessToken,
        },
        data : data
      };
      axios(config)
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err.message);
      });
}
module.exports = share;