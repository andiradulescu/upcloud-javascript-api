# upcloud_api

UpcloudApi - JavaScript client for upcloud_api
The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install upcloud_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your upcloud_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('upcloud_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UpcloudApi = require('upcloud_api');

var api = new UpcloudApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccount(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.upcloud.com/1.2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UpcloudApi.AccountApi* | [**getAccount**](docs/AccountApi.md#getAccount) | **GET** /account | Account information
*UpcloudApi.FirewallApi* | [**createFirewallRule**](docs/FirewallApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*UpcloudApi.FirewallApi* | [**deleteFirewallRule**](docs/FirewallApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*UpcloudApi.FirewallApi* | [**getFirewallRule**](docs/FirewallApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*UpcloudApi.FirewallApi* | [**serverServerIdFirewallRuleGet**](docs/FirewallApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*UpcloudApi.IPAddressApi* | [**addIp**](docs/IPAddressApi.md#addIp) | **POST** /ip_address | Assign IP address
*UpcloudApi.IPAddressApi* | [**deleteIp**](docs/IPAddressApi.md#deleteIp) | **DELETE** /ip_address/{ip} | Release IP address
*UpcloudApi.IPAddressApi* | [**getDetails**](docs/IPAddressApi.md#getDetails) | **GET** /ip_address/{ip} | Get IP address details
*UpcloudApi.IPAddressApi* | [**listIps**](docs/IPAddressApi.md#listIps) | **GET** /ip_address | List IP addresses
*UpcloudApi.IPAddressApi* | [**modifyIp**](docs/IPAddressApi.md#modifyIp) | **PUT** /ip_address/{ip} | Modify IP address
*UpcloudApi.PlanApi* | [**listPlans**](docs/PlanApi.md#listPlans) | **GET** /plan | List available plans
*UpcloudApi.PricesApi* | [**listPrices**](docs/PricesApi.md#listPrices) | **GET** /price | List prices
*UpcloudApi.ServerApi* | [**assignTag**](docs/ServerApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*UpcloudApi.ServerApi* | [**attachStorage**](docs/ServerApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
*UpcloudApi.ServerApi* | [**createFirewallRule**](docs/ServerApi.md#createFirewallRule) | **POST** /server/{serverId}/firewall_rule | Create firewall rule
*UpcloudApi.ServerApi* | [**createServer**](docs/ServerApi.md#createServer) | **POST** /server | Create server
*UpcloudApi.ServerApi* | [**deleteFirewallRule**](docs/ServerApi.md#deleteFirewallRule) | **DELETE** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Remove firewall rule
*UpcloudApi.ServerApi* | [**deleteServer**](docs/ServerApi.md#deleteServer) | **DELETE** /server/{serverId} | Delete server
*UpcloudApi.ServerApi* | [**detachStorage**](docs/ServerApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
*UpcloudApi.ServerApi* | [**ejectCdrom**](docs/ServerApi.md#ejectCdrom) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
*UpcloudApi.ServerApi* | [**getFirewallRule**](docs/ServerApi.md#getFirewallRule) | **GET** /server/{serverId}/firewall_rule/{firewallRuleNumber} | Get firewall rule details
*UpcloudApi.ServerApi* | [**listServerConfigurations**](docs/ServerApi.md#listServerConfigurations) | **GET** /server_size | List server configurations
*UpcloudApi.ServerApi* | [**listServers**](docs/ServerApi.md#listServers) | **GET** /server | List of servers
*UpcloudApi.ServerApi* | [**loadCdrom**](docs/ServerApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*UpcloudApi.ServerApi* | [**modifyServer**](docs/ServerApi.md#modifyServer) | **PUT** /server/{serverId} | Modify server
*UpcloudApi.ServerApi* | [**restartServer**](docs/ServerApi.md#restartServer) | **POST** /server/{serverId}/restart | Restart server
*UpcloudApi.ServerApi* | [**serverDetails**](docs/ServerApi.md#serverDetails) | **GET** /server/{serverId} | Get server details
*UpcloudApi.ServerApi* | [**serverServerIdFirewallRuleGet**](docs/ServerApi.md#serverServerIdFirewallRuleGet) | **GET** /server/{serverId}/firewall_rule | List firewall rules
*UpcloudApi.ServerApi* | [**startServer**](docs/ServerApi.md#startServer) | **POST** /server/{serverId}/start | Start server
*UpcloudApi.ServerApi* | [**stopServer**](docs/ServerApi.md#stopServer) | **POST** /server/{serverId}/stop | Stop server
*UpcloudApi.ServerApi* | [**untag**](docs/ServerApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*UpcloudApi.StorageApi* | [**attachStorage**](docs/StorageApi.md#attachStorage) | **POST** /server/{serverId}/storage/attach | Attach storage
*UpcloudApi.StorageApi* | [**backupStorage**](docs/StorageApi.md#backupStorage) | **POST** /storage/{storageId}/backup | Create backup
*UpcloudApi.StorageApi* | [**cancelOperation**](docs/StorageApi.md#cancelOperation) | **POST** /storage/{storageId}/cancel | Cancel storage operation
*UpcloudApi.StorageApi* | [**cloneStorage**](docs/StorageApi.md#cloneStorage) | **POST** /storage/{storageId}/clone | Clone storage
*UpcloudApi.StorageApi* | [**createStorage**](docs/StorageApi.md#createStorage) | **POST** /storage | Create storage
*UpcloudApi.StorageApi* | [**deleteStorage**](docs/StorageApi.md#deleteStorage) | **DELETE** /storage/{storageId} | Delete storage
*UpcloudApi.StorageApi* | [**detachStorage**](docs/StorageApi.md#detachStorage) | **POST** /server/{serverId}/storage/detach | Detach storage
*UpcloudApi.StorageApi* | [**ejectCdrom**](docs/StorageApi.md#ejectCdrom) | **POST** /server/{serverId}/storage/cdrom/eject | Eject CD-ROM
*UpcloudApi.StorageApi* | [**favoriteStorage**](docs/StorageApi.md#favoriteStorage) | **POST** /storage/{storageId}/favorite | Add storage to favorites
*UpcloudApi.StorageApi* | [**getStorageDetails**](docs/StorageApi.md#getStorageDetails) | **GET** /storage/{storageId} | Get storage details
*UpcloudApi.StorageApi* | [**listStorageTypes**](docs/StorageApi.md#listStorageTypes) | **GET** /storage/{type} | List of storages by type
*UpcloudApi.StorageApi* | [**listStorages**](docs/StorageApi.md#listStorages) | **GET** /storage | List of storages
*UpcloudApi.StorageApi* | [**loadCdrom**](docs/StorageApi.md#loadCdrom) | **POST** /server/{serverId}/storage/cdrom/load | Load CD-ROM
*UpcloudApi.StorageApi* | [**modifyStorage**](docs/StorageApi.md#modifyStorage) | **PUT** /storage/{storageId} | Modify storage
*UpcloudApi.StorageApi* | [**restoreStorage**](docs/StorageApi.md#restoreStorage) | **POST** /storage/{storageId}/restore | Restore backup
*UpcloudApi.StorageApi* | [**templatizeStorage**](docs/StorageApi.md#templatizeStorage) | **POST** /storage/{storageId}/templatize | Templatize storage
*UpcloudApi.StorageApi* | [**unfavoriteStorage**](docs/StorageApi.md#unfavoriteStorage) | **DELETE** /storage/{storageId}/favorite | Remove storage from favorites
*UpcloudApi.TagApi* | [**assignTag**](docs/TagApi.md#assignTag) | **POST** /server/{serverId}/tag/{tagList} | Assign tag to a server
*UpcloudApi.TagApi* | [**createTag**](docs/TagApi.md#createTag) | **POST** /tag | Create a new tag
*UpcloudApi.TagApi* | [**deleteTag**](docs/TagApi.md#deleteTag) | **DELETE** /tag/{tagName} | Delete tag
*UpcloudApi.TagApi* | [**listTags**](docs/TagApi.md#listTags) | **GET** /tag | List existing tags
*UpcloudApi.TagApi* | [**modifyTag**](docs/TagApi.md#modifyTag) | **PUT** /tag/{tagName} | Modify existing tag
*UpcloudApi.TagApi* | [**untag**](docs/TagApi.md#untag) | **POST** /server/{serverId}/untag/{tagName} | Remove tag from server
*UpcloudApi.TimezoneApi* | [**listTimezones**](docs/TimezoneApi.md#listTimezones) | **GET** /timezone | List timezones
*UpcloudApi.ZoneApi* | [**listZones**](docs/ZoneApi.md#listZones) | **GET** /zone | List available zones


## Documentation for Models

 - [UpcloudApi.Account](docs/Account.md)
 - [UpcloudApi.AddressFamily](docs/AddressFamily.md)
 - [UpcloudApi.AssignIpResponse](docs/AssignIpResponse.md)
 - [UpcloudApi.AvailablePlanListResponse](docs/AvailablePlanListResponse.md)
 - [UpcloudApi.AvailablePlanListResponsePlans](docs/AvailablePlanListResponsePlans.md)
 - [UpcloudApi.BackupRule](docs/BackupRule.md)
 - [UpcloudApi.ConfigurationListResponse](docs/ConfigurationListResponse.md)
 - [UpcloudApi.ConfigurationListResponseServerSizes](docs/ConfigurationListResponseServerSizes.md)
 - [UpcloudApi.CreateNewTagResponse](docs/CreateNewTagResponse.md)
 - [UpcloudApi.CreateStorageResponse](docs/CreateStorageResponse.md)
 - [UpcloudApi.Error](docs/Error.md)
 - [UpcloudApi.ErrorCode](docs/ErrorCode.md)
 - [UpcloudApi.ErrorError](docs/ErrorError.md)
 - [UpcloudApi.ErrorStatus](docs/ErrorStatus.md)
 - [UpcloudApi.FirewallRule](docs/FirewallRule.md)
 - [UpcloudApi.FirewallRuleDetailsResponse](docs/FirewallRuleDetailsResponse.md)
 - [UpcloudApi.FirewallRuleListResponse](docs/FirewallRuleListResponse.md)
 - [UpcloudApi.FirewallRuleListResponseFirewallRules](docs/FirewallRuleListResponseFirewallRules.md)
 - [UpcloudApi.IpAddress](docs/IpAddress.md)
 - [UpcloudApi.IpAddress1](docs/IpAddress1.md)
 - [UpcloudApi.IpAddressListResponse](docs/IpAddressListResponse.md)
 - [UpcloudApi.IpAddressListResponseIpAddresses](docs/IpAddressListResponseIpAddresses.md)
 - [UpcloudApi.Plan](docs/Plan.md)
 - [UpcloudApi.Price](docs/Price.md)
 - [UpcloudApi.PriceListResponse](docs/PriceListResponse.md)
 - [UpcloudApi.PriceListResponsePrice](docs/PriceListResponsePrice.md)
 - [UpcloudApi.PriceZone](docs/PriceZone.md)
 - [UpcloudApi.RestartServer](docs/RestartServer.md)
 - [UpcloudApi.Server](docs/Server.md)
 - [UpcloudApi.ServerListResponse](docs/ServerListResponse.md)
 - [UpcloudApi.ServerListResponseServers](docs/ServerListResponseServers.md)
 - [UpcloudApi.ServerSize](docs/ServerSize.md)
 - [UpcloudApi.ServerState](docs/ServerState.md)
 - [UpcloudApi.ServerStorageDevices](docs/ServerStorageDevices.md)
 - [UpcloudApi.ServerTags](docs/ServerTags.md)
 - [UpcloudApi.StopServer](docs/StopServer.md)
 - [UpcloudApi.Storage](docs/Storage.md)
 - [UpcloudApi.Storage1](docs/Storage1.md)
 - [UpcloudApi.Storage2](docs/Storage2.md)
 - [UpcloudApi.Storage3](docs/Storage3.md)
 - [UpcloudApi.Storage4](docs/Storage4.md)
 - [UpcloudApi.StorageAccessType](docs/StorageAccessType.md)
 - [UpcloudApi.StorageBackups](docs/StorageBackups.md)
 - [UpcloudApi.StorageDevice](docs/StorageDevice.md)
 - [UpcloudApi.StorageDevice1](docs/StorageDevice1.md)
 - [UpcloudApi.StorageServers](docs/StorageServers.md)
 - [UpcloudApi.StorageState](docs/StorageState.md)
 - [UpcloudApi.StorageTier](docs/StorageTier.md)
 - [UpcloudApi.StorageType](docs/StorageType.md)
 - [UpcloudApi.SuccessStoragesResponse](docs/SuccessStoragesResponse.md)
 - [UpcloudApi.SuccessStoragesResponseStorages](docs/SuccessStoragesResponseStorages.md)
 - [UpcloudApi.Tag](docs/Tag.md)
 - [UpcloudApi.Tag1](docs/Tag1.md)
 - [UpcloudApi.TagListResponse](docs/TagListResponse.md)
 - [UpcloudApi.TagListResponseTags](docs/TagListResponseTags.md)
 - [UpcloudApi.TagServers](docs/TagServers.md)
 - [UpcloudApi.Timezone](docs/Timezone.md)
 - [UpcloudApi.TimezoneListResponse](docs/TimezoneListResponse.md)
 - [UpcloudApi.TimezoneListResponseTimezones](docs/TimezoneListResponseTimezones.md)
 - [UpcloudApi.Zone](docs/Zone.md)
 - [UpcloudApi.ZoneListResponse](docs/ZoneListResponse.md)
 - [UpcloudApi.ZoneListResponseZones](docs/ZoneListResponseZones.md)


## Documentation for Authorization

 All endpoints do not require authorization.

