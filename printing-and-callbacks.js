function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response) {

    var html = "";

    // set encoding of received data to UTF-8

    response.setEncoding('utf8');

    response.on('data', function (data) {
      html += data;
    });

    response.on('end', function() {
      console.log(html);
    });

  });

}



function printHTML (html) {
  console.log(html);
}



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



getHTML(requestOptions, printHTML);