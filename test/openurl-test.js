var expect = require('chai').expect;
var assert = require('chai').assert;
var e2e = require('../lib/promiseaware');
var wrapper = require('../lib/buildwrapper')


describe('launch a browser and open google', function() {

    beforeEach(function(done) {
        gBrowserClient.launch();
        done();
    });

    it('open google url and read the title', function (done) {

      gBrowserClient.openUrl('http://google.com');
      gBrowserClient.getTitle().then(function(title){
              assert.equal(title, 'Google');
          done();
      });

    });


});
