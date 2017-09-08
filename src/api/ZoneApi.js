/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ZoneListResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ZoneListResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.ZoneApi = factory(root.upcloud.ApiClient, root.upcloud.ZoneListResponse);
  }
}(this, function(ApiClient, ZoneListResponse) {
  'use strict';

  /**
   * Zone service.
   * @module api/ZoneApi
   * @version 1.2.0
   */

  /**
   * Constructs a new ZoneApi. 
   * @alias module:api/ZoneApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listZones operation.
     * @callback module:api/ZoneApi~listZonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ZoneListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available zones
     * Returns a list of available zones.
     * @param {module:api/ZoneApi~listZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ZoneListResponse}
     */
    this.listZones = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ZoneListResponse;

      return this.apiClient.callApi(
        '/zone', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
