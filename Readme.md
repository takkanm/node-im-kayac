# node-im-kayac

[im.kayac.com](http://im.kayac.com/) wrapper for node.js

## install

```
$ nmp install node-im-kayac
```

## example

```coffee
imkayac = require 'node-im-kayac'

im = new imkayac 'takkanm'
im.send 'hello'
```

if you use password

```coffee
imkayac = require 'node-im-kayac'

# if use password
im = new imkayac 'takkanm', {'password': password}
# if use secret key
im = new imkayac 'takkanm', {'secret': secret_key}

im.send 'hello'
im.send 'use handler', {'handler', 'mailto:mail@exsample.com'}
```

## TODO

- proxy
