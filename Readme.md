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

im = new imkayac 'takkanm', password
im.send 'hello'
```

## TODO

- handler
- secret authentication
- proxy
