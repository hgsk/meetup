var chai = require('chai');
var should = chai.should();
var hello = require('../src/hello');

describe('code.js', function() {
	context('echo', function() {
		it('should return Hello hgsk when the value is hgsk', function() {
			hello('hgsk').should.equal('Hello hgsk.');
		});
	});
});
