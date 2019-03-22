[@textileio/js-http-client](../README.md) > [Likes](../classes/likes.md)

# Class: Likes

Likes is an API module for managing thread/block likes

Likes are added as blocks in a thread, which target another block, usually a file(s).

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Likes**

## Index

### Constructors

* [constructor](likes.md#constructor)

### Properties

* [opts](likes.md#opts)

### Methods

* [add](likes.md#add)
* [con](likes.md#con)
* [get](likes.md#get)
* [ignore](likes.md#ignore)
* [list](likes.md#list)
* [sendDelete](likes.md#senddelete)
* [sendGet](likes.md#sendget)
* [sendPost](likes.md#sendpost)
* [sendPostCancelable](likes.md#sendpostcancelable)
* [sendPostMultiPart](likes.md#sendpostmultipart)
* [sendPut](likes.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Likes**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Likes](likes.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Likes](likes.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(block: *`string`*): `Promise`<`any`>

Adds a like to a block

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| block | `string` |  Target block ID. Usually a file(s) block. |

**Returns:** `Promise`<`any`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(id: *`string`*): `Promise`<`any`>

Retrieves a like by ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target like |

**Returns:** `Promise`<`any`>

___
<a id="ignore"></a>

###  ignore

▸ **ignore**(id: *`string`*): `Promise`<`void`>

Ignores a block like by its ID

This adds an 'ignore' thread block targeted at the like. Ignored blocks are by default not returned when listing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the like |

**Returns:** `Promise`<`void`>

___
<a id="list"></a>

###  list

▸ **list**(block: *`string`*): `Promise`<`any`>

Retrieves a list of likes on a target block

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| block | `string` |  ID of the target block |

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

