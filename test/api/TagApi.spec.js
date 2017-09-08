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
    instance = new upcloud.TagApi();
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

  describe('TagApi', function() {
    describe('assignTag', function() {
      it('should call assignTag successfully', function(done) {
        //uncomment below and update the code to test assignTag
        //instance.assignTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTag', function() {
      it('should call createTag successfully', function(done) {
        //uncomment below and update the code to test createTag
        //instance.createTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function(done) {
        //uncomment below and update the code to test deleteTag
        //instance.deleteTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTags', function() {
      it('should call listTags successfully', function(done) {
        //uncomment below and update the code to test listTags
        //instance.listTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyTag', function() {
      it('should call modifyTag successfully', function(done) {
        //uncomment below and update the code to test modifyTag
        //instance.modifyTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('untag', function() {
      it('should call untag successfully', function(done) {
        //uncomment below and update the code to test untag
        //instance.untag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
