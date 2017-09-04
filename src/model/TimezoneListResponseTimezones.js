/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Timezone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Timezone'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.TimezoneListResponseTimezones = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.Timezone);
  }
}(this, function(ApiClient, Timezone) {
  'use strict';




  /**
   * The TimezoneListResponseTimezones model module.
   * @module model/TimezoneListResponseTimezones
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>TimezoneListResponseTimezones</code>.
   * @alias module:model/TimezoneListResponseTimezones
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TimezoneListResponseTimezones</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimezoneListResponseTimezones} obj Optional instance to populate.
   * @return {module:model/TimezoneListResponseTimezones} The populated <code>TimezoneListResponseTimezones</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], [Timezone]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Timezone>} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


