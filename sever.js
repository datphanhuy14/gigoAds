var http = require('http');
var serviceHost = 'services.odata.org';
var servicePath = '/v4/TripPinServiceRW/';
var newPerson = {
    UserName:'lewisblack',
    FirstName:'Lewis',
    LastName:'Black',
    Emails:[
        'lewisblack@example.com'
    ],
    AddressInfo:[
        {
            Address: '187 Suffolk Ln.',
            City: {
CountryRegion: 'United States',
Name: 'Boise',
Region: 'ID'
            }
        }
    ],
    Gender: 'Male'
};
var postData = JSON.stringify(newPerson);
var options = {
    hostname: serviceHost,
    path: servicePath + 'People',
    port: 80,
    method: 'POST',
    headers: {
        'OData-Version': '4.0',
        'OData-MaxVersion': '4.0',
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};
var req = http.request(options, function(res) {
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log(body);
    });
});
req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
});
req.write(postData);
req.end();