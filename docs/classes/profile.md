[@textileio/js-http-client](../README.md) > [Profile](../classes/profile.md)

# Class: Profile

Profile is an API module for accessing public profile information

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Profile**

## Index

### Constructors

* [constructor](profile.md#constructor)

### Properties

* [opts](profile.md#opts)

### Methods

* [avatar](profile.md#avatar)
* [con](profile.md#con)
* [get](profile.md#get)
* [sendDelete](profile.md#senddelete)
* [sendGet](profile.md#sendget)
* [sendPost](profile.md#sendpost)
* [sendPostCancelable](profile.md#sendpostcancelable)
* [sendPostMultiPart](profile.md#sendpostmultipart)
* [sendPut](profile.md#sendput)
* [setAvatar](profile.md#setavatar)
* [setUsername](profile.md#setusername)
* [username](profile.md#username)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Profile**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Profile](profile.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Profile](profile.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="avatar"></a>

###  avatar

▸ **avatar**(): `Promise`<`any`>

Get the local node's public profile avatar image hash

**Returns:** `Promise`<`any`>
hash

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(): `Promise`<`any`>

Retrieve the local node's public profile

**Returns:** `Promise`<`any`>

___
<a id="senddelete"></a>

###  sendDelete

▸ **sendDelete**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a delete request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendget"></a>

###  sendGet

▸ **sendGet**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a get request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpost"></a>

###  sendPost

▸ **sendPost**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpostcancelable"></a>

###  sendPostCancelable

▸ **sendPostCancelable**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `object`

Make a post request to the Textile node that is cancelable

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `object`
request

___
<a id="sendpostmultipart"></a>

###  sendPostMultiPart

▸ **sendPostMultiPart**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node using a multi-part form

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendput"></a>

###  sendPut

▸ **sendPut**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a put request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to put |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="setavatar"></a>

###  setAvatar

▸ **setAvatar**(hash: *`string`*): `Promise`<`void`>

Set the local node's public profile avatar by specifying an existing image file hash

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hash | `string` |  Image file hash |

**Returns:** `Promise`<`void`>

___
<a id="setusername"></a>

###  setUsername

▸ **setUsername**(username: *`string`*): `Promise`<`void`>

Set the local node's public profile username

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| username | `string` |  Username string |

**Returns:** `Promise`<`void`>

___
<a id="username"></a>

###  username

▸ **username**(): `Promise`<`any`>

Get the local node's public profile username

**Returns:** `Promise`<`any`>
username

___

