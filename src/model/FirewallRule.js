/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FirewallRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirewallRule'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.FirewallRule = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.FirewallRule);
  }
}(this, function(ApiClient, FirewallRule) {
  'use strict';




  /**
   * The FirewallRule model module.
   * @module model/FirewallRule
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>FirewallRule</code>.
   * @alias module:model/FirewallRule
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FirewallRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallRule} obj Optional instance to populate.
   * @return {module:model/FirewallRule} The populated <code>FirewallRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firewall_rule')) {
        obj['firewall_rule'] = FirewallRule.constructFromObject(data['firewall_rule']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FirewallRule} firewall_rule
   */
  exports.prototype['firewall_rule'] = undefined;



  return exports;
}));


