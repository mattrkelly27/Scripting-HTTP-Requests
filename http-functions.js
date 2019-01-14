module.exports = function getHTML (options, callback) {

    var https = require('https');

    https.get(options, function (response) {

      var html = "";


      response.setEncoding('utf8');

      response.on('data', function (data) {
        html += data;
      });

      response.on('end', function() {
        console.log(html);
      });

    });

}
