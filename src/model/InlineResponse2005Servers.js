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
import Server from './Server';





/**
* The InlineResponse2005Servers model module.
* @module model/InlineResponse2005Servers
* @version 1.2.0
*/
export default class InlineResponse2005Servers {
    /**
    * Constructs a new <code>InlineResponse2005Servers</code>.
    * @alias module:model/InlineResponse2005Servers
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InlineResponse2005Servers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2005Servers} obj Optional instance to populate.
    * @return {module:model/InlineResponse2005Servers} The populated <code>InlineResponse2005Servers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005Servers();

            
            
            

            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], [Server]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Server>} server
    */
    server = undefined;








}

