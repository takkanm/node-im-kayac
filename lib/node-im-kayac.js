(function() {
  var ImKayac, crypto, http, querystring;

  querystring = require('querystring');

  http = require('http');

  crypto = require('crypto');

  ImKayac = (function() {

    function ImKayac(username, opts) {
      this.opts = opts != null ? opts : {};
      this.post_path = '/api/post/' + username;
    }

    ImKayac.prototype.send = function(message, opts) {
      var post_data, post_data_hash, post_options, post_req;
      if (opts == null) opts = {};
      post_data_hash = {
        message: message
      };
      if (this.opts['password'] !== void 0) {
        post_data_hash['password'] = this.opts['password'];
      }
      if (this.opts['secret'] !== void 0) {
        post_data_hash['sig'] = crypto.createHash('sha1').update(message + this.opts['secret']).digest('hex');
      }
      if (opts['handler'] !== void 0) post_data_hash['handler'] = opts['handler'];
      post_data = querystring.stringify(post_data_hash);
      post_options = {
        host: 'im.kayac.com',
        port: 80,
        path: this.post_path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
        }
      };
      post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        return res.on('data', function(chunk) {
          return console.log('Response: ' + chunk);
        });
      });
      post_req.write(post_data);
      return post_req.end;
    };

    return ImKayac;

  })();

  module.exports = ImKayac;

}).call(this);
