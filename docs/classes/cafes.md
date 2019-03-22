[@textileio/js-http-client](../README.md) > [Cafes](../classes/cafes.md)

# Class: Cafes

Cafes is an API module for managing Cafe access, messages, and services

Cafes are other peers on the network who offer pinning, backup, and inbox services.

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Cafes**

## Index

### Constructors

* [constructor](cafes.md#constructor)

### Properties

* [opts](cafes.md#opts)

### Methods

* [add](cafes.md#add)
* [checkMessages](cafes.md#checkmessages)
* [con](cafes.md#con)
* [get](cafes.md#get)
* [list](cafes.md#list)
* [remove](cafes.md#remove)
* [sendDelete](cafes.md#senddelete)
* [sendGet](cafes.md#sendget)
* [sendPost](cafes.md#sendpost)
* [sendPostCancelable](cafes.md#sendpostcancelable)
* [sendPostMultiPart](cafes.md#sendpostmultipart)
* [sendPut](cafes.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Cafes**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Cafes](cafes.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Cafes](cafes.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(cafe: *`string`*, token: *`string`*): `Promise`<`any`>

Registers with a cafe and saves an expiring service session token

An access token is required to register, and should be obtained separately from the target Cafe.

*__see__*: Tokens#create

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cafe | `string` |  The host Cafe public url |
| token | `string` |  An access token supplied by the target Cafe |

**Returns:** `Promise`<`any`>

___
<a id="checkmessages"></a>

###  checkMessages

▸ **checkMessages**(): `Promise`<`void`>

Checkes for messages at all cafes.

New messages are downloaded and processed opportunistically.

**Returns:** `Promise`<`void`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(id: *`string`*): `Promise`<`any`>

Retrieves information about a cafe session

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target Cafe |

**Returns:** `Promise`<`any`>

___
<a id="list"></a>

###  list

▸ **list**(): `Promise`<`any`>

Retrieves information about all active cafe sessions

**Returns:** `Promise`<`any`>

___
<a id="remove"></a>

###  remove

▸ **remove**(id: *`string`*): `Promise`<`void`>

Deregisters with a cafe and removes local session data

Note: pinned content will expire based on the Cafe’s service rules.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target Cafe |

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

