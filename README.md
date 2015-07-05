# express-response

middleware for express http response


## Installation

```bash
$ npm install express-response
```

## Quick Start

```javascript
var express = require('express'),
	expressResponse = require('express-response'),
    app;
    
app = express();
app.use(expressResponse());
    
app.get('/', function(req, res) {
	res.sendData({message: 'example'});
});

// Available methods
// 2xx Success
res.sendOk()
res.sendCreated()
res.sendData()
// 4xx Client Error
res.sendBadRequest()
res.sendUnauthorized()
res.sendForbidden()
res.sendNotFound()
res.sendMethodNotAllowed()
res.sendConflict()
// 5xx Server Error
res.sendServerError()
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

  [MIT](LICENSE)