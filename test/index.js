'use strict';

var expressResponse = require('../'),
	expect = require('chai').expect;

function createServer() {
	return app.listen(14567);
}

describe('Unit tests', function() {
	it('should be defined function', function() {
		expect(expressResponse).to.be.a('function');
	});
});
	