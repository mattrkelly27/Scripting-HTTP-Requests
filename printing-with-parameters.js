function getAndPrintHTML (options) {

var https = require('https');



https.get(options, function (response) {

    var buffer = "";

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



getAndPrintHTML(requestOptions);

