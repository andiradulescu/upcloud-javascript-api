/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ServerSize from './ServerSize';





/**
* The InlineResponse2004ServerSizes model module.
* @module model/InlineResponse2004ServerSizes
* @version 1.2.0
*/
export default class InlineResponse2004ServerSizes {
    /**
    * Constructs a new <code>InlineResponse2004ServerSizes</code>.
    * @alias module:model/InlineResponse2004ServerSizes
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InlineResponse2004ServerSizes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2004ServerSizes} obj Optional instance to populate.
    * @return {module:model/InlineResponse2004ServerSizes} The populated <code>InlineResponse2004ServerSizes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004ServerSizes();

            
            
            

            if (data.hasOwnProperty('server_size')) {
                obj['server_size'] = ApiClient.convertToType(data['server_size'], [ServerSize]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ServerSize>} server_size
    */
    server_size = undefined;








}

