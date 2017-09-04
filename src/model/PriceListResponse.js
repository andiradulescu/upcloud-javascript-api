/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PriceListResponsePrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceListResponsePrice'));
  } else {
    // Browser globals (root is window)
    if (!root.UpcloudApi) {
      root.UpcloudApi = {};
    }
    root.UpcloudApi.PriceListResponse = factory(root.UpcloudApi.ApiClient, root.UpcloudApi.PriceListResponsePrice);
  }
}(this, function(ApiClient, PriceListResponsePrice) {
  'use strict';




  /**
   * The PriceListResponse model module.
   * @module model/PriceListResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PriceListResponse</code>.
   * @alias module:model/PriceListResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PriceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceListResponse} obj Optional instance to populate.
   * @return {module:model/PriceListResponse} The populated <code>PriceListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('price')) {
        obj['price'] = PriceListResponsePrice.constructFromObject(data['price']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PriceListResponsePrice} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


