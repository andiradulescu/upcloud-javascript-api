/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.upcloud);
  }
}(this, function(expect, upcloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new upcloud.Plan();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Plan', function() {
    it('should create an instance of Plan', function() {
      // uncomment below and update the code to test Plan
      //var instane = new upcloud.Plan();
      //expect(instance).to.be.a(upcloud.Plan);
    });

    it('should have the property coreNumber (base name: "core_number")', function() {
      // uncomment below and update the code to test the property coreNumber
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

    it('should have the property memoryAmount (base name: "memory_amount")', function() {
      // uncomment below and update the code to test the property memoryAmount
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

    it('should have the property publicTrafficOut (base name: "public_traffic_out")', function() {
      // uncomment below and update the code to test the property publicTrafficOut
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

    it('should have the property storageSize (base name: "storage_size")', function() {
      // uncomment below and update the code to test the property storageSize
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

    it('should have the property storageTier (base name: "storage_tier")', function() {
      // uncomment below and update the code to test the property storageTier
      //var instane = new upcloud.Plan();
      //expect(instance).to.be();
    });

  });

}));
