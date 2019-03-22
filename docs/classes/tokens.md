[@textileio/js-http-client](../README.md) > [Tokens](../classes/tokens.md)

# Class: Tokens

Tokens is an API module for managing Cafe access tokens

Tokens allow other peers to register with a Cafe peer. Use this API to create, list, validate, and remove tokens required for access to this Cafe.

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Tokens**

## Index

### Constructors

* [constructor](tokens.md#constructor)

### Properties

* [opts](tokens.md#opts)

### Methods

* [con](tokens.md#con)
* [create](tokens.md#create)
* [list](tokens.md#list)
* [remove](tokens.md#remove)
* [sendDelete](tokens.md#senddelete)
* [sendGet](tokens.md#sendget)
* [sendPost](tokens.md#sendpost)
* [sendPostCancelable](tokens.md#sendpostcancelable)
* [sendPostMultiPart](tokens.md#sendpostmultipart)
* [sendPut](tokens.md#sendput)
* [validate](tokens.md#validate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Tokens**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Tokens](tokens.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Tokens](tokens.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="create"></a>

###  create

▸ **create**(options: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Creates an access token

Generates an access token (44 random bytes) and saves a bcrypt hashed version for future lookup. The response contains a base58 encoded version of the random bytes token. If the ‘store’ option is set to false, the token is generated, but not stored in the local Cafe db. Alternatively, an existing token can be added using by specifying the ‘token’ option.

*__see__*: Cafes#add

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="list"></a>

###  list

▸ **list**(): `Promise`<`any`>

Retrieves information about all stored cafe tokens

**Returns:** `Promise`<`any`>

___
<a id="remove"></a>

###  remove

▸ **remove**(token: *`string`*): `Promise`<`void`>

Removes an existing cafe token

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Access token |

**Returns:** `Promise`<`void`>

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
<a id="validate"></a>

###  validate

▸ **validate**(token: *`string`*): `Promise`<`any`>

Check validity of existing cafe access token

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Access token |

**Returns:** `Promise`<`any`>

___

