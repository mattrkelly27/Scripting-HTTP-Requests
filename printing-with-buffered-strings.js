function getAndPrintHTML () {

  var https = require('https');



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

   https.get(requestOptions, function (response) {

    var buffer = [];

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log(buffer);
    });

  });

}

getAndPrintHTML();