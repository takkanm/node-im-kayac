querystring = require 'querystring'
http = require 'http'
crypto = require 'crypto'

class ImKayac
  constructor: (username, @opts = {}) ->
    @post_path = '/api/post/' + username

  send: (message, opts = {}) ->
    post_data_hash = {message: message}

    if @opts['password'] != undefined
      post_data_hash['password'] = @opts['password']

    if @opts['secret'] != undefined
      post_data_hash['sig'] = crypto.createHash('sha1').update(message + @opts['secret']).digest('hex');

    if opts['handler'] != undefined
      post_data_hash['handler'] = opts['handler']

    post_data = querystring.stringify post_data_hash

    post_options = {
      host: 'im.kayac.com',
      port: 80,
      path: @post_path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
      }
    }

    post_req = http.request post_options, (res) ->
      res.setEncoding 'utf8'
      res.on 'data', (chunk) ->
        console.log('Response: ' + chunk)

    post_req.write post_data
    post_req.end

module.exports = ImKayac
