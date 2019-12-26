/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.upcloud) {
      root.upcloud = {};
    }
    root.upcloud.RestartServerRequest = factory(root.upcloud.ApiClient);
  }
})(this, function(ApiClient) {
  'use strict';

  /**
   * The RestartServerRequest model module.
   * @module model/RestartServerRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>RestartServerRequest</code>.
   * restart server request
   * @alias module:model/RestartServerRequest
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>RestartServerRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestartServerRequest} obj Optional instance to populate.
   * @return {module:model/RestartServerRequest} The populated <code>RestartServerRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stop_type')) {
        obj['stop_type'] = ApiClient.convertToType(data['stop_type'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
      if (data.hasOwnProperty('timeout_action')) {
        obj['timeout_action'] = ApiClient.convertToType(
          data['timeout_action'],
          'String',
        );
      }
    }
    return obj;
  };

  /**
   * Type of restart operation performed on the server.
   * @member {module:model/RestartServerRequest.StopTypeEnum} stop_type
   * @default 'soft'
   */
  exports.prototype['stop_type'] = 'soft';
  /**
   * Stop timeout in seconds
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * Action to take if timeout limit is exceeded.
   * @member {module:model/RestartServerRequest.TimeoutActionEnum} timeout_action
   */
  exports.prototype['timeout_action'] = undefined;

  /**
   * Allowed values for the <code>stop_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StopTypeEnum = {
    /**
     * value: "soft"
     * @const
     */
    soft: 'soft',
    /**
     * value: "hard"
     * @const
     */
    hard: 'hard',
  };

  /**
   * Allowed values for the <code>timeout_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TimeoutActionEnum = {
    /**
     * value: "destroy"
     * @const
     */
    destroy: 'destroy',
    /**
     * value: "ignore"
     * @const
     */
    ignore: 'ignore',
  };

  return exports;
});
