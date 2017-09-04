/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorCode', 'model/ErrorStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorCode'), require('./ErrorStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.ErrorError = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.ErrorCode, root.UpcloudApi.ErrorStatus);
  }
}(this, function(ApiClient, ErrorCode, ErrorStatus) {
  'use strict';




  /**
   * The ErrorError model module.
   * @module model/ErrorError
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias module:model/ErrorError
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorError} obj Optional instance to populate.
   * @return {module:model/ErrorError} The populated <code>ErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ErrorCode.constructFromObject(data['code']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ErrorStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorCode} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:model/ErrorStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


